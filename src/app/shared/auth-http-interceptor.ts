import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// used in emails/emails-home/emails-home.components.ts
// intercept: obstruct something to prevent them from continuing to a destination
// http interceptor: stop the http request and do something first

// in order to use dependency injection
// added in App.module in providers session
@Injectable()  // do not use providedIn:'root' here
export class AuthHttpInterceptor implements HttpInterceptor {
    intercept(
        // http request
        req: HttpRequest<any>,
        // next is the next http interceptor or the actual http request to be made
        next: HttpHandler): Observable<HttpEvent<any>> {

        // all this http interceptor is doing is to change the withCredentials to true
        // req.withCredentials = true; doesn't work since angular http request is read only
        const modifiedReq = req.clone({
            // have to disable this since wikipedia service doesn't allow credentials.
            // withCredentials: true,
        });
        // return next.handle(modifiedReq);
        // the entire pipe statement is not necessary in our real code
        // including here just to remind us
        // that we can watch out for different kinds of observable events
        // and take actions on them
        return next.handle(modifiedReq).pipe(
            // the intercept method will give us access to both http send and respond requests
            tap(val => {
                if (val.type === HttpEventType.Sent) {
                    // console.log('Request was sent');
                }
                if (val.type === HttpEventType.Response) {
                    // console.log('Response from API:', val);
                }
            })
        );

    }
}
