import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  // class names passed from parent component collections-home for styling the table
  @Input() classNames = '';

  @Input() data = [];
  @Input() headers = [];

  constructor() { }

  ngOnInit(): void {
  }

}
