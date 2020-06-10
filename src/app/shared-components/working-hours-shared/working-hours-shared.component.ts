import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, ValidatorFn, AbstractControl} from '@angular/forms';
import * as moment from 'moment';

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
      }, { validators: this.timeValuesRangeValidation }));
    //}
    setTimeout(()=>{console.log(this.timeBlocks)}, 10000);
  }

  addWorkingHours(){
    this.timeBlocks.push(new FormGroup({
      weekdays: new FormControl(['MO', 'TU', 'WE', 'TH', 'FR'], Validators.required),
      from: new FormControl('', Validators.required),
      to: new FormControl('', Validators.required)
    }, { validators: this.timeValuesRangeValidation }));
  }

  removeWorkingHours(index: number){
    this.timeBlocks.removeAt(index);
  }

  timeValuesRangeValidation = (c: AbstractControl): { [key: string]: boolean } | null => {
      console.log(c.get('from').value);
      console.log(c.get('to').value);
      if(c.get('from').value && c.get('to').value){
        const from = moment(c.get('from').value, 'HH:mm');
        const to = moment(c.get('to').value, 'HH:mm');

        console.log(c.get('from').value);
        console.log(c.get('to').value);
        if (!from.isBefore(to)) {
          return { dateRangeError: true };
        }
      }
      return null;
  }

}
