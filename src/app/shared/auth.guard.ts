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
    return this.authService.checkAuthWithReturn().pipe(
      // these rxjs solution can be tricky
      skipWhile(value => value === null), // skip the observable value if value is null
      // only take one value from signedIn$ observable, and then pretend to mark as complete
      // trick any subscriber of canLoad that event is complete
      take(1),
      // tap operator is used when we need to do something irrelerant to our subscribed value
      // here we want to re-route user if their signIn$ return false
      // and they cannot access the /inbox route
      tap((authenticated) => {
        if (!authenticated) {
          this.router.navigateByUrl('/emails');
        }
      })
    );

    // The below is what the instructor has
    // it doesn't work for me... since it used subscribe to signedIn$ property instead
    // of calling the checkAuth() service again (what I did in my code above). 
    // I think it it because the way my routing is config is more complicated than his.
    // My /emails and /emails/inbox are both lazy loading, so when I refresh page /emails/inbox
    // the Auth guard will get called, but before the page is load, 
    // the /emails module wouldn't get initiatialized (both are lasy loading)
    // so no checkAuth() is called and my signedIn$ property doesn't get updated
    // that's why the below canLoad would only get the default null value,
    // but no true or false values. It's a dead end.

    // my above approach to have the guard call the server directly and check the authentication
    // solved the problem, the downside now is that we then make two checkAuth calls
    // one made from this canLoad guard, one from the /emails/emails-home component when 
    // we load the /emails/inbox and /emails page. 
    // wow - this is fascinating.

    // return this.authService.signedIn$
    //   .pipe(
    //     tap((value) => {
    //       console.log(value);
    //     }),
    //     skipWhile(value => value === null),
    //     tap((value) => {
    //       console.log("second");
    //     }),
    //     take(1),
    //     tap((authenticated) => {
    //       console.log('what');
    //       if (!authenticated) {
    //         this.router.navigateByUrl('/emails');
    //       }
    //     })
    //   );
  }
}
