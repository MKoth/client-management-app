import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSchedulerComponent } from 'devextreme-angular';
import * as moment from 'moment';
import {memoize} from '../../helpers/memoize';

export class WorkingSchedule {
  staffId: string;
  startDate: Date;
  endDate: Date;
}

export class Staff {
  text: string;
  id: string;
  color: string;
}

export class WorkingHours {
  from: number;
  to: number;
  weekDays: Array<number>
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  @ViewChild('scheduler') scheduler:DxSchedulerComponent;

  scheduleData: WorkingSchedule[] = [];

  staffData: Staff[] = [
    {
      text: "Helen Migrovsky",
      id: "qereffd-fdbgd-345gg45gdg4g-gtdg5-g5gd",
      color: "#bb12cd"
    },
    {
      text: "Steve Blob",
      id: "kj-dsdgh-345j4-ervvc-s454vf4",
      color: "#1178c5"
    },
    {
      text: "Alla Kims",
      id: "h2112-jkeu-432n-fdsss",
      color: "#ef037f"
    }
  ];

  companyWorkingHours: WorkingHours[] = [
    { from:9, to:18, weekDays: [1,3,5] },
    { from:12, to:22, weekDays: [2,4] }
  ];

  constructor() { }

  ngOnInit(): void {}

  rerenderScheduler(): void {
    // Need to do this so scheduler will rerender its data on menu toggle, since it's change detectors cannot detect it's parent width change
    this.scheduler.instance.getDataSource().reload();
  }

  onAppointmentFormOpening(data) {
    let form = data.form;
    let formItems = data.form.option("items");
    form.itemOption("allDay", "visible", false);
    form.itemOption("description", "visible", false);
    form.itemOption("startDate", {editorOptions:{type:'time'}});
    form.itemOption("endDate", {editorOptions:{type:'time'}});
  }

  onAppointmentAdded(data){
    console.log(data.appointmentData)
  }

  getStartDayHour(){
    let startHour = 23;
    this.companyWorkingHours.forEach(element => {
      if(moment(element.from, 'HH:mm').get('hours')<startHour){
        startHour = moment(element.from, 'HH:mm').get('hours');
      }
    });
    if(!this.companyWorkingHours.length){
      return 10;
    }
    return startHour;
  }

  getEndDayHour(){
    let endHour = 0;
    this.companyWorkingHours.forEach(element => {
      if(moment(element.to, 'HH:mm').get('hours')>endHour){
        endHour = moment(element.to, 'HH:mm').get('hours');
      }
    });
    if(!this.companyWorkingHours.length){
      return 23;
    }
    return endHour;
  }

  @memoize()
  isCompanyWorkingHours(startDate, endDate){
    const weekday = moment(startDate).get('weekday');
    const startHour = moment(startDate).get('hours');
    const endHour = moment(endDate).get('hours');
    return !this.companyWorkingHours.find(wh=>wh.weekDays.includes(weekday)&&wh.from<=startHour&&wh.to>=endHour)
  }

}
