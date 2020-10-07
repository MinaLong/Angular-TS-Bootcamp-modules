import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { EmailInboxService } from 'src/app/services/email-inbox.service';
import { GetEmailResponse } from '../../../shared/email-interface';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {

  email: GetEmailResponse;

  constructor(private route: ActivatedRoute,
    private emailService: EmailInboxService) {

    // use services/email-resolver to get email before the template renders
    // so that we avoid the cannot read property of undefined error
    this.route.data.subscribe(({ email }) => {
      this.email = email;
    })
  }

  ngOnInit(): void {
    // console.log(this.route);

    // Two ways to get the current url param (email id basically):
    // 1. Observable - BehaviorSubject (preferred approach!!!!!!)
    // route.params is a BehaviorSubject that emits value 
    // every time the url CHANGES. 
    // params captures what we specify in inbox-routing module in the path:''

    // this.route.params.subscribe((params) => {
    //   this.emailService.getEmail(params.id).subscribe((val) => {
    //     console.log(val);
    //   });
    // });

    // Nested subscribes:
    // the above subscribe(subscribe()) works, it has drawbacks. 
    // if the first subscribe comes back late, the second subscribe might emit
    // wrong value from what the user expected. Further, if the first observable comes back
    // late, then the second observable would still finish the first one, and second one, etc.
    // it is not effecient. 
    // switchMap to the rescue!! for switchMap if the first observable emits another value before
    // the second subscribe comes back, switchMap would cancel the first request all together, and
    // only send the latest request to the second observable.

    // note: because we have moved our data fetching to resolver, 
    // we don't technically need the below code
    // leaving here just for reference
    this.route.params.pipe(
      switchMap(({ id }) => {
        return this.emailService.getEmail(id);
      })
    ).subscribe((email) => {
      this.email = email;
    });

    // 2. Snapshot - simply get the current routing information at a specific time.
    // this approach might look easy but it has drawbacks
    // when Angular re-route users to an identical structure, angular does not 
    // reload the component. so this route.snapshot would not change.
    // for example 
    // going from:
    // http://localhost:4200/emails/inbox/7637bfd941dd14eb
    // http://localhost:4200/emails/inbox/05859947d6ee5def
    // since we're still in the same email-show component
    // route.snapshot.params.id stayed the same as 7637bfd941dd14eb.
    // while technically our url changed from 7637bfd941dd14eb to 05859947d6ee5def.

    // console.log(this.route.snapshot.params.id);
  }
}
