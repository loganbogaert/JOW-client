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

  constructor(private router: Router, private appModel: AppModelService) { }

  ngOnInit() {
    console.log(this.userType);
  }

  showRequestItemPage(){
    console.log(this.selectedItem);
    this.router.navigateByUrl('list/requests/'+this.selectedItem)
  }

  showProfileItemPage(){
    console.log(this.selectedItem);
    this.router.navigateByUrl('list/profiles/'+this.selectedItem)
  }

}
