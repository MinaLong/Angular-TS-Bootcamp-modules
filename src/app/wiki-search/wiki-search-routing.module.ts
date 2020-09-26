import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WikiSearchHomeComponent } from './wiki-search-home/wiki-search-home.component';

const routes: Routes = [
  {
    path: '',
    component: WikiSearchHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WikiSearchRoutingModule { }
