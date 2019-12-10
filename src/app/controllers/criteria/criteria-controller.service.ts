import { AppModelService } from 'src/app/models/app-model.service';
import { CriteriaService } from './../../services/criteria/criteria.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CriteriaControllerService {

  constructor(private criteriaService: CriteriaService, private appModel: AppModelService) { }
  getCriterias() {
    return new Promise((resolve, reject) => {
      this.criteriaService.getcriterias().subscribe((obj: any) => {
        this.appModel.criterias = obj.data;
        resolve();
      }, (err) => reject());
    });
  }
  getInfo() {
    return new Promise((resolve, reject) => {
      this.criteriaService.getInfo().subscribe((obj: any) => {
        resolve(obj.data);
      }, (err) => reject(err));
    });
  }
}
