import {Component} from "angular2/core";
import {VttActivityStore} from "./store";

@Component({
    selector: 'activity-vtt-list',
    template: `
        <table class="table table-sm table-striped table-hover">
            <thead class="thead-inverse">
                <tr>
                    <td>Date</td>
                    <td>Start at</td>
                    <td>Track</td>
                    <td>Duration</td>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="#i of list">
                    <td>{{i.date}}</td>
                    <td>{{i.time}}</td>
                    <td>{{i.track.name}}</td>
                    <td>{{i.duration}}</td>
                </tr>
            </tbody>
        </table>
        <button (click)="refresh()">Refresh</button>        
    `
})
export class ActivityVttList {
    list: any[];

    constructor(private _store: VttActivityStore) {
    }

    refresh() {
        this._store.list().then((list) => {
            this.list = list;
        })
    }
}