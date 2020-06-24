import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.sass']
})
export class StaffComponent implements OnInit {

  services: Array<any> = [
    {id:'543ggt-5gt4g-f3f3v', title:'Service 1', category:'rwegd5745t4t-khd4-ui65w', duration:130, interval:30, price:25, staff:['h2112-jkeu-432n-fdsss', 'kj-dsdgh-345j4-ervvc-s454vf4']},
    {id:'43fe35-fd4f56-bg45b',title:'Service 2', category:'tre5hgh6-dg654-fds43', duration:30, interval:60, price:15, staff:['qereffd-fdbgd-345gg45gdg4g-gtdg5-g5gd']},
  ];

  staff_list:Array<any> = [
    { id:"qereffd-fdbgd-345gg45gdg4g-gtdg5-g5gd", first_name:'Helen', last_name: 'Migrovsky', position:'Main hairdresser', sex:'female', phone:'+38729102738', email:'helen@mail.com', services:['543ggt-5gt4g-f3f3v','43fe35-fd4f56-bg45b'] },
    { id:"kj-dsdgh-345j4-ervvc-s454vf4", first_name:'Steve', last_name: 'Blob', position:'Manager', sex:'male', phone:'+17365298345', email:'steve@mail.com', services:[] },
    { id:"h2112-jkeu-432n-fdsss", first_name:'Alla', last_name: 'Kims', position:'Helper hairdresser', sex:'female', phone:'+465384645364', email:'allakims@mail.com', services:['43fe35-fd4f56-bg45b'], photo:"https://imgix.bustle.com/2017/4/20/ec0c4328-bd1a-45e7-b0d6-447a751f3b3f.jpg" },
  ];

  passwordValue = '';

  isAdding:boolean = false;

  constructor() { }

  ngOnInit(): void {}

  comparePasswords = (e) => {
    return e.value === this.passwordValue;
  }

  getCurrentFormData(e){
    if(e.caption==="Pasword"){
      let standardHandler = e.editorOptions.onValueChanged;
      e.editorOptions.onValueChanged = (e) => { // Overrides the standard handler
        this.passwordValue = e.value;
        standardHandler(e); // Calls the standard handler to save the edited value
      }
    }
  }

  toggleIsAdding(value:boolean){
    this.isAdding = value;
  }

  customizeItem = (item)=>{
    if(item.caption==='Auth Data'&&!this.isAdding)
      item.visible=false;
  }



  isServiceChecked(serviceId, services):boolean{
    return services?services.includes(serviceId):false;
  }

  onCheckBoxChange(e, serviceId, data){
    let value = data.value?data.value.slice():[];
    e.checked?value.push(serviceId):value.splice(value.indexOf(serviceId),1);
    
    data.setValue(value);
  }

  getServicesList(services:Array<any>):String{
    return services?Array.from(services, service_id=>this.services.find(srv=>srv.id===service_id).title).join(', '):'No staff assigned';
  }

}
