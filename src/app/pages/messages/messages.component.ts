import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  userType = localStorage.getItem('user_type');

  constructor() { }

  ngOnInit() {
    console.log(this.userType);
  }

}
