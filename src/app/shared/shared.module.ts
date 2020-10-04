import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';
import { FormInputComponent } from './form-input/form-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { AnswerHighlightDirective } from './answer-highlight.directive';
import { TimesDirective } from './times.directive';
import { EmailInputComponent } from './email-input/email-input.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    DividerComponent,
    FormInputComponent,
    AnswerHighlightDirective,
    TimesDirective,
    EmailInputComponent,
  ],
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
    TimesDirective, // have to declare and export directive in module
    AnswerHighlightDirective,
    EmailInputComponent,
  ],
})
export class SharedModule { }
