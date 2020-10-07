import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailResolverService } from 'src/app/services/email-resolver.service';
import { EmailNotFoundComponent } from './email-not-found/email-not-found.component';
import { EmailPlaceholderComponent } from './email-placeholder/email-placeholder.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { InboxHomeComponent } from './inbox-home/inbox-home.component';

// this routing module is for sub-routing inbox
const routes: Routes = [
  {
    path: '',
    component: InboxHomeComponent,
    children: [
      // not-found must be before ":id"
      {
        path: 'not-found',
        component: EmailNotFoundComponent,
      },
      {
        // ':' below means we want url to capture any variable or any string
        // this is a two-step process:
        // 1) in our email-index html file, we bind our current url to email.id that user selects
        // 2) in email-show ts file, we use ActivatedRoute module to grab the current url
        // by doing this we sucessfully sync our url with our email selection page.
        path: ':id',
        component: EmailShowComponent,
        // resolver to resolve undefined error in email-show component
        // when first rendering the template
        resolve: {
          email: EmailResolverService,
        }
      },
      {
        path: '',
        component: EmailPlaceholderComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
