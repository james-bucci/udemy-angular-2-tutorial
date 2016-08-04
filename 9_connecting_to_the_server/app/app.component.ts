import { Component, OnInit } from 'angular2/core';
import {ControlGroup, FormBuilder} from 'angular2/common';
import { GitHubFollowersService } from './github.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/map'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [],
    styles: [`
      .avatar {
        width: 100;
        height: 100;
        border-radius: 100%;
      }
    `],
    providers: [GitHubFollowersService, HTTP_PROVIDERS]
})
export class AppComponent implements OnInit {
  isLoading = true;
  username = "valmassoi";
  user;
  followers;
  form: ControlGroup;
  constructor(
    private _gitHubFollowersService: GitHubFollowersService,
    fb: FormBuilder
  ){
    this.form = fb.group({
      search: []
    })
    var search = this.form.find('search')
    search.valueChanges
      .debounceTime(400)
      .map(str => <string>str)
      .subscribe(x=>{
        console.log("hi", x)
        this.username = x
        if (this.username.length>0)
          this.getFollowers()
      })

  }

  ngOnInit() { //call server here
    this.getFollowers()
  }
  getFollowers(){
    this._gitHubFollowersService.getFollowers(this.username)
      .subscribe(data => {
        this.isLoading = false
        this.user = data[0]
        this.followers = data[1]
      })
  }
}
