import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSchedulerComponent } from 'devextreme-angular';
import * as moment from 'moment';
import { memoize } from '../../helpers/memoize';
import { RRule, RRuleSet, rrulestr } from 'rrule'

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
  from: string;
  to: string;
  weekDays: Array<number>
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

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

  staffSchedule: any[] = [
    {
      "recurrenceRule": "FREQ=WEEKLY;BYDAY=MO,WE,FR",
      "startDate": "2020-06-15T06:00:00.000Z",
      "endDate": "2020-06-15T10:30:00.000Z",
      "allDay": false,
      "staffId": "qereffd-fdbgd-345gg45gdg4g-gtdg5-g5gd",
      "text": ""
    },
    {
      "recurrenceRule": "FREQ=WEEKLY;BYDAY=TU,TH",
      "startDate": "2020-06-16T11:00:00.000Z",
      "endDate": "2020-06-16T14:00:00.000Z",
      "allDay": false,
      "staffId": "qereffd-fdbgd-345gg45gdg4g-gtdg5-g5gd",
      "text": ""
    },
    {
      "recurrenceRule": "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR",
      "startDate": "2020-06-16T09:00:00.000Z",
      "endDate": "2020-06-16T13:00:00.000Z",
      "allDay": false,
      "staffId": "kj-dsdgh-345j4-ervvc-s454vf4",
      "text": ""
    }
  ];

  rulesetsByStaff: any; 

  companyWorkingHours: WorkingHours[] = [
    { from:'9:30', to:'18:30', weekDays: [1,3,5] },
    { from:'12:00', to:'22:30', weekDays: [2,4] }
  ];

  constructor() { }

  ngOnInit(): void {
    //console.log(this.dayInSchedules(new Date('2020-06-19T09:00:00.000Z'), 'qereffd-fdbgd-345gg45gdg4g-gtdg5-g5gd'));
  }
  @memoize()
  dayInSchedules(testDay:Date, staffId:String):Array<any>{
    return this.staffSchedule.filter(schedule=>{
      if(schedule.staffId!==staffId)
        return false;
      if(!schedule.recurrenceRule)
        return moment(schedule.startDate).isSame(moment(testDay), 'day');
      const rule =rrulestr(`DTSTART:${moment.utc(schedule.startDate).format('YYYYMMDDThhmm')}00Z\nRRULE:${schedule.recurrenceRule}`);
      testDay.setHours(new Date(schedule.startDate).getHours());
      testDay.setMinutes(new Date(schedule.startDate).getMinutes());
      const closestDay = rule.after(testDay, true);
      return moment(testDay).isSame(moment(closestDay), 'day');
    });
  }
  @memoize()
  timeInSchedule(shedulesList:Array<any>, testedHour:Date):boolean{
    const ruleset = new RRuleSet();
    const normalizedTestedHour = moment(`${testedHour.getHours()}:${testedHour.getMinutes()}`, 'HH:mm').toDate();
    shedulesList.forEach(schedule=>{
      const startDate = moment(`${new Date(schedule.startDate).getHours()}:${new Date(schedule.startDate).getMinutes()}`, 'HH:mm').toDate();
      const endDate = moment(`${new Date(schedule.endDate).getHours()}:${new Date(schedule.endDate).getMinutes()}`, 'HH:mm').toDate();
      ruleset.rrule(new RRule({
        freq: RRule.MINUTELY,
        dtstart: startDate,
        until: endDate
      }));
    });
    const closestHour = ruleset.after(normalizedTestedHour, true);
    return moment(closestHour).isSame(moment(normalizedTestedHour), 'minute');
  }

  rerenderScheduler(): void {
    // Need to do this so scheduler will rerender its data on menu toggle, since it's change detectors cannot detect it's parent width change
    this.scheduler.instance.getDataSource().reload();
  }

  onAppointmentFormOpening(data) {
    let form = data.form;
    let formItems = data.form.option("items");
    form.itemOption("allDay", "visible", false);
    form.itemOption("description", "visible", false);
    form.itemOption("repeat", "visible", false);
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
        endHour = moment(element.to, 'HH:mm').add(30, 'minutes').startOf('hour').get('hours');
      }
    });
    if(!this.companyWorkingHours.length){
      return 23;
    }
    return endHour;
  }

  @memoize()
  isCompanyWorkingHours(startDate:Date, endDate:Date):boolean{
    const weekday = moment(startDate).get('weekday');
    return !this.companyWorkingHours.find(
      wh=>wh.weekDays.includes(weekday)&&
      moment(`${startDate.getHours()}:${startDate.getMinutes()}`, 'HH:mm').isSameOrAfter(moment(wh.from, 'HH:mm'), 'minutes')&&
      moment(`${endDate.getHours()}:${endDate.getMinutes()}`, 'HH:mm').isSameOrBefore(moment(wh.to, 'HH:mm'), 'minutes')
    );
  }
  
  @memoize()
  getStaffScheduleStyle(startDate:Date, endDate:Date, staffId:String):any{
    const shedulesList = this.dayInSchedules(endDate, staffId);
    if(!shedulesList.length)
      return {};
    if(this.timeInSchedule(shedulesList, moment(startDate).add('minutes', 1).toDate())){
      return {backgroundColor:this.staffData.find(staff=>staff.id===staffId).color+'33', height: '100%'};
    }
  }

}
