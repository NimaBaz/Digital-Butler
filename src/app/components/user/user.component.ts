import { Component, OnInit } from '@angular/core';
import { UserAccountService } from './user-account.service';

declare var jquery:any;
declare const $: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private user:UserAccountService) {
    console.log('constructor ran..');
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
    minimize3(id_) {
            var div_to_toggle = '#' + id_ ;
            $(div_to_toggle).slideToggle();
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
