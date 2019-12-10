import { ProfileRequestControllerService } from './../../controllers/profile-request/profile-request-controller.service';
import { Component, OnInit } from '@angular/core';
import { AppModelService } from 'src/app/models/app-model.service';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-request',
  templateUrl: './profile-request.component.html',
  styleUrls: ['./profile-request.component.scss']
})
export class ProfileRequestComponent implements OnInit {

  constructor(private appModel: AppModelService, private profileController: ProfileRequestControllerService, private router: Router) { }
  criterias = ['jobs', 'experiences', 'locations', 'languages', 'licenses', 'contracts', 'salaries'];
  profileForm = new FormGroup({
    jobs: new FormControl(''),
    experiences: new FormControl(''),
    locations: new FormControl(''),
    languages: new FormControl(''),
    licenses: new FormControl(''),
    contracts: new FormControl(''),
    free: new FormControl(''),
    salaries: new FormControl('')
  });

  ngOnInit() {
  }

  getCriterias() {
    const obj = [];
    let i: number;
    for (i = 0; i < this.criterias.length; i++) {
      const value = this.profileForm.get(this.criterias[i]).value;
      if (value !== '') {
        obj.push({
          type : 'match',
          value, name : this.criterias[i].charAt(0).toUpperCase() + this.criterias[i].slice(1)
        });
      }
    }
    return obj;
  }
  saveForm() {
    const criterias = this.getCriterias();
    this.profileController.createProfile({
      criterias,
      description : this.profileForm.get('free').value
    }).then((obj) => {
      alert(`${this.appModel.type === 'Employer' ? 'Request' : 'Profile'} saved `);
      this.router.navigate(['/dashboard/']);
    }).catch((err) => {
      alert('error');
    });
  }
}
