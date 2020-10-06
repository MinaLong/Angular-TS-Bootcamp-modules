import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxHomeComponent } from './inbox-home/inbox-home.component';

// this routing module is for sub-routing inbox
const routes: Routes = [
  {
    path: '',
    component: InboxHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
