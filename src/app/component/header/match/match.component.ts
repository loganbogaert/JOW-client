import { Component, OnInit, Input } from '@angular/core';
import { AppModelService } from 'src/app/models/app-model.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  constructor(private appModel: AppModelService) {
    console.log(this.appModel.type);
  }
  @Input() description;
  @Input() index;


  ngOnInit() {
  }

}
