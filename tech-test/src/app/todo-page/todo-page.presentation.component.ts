import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {Task} from "./models/task.model";
import {FilterStates} from "./models/filter.enum";
import {catchError, first, takeUntil} from "rxjs/operators";
import {TaskService} from "./services/task.service";
import {of, Subject} from "rxjs";

@Component({
  selector: 'app-todo-presentation-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoPagePresentationComponent implements OnInit, OnChanges, OnDestroy {

  private destroy$ = new Subject();

  @Input()
  tasks: Task[];

  selectedTask: Task;
  lastCreatedTask: Task;
  addItemValue: string;
  filter: string;

  constructor(private taskService: TaskService,
              private changeDetection: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.filter = FilterStates.ALL;
    this.addItemValue = '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.lastCreatedTask && this.lastCreatedTask) {
      this.tasks = [...this.tasks, this.lastCreatedTask];
    }
  }

  onInputChange(value: string): void {
    this.addItemValue = value;
  }

  onAddTask(value: string): void {
    const newTask = {
      id: Math.floor(Math.random()),
      label: value,
      done: false,
    };
    // best way is to dispatch action from ngrx in smart component
    // to handle http calls in effects
    this.taskService.createTask(newTask).pipe(
      takeUntil(this.destroy$),
      first(),
      catchError(() => {
        console.error("Unable to create task.");
        return of();
      })).subscribe(task => {
      this.lastCreatedTask = task as Task;
      this.tasks = [...this.tasks, this.lastCreatedTask];
      this.changeDetection.detectChanges();
    });
    this.addItemValue = '';
  }

  onTaskSelect(id: number): void {
    this.taskService.getTaskDetails(id).pipe(
      takeUntil(this.destroy$),
      catchError(() => {
        console.error("Unable to get task details.");
        return of();
      })).subscribe(task => {
      this.selectedTask = task as Task;
      this.changeDetection.detectChanges();
    });
  }

  onChangeTaskStatus(task: Task): void {
    task.done = !task.done;
    this.taskService.updateTask(task).pipe(
      takeUntil(this.destroy$),
      catchError(() => {
        console.error("Unable to update task.");
        return of();
      })
    ).subscribe();
  }

  onDeleteTask(id: number): void {
    this.taskService.deleteTask(id).pipe(
      first(),
      takeUntil(this.destroy$),
    ).subscribe(() => {
      this.tasks = this.tasks.filter(todo => todo.id !== id);
      this.changeDetection.detectChanges();
    });
  }

  filteredTasks(): Task[] {
    switch (this.filter) {
      case FilterStates.ACTIVE: {
        return this.tasks.filter(todo => !todo.done);
      }
      case FilterStates.COMPLETED: {
        return this.tasks.filter(todo => todo.done);
      }
      default: {
        return this.tasks;
      }
    }
  }

  onCloseSidepanel(): void {
    this.selectedTask = null;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
