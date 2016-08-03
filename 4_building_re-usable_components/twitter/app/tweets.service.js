System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetsService;
    return {
        setters:[],
        execute: function() {
            TweetsService = (function () {
                function TweetsService() {
                }
                TweetsService.prototype.getTweets = function () {
                    return [
                        {
                            name: 'guyOne',
                            handle: 'mrGuy',
                            tweetContent: 'some 140 char string',
                            likes: 0
                        },
                        {
                            name: 'guyTwo',
                            handle: 'mrGuy2',
                            tweetContent: 'anotherone 140 char string',
                            likes: 2
                        }
                    ];
                };
                return TweetsService;
            }());
            exports_1("TweetsService", TweetsService);
        }
    }
});
//# sourceMappingURL=tweets.service.js.map