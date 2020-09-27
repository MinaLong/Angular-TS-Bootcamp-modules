import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() submitted = new EventEmitter<string>();
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

  // we can also update term property directly in html
  onInput(input: string) {
    this.term = input;
  }

  onFormSubmit(event: any) {
    // we want to prevent the browser submit the form automatically
    // and clear out the content & refresh page
    event.preventDefault();
    // console.log(this.term);

    // send out term information to parent component
    this.submitted.emit(this.term);
  }

}
