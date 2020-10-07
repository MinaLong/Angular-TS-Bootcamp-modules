import { Component, OnInit } from '@angular/core';
import { EmailInboxService } from 'src/app/services/email-inbox.service';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css']
})
export class EmailIndexComponent implements OnInit {

  emailsList = [];

  constructor(private emailService: EmailInboxService) { }

  ngOnInit(): void {
    this.emailService.listEmails().subscribe((emails) => {
      this.emailsList = emails;
    });
  }

}
