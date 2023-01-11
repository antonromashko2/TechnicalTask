import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoPagePresentationComponent} from "./todo-page.presentation.component";
import {TodoPageRoutingModule} from "./todo-page-routing.module";
import {TodoPageSmartComponent} from "./todo-page.smart.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {TaskService} from "./services/task.service";
import {HttpClientModule} from "@angular/common/http";
import { SidepanelComponent } from './components/sidepanel/sidepanel.component';

@NgModule({
  declarations: [
    TodoPagePresentationComponent,
    TodoPageSmartComponent,
    SidepanelComponent,
  ],
  imports: [
    CommonModule,
    TodoPageRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [TaskService],
})
export class TodoPageModule {
}
