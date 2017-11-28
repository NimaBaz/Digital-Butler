import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
declare var jquery:any;
declare const $: any;
@Component({
    selector: 'app-deviceCare',
    templateUrl: './deviceCare.component.html',
    styleUrls: ['./deviceCare.component.css', 
    '../user/user.component.css']
})

export class DeviceCareComponent implements OnInit{
    name:string;
    constructor() {
    	console.log('constructor device_care..');
      }

      ngOnInit() {
        
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

      smallModal(some_ID) {
        var small_modal = document.getElementById(some_ID);
        small_modal.style.display = "block";
      }
      normalModal(some_ID) {
        var modal = document.getElementById(some_ID);
        modal.style.display = "block";
      }
      closeModal(some_ID){
        var modal = document.getElementById(some_ID);
        modal.style.display = "none";
      }
     
}