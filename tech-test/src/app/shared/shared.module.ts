import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from "./input/input.component";
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "./header/header.component";
import {ButtonComponent} from './button/button.component';
import {SortByLabel} from "./pipes/sort-by-label";

@NgModule({
  declarations: [
    InputComponent,
    HeaderComponent,
    ButtonComponent,
    SortByLabel,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    InputComponent,
    HeaderComponent,
    ButtonComponent,
    SortByLabel,
  ],
})
export class SharedModule {
}
