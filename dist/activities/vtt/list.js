System.register(["angular2/core", "./store"], function(exports_1, context_1) {
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
    var core_1, store_1;
    var ActivityVttList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (store_1_1) {
                store_1 = store_1_1;
            }],
        execute: function() {
            ActivityVttList = (function () {
                function ActivityVttList(_store) {
                    this._store = _store;
                }
                ActivityVttList.prototype.refresh = function () {
                    var _this = this;
                    this._store.list().then(function (list) {
                        _this.list = list;
                    });
                };
                ActivityVttList = __decorate([
                    core_1.Component({
                        selector: 'activity-vtt-list',
                        template: "\n        <table class=\"table table-sm table-striped table-hover\">\n            <thead class=\"thead-inverse\">\n                <tr>\n                    <td>Date</td>\n                    <td>Start at</td>\n                    <td>Track</td>\n                    <td>Duration</td>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"#i of list\">\n                    <td>{{i.date}}</td>\n                    <td>{{i.time}}</td>\n                    <td>{{i.track.name}}</td>\n                    <td>{{i.duration}}</td>\n                </tr>\n            </tbody>\n        </table>\n        <button (click)=\"refresh()\">Refresh</button>        \n    "
                    }), 
                    __metadata('design:paramtypes', [store_1.VttActivityStore])
                ], ActivityVttList);
                return ActivityVttList;
            }());
            exports_1("ActivityVttList", ActivityVttList);
        }
    }
});
