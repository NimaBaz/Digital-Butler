import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare const $: any;
@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css', 
    '../user/user.component.css']
})

export class ToolbarComponent implements OnInit{
    name:string;
    constructor() {
    	console.log('constructor toolbar..');
      }
      
      ngOnInit(){
        $("#toolbar").draggable();
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