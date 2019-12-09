import { User } from '../../interfaces/user';
import { AppModelService } from '../../models/app-model.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private appModel: AppModelService) { }

  createAccount(user: User) {
    return this.http.post(`${this.appModel.url}users/`, user);
  }
  login(email, password) {
    return this.http.get(`${this.appModel.url}users/?email=${email}&password=${password}`);
  }
}
