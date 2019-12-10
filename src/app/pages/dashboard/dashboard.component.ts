import { CriteriaControllerService } from './../../controllers/criteria/criteria-controller.service';
import { AppModelService } from './../../models/app-model.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userType = this.appModel.type;
  selectedItem;
  profileIds;
  page = 'dashboard';

  constructor(private router: Router, private appModel: AppModelService, private criteriaController: CriteriaControllerService) {
    this.getInfo();
  }

  ngOnInit() {

  }
  async getInfo() {
    const obj: any = await this.criteriaController.getInfo();
    this.profileIds = obj.profileIds;
  }
  showRequestItemPage() {
    console.log(this.selectedItem);
    this.downloadProfile(this.selectedItem);
  }

  showProfileItemPage() {
    console.log(this.selectedItem);
    this.downloadProfile(this.selectedItem);

  }
  downloadProfile(id) {
    this.page = 'profile';
  }

}
