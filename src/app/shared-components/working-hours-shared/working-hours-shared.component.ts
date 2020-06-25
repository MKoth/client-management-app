import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
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

  constructor() { }

  @Input() defaultValues:Array<{weekdays:Array<string>, from:string, to:string}> = null;

  @Output() onChange:EventEmitter<Array<{weekdays:Array<string>, from:string, to:string}>> = new EventEmitter();

  ngOnInit(): void {
    if(!this.defaultValues){
      this.timeBlocks.push(new FormGroup({
        weekdays: new FormControl(['MO', 'TU', 'WE', 'TH', 'FR'], Validators.required),
        from: new FormControl('', Validators.required),
        to: new FormControl('', Validators.required)
      }, { validators: this.timeValuesRangeValidation }));
    }
    else{
      this.defaultValues.forEach(hour => {
        this.timeBlocks.push(new FormGroup({
          weekdays: new FormControl(hour.weekdays, Validators.required),
          from: new FormControl(hour.from, Validators.required),
          to: new FormControl(hour.to, Validators.required)
        }));
      });
    }
    this.onChanges();
  }

  onChanges(): void {
    this.timeBlocks.valueChanges.subscribe(val => {
      this.onChange.emit(val);
    });
  }

  addWorkingHours(){
    this.timeBlocks.push(new FormGroup({
      weekdays: new FormControl(['MO', 'TU', 'WE', 'TH', 'FR'], Validators.required),
      from: new FormControl('', Validators.required),
      to: new FormControl('', Validators.required)
    }, { validators: this.timeValuesRangeValidation }));
    //this.onChange.emit(this.timeBlocks.value);
  }

  removeWorkingHours(index: number){
    this.timeBlocks.removeAt(index);
    //this.onChange.emit(this.timeBlocks.value);
  }

  timeValuesRangeValidation = (c: AbstractControl): { [key: string]: boolean } | null => {
      if(c.get('from').value && c.get('to').value){
        const from = moment(c.get('from').value, 'HH:mm');
        const to = moment(c.get('to').value, 'HH:mm');
        if (!from.isBefore(to)) {
          return { dateRangeError: true };
        }
      }
      return null;
  }

}
