import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: 'app/user/profile.component.html',
  styles: [`
    em {float: right; color: red; padding-left: 10px;}
    .error input { background-color: #E3C3C5;}
    .error ::-webkit-input-placeholder {color: #999;}
  
  `]
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  private firstName; FormControl;
  private lastName: FormControl;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });

  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
    }
  }

  lastNameIsValid() {
    return (this.lastName.valid || this.lastName.untouched);
  }

  firstNameIsValid() {
    return (this.firstName.valid || this.firstName.untouched );
  }
}