import { ProfileRequestControllerService } from '../../../controllers/profile-request/profile-request-controller.service';
import { Component, OnInit, Input, AfterContentInit, OnChanges } from '@angular/core';
import { AppModelService } from 'src/app/models/app-model.service';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-profile-request',
  templateUrl: './profile-request.component.html',
  styleUrls: ['./profile-request.component.scss']
})
export class ProfileRequestComponent implements OnInit, OnChanges {


  // tslint:disable-next-line: max-line-length
  constructor(private appModel: AppModelService, private profileController: ProfileRequestControllerService, private router: Router, private location: Location) {
    this.profileForm = new FormGroup({
      jobs: new FormControl(''),
      // tslint:disable-next-line: max-line-length
      experiences: new FormControl(''),
      // tslint:disable-next-line: max-line-length
      locations: new FormControl(''),
      // tslint:disable-next-line: max-line-length
      languages: new FormControl(''),
      licenses: new FormControl(''),
      // tslint:disable-next-line: max-line-length
      contracts: new FormControl(''),
      free: new FormControl(''),
      salaries: new FormControl('')
    });

  }
  @Input() type = 'add';
  @Input() version: number;
  @Input() data: any = {};
  @Input() currentId: number;
  criterias = ['jobs', 'experiences', 'locations', 'languages', 'licenses', 'contracts', 'salaries'];
  profileForm;
  ngOnInit() {
  }
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
      let i: number;
      for (i = 0; i < this.criterias.length; i++) {
        this.profileForm.get(this.criterias[i]).setValue('');
      }
      // tslint:disable-next-line: forin
      for (const key in this.data) {
        this.profileForm.get(key.toLowerCase()).setValue(this.data[key].fields[0]);
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
  deleteProfile() {
    this.profileController.deleteProfile(this.currentId).then(() => {
      alert(`${this.appModel.type === 'Employer' ? 'Request' : 'Profile'} deleted `);
      this.router.navigateByUrl('/dashboard/', {skipLocationChange : true}).then(() => {
        this.router.navigate([encodeURI(this.location.path())]);
      });
    }).catch((err) => alert(`could not delete ${this.appModel.type === 'Employer' ? 'Request' : 'Profile'} ,please try again `));
  }
}
