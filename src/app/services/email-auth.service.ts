import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

// used in emails/auth/signup component
@Injectable({
  providedIn: 'root'
})
export class EmailAuthService {

  rootUrl = 'https://api.angular-email.com/auth';

  // notes for below signedIn$
  // if the user is currently signed in
  // $ means it's an observable

  // Observable doesn't work because you cannot emit value from other method (eg. signup())
  // (from outside of the observable inner function)
  // Subject is both an obeservable and an observer, so it might work
  // however, Subject wouldn't work since 1) you cannot define a default value, 
  // so when user first come to the app we don't have any value to emit
  // more importanly, 2) Subject doesn't give new members the observable value 
  // that it already emitted, so if new component comes in and want to know the value,
  // they wouldn't get any. 
  // so we make use of BehaviorSubject, it
  // 1) has a default value
  // 2) when new component subscribe and event was emitted before it subscribes,
  // it will emit the latest value to the newly subscribed component immediately
  signedIn$ = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  // directly used in shared/username-validator component
  // service that make sure username was not taken
  verifyUniqueUsername(usernameInput: string) {
    // api will return status 422 when username is in use
    // http client will emit observable of an error instead of a reqular response
    return this.http.post<uniqueUsernameResponse>(this.rootUrl + '/username', {
      username: usernameInput,
    });
  }

  // call service that sign up an user
  signup(credentials: SignupCredentials) {
    return this.http.post<SignupResponse>(this.rootUrl + '/signup',
      credentials, {
      // httpclient default behavior is to disgard cookies every time we receive a response
      // withCredentials true means we want to store the cookies
      // and http requests request and receives with cookies

      // instead of adding withCredentials on every http request, we 
      // created AuthHttpInterceptor to update the withCredentials property
      // of all our http requests. 
      // so we can ignore the below withCredentials: true here.
      withCredentials: true
    })
      .pipe(
        // if it's error it will skip the tap operators
        tap(() => {
          this.signedIn$.next(true);
        })
      );
  }

  // check if a user is signed in, no return value
  // only update the signedIn$ property
  checkAuth() {
    return this.http.get<SignedinResponse>(`${this.rootUrl}/signedin`)
      .pipe(
        // { authenticated } means only extract the authenticated property
        tap(({ authenticated }) => {
          this.signedIn$.next(authenticated);
        })
      );
  }

  // check if a user is signed in, return true or false
  // used by /shared/auth.guard in order to authenticate the /emails/inbox route
  checkAuthWithReturn() {
    return this.http.get<SignedinResponse>(`${this.rootUrl}/signedin`)
      .pipe(
        // { authenticated } means only extract the authenticated property
        map(({ authenticated }) => {
          return authenticated;
        })
      );
  }

  // sign us out of email app
  signout() {
    return this.http.post(`${this.rootUrl}/signout`, { body: {} })
      .pipe(
        tap(() => {
          this.signedIn$.next(false);
        })
      );
  }

  // sign in a user
  signin(credentials: SigninCredentials) {
    return this.http.post<SigninResponse>(`${this.rootUrl}/signin`, credentials)
      .pipe(
        // if signin failed request will emit an error and will bypass tap
        tap(() => {
          this.signedIn$.next(true);
        })
      );
  }
}

interface uniqueUsernameResponse {
  available: boolean;
}

interface SignupCredentials {
  username: string,
  password: string,
  passwordConfirmation: string,
}

interface SignupResponse {
  username: string,
}

interface SignedinResponse {
  authenticated: boolean,
  username: string,
}

interface SigninCredentials {
  username: string,
  password: string,
}

interface SigninResponse {
  username: string,
}