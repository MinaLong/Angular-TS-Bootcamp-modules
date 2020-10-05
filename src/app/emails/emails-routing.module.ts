import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { SignupComponent } from './auth/signup/signup.component';
import { EmailsHomeComponent } from './emails-home/emails-home.component';

const routes: Routes = [
  // since we want users who come to email tab to get auth immediately
  // we use eager loading instead of easy loading
  {
    path: '',
    component: EmailsHomeComponent,
    children: [
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'signout',
        component: SignoutComponent,
      },
      {
        path: '',
        component: SigninComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailsRoutingModule { }
