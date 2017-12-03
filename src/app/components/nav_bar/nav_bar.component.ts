import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav_bar',
    templateUrl: './nav_bar.component.html',
    styleUrls: ['./nav_bar.component.css', 
    '../user/user.component.css']
})

export class NavBarComponent implements OnInit{
    name:string;
    constructor() {
    	console.log('constructor nav_bar..');
      }
      
      ngOnInit(){
        
      }
}

