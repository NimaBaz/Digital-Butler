import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare const $: any;
@Component({
    selector: 'app-promos',
    templateUrl: './promos.component.html',
    styleUrls: ['./promos.component.css', 
    '../user/user.component.css']
})

export class PromosComponent implements OnInit{
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