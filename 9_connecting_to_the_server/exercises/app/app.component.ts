import { Component,OnInit } from 'angular2/core';
import {PostService} from './post.service'
import {HTTP_PROVIDERS} from 'angular2/http'

@Component({
    selector: 'my-app',
    template: `
      <div *ngIf="isLoading">
        <img src="../loading.gif" width="50">
        <!-- <i class="fa fa-spinner fa-spin fa-3x"></i> -->
      </div>
    `,
    directives: [],
    providers: [PostService, HTTP_PROVIDERS]
})
export class AppComponent implements OnInit {
  isLoading = true;

  constructor(private _postService: PostService){
    this._postService.createPost({userId:2,title:"a",body:"b"})
  }
  ngOnInit() { //call server here
    this._postService.getPosts()
      .subscribe(posts => { //.then for promise way
        this.isLoading = false
        console.log(posts[0].body)}
      )
  }
}
