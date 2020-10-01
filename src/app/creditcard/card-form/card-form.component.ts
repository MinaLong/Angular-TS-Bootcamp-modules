import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  // create the form group (that has all the form controls)
  cardForm = new FormGroup({

    // form control name's initial value is ''
    // Validators.required: this field is required
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
