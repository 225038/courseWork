import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from "./user.service";

@Injectable()
export class MenuGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    try {
      this.userService.isCooker(this.userService.currentUser().name).subscribe(data =>{
        if(data){
         return true;
        }else{
          this.router.navigate(['/menu']);
          return false;}
      });
      return true;
    } catch (e) {
      console.log('User not logged in')
      this.router.navigate(['/auth']);
    }
  }
}
