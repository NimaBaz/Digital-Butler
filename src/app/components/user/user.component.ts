import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
declare var jquery:any;
declare const $: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  width:number;
  id:number;
  minimId:number;
        
  monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];
  constructor() {
    console.log('constructor ran..');
  }

    ngOnInit() {
        //this.name = 'Hello, World!';
        //$("h1").html("hi");
        $("#E").draggable();
        
        this.width = $("#A1").width();
        console.log(this.width);
        $("span").width = this.width;
        var todayDate = new Date();
        var month = this.monthNames[todayDate.getMonth()];
        var day = todayDate.getDate();
        var year = todayDate.getFullYear();
        var time = todayDate.getHours();
        var minute = todayDate.getMinutes();
        var min;
        if(minute < 10) { 
            min = "0" + minute ;
        } else {
            min = minute;
        }
        var ampm = "am";
        if(time > 12) {
            time -= 12;
            ampm = "pm";
        }
        document.getElementById('date').textContent = month + ", " + day + ", "+ year +" , "+ time + ":" + min + " " + ampm;
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
        evt.currentTarget.className += " active";
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
    minimize3(id_) {
            var div_to_toggle = '#' + id_ ;
            $(div_to_toggle).slideToggle();
    }

    changeDivContent(){
        document.getElementById("B2").innerHTML = "stuff";
    }

    /*stuff for pop ups*/
    myFunction(some_eventID) {
        var popup = document.getElementById(some_eventID);
        popup.classList.toggle("show");
    
    }
    
    // Get the modal
    myFunction2(some_eventID) {
    var modal = document.getElementById(some_eventID);
            modal.style.display = "block";
    }
    closeFunct(some_eventID){
      var modal = document.getElementById(some_eventID);
      modal.style.display = "none";
    }

}
