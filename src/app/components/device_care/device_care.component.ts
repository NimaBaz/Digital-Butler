import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-device_care',
    templateUrl: './device_care.component.html',
    styleUrls: ['./device_care.component.css', 
    '../user/user.component.css']
})

export class DeviceCareComponent implements OnInit{
    name:string;
    constructor() {
    	console.log('constructor internetCare..');
      }
      
      ngOnInit(){

      }
}