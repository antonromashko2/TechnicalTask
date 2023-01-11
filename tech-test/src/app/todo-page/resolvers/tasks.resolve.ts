import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Task} from "../models/task.model";
import {TaskService} from "../services/task.service";

@Injectable()
export class TasksResolve implements Resolve<Task[] | unknown> {

  constructor(private taskService: TaskService) {}

  resolve(): Observable<Task[] | unknown> {
    return this.taskService.getTasks().pipe(
      catchError(() => of([]))
    );
  }
}
