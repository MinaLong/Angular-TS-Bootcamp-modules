import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {

  @Input() showHeader: boolean = true;
  @Input() numOfPlaceholderLines: number = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
