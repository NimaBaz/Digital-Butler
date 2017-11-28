import { Component, OnInit} from '@angular/core';

declare var jquery:any;
declare const $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() {
    console.log('constructor login ran...');
  }

  ngOnInit() {
    
  }
}
