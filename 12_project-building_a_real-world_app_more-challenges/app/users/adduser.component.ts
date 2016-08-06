import {Component, OnInit} from '@angular/core';
import {ControlGroup, FormBuilder, Validators} from '@angular/common'
import {HTTP_PROVIDERS} from '@angular/http'
import {ROUTER_DIRECTIVES, Router, CanDeactivate, RouteParams} from '@angular/router-deprecated'

import {EmailValidators} from '../validators/emailValidators';
import {UsersService} from './users.service';
import {User} from './user';

@Component({
    templateUrl: '/app/users/adduser.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [UsersService, HTTP_PROVIDERS]
})

export class AddUserComponent implements CanDeactivate, OnInit {
  signupForm: ControlGroup;
  title: String;
  user = new User();
  //https://github.com/mosh-hamedani/angular2-course/blob/master/app/users/user-form.component.ts#L16
  constructor(
    fb: FormBuilder,
    private _router: Router,
    private _routeParams: RouteParams,
    private _usersService: UsersService
  ) {
    this.signupForm = fb.group({
      name: ['', Validators.required],
      email: ['', EmailValidators.validEmail],
      phone: [],
      address: fb.group({
        street: [],
        suite: [],
        city: [],
        zip: []
      })
    })
  }

  ngOnInit() {
    var id = this._routeParams.get("id")
    this.title = id ? 'Edit User' : 'Add a User'
    if(id) {
      this.getUser(id)
    }
  }

  getUser(id) {
    this._usersService.getUser(id)
      .subscribe(
        data => this.user = data,
        response => {
          if (response.status == 404) {
              this._router.navigate(['404']);
          }
      })
  }


  signup(){//save
    // var result = authService.login(this.form.value)
    // this.signupForm.find('email').setErrors({ // sign in really
    //   invalidLogin: true
    // });
    var data = this.signupForm.value

    var result;
    if(this.user.id)
      result = this._usersService.updateUser(this.user)
    else
      result = this._usersService.addUser(data)

    result.subscribe(res => {
      console.log("server response:", res)
      // this.signupForm.markAsPristine()
      this._router.navigate(['Users'])
    })
  }
  routerCanDeactivate(next, previous) {
    if(this.signupForm.dirty)//dirty checking
      return confirm("Form not saved, do you want to leave?")
  }
}
