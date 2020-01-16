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
  start = 0;
  amount = 10;
  profiles: any;
  dashboard : boolean = true;
  message : boolean = false;
  AddProfileAndRequest : boolean = false;
  matches : boolean = false;

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private appModel: AppModelService, private criteriaController: CriteriaControllerService, private profileController: ProfileRequestControllerService) {
    this.getInfo();
  }
  ngOnInit() {
    this.dashboard  = true;
    this.message = false;
    this.AddProfileAndRequest  = false;
    this.matches  = false;
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

  dashboard_page(){
    this.dashboard  = true;
    this.message = false;
    this.AddProfileAndRequest  = false;
    this.matches  = false;
  }

  message_page(){
    this.dashboard  = false;
    this.message = true;
    this.AddProfileAndRequest  = false;
    this.matches  = false;
  }

  profile_request_page(){
    this.dashboard  = false;
    this.message = false;
    this.AddProfileAndRequest  = true;
    this.matches  = false;
  }

  matches_page(){
    this.dashboard  = false;
    this.message = false;
    this.AddProfileAndRequest  = false;
    this.matches  = true;
  }

  async getMatches() {
    this.profiles = await this.profileController.getMatches(this.start, this.amount);
    console.log(this.profiles);
  }
}
