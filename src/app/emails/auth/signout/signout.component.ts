import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailAuthService } from 'src/app/services/email-auth.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor(private authService: EmailAuthService,
    // dependency inject router object
    private router: Router) { }

  ngOnInit(): void {
    this.authService.signout().subscribe(() => {
      // programatically nagivate (other than user clicking on anchor links)
      this.router.navigateByUrl('/emails');
    });
  }

}
