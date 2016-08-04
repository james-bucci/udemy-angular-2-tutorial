/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
//from 'rxjs/Observable' is stripped down version (better performance?)
//import 'rxjs/add/operator/debounceTime'
//import 'rxjs/add/operator/filter'

@Component({
    selector: 'my-app',
    template: `
        <input id="search" type="text" class="form-control">
    `
})
export class AppComponent {
    constructor(){
//Observable way - apply operators to add some logic
      var keyups = Observable.fromEvent($("#search"), "keyup") // reactivex.io
        .map(e=>e.target.value)
        .filter(text => text.length >=3)
        .debounceTime(400)
        .distinctUntilChanged()
        .flatMap(searchTerm => {//flatens out the new observable so its not an observ in an observ
          var url = "https://api.spotify.com/v1/search?type=artist&q=" + searchTerm;
          var promise = $.getJSON(url);
          return Observable.fromPromise(promise);
        });//better to put in a service -> spotifyService.searchArtists
      var subsciption = keyups.subscribe(data => console.log(data));
      // subsciption.unsubscribe();//used to cancel



// Callback way
      // var debounced = _.debounce(function(text){
      //   var url = "https://api.spotify.com/v1/search?type=artist&q=" + text;
      //   $.getJSON(url, function(artist){
      //     console.log(artist);
      //   });
      // }, 400)
      //
      // $("#search").keyup(function(e){
      //   var text = e.target.value;
      //
      //   if(text.length < 3)
      //     return;
      //
      //   debounced(text);
      //
      // });
    }
}
