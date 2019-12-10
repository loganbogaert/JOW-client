import { Component, OnInit } from '@angular/core';
import { AppModelService } from 'src/app/models/app-model.service';

@Component({
  selector: 'app-profile-request',
  templateUrl: './profile-request.component.html',
  styleUrls: ['./profile-request.component.scss']
})
export class ProfileRequestComponent implements OnInit {

  constructor(private appModel: AppModelService) { }

  ngOnInit() {
  }

}
