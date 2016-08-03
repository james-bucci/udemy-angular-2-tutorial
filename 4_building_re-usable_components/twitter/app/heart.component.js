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
    var HeartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeartComponent = (function () {
                function HeartComponent() {
                    this.change = new core_1.EventEmitter();
                }
                HeartComponent.prototype.onClick = function ($event) {
                    console.log("click");
                    var newCount = this.count;
                    this.isFav ? newCount-- : newCount++;
                    this.isFav = !this.isFav;
                    this.change.emit({ newCount: newCount });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], HeartComponent.prototype, "isFav", void 0);
                __decorate([
                    //changes private prop to input prop
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], HeartComponent.prototype, "count", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], HeartComponent.prototype, "change", void 0);
                HeartComponent = __decorate([
                    core_1.Component({
                        selector: 'heart',
                        template: "\n  <div>\n  <i\n    class=\"glyphicon glyphicon-heart\"\n    [class.pink]=\"isFav\"\n    (click)=\"onClick($event)\"\n  ></i>\n  <p>{{ count }}</p>\n  </div>\n  ",
                        styles: ["\n    i, p {\n      font-size: 12px;\n      display: inline;\n    }\n    div {\n      display: block;\n    }\n    .glyphicon-heart {\n      color: #ccc;\n      cursor: pointer;\n    }\n    .pink {\n      color: deeppink;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeartComponent);
                return HeartComponent;
            }());
            exports_1("HeartComponent", HeartComponent);
        }
    }
});
//# sourceMappingURL=heart.component.js.map