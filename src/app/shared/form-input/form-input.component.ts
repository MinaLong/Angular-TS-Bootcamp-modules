import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  @Input() control: FormControl;
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

  showErrors() {
    // the below two returns are the same
    // return this.control.touched && this.control.dirty && this.control.errors;
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }

}
