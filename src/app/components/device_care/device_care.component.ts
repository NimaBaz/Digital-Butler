import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
declare var jquery:any;
declare const $: any;
@Component({
    selector: 'app-device_care',
    templateUrl: './device_care.component.html',
    styleUrls: ['./device_care.component.css', 
    '../user/user.component.css']
})

export class DeviceCareComponent implements OnInit{
    name:string;
    constructor() {
    	console.log('constructor device_care..');
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
      ngOnInit() {
          
      }
     
     
}