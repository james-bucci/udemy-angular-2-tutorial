System.register(['@angular/core', '@angular/http', './posts.service', '../users/users.service', '../shared/spinner.component', '../shared/pagination.component'], function(exports_1, context_1) {
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
    var core_1, http_1, posts_service_1, users_service_1, spinner_component_1, pagination_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postsService, _usersService) {
                    this._postsService = _postsService;
                    this._usersService = _usersService;
                    this.users = [];
                    this.posts = [];
                    this.pagedPosts = [];
                    this.pageSize = 10;
                    this.comments = [];
                }
                PostsComponent.prototype.ngOnInit = function () {
                    this.loadUsers();
                    this.loadPosts();
                };
                PostsComponent.prototype.loadUsers = function () {
                    var _this = this;
                    this._usersService.getUsers() //should get from local?, doesnt have deleted
                        .subscribe(function (data) {
                        _this.users = data;
                    });
                };
                PostsComponent.prototype.loadPosts = function (filter) {
                    var _this = this;
                    this.postsLoading = true;
                    this._postsService.getPosts(filter)
                        .subscribe(function (data) {
                        _this.posts = data;
                        _this.pagedPosts = _.take(_this.posts, _this.pageSize);
                    }, null, function () { _this.postsLoading = false; });
                };
                PostsComponent.prototype.handlePostClick = function (post) {
                    var _this = this;
                    this.commentsLoading = true;
                    this.activePost = post;
                    this._postsService.getComments(post.id)
                        .subscribe(function (com) {
                        _this.comments = com;
                    }, null, function () { _this.commentsLoading = false; });
                };
                PostsComponent.prototype.filterPosts = function (filter) {
                    this.activePost = null;
                    this.postsLoading = true;
                    this.loadPosts(filter);
                };
                PostsComponent.prototype.onPageChanged = function (page) {
                    var startIndex = (page - 1) * this.pageSize;
                    this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/posts/posts.component.html',
                        directives: [spinner_component_1.SpinnerComponent, pagination_component_1.PaginationComponent],
                        styles: ["\n    .posts li {\n      cursor: default;\n    }\n    .posts li:hover {\n      background:\n      #ecf0f1;\n    }\n    .list-\u00ADgroup-\u00ADitem.active,\n    .list-\u00ADgroup-\u00ADitem.active:hover,\n    .list-\u00ADgroup-\u00ADitem.active:focus {\n      background-\u00ADcolor: #ecf0f1;\n      border-\u00ADcolor: #ecf0f1;\n      color: #2c3e50;\n    }\n  "],
                        providers: [posts_service_1.PostsService, users_service_1.UsersService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, users_service_1.UsersService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map