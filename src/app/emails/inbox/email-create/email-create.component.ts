import { Component, OnInit } from '@angular/core';
import { EmailAuthService } from 'src/app/services/email-auth.service';
import { Email } from 'src/app/shared/email-interface';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {

  showModal = false;
  email: Email;

  constructor(private authService: EmailAuthService) {
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

}
