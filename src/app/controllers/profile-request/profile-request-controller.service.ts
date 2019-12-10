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
}
