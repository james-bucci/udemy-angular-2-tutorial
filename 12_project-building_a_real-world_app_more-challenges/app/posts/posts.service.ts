import {Http} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import {Injectable} from '@angular/core'

@Injectable()
export class PostsService {
  private _url = 'http://jsonplaceholder.typicode.com/posts'
  constructor(private _http: Http) {
  }

  getPosts(filter?) {
    var url = this._url
    if(filter && filter.userId)
      url += "/?userId=" + filter.userId

    return this._http.get(url)
      .map(res => res.json())
  }

  getComments(id) {
    var url = this._url + "/" + id + "/comments"
    return this._http.get(url)
      .map(res => res.json())
  }

  // filterPosts(id) {
  //   var url = this._url + "/?userId=" + id
  //   return this._http.get(url)
  //     .map(res => res.json())
  // }
}
