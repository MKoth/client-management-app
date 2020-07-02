import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-view',
  templateUrl: './time-view.component.html',
  styleUrls: ['./time-view.component.sass']
})
export class TimeViewComponent implements OnInit {

  experts:Array<any> = [
    {name:'Arthur Schloss', time:[
      "9:30",
      "11:30",
      "12:00",
      "12:10",
      "12:15",
      "12:25",
      "12:30",
      "13:00"
    ]},
    {name:'Anna Kunst', time:[
      "13:30",
      "15:15",
      "15:25",
      "15:45",
      "16:15"
    ]},
    {name:'Jessica Blob', time:[
      "17:30",
      "17:35",
      "17:40",
      "18:30"
    ]},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
