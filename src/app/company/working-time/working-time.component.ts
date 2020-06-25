import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-working-time',
  templateUrl: './working-time.component.html',
  styleUrls: ['./working-time.component.sass']
})
export class WorkingTimeComponent implements OnInit {

  constructor() { }

  isHoursChanged:boolean = false;

  hours = [
    {weekdays:['MO', 'WE', 'FR'], from:'09:30', to: '17:00'},
    {weekdays:['TU', 'TH'], from:'12:00', to: '20:30'},
  ];

  ngOnInit(): void {
  }

  saveHours(){
    this.isHoursChanged = false;
  }

  onHoursChanged(data){
    this.hours = data;
    this.isHoursChanged = true;
  }

}
