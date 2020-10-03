import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailsHomeComponent } from './emails-home/emails-home.component';

const routes: Routes = [
  {
    path: '',
    component: EmailsHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailsRoutingModule { }
