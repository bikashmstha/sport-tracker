System.register(["angular2/core"], function(exports_1, context_1) {
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
    var uid, VttTracksStore, VttActivityStore;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            uid = 1;
            VttTracksStore = (function () {
                function VttTracksStore() {
                    this.tracks = [
                        { id: '1', name: 'Amadeus Les Espaces -> Dom', distance: 7800 },
                        { id: '2', name: 'Dom -> Amadeus Les Espaces', distance: 7700, downhil: 182, uphil: 108 }
                    ];
                }
                VttTracksStore.prototype.list = function () {
                    return Promise.resolve(this.tracks);
                };
                VttTracksStore = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], VttTracksStore);
                return VttTracksStore;
            }());
            exports_1("VttTracksStore", VttTracksStore);
            VttActivityStore = (function () {
                function VttActivityStore(_vttTracksStore) {
                    var _this = this;
                    this._vttTracksStore = _vttTracksStore;
                    this.activities = [];
                    this.tracksLookUp = {};
                    this.tracksLookUpPromise = this._vttTracksStore.list();
                    this.tracksLookUpPromise.then(function (tracks) {
                        tracks.forEach(function (track) {
                            _this.tracksLookUp[track.id] = track;
                        });
                        console.log('Lookup resolved', tracks, _this.tracksLookUp);
                    });
                }
                VttActivityStore.prototype.save = function (activityObj) {
                    activityObj.id = ++uid;
                    this.activities.push(activityObj);
                    return Promise.resolve(activityObj);
                };
                VttActivityStore.prototype.list = function () {
                    var _this = this;
                    return Promise.all([this.tracksLookUpPromise, Promise.resolve(this.activities)]).then(function (results) {
                        return results[1].map(function (activity) {
                            activity.track = _this.tracksLookUp[activity.trackId];
                            return activity;
                        });
                    });
                };
                VttActivityStore = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [VttTracksStore])
                ], VttActivityStore);
                return VttActivityStore;
            }());
            exports_1("VttActivityStore", VttActivityStore);
        }
    }
});
