import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { SigninComponent } from './auth/signin/signin.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { SignupComponent } from './auth/signup/signup.component';
import { EmailsHomeComponent } from './emails-home/emails-home.component';

const routes: Routes = [
  // since we want users who come to email tab to get auth immediately
  // we use eager loading instead of easy loading
  // notice below we used lazy loading for inbox to put a guard to restrict access
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
        // need to make sure we restrict user access to this route
        // using a custom guard class
        // only signed in user should be able to load this route
        // there're multiple types of guards: CanActivate, CanActivateChildren, CanLoad...
        // CanLoad is used in lazy loading, which is what we're doing here
        // app security, routing with guards

        // TODO: there's a bug, we cannot go to link http://localhost:4200/emails/inbox directly.
        // we have to sign in or use the link on the page to get there.
        // potential issue is that we're lazy loading /emails/inbox
        // when we want to visit http://localhost:4200/emails/inbox directly,
        // the signedIn$ did not emit any values 
        path: 'inbox',
        canLoad: [AuthGuard], // restrict the below loadChildren lazy loading
        loadChildren: () => import('./inbox/inbox.module').then(m => m.InboxModule),
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
