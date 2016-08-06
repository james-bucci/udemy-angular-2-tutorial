System.register(['@angular/core', '@angular/common', '@angular/http', '@angular/router-deprecated', '../validators/emailValidators', './users.service', './user'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, http_1, router_deprecated_1, emailValidators_1, users_service_1, user_1;
    var AddUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (emailValidators_1_1) {
                emailValidators_1 = emailValidators_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            AddUserComponent = (function () {
                //https://github.com/mosh-hamedani/angular2-course/blob/master/app/users/user-form.component.ts#L16
                function AddUserComponent(fb, _router, _routeParams, _usersService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._usersService = _usersService;
                    this.user = new user_1.User();
                    this.signupForm = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', emailValidators_1.EmailValidators.validEmail],
                        phone: [],
                        address: fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zip: []
                        })
                    });
                }
                AddUserComponent.prototype.ngOnInit = function () {
                    var id = this._routeParams.get("id");
                    this.title = id ? 'Edit User' : 'Add a User';
                    if (id) {
                        this.getUser(id);
                    }
                };
                AddUserComponent.prototype.getUser = function (id) {
                    var _this = this;
                    this._usersService.getUser(id)
                        .subscribe(function (data) { return _this.user = data; }, function (response) {
                        if (response.status == 404) {
                            _this._router.navigate(['404']);
                        }
                    });
                };
                AddUserComponent.prototype.signup = function () {
                    var _this = this;
                    // var result = authService.login(this.form.value)
                    // this.signupForm.find('email').setErrors({ // sign in really
                    //   invalidLogin: true
                    // });
                    var data = this.signupForm.value;
                    var result;
                    if (this.user.id)
                        result = this._usersService.updateUser(this.user);
                    else
                        result = this._usersService.addUser(data);
                    result.subscribe(function (res) {
                        console.log("server response:", res);
                        // this.signupForm.markAsPristine()
                        _this._router.navigate(['Users']);
                    });
                };
                AddUserComponent.prototype.routerCanDeactivate = function (next, previous) {
                    if (this.signupForm.dirty)
                        return confirm("Form not saved, do you want to leave?");
                };
                AddUserComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/app/users/adduser.component.html',
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        providers: [users_service_1.UsersService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_deprecated_1.Router, router_deprecated_1.RouteParams, users_service_1.UsersService])
                ], AddUserComponent);
                return AddUserComponent;
            }());
            exports_1("AddUserComponent", AddUserComponent);
        }
    }
});
//# sourceMappingURL=adduser.component.js.map