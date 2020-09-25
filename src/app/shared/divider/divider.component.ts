import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent implements OnInit {

  // No longer need @Input if we use ng-content
  // @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
