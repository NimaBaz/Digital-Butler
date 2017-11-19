import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare const $: any;
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