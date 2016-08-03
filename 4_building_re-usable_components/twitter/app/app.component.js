System.register(['angular2/core', './tweets.service', './tweet.component'], function(exports_1, context_1) {
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
    var core_1, tweets_service_1, tweet_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweets_service_1_1) {
                tweets_service_1 = tweets_service_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(tweetsService) {
                    this.tweets = tweetsService.getTweets();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <!-- would be better to have a tweets list component -->\n    <ul>\n      <li *ngFor=\"#tweet of tweets; #i = index\">\n<!--    <tweet\n          name={{tweetMeta.name}}\n          handle={{tweetMeta.handle}}\n          tweetContent={{tweetMeta.tweetContent}}\n          likes={{tweetMeta.likes}}\n          photo={{i}}\n          (change)=\"onChange($event)\"\n        ></tweet>-->\n        <!--  you pass the whole object-->\n        <tweet [metaData]=\"tweet\" [photo]=\"i\"></tweet>\n      </li>\n    </ul>\n    ",
                        styles: ["\n      ul {\n        list-style-type: none;\n      }\n      li {\n        padding-bottom: 10px;\n      }\n    "],
                        providers: [tweets_service_1.TweetsService],
                        directives: [tweet_component_1.TweetComponent]
                    }), 
                    __metadata('design:paramtypes', [tweets_service_1.TweetsService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map