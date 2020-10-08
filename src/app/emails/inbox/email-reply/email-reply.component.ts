import { Component, Input, OnInit } from '@angular/core';
import { EmailInboxService } from 'src/app/services/email-inbox.service';
import { Email } from 'src/app/shared/email-interface';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css']
})
export class EmailReplyComponent implements OnInit {

  @Input() emailBeforeReplyEmail: Email;
  emailAfterEdit: Email;
  showModal = false;

  constructor(private emailService: EmailInboxService) { }

  ngOnInit(): void {

  }

  // if we use ngOnInit() for the below, when we jump between emails the content wouldn't change
  // because angular doesn't refresh when changing routes
  // instead we can use ngOnChange() then the new reply would be rendered every time
  ngOnChanges(): void {
    // swap the to and from fields
    this.emailAfterEdit = {
      ...this.emailBeforeReplyEmail,
      from: this.emailBeforeReplyEmail.to,
      to: this.emailBeforeReplyEmail.from,
      subject: `RE: ${this.emailBeforeReplyEmail.subject}`,
      text: `\n\n\n------ ${this.emailBeforeReplyEmail.from} wrote\n> ${this.emailBeforeReplyEmail.text}`,
    };
  }

  onEmailReplySubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(({ status }) => {
      if (status === 'success') {
        this.showModal = false;
      }
    })
  }
}
