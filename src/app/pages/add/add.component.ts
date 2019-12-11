import { AppModelService } from 'src/app/models/app-model.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  userType = this.appModel.type;

  constructor(private appModel: AppModelService) {}

  ngOnInit() {

  }

}
