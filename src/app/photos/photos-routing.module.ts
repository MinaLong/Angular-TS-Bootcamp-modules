import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosHomeComponent } from './photos-home/photos-home.component';

const routes: Routes = [
  {
    path: '',
    component: PhotosHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
