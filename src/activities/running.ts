import {Component} from 'angular2/core';
import {PATHS} from './paths';

@Component({
    selector: 'activity-running',
    template: `
        <div>
            <label>Path:
                <select [(ngModel)]="model.path">
                    <option *ngFor="#path of paths">{{path}}</option>
                </select>
            </label>
            <label>Duration: <input [(ngModel)]="model.duration"></label>
            <label>Date: <input [(ngModel)]="model.date" type="date"></label>
            <label>Time: <input [(ngModel)]="model.time" type="time"></label>
            <br>
            <button (click)="save()">Save</button>
        </div>
    `
})
export class ActivityRunning {
    model;
    paths = PATHS;

    constructor() {
        this._clearModel();
    }

    private _clearModel() {
        var now = new Date();
        this.model = {
            date: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`,
            time: `${now.getHours()}:${now.getMinutes()}`,
            duration: '30:00'
        };
    }

    save() {
        console.log(this.model);
        this._clearModel();
    }
}

//TODO: infer time from now - duration
//TODO: form validation: path is required, data/time/duration in the required format
//TODO: save it somewhere
//TODO: better bootstrap styling