import { ProfileRequestService } from './../../services/profile-request/profile-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileRequestControllerService {

  constructor(private profileService: ProfileRequestService) { }

  createProfile(data: any) {
    return new Promise((resolve, reject) => {
      this.profileService.createProfile(data).subscribe((obj) => {
        resolve();
      }, (err) => reject(err));
    });
  }
  getProfileById(id: number) {
    return new Promise((resolve, reject) => {
      this.profileService.getProfileById(id).subscribe((obj: any) => {
        resolve(obj.data);
      }, (err) => reject(err));
    });
  }
}
