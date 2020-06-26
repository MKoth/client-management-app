import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experts-view',
  templateUrl: './experts-view.component.html',
  styleUrls: ['./experts-view.component.sass']
})
export class ExpertsViewComponent implements OnInit {

  staff_team = [
    {id: 1, name: "Arthur Schloss", position: "Top barber"},
    {id: 2, name: "Michael Kunst", position: "Simple barber"},
    {id: 3, name: "Anna Kunst", position: "Helper"},
    {id: 4, name: "Bob Wizard", position: "Hair painter"},
    {id: 5, name: "Jessica Blob", position: "Top barber"},
    {id: 6, name: "Chris Michmald", position: "Middle barber"},
    {id: 7, name: "Roberto Catenillo", position: "Senior barber"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
