import { AppModelService } from './../../models/app-model.service';
import { Component, OnInit } from '@angular/core';
import { ProfileRequestControllerService } from 'src/app/controllers/profile-request/profile-request-controller.service';

@Component({
  selector: 'app-my-matching',
  templateUrl: './my-matching.component.html',
  styleUrls: ['./my-matching.component.scss']
})
export class MyMatchingComponent implements OnInit {

  userType = this.appModel.type;
  start = 0;
  amount = 10;
  profiles: any;

  constructor(private profileController: ProfileRequestControllerService, private appModel: AppModelService) {
    this.getMatches();
  }

  ngOnInit() {

  }
  async getMatches() {
    this.profiles = await this.profileController.getMatches(this.start, this.amount);
    console.log(this.profiles);
  }

}
