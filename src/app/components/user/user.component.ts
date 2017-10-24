import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare const $: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;

  constructor() {
    console.log('constructor ran..');
  }

  ngOnInit() {
    //this.name = 'Hello, World!';
    $("#E").draggable();
  }

  onClick(){
    
  }
  
  
}
