import { Component, OnInit } from '@angular/core';
import { EmailAuthService } from 'src/app/services/email-auth.service';
import { EmailInboxService } from 'src/app/services/email-inbox.service';
import { Email } from 'src/app/shared/email-interface';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {

  showModal = false;
  email: Email;

  constructor(private authService: EmailAuthService, private emailService: EmailInboxService) {
    this.email = {
      id: '',
      to: '',
      subject: '',
      text: '',
      from: `${authService.username}@angular-email.com`,
    };
  }

  ngOnInit(): void {
  }

  onEmailCreateSubmit(email: Email) {
    // the email object got emitted from email-form component 
    // and received by email-create component
    // now we can send the email out with our email service
    this.emailService.sendEmail(email).subscribe(({ status }) => {
      if (status === 'success') {
        this.showModal = false;
      }
    });
  }

}
