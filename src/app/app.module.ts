import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { MyMatchingComponent } from './pages/my-matching/my-matching.component';
import { ProfileAndRequestListComponent } from './pages/profile-and-request-list/profile-and-request-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddComponent } from './pages/add/add.component';
import { ProfileRequestComponent } from './component/header/profile-request/profile-request.component';
import { MatchComponent } from './component/header/match/match.component';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    MessagesComponent,
    MyMatchingComponent,
    ProfileAndRequestListComponent,
    DashboardComponent,
    AddComponent,
    ProfileRequestComponent,
    MatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
