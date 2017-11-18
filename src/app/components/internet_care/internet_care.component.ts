import { Component, OnInit } from '@angular/core';

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
}