import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { WorkingHoursSharedComponent } from '../../../shared-components/working-hours-shared/working-hours-shared.component';

@Component({
  selector: 'app-working-hours',
  templateUrl: './working-hours.component.html',
  styleUrls: ['./working-hours.component.sass']
})
export class WorkingHoursComponent implements OnInit {

  @ViewChild(WorkingHoursSharedComponent) public sharedForm: WorkingHoursSharedComponent;

  constructor() {console.log(this.sharedForm)}

  ngOnInit(): void { setTimeout(()=>{console.log(this.sharedForm)}) }

}
