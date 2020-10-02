import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditcardRoutingModule } from './creditcard-routing.module';
import { CreditcardHomeComponent } from './creditcard-home/creditcard-home.component';
import { CardFormComponent } from './card-form/card-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CardImageComponent } from './card-image/card-image.component';

@NgModule({
  declarations: [CreditcardHomeComponent, CardFormComponent, CardImageComponent],
  imports: [
    CommonModule,
    CreditcardRoutingModule,
    SharedModule,

    // to use reactive forms (two main forms: reactive forms and template forms)
    // to use template forms we import the 'FormsModule' instead
    ReactiveFormsModule,
  ]
})
export class CreditcardModule { }
