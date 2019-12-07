import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-matching',
  templateUrl: './my-matching.component.html',
  styleUrls: ['./my-matching.component.scss']
})
export class MyMatchingComponent implements OnInit {

  userType = localStorage.getItem('user_type');

  constructor() { }

  ngOnInit() {
    console.log(this.userType);
  }

}
