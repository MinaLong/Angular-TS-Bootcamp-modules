import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditcardHomeComponent } from './creditcard-home/creditcard-home.component';

const routes: Routes = [
  {
    path: '',
    component: CreditcardHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditcardRoutingModule { }
