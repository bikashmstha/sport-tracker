import {Component} from "angular2/core";
import {VttActivityStore, VttTracksStore} from "./store";

@Component({
    selector: 'activity-vtt-form',
    template: `
        <div class="container-fluid">
            <form #vttForm="ngForm">
                <fieldset class="form-group">
                    <div class="row">
                        <div class="col-md-1"><label for="vttDate">Date:</label></div>
                        <div class="col-md-11"><input id="vttDate" ngControl="date" [(ngModel)]="model.date"></div>
                    </div>
                </fieldset>
                <fieldset class="form-group">
                    <div class="row">
                        <div class="col-md-1"><label for="vttTimeStart">Time(start):</label></div>
                        <div class="col-md-11"><input id="vttTimeStart" ngControl="time" [(ngModel)]="model.time"></div>
                    </div>
                </fieldset> 
                <fieldset class="form-group">
                    <div class="row">
                        <div class="col-md-1"><label for="vttTrack">Track:</label></div>
                        <div class="col-md-11">
                            <select id="vttTrack" ngControl="trackId" [(ngModel)]="model.trackId">
                                <option *ngFor="#track of tracks" [value]="track.id">{{track.name}}</option>
                            </select>
                        </div>
                    </div>
                </fieldset>
                <fieldset class="form-group">
                    <div class="row">
                        <div class="col-md-1"><label for="vttDuration">Duration:</label></div>
                        <div class="col-md-11"><input id="vttDuration" ngControl="duration" [(ngModel)]="model.duration"></div>
                    </div>
                </fieldset>
                <button class="btn btn-primary" (click)="save(vttForm)">Save</button>
                <button class="btn btn-warning" (click)="clear()">Clear</button>
            </form>
        </div>
    `
})
export class ActivityVttForm {
    tracks;
    model;

    constructor(private _vttActivityStore: VttActivityStore, private _vttTracksStore: VttTracksStore) {
        this._clearModel();
        this._vttTracksStore.list().then((tracks) => {
            this.tracks = tracks;
        })
    }

    private _clearModel() {
        var now = new Date();
        this.model = {
            date: `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`,
            time: `${now.getHours()}:${now.getMinutes()}`,
            duration: '30:00',
            trackId: null
        };
    }

    save(form) {
        this._vttActivityStore.save(form.value);
        this._clearModel();
    }

    clear() {
        this._clearModel();
    }
}