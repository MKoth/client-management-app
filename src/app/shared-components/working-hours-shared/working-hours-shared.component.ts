import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

const weekDays = [
  {name:'Sun', value:'SU'},
  {name:'Mon', value:'MO'},
  {name:'Tue', value:'TU'},
  {name:'Wed', value:'WE'},
  {name:'Thu', value:'TH'},
  {name:'Fri', value:'FR'},
  {name:'Sat', value:'SA'}
];

@Component({
  selector: 'app-working-hours-shared',
  templateUrl: './working-hours-shared.component.html',
  styleUrls: ['./working-hours-shared.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorkingHoursSharedComponent implements OnInit {

  //@Input() hours:Array<string>=[];

  timeBlocks = new FormArray([]);

  weekDays = weekDays;

  constructor() { 
  }

  ngOnInit(): void {
    //if(!this.hours.length){
      this.timeBlocks.push(new FormGroup({
        weekdays: new FormControl(['MO', 'TU', 'WE', 'TH', 'FR'], Validators.required),
        from: new FormControl('', Validators.required),
        to: new FormControl('', Validators.required)
      }));
    //}
  }

  addWorkingHours(){
    this.timeBlocks.push(new FormGroup({
      weekdays: new FormControl(['MO', 'TU', 'WE', 'TH', 'FR'], Validators.required),
      from: new FormControl('', Validators.required),
      to: new FormControl('', Validators.required)
    }));
  }

  removeWorkingHours(index: number){
    this.timeBlocks.removeAt(index);
  }

}
