import { Control } from 'angular2/common'

export class UsernameValidators {

  static shouldBeUnique(control: Control) {
    return new Promise((resolve, reject) => {
      setTimeout(function(){
        if(control.value == "valmassoi")
          resolve({ shouldBeUnique: true })
        else
          resolve(null)
      }, 1000)//simulate server call
    });
  }

  static cannotContainSpace(control: Control){ // renaming? with colon
    if (control.value.indexOf(' ') >= 0)
      return { cannotContainSpace: true };
    return null;
  }

}
