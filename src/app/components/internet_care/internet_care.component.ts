import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare const $: any;
@Component({
    selector: 'app-internet_care',
    templateUrl: './internet_care.component.html',
    styleUrls: ['./internet_care.component.css', 
    '../user/user.component.css']
})

export class InternetCareComponent implements OnInit{
    name:string;
    constructor() {
    	console.log('constructor internetCare..');
      }
      
      ngOnInit(){

      }
      minimize(id_) { 
        $("#" + id_).slideToggle();
      }
      remove(id_) { 
        
        $("#" + id_).hide();
      }
      showDiv(id_) {
        $("#" + id_).show();
      }
}