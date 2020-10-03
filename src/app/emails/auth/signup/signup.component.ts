import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../validators/password-validator';
import { UsernameValidator } from '../validators/username-validator';

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
    private usernameValidator: UsernameValidator) { }

  ngOnInit(): void {
  }

}
