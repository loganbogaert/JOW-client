import { AccountControllerService } from './../../controllers/user/account-controller.service';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanLoginService implements CanActivate {
  // tslint:disable-next-line: max-line-length
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.cookieService.get('RM') === 'true') {
      try {
        await this.userController.login(this.cookieService.get('email'), this.cookieService.get('password'));
        this.router.navigate(['/dashboard/']);
        return false;
      } catch (err) {
        return true;
      }
    }
    return true;
}
  constructor(private cookieService: CookieService, private router: Router, private userController: AccountControllerService) { }
}
