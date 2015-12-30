import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import {ActivityRunning} from './activities/running';

@Component({
    selector: 'sport-tracker-app',
    template: `<activity-running></activity-running>`,
    directives: [ActivityRunning]
})
class SportTrackerApp {
}

bootstrap(SportTrackerApp);