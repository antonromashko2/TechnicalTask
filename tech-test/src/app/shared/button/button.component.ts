import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input()
  buttonText: string = 'Button';

  @Input()
  isActive: boolean = false;

  @Output()
  click: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    this.click.emit();
  }
}
