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
  width:number;
  id:number;
  minimId:number;
  constructor() {
    console.log('constructor ran..');
  }

  ngOnInit() {
    //this.name = 'Hello, World!';
    //$("h1").html("hi");
    $("#E").draggable();
    
    this.width = $("#A1").width();
    console.log(this.width);
    $("span").width = this.width;
 
  
  }
  minimize2(event) {
  
    //this.minimId = event.currentTarget.parentElement.parentElement.getAttribute("id");
    this.minimId = event.target.parentElement.parentElement
    .parentElement.nextElementSibling.getAttribute("id");
   
    $("#" + this.minimId).slideToggle();

  }
  minimize(event) {
  
    //this.minimId = event.currentTarget.parentElement.parentElement.getAttribute("id");
    this.minimId = event.target.parentElement.nextElementSibling.getAttribute("id");
    $("#" + this.minimId).slideToggle();

  }
  remove(event) { 
    this.id = event.target.parentElement.parentElement.getAttribute("id");
    
    $("#"+ this.id).hide();

  }
  
 

  
  
}
