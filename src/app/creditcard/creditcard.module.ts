import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditcardRoutingModule } from './creditcard-routing.module';
import { CreditcardHomeComponent } from './creditcard-home/creditcard-home.component';
import { CardFormComponent } from './card-form/card-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CardImageComponent } from './card-image/card-image.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { MathFormComponent } from './math-form/math-form.component';

@NgModule({
  declarations: [
    CreditcardHomeComponent,
    CardFormComponent,
    CardImageComponent,
    EmailFormComponent,
    MathFormComponent,
  ],
  imports: [
    CommonModule,
    CreditcardRoutingModule,
    SharedModule,

    // two main forms:
    // reactive forms - create main form component in component file, must bind <form> to a FormGroup object
    // reactive forms - create main form component in template(html) file, no need to bind a FormGroup object

    // to use reactive forms (two main forms: reactive forms and template forms)
    // this import is for the credit-form component
    ReactiveFormsModule,

    // to use template forms (two main forms: reactive forms and template forms)
    // this import is for the email-form component
    FormsModule,
  ]
})
export class CreditcardModule { }
