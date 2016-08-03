System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var voteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            voteComponent = (function () {
                function voteComponent() {
                    this.change = new core_1.EventEmitter();
                }
                voteComponent.prototype.upVote = function ($event) {
                    console.log("up");
                    var newCount = this.count;
                    if (!this.isUp) {
                        newCount++;
                        this.isUp = false;
                        if (!this.isDown) {
                            this.isUp = true;
                        }
                        this.isDown = false;
                    }
                    this.change.emit({ newCount: newCount });
                };
                voteComponent.prototype.downVote = function ($event) {
                    console.log("down");
                    var newCount = this.count;
                    if (!this.isDown) {
                        newCount--;
                        this.isDown = false;
                        if (!this.isUp) {
                            this.isDown = true;
                        }
                        this.isUp = false;
                    }
                    this.change.emit({ newCount: newCount });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], voteComponent.prototype, "isUp", void 0);
                __decorate([
                    //changes private prop to input prop
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], voteComponent.prototype, "isDown", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], voteComponent.prototype, "count", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], voteComponent.prototype, "change", void 0);
                voteComponent = __decorate([
                    core_1.Component({
                        selector: 'vote',
                        templateUrl: 'app/vote.template.html',
                        styles: ["\n    i, p {\n      font-size: 50px;\n    }\n    .glyphicon {\n      color: #ccc;\n      cursor: pointer;\n    }\n    .orange {\n      color: orange;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], voteComponent);
                return voteComponent;
            }());
            exports_1("voteComponent", voteComponent);
        }
    }
});
//# sourceMappingURL=vote.component.js.map