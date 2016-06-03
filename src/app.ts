import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import {ActivityVtt} from './activities/vtt';

@Component({
    selector: 'sport-tracker-app',
    template: `<activity-vtt></activity-vtt>`,
    directives: [ActivityVtt]
})
class SportTrackerApp {
}

bootstrap(SportTrackerApp);