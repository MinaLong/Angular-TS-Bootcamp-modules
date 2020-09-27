import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  // to avoid XSS attack, angular parse content that looks like html and display 
  // them as string like this:
  // <span class="searchmatch">Space</span> is the boundless three-dimensional 
  // extent in which objects and events have relative position and direction. 
  @Input() pages: [];

  constructor() { }

  ngOnInit(): void {
  }

}
