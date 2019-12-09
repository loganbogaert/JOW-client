import { CriteriaControllerService } from './../criteria/criteria-controller.service';
import { AppModelService } from './../../models/app-model.service';
import { User } from './../../interfaces/user';
import { UserService } from './../../services/user/user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountControllerService {

  // tslint:disable-next-line: max-line-length
  constructor(private userService: UserService, private appModel: AppModelService, private criteriaController: CriteriaControllerService) { }

  createAccount(user: User) {
    return new Promise((resolve, reject) => {
      this.userService.createAccount(user).subscribe(
        (data) => resolve(data), (err) => reject(err));
    });
  }
  login(email, password) {
    return new Promise((resolve, reject) => {
      this.userService.login(email, password).subscribe(
        async (data: any) => {
            this.appModel.type = data.type;
            await this.criteriaController.getCriterias();
            console.log(this.appModel.criterias);
            resolve();
        },
        (err: any) => reject(err));
    });
  }
}
