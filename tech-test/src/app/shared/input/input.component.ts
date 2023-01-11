import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class InputComponent {
  @Input()
  inputType: string = 'text';

  @Input()
  placeholder: string = 'Type something';

  @Input()
  inputValueModel: string | boolean;

  @Output()
  processValue: EventEmitter<string | boolean> = new EventEmitter<string | boolean>();

  @Output()
  changeValue: EventEmitter<string | boolean> = new EventEmitter<string | boolean>();

  onProcessValue(): void {
    this.processValue.emit(this.inputValueModel);
  }

  onChange(): void {
    this.changeValue.emit(this.inputValueModel);
  }
}
