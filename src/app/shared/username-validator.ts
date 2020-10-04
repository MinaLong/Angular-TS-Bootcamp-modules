import { Injectable } from '@angular/core';
import { AsyncValidator, FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { EmailAuthService } from '../services/email-auth.service';

// used in emails/signup component

// validator that makes http request to make sure our username is unique
@Injectable({ providedIn: 'root' })
export class UsernameValidator implements AsyncValidator {
    constructor(private service: EmailAuthService) {
    }

    // validate is an arrow function
    validate = (control: FormControl) => {
        const { value } = control;
        return this.service.verifyUniqueUsername(value)
            .pipe(
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
