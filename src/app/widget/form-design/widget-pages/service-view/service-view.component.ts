import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-view',
  templateUrl: './service-view.component.html',
  styleUrls: ['./service-view.component.sass']
})
export class ServiceViewComponent implements OnInit {

  services = [
    {id:1, name: "Unisex haircut", price: 80, hours:1, minutes:0},
    {id:2, name: "Biker style", price: 65, hours:0, minutes:0},
    {id:3, name: "Hopnik style", price: 34, hours:3, minutes:20},
    {id:4, name: "Metalist style", price: 64, hours:2, minutes:40},
    {id:5, name: "Barbie style", price: 12, hours:5, minutes:15},
    {id:6, name: "Long hair", price: 34, hours:0, minutes:0},
    {id:7, name: "Short hair", price: 654, hours:4, minutes:0},
    {id:8, name: "Exclusive hair", price: 1234, hours:1, minutes:30},
    {id:9, name: "Prom queen", price: 187, hours:5, minutes:0},
    {id:10, name: "Prom barbie", price: 74, hours:2, minutes:15},
    {id:11, name: "I don't care style", price: 94, hours:3, minutes:45},
    {id:12, name: "Dandy haircut", price: 33, hours:1, minutes:30},
    {id:13, name: "Boss style", price: 15, hours:1, minutes:0},
    {id:14, name: "Rich boy", price: 87, hours:4, minutes:0},
    {id:15, name: "Man black", price: 76, hours:7, minutes:10},
    {id:16, name: "Man brown", price: 27, hours:1, minutes:0},
    {id:17, name: "Man blonde", price: 90, hours:1, minutes:15},
    {id:18, name: "Woman black", price: 35, hours:3, minutes:25},
    {id:19, name: "Woman brown", price: 99, hours:1, minutes:20},
    {id:20, name: "Woman blonde", price: 100, hours:1, minutes:10},
  ];
  
  categories = [
    {id:1, name: "Haircut", services:[1], parent:null},
    {id:2, name: "Man haircut", services:[2,3,4], parent:1},
    {id:3, name: "Woman haircut", services:[5,6,7], parent:1},
    {id:4, name: "Exclusive", services:[8], parent:3},
    {id:5, name: "Girls prom haircut", services:[9,10,11], parent:null},
    {id:6, name: "Mans prom haircut", services:[12,13,14], parent:null},
    {id:7, name: "Hair coloring", services:[], parent:null},
    {id:8, name: "Man hair coloring", services:[15,16,17], parent:7},
    {id:9, name: "Woman hair coloring", services:[18,19,20], parent:7},
  ];

  servicesIds = [1,5,10,15,20];

  constructor() { }

  isChecked(servicesId){
    return this.servicesIds.includes(servicesId);
  }

  onCheckClicked(serviceId){
    if(this.servicesIds.includes(serviceId)){
      this.servicesIds.splice(this.servicesIds.indexOf(serviceId),1);
    }
    else{
      this.servicesIds.push(serviceId);
    }
  }

  calculateSummary(){
    let cost = 0, hours = 0, minutes = 0;
    const selectedServices = this.services.filter(service=>this.servicesIds.includes(service.id));
    selectedServices.forEach(service=>{
      cost += service.price;
      hours += service.hours;
      minutes += service.minutes;
    });
    hours += Math.floor(minutes/60);
    minutes = minutes%60;
    return cost+"$ - "+hours+"h "+minutes+"m"
  }

  getServiceData(serviceId){
    return this.services.find(service=>service.id===serviceId);
  }

  ngOnInit(): void { }

  log(data){
    console.log(data);
  }

}
