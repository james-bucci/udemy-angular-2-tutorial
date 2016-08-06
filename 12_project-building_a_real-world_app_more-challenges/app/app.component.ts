import { Component } from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';

import {AddUserComponent} from './users/adduser.component'
import {HomeComponent} from './home.component';
import {PostsComponent} from './posts/posts.component';
import {UsersComponent} from './users/users.component';
import {NotFoundComponent} from './notfound.component'

@RouteConfig([
  { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
  { path: '/posts', name: 'Posts', component: PostsComponent },
  { path: '/users', name: 'Users', component: UsersComponent },
  { path: '/users/new', name: 'AddUser', component: AddUserComponent },
  { path: '/users/:id', name: 'User', component: AddUserComponent },
  { path: '/404', name:'404', component: NotFoundComponent },
  { path: '/*other', name: 'Other', redirectTo: ['Home'] }
])
@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  constructor(private _router: Router){
  }
  isCurrentRoute(route){//get current route
    var instruction = this._router.generate(route);
    return this._router.isRouteActive(instruction);
  }
}
