import { AccountControllerService } from './../../controllers/user/account-controller.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  submitted = false;

  singInForm = this.fb.group({
   // offer: ["", Validators.required],
    // email: ["", [Validators.required, Validators.email]],
    // postcode: ["", Validators.required],
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength]],
  });
  constructor(private fb: FormBuilder, private userController: AccountControllerService, private router: Router) { }

  ngOnInit() {
  }

  get formControls() { return this.singInForm.controls; }

  moveToDashBoard() {
    this.router.navigate(['/dashboard/']);
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (!this.singInForm.invalid) {
      this.userController.login(this.singInForm.get('username').value, this.singInForm.get('password').value).then(() =>
      this.moveToDashBoard()
).catch((err: any) => {
        switch (err.error.code) {
          case 'NM': alert('User does not exist or password does not match');
                     break;
          default: alert(`you're request could not be handeled, please try again`);
        }
      });
    }

  }

}
