import { Component } from 'angular2/core';
import {ControlGroup, FormBuilder} from 'angular2/common'
// import {Observable} from 'rxjs/Observable';// is stripped down version (better performance?)
import {Observable} from 'rxjs/Rx';
import './rxjs-extensions';
// import 'rxjs/add/operator/debounceTime'
// import 'rxjs/add/operator/map'
// import 'rxjs/add/observable/fromArray'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: []
})
export class AppComponent {
  form: ControlGroup;
  constructor(fb: FormBuilder) {
// page 2-3
    this.form = fb.group({
      search: []
    });

    var search = this.form.find('search');
    search.valueChanges//Observables without calling observ..??
      .debounceTime(400)
      .map(str => (<string>str).replace(' ','-'))//need to change str from any type to string
      .subscribe(x => console.log(x));


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
}
