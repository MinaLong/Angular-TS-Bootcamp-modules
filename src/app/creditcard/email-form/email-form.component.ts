import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})

// example of a template form
// note in template form we don't explicitly define formgroup in component class
// unlike reactive form where we do
// but angular still creates a formgroup on our behalf behind the scene
export class EmailFormComponent implements OnInit {

  // ngModel is a directive
  // ngModel creates a FormControl instance from a domain model and binds it to a form control element
  email: string = '';

  constructor() {

    // testing the two-way bingding [(ngModel)], every second add an a to input
    // setInterval(() => {
    //   this.email += 'a';
    // }, 1000);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.email);
  }

}
