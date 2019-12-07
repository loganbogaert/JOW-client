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

  singUpForm = this.fb.group({
    offer: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    postcode: ["", Validators.required],
    username: ["", Validators.required],
    password: ["", [Validators.required, Validators.minLength]],
  });

  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit() {
  }

  get formControls() { return this.singUpForm.controls; }

  onSubmit() {
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.singUpForm.invalid) {
        return;
    }else{
      if(localStorage.getItem('user_type') != null){
        this.router.navigateByUrl('/dashboard');
      }
    }

  }

  selectOffer(){
    let selectedOffer = this.singUpForm.value.offer;
    if(selectedOffer == "I offer a skill"){
      localStorage.setItem("user_type" , "offer-skill");
    }else{
      localStorage.setItem("user_type" , "ask-skill");
    }
  }

}
