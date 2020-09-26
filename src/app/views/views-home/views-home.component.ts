import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  stats = [
    {
      value: 22,
      label: '# of Users',
    },
    {
      value: 900,
      label: '# of Views',
    },
    {
      value: 50,
      label: '# of Likes',
    },
  ];

  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'A fantastic vintage couch!'
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'Wood dresser with enough storage!',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
