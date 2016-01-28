// http://angular-ui.github.io/bootstrap/
angular.module('app').service('sharedVariablesService', ['$rootScope',
    function($rootScope) {
        'use strict';
        var variables = {};

        this.getVariable = function(key) {
            var value = variables[key];
            if(!value) {
                value = {};
                variables[key] = value;
            }
            return value;
        };
    }
]);