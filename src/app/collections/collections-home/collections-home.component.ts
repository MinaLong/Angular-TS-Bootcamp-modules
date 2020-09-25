import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    {
      name: 'James',
      age: '24',
      job: 'Designer',
      pet: true,
    },
    {
      name: 'Jill',
      age: '26',
      job: 'Engineer',
      pet: false,
    },
    {
      name: 'Elyse',
      age: '30',
      job: 'Accountant',
      pet: false,
    },
  ]

  headers = [
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'age',
      label: 'Age',
    },
    {
      key: 'job',
      label: 'Job',
    },
    {
      key: 'pet',
      label: 'Has a Pet',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
