import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare const $: any;
@Component({
    selector: 'app-internetCare',
    templateUrl: './internetCare.component.html',
    styleUrls: ['./internetCare.component.css', 
    '../user/user.component.css']
})

export class InternetCareComponent implements OnInit{
    name:string;
    constructor() {
    	console.log('constructor internetCare..');
      }
      
      ngOnInit(){

      }

      /* functions for minimizing/closing cards */
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