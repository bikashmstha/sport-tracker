import {Injectable} from "angular2/core";

var uid = 1;

@Injectable()
export class VttTracksStore {
    tracks = [
        {id: '1', name: 'Amadeus Les Espaces -> Dom', distance: 7800},
        {id: '2', name: 'Dom -> Amadeus Les Espaces', distance: 7700, downhil: 182, uphil: 108}
    ];

    list() {
        return Promise.resolve(this.tracks);
    }
}

@Injectable()
export class VttActivityStore {
    activities = [];
    tracksLookUpPromise: Promise<any[]>;
    tracksLookUp = {};

    constructor(private _vttTracksStore: VttTracksStore) {
        this.tracksLookUpPromise = this._vttTracksStore.list();
        this.tracksLookUpPromise.then((tracks) => {
            tracks.forEach((track) => {
                this.tracksLookUp[track.id] = track;
            });
            console.log('Lookup resolved', tracks, this.tracksLookUp);
        });
    }

    save(activityObj) {
        //TODO: do a deep copy of the activity object
        activityObj.id = ++uid;
        this.activities.push(activityObj);
        return Promise.resolve(activityObj);
    }

    list() {
        return Promise.all([this.tracksLookUpPromise, Promise.resolve(this.activities)]).then((results) => {
           return results[1].map((activity) => {
               activity.track = this.tracksLookUp[activity.trackId];
               return activity;
           })
        });
    }
}
