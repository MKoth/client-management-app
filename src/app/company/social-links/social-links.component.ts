import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.sass']
})
export class SocialLinksComponent implements OnInit {

  constructor() { }

  isSocialsChanged:boolean = false;

  links = [
    {name:'vk', url:'vk.com/uber'},
    {name:'facebook', url:'facebook.com/uber'}
  ];

  onSocialsChanged(data){
    this.links = data;
    this.isSocialsChanged = true;
  }

  saveSocials(){
    this.isSocialsChanged = false;
  }

  ngOnInit(): void {
  }

}
