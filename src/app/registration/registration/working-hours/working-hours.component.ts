import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-working-hours',
  templateUrl: './working-hours.component.html',
  styleUrls: ['./working-hours.component.sass']
})
export class WorkingHoursComponent implements OnInit {

  workingTimeForm:FormGroup;

  constructor() {
    this.workingTimeForm = new FormGroup({});
  }

  ngOnInit(): void {  }

}
