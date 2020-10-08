import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Email } from 'src/app/shared/email-interface';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  @Input() email: Email;
  @Output() emailSubmit = new EventEmitter();

  // cannot initialize since we need to use @Input email
  // to generate form controls
  // we will only be able to access the email component 
  // in ngOnInit
  emailForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    const { subject, from, to, text } = this.email;

    this.emailForm = new FormGroup({
      // starting default values
      to: new FormControl(to, [
        Validators.required,
        Validators.email,
      ]),
      // disable this form control from here (can also do it in template)
      from: new FormControl({ value: from, disabled: true }),
      subject: new FormControl(subject, [
        Validators.required,
      ]),
      text: new FormControl(text),
    });
  }

  onSubmit() {
    if (this.emailForm.invalid) {
      return;
    }
    // console.log(this.emailForm.value); // will not include 'from' form control, it's disabled
    // console.log(this.emailForm.getRawValue()); // will include the 'from' form control
    this.emailSubmit.emit(this.emailForm.value);
  }

}
