import { ProfileRequestControllerService } from './../../controllers/profile-request/profile-request-controller.service';
import { CriteriaControllerService } from './../../controllers/criteria/criteria-controller.service';
import { AppModelService } from './../../models/app-model.service';
import { Component, OnInit, OnChanges } from '@angular/core';
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
  type = 'select';
  data;
  currentId;
  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private appModel: AppModelService, private criteriaController: CriteriaControllerService, private profileController: ProfileRequestControllerService) {
    this.getInfo();
  }
  ngOnInit() {

  }
  async getInfo() {
    const obj: any = await this.criteriaController.getInfo();
    this.profileIds = obj.profileIds;
  }
  showRequestItemPage() {
    this.downloadProfile(this.selectedItem);
  }

  showProfileItemPage() {
    this.downloadProfile(this.selectedItem);

  }
  async downloadProfile(id) {
    this.appModel.version++;
    this.data = await this.profileController.getProfileById(Number(id));
    this.currentId = id;
    this.page = 'profile';
  }

}
