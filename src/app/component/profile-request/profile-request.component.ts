import { ProfileRequestControllerService } from './../../controllers/profile-request/profile-request-controller.service';
import { Component, OnInit, Input, AfterContentInit, OnChanges } from '@angular/core';
import { AppModelService } from 'src/app/models/app-model.service';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-request',
  templateUrl: './profile-request.component.html',
  styleUrls: ['./profile-request.component.scss']
})
export class ProfileRequestComponent implements OnInit, OnChanges {


  constructor(private appModel: AppModelService, private profileController: ProfileRequestControllerService, private router: Router) {
    this.profileForm = new FormGroup({
      jobs: new FormControl( appModel.actualProfile.Jobs === undefined ? '' : appModel.actualProfile.Jobs.fields[0]),
      experiences: new FormControl(appModel.actualProfile.Experiences === undefined ? '' : appModel.actualProfile.Experiences.fields[0]),
      locations: new FormControl(appModel.actualProfile.Locations === undefined ? '' : appModel.actualProfile.Locations.fields[0]),
      languages: new FormControl(appModel.actualProfile.Languages === undefined ? '' : appModel.actualProfile.Languages.fields[0]),
      licenses: new FormControl(appModel.actualProfile.Licenses === undefined ? '' : appModel.actualProfile.Licenses.fields[0]),
      contracts: new FormControl(appModel.actualProfile.Contracts === undefined ? '' : appModel.actualProfile.Contracts.fields[0]),
      free: new FormControl(''),
      salaries: new FormControl(appModel.actualProfile.Salaries === undefined ? '' : appModel.actualProfile.Salaries.fields[0])
    });
  }
  @Input() type = 'add';
  @Input() version: number;
  criterias = ['jobs', 'experiences', 'locations', 'languages', 'licenses', 'contracts', 'salaries'];
  profileForm;
  ngOnInit() {
  }
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    if (this.version !== 1) {
      let i: number;
      for (i = 0; i < this.criterias.length; i++) {
        console.log('');
        this.profileForm.get(this.criterias[i]).setValue('');
      }
      // tslint:disable-next-line: forin
      for (const key in this.appModel.actualProfile) {
        this.profileForm.get(key.toLowerCase()).setValue(this.appModel.actualProfile[key].fields[0]);
        console.log(this.appModel.actualProfile[key].fields[0]);
      }
    }
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
