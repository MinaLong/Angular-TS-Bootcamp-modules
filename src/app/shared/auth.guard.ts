import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { skipWhile, take, tap } from 'rxjs/operators';
import { EmailAuthService } from '../services/email-auth.service';


// used in emails/emails-routing module for the emails project
// to guard our routing to make sure when user is not signed in or signed up
// they cannot load the inbox page

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private authService: EmailAuthService,
    private router: Router) {

  }

  // CanLoad is used when we lazy load
  // some other guard is CanActivate (used directly for a routing path)
  // or CanActivateChild (used in a parent routing path for a child route)
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.signedIn$
      .pipe(
        // these rxjs solution can be tricky
        skipWhile(value => value === null), // skip the observable value if value is null
        // only take one value from signedIn$ observable, and then pretend to mark as complete
        // trick any subscriber of canLoad that event is complete
        tap((value) => {
          console.log(value);
        }),
        take(1),
        // tap operator is used when we need to do something irrelerant to our subscribed value
        // here we want to re-route user if their signIn$ return false
        // and they cannot access the /inbox route
        tap((authenticated) => {
          console.log('what');
          if (!authenticated) {
            this.router.navigateByUrl('/emails');
          }
        })
      );
  }
}
