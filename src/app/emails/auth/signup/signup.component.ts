import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailAuthService } from 'src/app/services/email-auth.service';
import { PasswordValidator } from '../../../shared/password-validator';
import { UsernameValidator } from '../../../shared/username-validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  authForm = new FormGroup({
    username: new FormControl('', [
      // this array of validators is only for synchronous validators
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.pattern(/^[a-z0-9]+$/),
    ], [
      // asynchronous validators array is the third parameter
      // asynchronous validators only run after synchronous validators are all good (return null)
      this.usernameValidator.validate,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10),
    ]),
    passwordConfirmation: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10),
    ]),
  }, {
    validators: [
      // dependency injected password validator and pass in as a validator on this form group
      this.passwordValidator.validate,
    ],
  });

  constructor(
    private passwordValidator: PasswordValidator,
    private usernameValidator: UsernameValidator,
    private authService: EmailAuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }
    // console.log(this.authForm.value);

    this.authService.signup(this.authForm.value).subscribe({
      next: (response) => {
        // TODO: signup succeeded, navigate to some other route

      },
      error: (err) => {
        // did not successfully make the request
        if (err.status === 0) {
          // force some erros to the formgroup
          this.authForm.setErrors({ noConnection: true });
        } else {
          this.authForm.setErrors({ unknownError: true });
        }
      },
    });
  }
}
