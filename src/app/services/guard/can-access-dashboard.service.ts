import { AppModelService } from './../../models/app-model.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanAccessDashboardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.appModel.type === '') {
      this.router.navigate(['/login/']);
      return false;
    }
    return true;
  }
  constructor(private appModel: AppModelService, private router: Router) { }
}
