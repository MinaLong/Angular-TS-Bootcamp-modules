import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncValidator, FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// validator that makes http request to make sure our username is unique
@Injectable({ providedIn: 'root' })
export class UsernameValidator implements AsyncValidator {
    constructor(private http: HttpClient) {

    }

    // validate is an arrow function
    validate = (control: FormControl) => {
        const { value } = control;

        // api will return status 422 when username is in use
        // http client will emit observable of an error instead of a reqular response
        return this.http.post<any>('https://api.angular-email.com/auth/username', {
            username: value,
        }).pipe(
            // if username is available
            // api returns 200 {available: true}
            map((value) => {
                if (value.available) {
                    return null;
                }
            }),
            // if username is not available
            // network request will return 422 - will result in error in HttpClient
            catchError((err) => {
                // if error message has username property, which means username is not unique
                if (err.error.username) {
                    // of() creates an observable of input
                    return of({ noUniqueUsername: true });
                } else {
                    return of({ noConnection: true });
                }
            }),
        );
    }
}
