import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-wifi_care',
    templateUrl: './wifi_care.component.html',
    styleUrls: ['./wifi_care.component.css', 
    '../user/user.component.css']
})

export class WifiCareComponent implements OnInit{
    name:string;
    constructor() {
    	console.log('constructor wifi_care..');
      }
      
      ngOnInit(){

      }
}