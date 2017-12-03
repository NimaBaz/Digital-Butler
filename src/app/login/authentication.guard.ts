import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserAccountService } from '../components/user/user-account.service';
import { Router } from '@angular/router';
@Injectable()
export class AuthenticationGuard implements CanActivate {
  
  constructor(private user: UserAccountService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.user.getUserLoggedIn()==false){
      this.router.navigate(['/']);
    }
    return this.user.getUserLoggedIn();
  }
}
