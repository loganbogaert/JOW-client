import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppModelService } from 'src/app/models/app-model.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileRequestService {

  constructor(private http: HttpClient, private appModel: AppModelService) { }

  createProfile(data: any) {
    return this.http.post(`${this.appModel.url}profile/`, data, this.appModel.httpOptions);
  }
  getProfileById(id: number) {
    return this.http.get(`${this.appModel.url}profile/getOwnProfile/?profileId=${id}`, this.appModel.httpOptions);
  }
}
