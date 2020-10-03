import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormControl } from 'src/app/shared/date-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})

// example of a reactive form
export class CardFormComponent implements OnInit {

  // create the form group (that has all the form controls)
  cardForm = new FormGroup({

    // form control name's initial value is ''
    // Validators.required: this field is required
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      // Validators.maxLength(20),
      // Validators.pattern(/\s/), // include a space regex
    ]),
    cardnumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),

    // DateFormControl was our custom class for FormControl
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
  });

  constructor() {
    // console.log(this.cardForm.controls.name);
  }

  ngOnInit(): void {
  }

  // when submit the form, callback function
  // usually call service to write data to backend
  // here we just console log
  onSubmit() {
    console.log('Form submitted', this.cardForm);
  }

  onResetClick() {
    // reset will bring form controls to null (not initial value)
    this.cardForm.reset();
  }

}
