import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.sass']
})
export class ServicesComponent implements OnInit {

  staff_list:Array<any> = [
    { id:"qereffd-fdbgd-345gg45gdg4g-gtdg5-g5gd", first_name:'Helen', last_name: 'Migrovsky' },
    { id:"kj-dsdgh-345j4-ervvc-s454vf4", first_name:'Steve', last_name: 'Blob' },
    { id:"h2112-jkeu-432n-fdsss", first_name:'Alla', last_name: 'Kims' },
  ];

  categories: any[] = [
    {id:'rwe45t4t-gfd45-gdfd', name:'Drawing Category', parent: null, order:1},
    {id:'rwe45t4t-6544-gdfd', name:'Spilling Category', parent: null, order:2},
    {id:'rwegd5745t4t-khd4-ui65w', name:'Drawing Sub Category', parent: 'rwe45t4t-gfd45-gdfd', order:0},
    {id:'tre5hgh6-dg654-fds43', name:'Cutting Category', parent: null, order:0},
    {id:'fg45-jgg-876gh-kh5ji', name:'Super sub Cutting Category', parent: 'rwegd5745t4t-khd4-ui65w', order:0},
  ];

  services: Array<any> = [
    {title:'Service 1', category:'rwegd5745t4t-khd4-ui65w', duration:130, interval:30, price:25, staff:['h2112-jkeu-432n-fdsss', 'kj-dsdgh-345j4-ervvc-s454vf4']},
    {title:'Service 2', category:'tre5hgh6-dg654-fds43', duration:30, interval:60, price:15, staff:['qereffd-fdbgd-345gg45gdg4g-gtdg5-g5gd']},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  log(e){console.log(e);}

  isStaffChecked(staffId, permissionStaffs):boolean{
    return permissionStaffs?permissionStaffs.includes(staffId):false;
  }

  onCheckBoxChange(e, staffId, data){
    let value = data.value?data.value.slice():[];
    e.checked?value.push(staffId):value.splice(value.indexOf(staffId),1);
    
    data.setValue(value);
  }

  getStaffsList(staffs:Array<any>):String{
    return staffs?Array.from(staffs, staff_id=>this.staff_list.find(stf=>stf.id===staff_id).first_name+" "+this.staff_list.find(usr=>usr.id===staff_id).last_name).join(', '):'No staff assigned';
  }

  mathFloor(number){
    return Math.floor(number);
  }

  getMinutesRange(){
    //return Array.from(Array(30).keys()).map(n=>n*10+10)
    return [
      10,
      20,
      30,
      40,
      50,
      60,
      70,
      80,
      90,
      100,
      110,
      120,
      130,
      140,
      150,
      160,
      170,
      180,
      190,
      200,
      210,
      220,
      230,
      240,
      250,
      260,
      270,
      280,
      290,
      300
    ]
  }

}
