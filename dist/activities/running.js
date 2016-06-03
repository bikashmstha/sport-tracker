System.register(['angular2/core', './paths'], function(exports_1, context_1) {
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
    var core_1, paths_1;
    var ActivityRunning;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (paths_1_1) {
                paths_1 = paths_1_1;
            }],
        execute: function() {
            ActivityRunning = (function () {
                function ActivityRunning() {
                    this.paths = paths_1.PATHS_RUNNING;
                    this._clearModel();
                }
                ActivityRunning.prototype._clearModel = function () {
                    var now = new Date();
                    this.model = {
                        date: now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate(),
                        time: now.getHours() + ":" + now.getMinutes(),
                        duration: '30:00'
                    };
                };
                ActivityRunning.prototype.save = function () {
                    console.log(this.model);
                    this._clearModel();
                };
                ActivityRunning = __decorate([
                    core_1.Component({
                        selector: 'activity-running',
                        template: "\n        <div>\n            <label>Path:\n                <select [(ngModel)]=\"model.path\">\n                    <option *ngFor=\"#path of paths\">{{path}}</option>\n                </select>\n            </label>\n            <label>Duration: <input [(ngModel)]=\"model.duration\"></label>\n            <label>Date: <input [(ngModel)]=\"model.date\" type=\"date\"></label>\n            <label>Time: <input [(ngModel)]=\"model.time\" type=\"time\"></label>\n            <br>\n            <button (click)=\"save()\">Save</button>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ActivityRunning);
                return ActivityRunning;
            }());
            exports_1("ActivityRunning", ActivityRunning);
        }
    }
});
