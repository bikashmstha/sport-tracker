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
    var ActivityVttForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (store_1_1) {
                store_1 = store_1_1;
            }],
        execute: function() {
            ActivityVttForm = (function () {
                function ActivityVttForm(_vttActivityStore, _vttTracksStore) {
                    var _this = this;
                    this._vttActivityStore = _vttActivityStore;
                    this._vttTracksStore = _vttTracksStore;
                    this._clearModel();
                    this._vttTracksStore.list().then(function (tracks) {
                        _this.tracks = tracks;
                    });
                }
                ActivityVttForm.prototype._clearModel = function () {
                    var now = new Date();
                    this.model = {
                        date: now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear(),
                        time: now.getHours() + ":" + now.getMinutes(),
                        duration: '30:00',
                        trackId: null
                    };
                };
                ActivityVttForm.prototype.save = function (form) {
                    this._vttActivityStore.save(form.value);
                    this._clearModel();
                };
                ActivityVttForm.prototype.clear = function () {
                    this._clearModel();
                };
                ActivityVttForm = __decorate([
                    core_1.Component({
                        selector: 'activity-vtt-form',
                        template: "\n        <div class=\"container-fluid\">\n            <form #vttForm=\"ngForm\">\n                <fieldset class=\"form-group\">\n                    <div class=\"row\">\n                        <div class=\"col-md-1\"><label for=\"vttDate\">Date:</label></div>\n                        <div class=\"col-md-11\"><input id=\"vttDate\" ngControl=\"date\" [(ngModel)]=\"model.date\"></div>\n                    </div>\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <div class=\"row\">\n                        <div class=\"col-md-1\"><label for=\"vttTimeStart\">Time(start):</label></div>\n                        <div class=\"col-md-11\"><input id=\"vttTimeStart\" ngControl=\"time\" [(ngModel)]=\"model.time\"></div>\n                    </div>\n                </fieldset> \n                <fieldset class=\"form-group\">\n                    <div class=\"row\">\n                        <div class=\"col-md-1\"><label for=\"vttTrack\">Track:</label></div>\n                        <div class=\"col-md-11\">\n                            <select id=\"vttTrack\" ngControl=\"trackId\" [(ngModel)]=\"model.trackId\">\n                                <option *ngFor=\"#track of tracks\" [value]=\"track.id\">{{track.name}}</option>\n                            </select>\n                        </div>\n                    </div>\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <div class=\"row\">\n                        <div class=\"col-md-1\"><label for=\"vttDuration\">Duration:</label></div>\n                        <div class=\"col-md-11\"><input id=\"vttDuration\" ngControl=\"duration\" [(ngModel)]=\"model.duration\"></div>\n                    </div>\n                </fieldset>\n                <button class=\"btn btn-primary\" (click)=\"save(vttForm)\">Save</button>\n                <button class=\"btn btn-warning\" (click)=\"clear()\">Clear</button>\n            </form>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [store_1.VttActivityStore, store_1.VttTracksStore])
                ], ActivityVttForm);
                return ActivityVttForm;
            }());
            exports_1("ActivityVttForm", ActivityVttForm);
        }
    }
});
