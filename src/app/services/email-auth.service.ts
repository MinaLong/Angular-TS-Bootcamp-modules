import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// used in emails/auth/signup component
@Injectable({
  providedIn: 'root'
})
export class EmailAuthService {

  constructor(private http: HttpClient) { }

  // directly used in shared/username-validator component
  verifyUniqueUsername(usernameInput: string) {
    // api will return status 422 when username is in use
    // http client will emit observable of an error instead of a reqular response
    return this.http.post<userNameResponse>('https://api.angular-email.com/auth/username', {
      username: usernameInput,
    });
  }
}

interface userNameResponse {
  available: boolean;
}
