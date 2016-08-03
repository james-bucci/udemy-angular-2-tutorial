import {Component} from 'angular2/core';
import { ControlGroup, Control, Validators, FormBuilder } from 'angular2/common'
import { UsernameValidators } from './usernameValidators';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpFormComponent {

  form1: ControlGroup; //: of type

  constructor(fb: FormBuilder) { //good for big form
    this.form1 = fb.group({
      username:[
        'default',
        Validators.compose([
          Validators.required,
          UsernameValidators.cannotContainSpace
        ]),
        UsernameValidators.shouldBeUnique
      ], //default value, validators, async validators
      password: ['', Validators.required]
    })
  }
  // other way below
  // form1 = new ControlGroup({
  //   username: new Control('defaultValue', Validators.required),
  //   password: new Control('', Validators.required)
  // });

  signup(){
    // var result = authService.login(this.form.value)
    this.form1.find('username').setErrors({ // sign in really
      invalidLogin: true
    });
    console.log(this.form1.value);
  }
}
