angular.module('app', [
    'ngRoute', 'ngCookies', 'ngAnimate', 'ngResource', 'ngTouch', 'ui.bootstrap'
]);

//define the API's context root
angular.module('app').constant('contextRoot', getContextPath());
angular.module('app').run(['$window', '$rootScope', '$http', '$location', '$timeout', 'contextRoot',
    function($window, $rootScope, $http, $location, $timeout, contextRoot) {
        'use strict';
        function init() {
            //export $compile as global variable
            jQuery.fn.extend({
                ngAppend: function(element) {
                    return this.append($compile(element)($rootScope.$new()));
                },
                ngPrepend: function(element) {
                    return this.prepend($compile(element)($rootScope.$new()));
                }
            });
        }
        init();
    }
]);
