import { Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';
import { UserAccountService } from '../components/user/user-account.service';

import * as d3 from 'd3';
declare var jquery:any;
declare const $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private http: HttpClient, public router: Router, private user: UserAccountService) {}
  
  ngOnInit() {
  }

  auth(username:string) {
    var user =$("#"+username).val();
    console.log('HIIIIIII ' + user);
    var url = "https://hlabsdemos.com:8080/auth_svc/get_user_info?userid=";
    this.http.get(url + user).subscribe(data => {
      // Read the result field from the JSON response.
          this.user.setUserToLoggedIn();
          console.log(data);        
          this.router.navigate(['user']);
         
      }, err => {
     
          console.log("something is wrong");
      } 
    );
  }
}
