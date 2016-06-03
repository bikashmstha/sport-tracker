import {Component} from "angular2/core";
import {VttActivityStore, VttTracksStore} from './vtt/store';
import {ActivityVttForm} from "./vtt/form";
import {ActivityVttList} from "./vtt/list";

@Component({
    selector: 'activity-vtt',
    template: `
        <activity-vtt-form></activity-vtt-form>
        <hr>
        <activity-vtt-list></activity-vtt-list>
    `,
    directives: [ActivityVttForm, ActivityVttList],
    providers: [VttActivityStore, VttTracksStore]
})
export class ActivityVtt {
}