import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-view',
  templateUrl: './date-view.component.html',
  styleUrls: ['./date-view.component.sass']
})
export class DateViewComponent implements OnInit {

  minDate: Date;

  constructor() { 
    this.minDate = new Date();
  }

  ngOnInit(): void {
  }

  dateChanged(date){
    console.log(date);
  }

}
