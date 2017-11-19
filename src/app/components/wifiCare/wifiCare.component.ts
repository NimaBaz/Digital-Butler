import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare const $: any;
@Component({
    selector: 'app-wifiCare',
    templateUrl: './wifiCare.component.html',
    styleUrls: ['./wifiCare.component.css', 
    '../user/user.component.css']
})

export class WifiCareComponent implements OnInit{
    name:string;
    constructor() {
    	console.log('constructor wifi_care..');
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