import { AccountControllerService } from './../../controllers/user/account-controller.service';
import { User } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  submitted = false;
  user: User;

  singUpForm = this.fb.group({
    offer: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    // postcode: ["", Validators.required],
   // username: ["", Validators.required],
    password: ['', [Validators.required, Validators.minLength]],
  });

  constructor(private fb: FormBuilder, private router: Router, private userController: AccountControllerService) { }

  ngOnInit() {
  }

  moveToHomePage() {
    this.router.navigate(['/']);
  }

  get formControls() { return this.singUpForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (!this.singUpForm.invalid) {
      this.user = {
        email : this.singUpForm.get('email').value,
        password : this.singUpForm.get('password').value,
        type : this.singUpForm.get('offer').value
      };
      console.log(this.user);
      this.userController.createAccount(this.user).then((obj) => {
        alert('account has been created');
        this.moveToHomePage();
      });
     }

  }

  selectOffer() {

  }

}
