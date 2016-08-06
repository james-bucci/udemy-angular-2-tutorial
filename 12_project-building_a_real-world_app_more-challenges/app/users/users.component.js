System.register(['@angular/core', '@angular/router-deprecated', '@angular/http', './users.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, http_1, users_service_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent(_usersService) {
                    this._usersService = _usersService;
                    this.isLoading = true;
                }
                UsersComponent.prototype.ngOnInit = function () {
                    this.getUsers();
                };
                UsersComponent.prototype.getUsers = function () {
                    var _this = this;
                    this._usersService.getUsers()
                        .subscribe(function (data) {
                        _this.isLoading = false;
                        _this.users = data;
                        console.log(data);
                    });
                };
                UsersComponent.prototype.deleteClick = function (user) {
                    var _this = this;
                    var index = this.users.indexOf(user);
                    this.users.splice(index, 1);
                    if (this.confirmation(user.name)) {
                        this._usersService.deleteUser(user.id)
                            .subscribe(function (data) { return console.log("deleted"); }, function (response) {
                            if (response.status == 404) {
                                //warn user, undo delete [optimistic update]
                                _this.users.splice(index, 0, user);
                                alert("Server error, could not delete " + user.name + ".\nPlease try again");
                            }
                        });
                    }
                };
                UsersComponent.prototype.confirmation = function (name) {
                    return confirm("Are you sure you want to delete " + name + "?");
                    //what happens if user prevents these boxes???
                };
                UsersComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/app/users/users.component.html',
                        styles: ["\n    #add-user {\n      margin-bottom: 10px;\n    }\n    .glyphicon-remove {\n      cursor: pointer;\n      color: red;\n    }\n  "],
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        providers: [users_service_1.UsersService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [users_service_1.UsersService])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.component.js.map