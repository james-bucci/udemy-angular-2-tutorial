import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

import {PostsService} from './posts.service';
import {UsersService} from '../users/users.service';
import {SpinnerComponent} from '../shared/spinner.component';
import {PaginationComponent} from '../shared/pagination.component';

@Component({
  templateUrl: 'app/posts/posts.component.html',
  directives: [SpinnerComponent, PaginationComponent],
  styles: [`
    .posts li {
      cursor: default;
    }
    .posts li:hover {
      background:
      #ecf0f1;
    }
    .list-­group-­item.active,
    .list-­group-­item.active:hover,
    .list-­group-­item.active:focus {
      background-­color: #ecf0f1;
      border-­color: #ecf0f1;
      color: #2c3e50;
    }
  `],
  providers: [PostsService, UsersService, HTTP_PROVIDERS]
})

export class PostsComponent implements OnInit {
  postsLoading;
  commentsLoading;
  users = [];
  posts = [];
  pagedPosts = [];
  pageSize = 10;
  comments = [];
  activePost;

  constructor(private _postsService: PostsService, private _usersService: UsersService){}

  ngOnInit() {
    this.loadUsers()
    this.loadPosts()
  }

  private loadUsers(){ //private dont need from the outside
    this._usersService.getUsers() //should get from local?, doesnt have deleted
      .subscribe(data => {
          this.users = data;
        }
      )
  }

  private loadPosts(filter?){
    this.postsLoading = true
    this._postsService.getPosts(filter)
      .subscribe(data => {
          this.posts = data;
          this.pagedPosts = _.take(this.posts, this.pageSize)
        },
        null,
        () => { this.postsLoading = false }
      )
  }
  handlePostClick(post) {
    this.commentsLoading=true;
    this.activePost = post;
    this._postsService.getComments(post.id)
      .subscribe(com => {
          this.comments = com;
        },
        null,
        () => { this.commentsLoading = false }
    )
  }

  filterPosts(filter) {
    this.activePost = null;
    this.postsLoading = true;
    this.loadPosts(filter)
  }

  onPageChanged(page) {
    var startIndex = (page-1) * this.pageSize;
    this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
  }

}
