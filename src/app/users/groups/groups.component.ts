import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.sass']
})
export class GroupsComponent implements OnInit {

  users:Array<any>=[
    {id:'1dds', first_name:'Mark', last_name:'Sims'},
    {id:'43de3', first_name:'Alla', last_name:'Klam'},
    {id:'fe3', first_name:'Bob', last_name:'Wulf'},
    {id:'hjl', first_name:'Helen', last_name:'Schmain'},
  ];

  permissions:Array<any>=[
    'users', 'staff', 'services', 'categories', 'company', 'widget', 'sales'
  ];

  test(data){
    console.log(data);
  }

  groups:Array<any>=[
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

  getUsersList(users:Array<any>):String{
    return users?Array.from(users, user=>this.users.find(usr=>usr.id===user).first_name+" "+this.users.find(usr=>usr.id===user).last_name).join(', '):'No user assigned';
  }

  getPermissionsList(permissions:Array<any>):String{
    return permissions?Array.from(permissions, permission=>`${permission.type}(${permission.permission})`).join(', '):'Group without permissions';
  }

  isUserChecked(userId, permissionUsers):boolean{
    return permissionUsers?permissionUsers.includes(userId):false;
  }

  isPermissionChecked(permission, permissions){
    return permissions?permissions.find(perm=>perm.type===permission):false;
  }

  onCheckBoxChange(e, userId, data){
    let value = data.value?data.value.slice():[];
    e.checked?value.push(userId):value.splice(value.indexOf(userId),1);
    
    data.setValue(value);
  }

  getPermissionValue(permission, permissions){
    return permissions.find(perm=>perm.type===permission).permission;
  }

  onToggleChange(e, permission, data){
    if(data.value)
      e.checked?data.setValue([...data.value, {type: permission, permission: "read"}]):data.setValue(data.value.filter(perm=>perm.type!==permission));
    else
      data.setValue([{type: permission, permission: "read"}]);
  }

  onPermissionChange(e, permission, data){
    data.setValue(data.value.map(perm=>perm.type===permission?{...perm, permission:e.value }:perm));
  }

  deleteUsersFromOtherGroups(e){
    console.log(e);
    //console.log(this.groups);
    this.groups = this.groups.map(group=>{
      return (group.id!==e.data.id||group.__KEY__!==e.data.__KEY__)?{...group, users: group.users.filter(usr=>!e.data.users.includes(usr))}:group;
    });
  }

  prepopulateEmptyData(e){
    e.data = {...e.data, permissions:e.data.permissions?e.data.permissions:[], users:e.data.users?e.data.users:[] };
  }

  constructor() { }

  ngOnInit(): void { }

}
