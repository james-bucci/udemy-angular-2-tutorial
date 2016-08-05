import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router'
import {HTTP_PROVIDERS} from 'angular2/http';

import {UsersService} from './users.service';

@Component({
  templateUrl: '/app/users.component.html',
  styles: [`
    #add-user {
      margin-bottom: 10px;
    }
    .glyphicon-remove {
      cursor: pointer;
      color: red;
    }
  `],
  directives: [ROUTER_DIRECTIVES],
  providers: [UsersService, HTTP_PROVIDERS]
})

export class UsersComponent implements OnInit {
  isLoading = true;
  users;
  constructor(private _usersService: UsersService){}

  ngOnInit() {
    this.getUsers()
  }
  getUsers() {
    this._usersService.getUsers()
      .subscribe(data => {
        this.isLoading = false;
        this.users = data;
        console.log(data);
      })
  }
  deleteClick(user) {
    var index = this.users.indexOf(user)
    this.users.splice(index, 1)
    if(this.confirmation(user.name)) {
      this._usersService.deleteUser(user.id)
        .subscribe(data => console.log("deleted"),
        response => {
          if (response.status == 404) {
              //warn user, undo delete [optimistic update]
              this.users.splice(index, 0, user);
              alert("Server error, could not delete " + user.name + ".\nPlease try again")
          }
        })
    }
  }

  confirmation(name) {
    return confirm("Are you sure you want to delete " + name + "?")
    //what happens if user prevents these boxes???
  }
}
