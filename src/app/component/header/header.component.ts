import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppModelService } from 'src/app/models/app-model.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private appModel: AppModelService, private cookieService: CookieService) { }

  ngOnInit() {
  }
  logOut() {
    this.cookieService.delete('RM');
    this.cookieService.delete('email');
    this.cookieService.delete('password');
    this.appModel.type = '';
    this.appModel.setToken('');
    this.router.navigate(['/login/']);
  }
}
