import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() items = [];
  openedItemIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown(i: number) {
    if (i === this.openedItemIndex) {
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = i;
    }
  }

}
