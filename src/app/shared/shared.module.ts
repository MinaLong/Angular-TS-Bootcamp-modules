import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';
import { FormInputComponent } from './form-input/form-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [DividerComponent, FormInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    // Input masking module that we installed by 
    // npm install ngx-mask
    NgxMaskModule.forRoot(),
  ],
  exports: [
    DividerComponent,
    FormInputComponent,
  ],
})
export class SharedModule { }
