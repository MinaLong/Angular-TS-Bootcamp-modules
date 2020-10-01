import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';
import { FormInputComponent } from './form-input/form-input.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DividerComponent, FormInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    DividerComponent,
    FormInputComponent,
  ],
})
export class SharedModule { }
