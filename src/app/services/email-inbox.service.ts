import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetEmailResponse } from '../shared/email-interface';

// used in components in emails/inbox
// username: test109
// password: aaaa
// email: test109@angular-email.com
@Injectable({
  providedIn: 'root'
})
export class EmailInboxService {

  rootUrl = 'https://api.angular-email.com';

  constructor(private httpClient: HttpClient) { }

  // retrive a list of emails (with ids, but no email body or other details)
  listEmails() {
    return this.httpClient.get<EmailSummary[]>(`${this.rootUrl}/emails`,
      // withCredentials can be ignored since we have auth-http-interceptor
      { withCredentials: true }
    );
  }

  // get an email given an email id
  getEmail(emailId: string) {
    return this.httpClient.get<GetEmailResponse>(`${this.rootUrl}/emails/${emailId}`);
  }
}

// ListEmail response
interface EmailSummary {
  id: string,
  subject: string,
  from: string,
}
