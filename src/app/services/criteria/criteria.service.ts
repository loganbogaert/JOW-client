import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppModelService } from 'src/app/models/app-model.service';
@Injectable({
  providedIn: 'root'
})
export class CriteriaService {

  constructor(private http: HttpClient, private appModel: AppModelService) { }
  getcriterias() {
    // tslint:disable-next-line: max-line-length
    const criterias = '[{"criteria" : "Jobs"}, {"criteria" : "Contracts"}, {"criteria" : "Salaries"}, {"criteria" : "Experiences"}, {"criteria" : "Locations"}, {"criteria" : "Languages"}, {"criteria" : "Licenses"}]';
    return this.http.get(`${this.appModel.url}criteria/?criterias=${criterias}`);
  }
}
