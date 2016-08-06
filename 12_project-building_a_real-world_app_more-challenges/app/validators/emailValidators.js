System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EmailValidators;
    return {
        setters:[],
        execute: function() {
            EmailValidators = (function () {
                function EmailValidators() {
                }
                EmailValidators.shouldBeUnique = function (control) {
                    // return new Promise((resolve, reject) => {
                    //   setTimeout(function(){
                    //     if(control.value == "valmassoi")
                    //       resolve({ shouldBeUnique: true })
                    //     else
                    //       resolve(null)
                    //   }, 1000)//simulate server call
                    // });
                };
                EmailValidators.validEmail = function (control) {
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (!re.test(control.value))
                        return { invalidEmail: true };
                    return null;
                };
                return EmailValidators;
            }());
            exports_1("EmailValidators", EmailValidators);
        }
    }
});
//# sourceMappingURL=emailValidators.js.map