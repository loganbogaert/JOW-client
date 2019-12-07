import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  submitted = false;

  singInForm = this.fb.group({
    offer: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    postcode: ["", Validators.required],
    username: ["", Validators.required],
    password: ["", [Validators.required, Validators.minLength]],
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get formControls() { return this.singInForm.controls; }

  onSubmit() {
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.singInForm.invalid) {
      return;
    }else{
     
    }

  }

}
