System.register(['angular2/core', 'angular2/common', './github.service', 'angular2/http', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, common_1, github_service_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_gitHubFollowersService, fb) {
                    var _this = this;
                    this._gitHubFollowersService = _gitHubFollowersService;
                    this.isLoading = true;
                    this.username = "valmassoi";
                    this.form = fb.group({
                        search: []
                    });
                    var search = this.form.find('search');
                    search.valueChanges
                        .debounceTime(400)
                        .map(function (str) { return str; })
                        .subscribe(function (x) {
                        console.log("hi", x);
                        _this.username = x;
                        if (_this.username.length > 0)
                            _this.getFollowers();
                    });
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getFollowers();
                };
                AppComponent.prototype.getFollowers = function () {
                    var _this = this;
                    this._gitHubFollowersService.getFollowers(this.username)
                        .subscribe(function (data) {
                        _this.isLoading = false;
                        _this.user = data[0];
                        _this.followers = data[1];
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        directives: [],
                        styles: ["\n      .avatar {\n        width: 100;\n        height: 100;\n        border-radius: 100%;\n      }\n    "],
                        providers: [github_service_1.GitHubFollowersService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [github_service_1.GitHubFollowersService, common_1.FormBuilder])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map