import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../../models/task.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidepanelComponent {
  @Input()
  task: Task;

  @Output()
  close: EventEmitter<void> = new EventEmitter<void>();

  taskForm = new FormGroup({
    description: new FormControl(''),
    label: new FormControl(''),
  });

  onClose(): void {
    this.close.emit();
  }
}
