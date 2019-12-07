import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-and-request-list',
  templateUrl: './profile-and-request-list.component.html',
  styleUrls: ['./profile-and-request-list.component.scss']
})
export class ProfileAndRequestListComponent implements OnInit {

  userType = localStorage.getItem('user_type');

  constructor() { }

  ngOnInit() {
    console.log(this.userType);
  }

}
