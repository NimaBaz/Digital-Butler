import { Component, OnInit } from '@angular/core';
import { UserAccountService } from './user-account.service';
import { Router } from '@angular/router';
declare var jquery:any;
declare const $: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private user:UserAccountService, public router: Router) {
    
  }

    ngOnInit() {
            
      console.log("Local storage: " + localStorage.getItem('loggedIn'));
      if(localStorage.getItem('loggedIn') == "false") {
        
        this.router.navigate(['login']);
      } else {
        $("#logout").show();
      }
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

}
