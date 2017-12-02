import { Component} from '@angular/core';
import { LoginComponent } from './login/login.component';
declare var jquery:any;
declare const $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app';
  remove(id_) { 
    
    $("#" + id_).hide();
  }
  showDiv(id_) {
    $("#" + id_).show();
  }

  
}
