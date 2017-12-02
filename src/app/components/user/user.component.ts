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
  name:string;
  width:number;
  id:number;
  minimId:number;


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

}
