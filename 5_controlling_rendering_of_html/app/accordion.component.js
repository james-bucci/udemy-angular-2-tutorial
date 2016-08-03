System.register(['angular2/core', './zippy.component'], function(exports_1, context_1) {
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
    var core_1, zippy_component_1;
    var AccordionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            }],
        execute: function() {
            AccordionComponent = (function () {
                function AccordionComponent() {
                }
                AccordionComponent = __decorate([
                    core_1.Component({
                        selector: 'accordion',
                        template: "\n  <div class=\"accordion\">\n    <zippy title=\"This is the title\">\n      Here is the content\n    </zippy>\n    <zippy title=\"This is another title\">\n      Here is the content 2\n    </zippy>\n  </div>\n  ",
                        styles: ["\n    .accordion {\n      width: 70%;\n      margin: 10 auto;\n      padding: 10px;\n    }\n  "],
                        directives: [zippy_component_1.ZippyComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AccordionComponent);
                return AccordionComponent;
            }());
            exports_1("AccordionComponent", AccordionComponent);
        }
    }
});
//# sourceMappingURL=accordion.component.js.map