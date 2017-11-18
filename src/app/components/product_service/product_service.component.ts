import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product_service',
    templateUrl: './product_service.component.html',
    styleUrls: ['./product_service.component.css', 
    '../user/user.component.css']
})

export class ProductServiceComponent implements OnInit{
    name:string;
    constructor() {
    	console.log('constructor product_service..');
      }
      
      ngOnInit(){

      }
}