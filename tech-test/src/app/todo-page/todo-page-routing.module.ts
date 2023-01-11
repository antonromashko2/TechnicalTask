import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoPageSmartComponent} from "./todo-page.smart.component";
import {TasksResolve} from "./resolvers/tasks.resolve";

const todoRoutes: Routes = [{
  path: '',
  component: TodoPageSmartComponent,
  resolve: {
    data: TasksResolve,
  }
}];

@NgModule({
  imports: [RouterModule.forChild(todoRoutes)],
  exports: [RouterModule],
  providers: [
    TasksResolve,
  ]
})
export class TodoPageRoutingModule {
}
