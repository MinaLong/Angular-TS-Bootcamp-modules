import { Component, Input, OnInit } from '@angular/core';
import { FormControl, NgControlStatus } from '@angular/forms';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.css']
})

// used in emails module
export class EmailInputComponent implements OnInit {

  @Input() control: FormControl;
  @Input() label: string;

  // if inputType is 'text' then normal, if it's password then we show ****
  @Input() inputType: string;

  constructor() { }

  ngOnInit(): void {
  }

  showErrors() {
    // return this.control.errors && this.control.touched && this.control.dirty;
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }

}
