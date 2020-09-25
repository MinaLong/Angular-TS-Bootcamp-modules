import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElementsHomeComponent } from './elements-home/elements-home.component';

const routes: Routes = [
  // Original code without lazy loading
  // {
  //   path: 'elements',
  //   component: ElementsHomeComponent,
  // },

  // Lazy loading, the path will accumulate, to avoid going to elements/elements, we will leave the path empty
  {
    path: '',
    component: ElementsHomeComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
