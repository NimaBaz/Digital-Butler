import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import * as jquery from "jquery";
// declare var jquery:any;
declare const $: any;

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css', 
    '../user/user.component.css']
})

export class ReportComponent implements OnInit{
    name:string;
    width:number;
    constructor() {
    	console.log('constructor data_visualization..');
      }

      monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
      ];

      ngOnInit() {
        this.width = $("#A1").width();
        console.log(this.width);
        $("span").width = this.width;
        this.setDate();
      }
      setDate() {
        this.setInitialDate();
        setInterval(()=>{
           this.setInitialDate();
        }, 1000);
        
      }
      setInitialDate() {
        var todayDate = new Date();
        var month = this.monthNames[todayDate.getMonth()];
        var day = todayDate.getDate();
        var year = todayDate.getFullYear();
        var hour = todayDate.getHours();
        var minute = todayDate.getMinutes();
        var min;
        var ampm = "am";
        if(hour==0)
            hour=12;
        if(hour > 12) {
            hour -= 12;
            ampm = "pm";
        }
        if(minute < 10) { 
            min = "0" + minute ;
        } else {
            min = minute;
        }
        document.getElementById('date').textContent = month + ", " + day + ", "+ year +" , "+ hour + ":" + min + " " + ampm;
      }
      openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        //evt.currentTarget.className += " active";
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