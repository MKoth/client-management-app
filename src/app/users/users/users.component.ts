import { Component, OnInit, ViewChild } from '@angular/core';
import {
  DxDataGridComponent ,
  DxFormComponent
} from "devextreme-angular";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent
  @ViewChild(DxFormComponent, { static: false }) dataForm: DxFormComponent

  users:Array<any>=[
    {id:'1dds', first_name:'Mark', last_name:'Sims', description:'', group:'wqer', phone:'+135333469508', email:'mark@mail.com', photo:"https://imgix.bustle.com/2017/4/20/ec0c4328-bd1a-45e7-b0d6-447a751f3b3f.jpg"},
    {id:'43de3', first_name:'Alla', last_name:'Klam', description:'', group:'wqer', phone:'+864390754678', email:'alla@mail.com', photo:"https://imgix.bustle.com/2017/4/20/ec0c4328-bd1a-45e7-b0d6-447a751f3b3f.jpg"},
    {id:'fe3', first_name:'Bob', last_name:'Wulf', description:'', group:'jdk', phone:'+3575435678947', email:'bob@mail.com', photo:"https://imgix.bustle.com/2017/4/20/ec0c4328-bd1a-45e7-b0d6-447a751f3b3f.jpg"},
    {id:'hjl', first_name:'Helen', last_name:'Schmain', description:'', group:'jdk', phone:'+975356689087', email:'helen@mail.com', photo:"https://imgix.bustle.com/2017/4/20/ec0c4328-bd1a-45e7-b0d6-447a751f3b3f.jpg"},
  ];

  groups_list:Array<any>=[
    {id:'wqer', name:'Group 1', users:['1dds', '43de3', 'hjl'], permissions:[
        {type:'users', permission:'read'},
        {type:'services', permission:'write'},
      ], description:'Group 1 Description'
    },
    {id:'jdk', name:'Group 2', users:['fe3'], permissions:[
        {type:'company', permission:'read'},
        {type:'widget', permission:'write'},
      ], description:'Group 2 Description'
    }
  ];

  passwordValue = '';

  isAdding:boolean = false;

  constructor() { }

  ngOnInit(): void {
    //let state = this.dataGrid.instance.state();
    
  }

  logEvent = (e) => {
      console.log(e);
  }

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

  setToEditingOrAdding(e){
    console.log(e);
  }

  

}
