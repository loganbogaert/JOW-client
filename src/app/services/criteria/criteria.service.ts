import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppModelService } from 'src/app/models/app-model.service';
@Injectable({
  providedIn: 'root'
})
export class CriteriaService {

  constructor(private http: HttpClient, private appModel: AppModelService) { }
  getcriterias() {
    const criterias = '[{"criteria" : "Jobs"}, {"criteria" : "Contracts"}]';
    return this.http.get(`${this.appModel.url}criteria/?criterias=${criterias}`);
  }
}
