import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css', 
    '../user/user.component.css']
})

export class ToolbarComponent implements OnInit{
    name:string;
    constructor() {
    	console.log('constructor internetCare..');
      }
      
      ngOnInit(){

      }
}