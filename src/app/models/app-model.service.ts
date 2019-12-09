import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppModelService {

  constructor() { }
  public url = 'http://localhost:8000/';
  public type = '';
  public criterias = {};
}
