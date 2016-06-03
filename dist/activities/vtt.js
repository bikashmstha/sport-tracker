System.register(["angular2/core", './vtt/store', "./vtt/form", "./vtt/list"], function(exports_1, context_1) {
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
    var core_1, store_1, form_1, list_1;
    var ActivityVtt;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (store_1_1) {
                store_1 = store_1_1;
            },
            function (form_1_1) {
                form_1 = form_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            }],
        execute: function() {
            ActivityVtt = (function () {
                function ActivityVtt() {
                }
                ActivityVtt = __decorate([
                    core_1.Component({
                        selector: 'activity-vtt',
                        template: "\n        <activity-vtt-form></activity-vtt-form>\n        <hr>\n        <activity-vtt-list></activity-vtt-list>\n    ",
                        directives: [form_1.ActivityVttForm, list_1.ActivityVttList],
                        providers: [store_1.VttActivityStore, store_1.VttTracksStore]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ActivityVtt);
                return ActivityVtt;
            }());
            exports_1("ActivityVtt", ActivityVtt);
        }
    }
});
