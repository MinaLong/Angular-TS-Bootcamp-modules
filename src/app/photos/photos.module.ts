import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosHomeComponent } from './photos-home/photos-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PhotosHomeComponent],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    SharedModule,
  ]
})
export class PhotosModule { }
