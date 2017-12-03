import { Injectable } from '@angular/core';

@Injectable()
export class UserAccountService {
  public isUserLoggedIn;
  private username;

  constructor() {
    this.isUserLoggedIn=false;
  }
  
  setUserToLoggedIn(){
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }
}
