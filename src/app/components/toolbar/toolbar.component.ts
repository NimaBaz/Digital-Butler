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
<<<<<<< HEAD
        $("#toolbar").draggable();
=======

>>>>>>> 903d9cc84f659b6e9dba3eb1f71e9826dbfbcc14
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