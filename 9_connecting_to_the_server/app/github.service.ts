import {Http} from 'angular2/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import {Injectable} from 'angular2/core'
import 'rxjs/add/observable/forkJoin'
// import {Follower} from './follower'

@Injectable()
export class GitHubFollowersService {
  private _url = 'https://api.github.com/users/'
  constructor(private _http: Http) {
  }

  getFollowers(username) { //:Observable<Follower[]> set type instead of any, allows autocomplete: posts[0].body

    var user = this._http.get(this._url+username) //better as methods, return 
      .map(res => res.json())

    var followers = this._http.get(this._url+username+"/followers")
      .map(res => res.json())

    return Observable.forkJoin(user, followers)
  }
}
