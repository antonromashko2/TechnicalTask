import {Component} from '@angular/core';
import {NavigateItem} from "./shared/models/navigate-item.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tech-test';
  items: NavigateItem[] = [{label: 'Home', path: ''}, {label: 'Tasks', path: 'todo'}];
}
