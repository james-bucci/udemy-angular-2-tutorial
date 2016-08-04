System.register(['angular2/core', 'angular2/common', './rxjs-extensions'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (_1) {}],
        execute: function() {
            // import 'rxjs/add/operator/debounceTime'
            // import 'rxjs/add/operator/map'
            // import 'rxjs/add/observable/fromArray'
            AppComponent = (function () {
                function AppComponent(fb) {
                    // page 2-3
                    this.form = fb.group({
                        search: []
                    });
                    var search = this.form.find('search');
                    search.valueChanges //Observables without calling observ..??
                        .debounceTime(400)
                        .map(function (str) { return str.replace(' ', '-'); }) //need to change str from any type to string
                        .subscribe(function (x) { return console.log(x); });
                    var startDates = [];
                    var startDate = new Date();
                    //end page 2-3
                    //simulate flight deals page 4-5
                    /*  for (var day =-2; day <= 2; day++) {
                        var date = new Date(
                          startDate.getFullYear(),
                          startDate.getMonth(),
                          startDate.getDate()+day
                        );
                        startDates.push(date);
                      }
                  
                      Observable
                        .fromArray(startDates)
                        .map(date => {
                          console.log("Getting deals for date " + date);
                          return [1,2,3];
                        })
                        .subscribe(x => console.log(x));
                        */
                    //page 6 observable of, empty, range...
                    // Observable.of([1,2,3]) // vs //Observable.fromArray([1, 2, 3])
                    //   .subscribe(x=>console.log(x))
                    //end page 6
                    //page 7
                    // Observable.interval(1000)
                    //   .flatMap(x => {
                    //     console.log("calling server")
                    //     return Observable.of([1,2,3])
                    //   })
                    //   .subscribe(news => console.log(news))
                    //end page 8
                    //page 9 forkJoin two+
                    // var userStream = Observable.of({
                    //   userId:1, username: 'valmassoi'
                    // }).delay(2000)
                    //
                    // var tweetsStream = Observable.of([1,2,3]).delay(1500)
                    //
                    // Observable
                    //   .forkJoin(userStream, tweetsStream)
                    //   .map(joined => new Object({ user: joined[0], tweets: joined[1] }))
                    //   .subscribe(result => console.log(result))
                    //endpage 9
                    //page 10 err handleing
                    // Observable.throw(new Error("u fail"))
                    //   .subscribe(
                    //     x=>console.log(x),
                    //     error => console.log(error)
                    //   )
                    //end page 10
                    //page 11 retry failed req
                    // var counter = 0;
                    //
                    // Observable.of('url')
                    //   .flatMap(() => {
                    //     if (++counter < 2)
                    //       return Observable.throw(new Error("failed bro"))
                    //
                    //     return Observable.of([1,2,3])
                    //   })
                    //   .retry(3)
                    //   .subscribe(
                    //     x=>console.log(x),
                    //     error=> console.error(error)
                    //   )
                    //end page 12
                    //page 13 catch
                    // Observable.throw(new Error("falllled"))
                    //   .catch(err => {
                    //     return Observable.of([1,2,3]) //http req failed -> giv user local data
                    //   })
                    //   .subscribe(x => console.log(x))
                    //endpage 13
                    //page 14 timeout async
                    // Observable.of([1,3,23])
                    //   .delay(5000)
                    //   .timeout(1000)
                    //   .subscribe(
                    //     x=>console.log(x),
                    //     error=>console.error(error)
                    //   )
                    //end p 14
                    //page15 - completed, the third arg
                    // Observable.fromArray([1,3,23])
                    //   .subscribe(
                    //     x=>console.log(x),
                    //     error=>console.log(error),
                    //     ()=>console.log("completed")
                    //   )
                    //done
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map