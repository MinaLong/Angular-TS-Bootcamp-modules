import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  showModal = false;
  items = [
    {
      title: 'What is the return policy?',
      content: 'We offer one month return.'
    },
    {
      title: 'When is the next sales?',
      content: 'The next sales will be in December.'
    },
    {
      title: 'Expiration Dates?',
      content: 'Usually about a month upon open.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // toggle visibility of the modal
  toggleShowModal() {
    this.showModal = !this.showModal;
  }

}
