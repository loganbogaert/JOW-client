import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userType = localStorage.getItem('user_type');
  selectedItem;

  constructor(private router: Router) { }

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
