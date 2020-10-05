import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// this routing module is not necessary, we define our routing in emails-routing module
const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
