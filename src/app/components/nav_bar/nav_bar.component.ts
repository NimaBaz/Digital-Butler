import { Component, OnInit } from '@angular/core';
import { UserAccountService } from '../user/user-account.service';
@Component({
    selector: 'app-nav_bar',
    templateUrl: './nav_bar.component.html',
    styleUrls: ['./nav_bar.component.css', 
    '../user/user.component.css']
})

export class NavBarComponent implements OnInit{
    name:string;
    constructor(private user: UserAccountService) {
    	
    }
      
      ngOnInit(){
     
          $("#logout").hide(); 
 
       
        
      }

      logOut() {
        this.user.setUserToLoggedOut();
        localStorage.setItem('loggedIn',this.user.getUserLoggedIn());
        $("#logout").hide();
      }
}

