import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Task} from "./models/task.model";
import {map} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-todo-smart-page',
  template: `
    <app-todo-presentation-page
      [tasks]="tasks$ | async"
    ></app-todo-presentation-page>`,
})
export class TodoPageSmartComponent {

  tasks$: Observable<Task[]> = this.route.data.pipe(map(data => data.data));

  constructor(private route: ActivatedRoute) {
  }
}
