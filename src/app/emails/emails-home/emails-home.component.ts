import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EmailAuthService } from 'src/app/services/email-auth.service';

@Component({
  selector: 'app-emails-home',
  templateUrl: './emails-home.component.html',
  styleUrls: ['./emails-home.component.css']
})
export class EmailsHomeComponent implements OnInit {

  // whether user is signed in
  // signedIn shows method 1 where we manually subscribe to the authservice BahaviorSubject
  // signedIn2 shows method 2 where we can make our code simpler by making 
  // signedIn2's type BehaviorSubject.
  // binding either signedIn or signedIn2 in our html template works (they bind differenly)
  // $ means it's an observable
  signedIn1 = false;
  signedIn2$: BehaviorSubject<boolean>;

  constructor(private authService: EmailAuthService) {
    // another way to subscrive to aignedIn$ value changes
    this.signedIn2$ = this.authService.signedIn$;
  }

  ngOnInit(): void {
    // this.signedIn subscribe to obervable from authservice
    // everytime authservice sign in or sign up, switch this.signedin to true
    // everytime authservice sign out, switch this.signedin to false
    // and because state changes, the form will re-render itself
    // showing different tap options: inbox, signin, signout, signup
    this.authService.signedIn$.subscribe((signedinRes) => {
      this.signedIn1 = signedinRes;
    });

    this.authService.checkAuth().subscribe(() => { });

    // setTimeout(() => {
    //   this.authService.signout().subscribe(() => { });
    // }, 200);
  }

}
