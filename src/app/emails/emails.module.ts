import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailsRoutingModule } from './emails-routing.module';
import { EmailsHomeComponent } from './emails-home/emails-home.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [EmailsHomeComponent],
  imports: [
    CommonModule,
    EmailsRoutingModule,

    // AuthModule is a submodule of the EmailsModule
    AuthModule,
    SharedModule,
  ]
})
export class EmailsModule { }
