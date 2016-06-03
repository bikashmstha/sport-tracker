System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PATHS_RUNNING, PATHS_VTT;
    return {
        setters:[],
        execute: function() {
            exports_1("PATHS_RUNNING", PATHS_RUNNING = [
                'Les Espaces -> Air France',
                'Les Espaces -> golf (petla)',
                'Dom -> Les Espaces'
            ]);
            exports_1("PATHS_VTT", PATHS_VTT = [
                { name: 'Amadeus Les Espaces -> Dom', distance: 7800 },
                { name: 'Dom -> Amadeus Les Espaces', distance: 7700, downhil: 182, uphil: 108 }
            ]);
        }
    }
});
