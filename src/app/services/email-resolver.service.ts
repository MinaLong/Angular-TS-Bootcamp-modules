import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GetEmailResponse } from '../shared/email-interface';
import { EmailInboxService } from './email-inbox.service';

// Email resolver to resolve undefined Email issue in /emails/inbox/email-show component
// routing file where the resolver is used: emails/emails-routing module
// point of resolver is that it waits for data to be resolved before a route is activated
@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<GetEmailResponse> {

  constructor(private emailService: EmailInboxService,
    private router: Router) { }

  resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params;
    // returns an observable that emits an email
    return this.emailService.getEmail(id).pipe(
      // if user enters the wrong email id in url
      // we want to re-route them to /not-found
      catchError(() => {
        this.router.navigateByUrl('/emails/inbox/not-found');
        // if error, we don't care about the return value
        // since the component wouldn't be rendered. 
        // EMPTY simply marks this as complete.
        return EMPTY;
      }),
    );
  }
}
