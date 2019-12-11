import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppModelService {

  constructor() { }
  public url = 'http://localhost:8000/';
  public type = '';
  public criterias = {};
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  public version = 0;
  public setToken(token) {
     this.httpOptions.headers = this.httpOptions.headers.set('Authorization', token);
  }
}
