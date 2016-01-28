// http://stackoverflow.com/questions/10826293/restful-authentication-via-spring
// not been used in the application, placed here as a template for factory and services...
angular.module('app').factory('loginService', ['$resource', 'contextRoot',
    function($resource, contextRoot) {
        'use strict';
        return $resource(contextRoot + '/j_security_check', {}, {
            authenticate: {
                method: 'POST',
                params: {
                    'action': 'j_security_check'
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                isArray: false
            }
        });
    }
]);

// https://github.com/witoldsz/angular-http-auth
angular.module('app').factory('authenticationService', ['$rootScope',
    function($rootScope) {
        'use strict';
        return {
            /**
             * call this function to indicate that authentication was successfull and trigger a
             * retry of all deferred requests.
             * @param data an optional argument to pass on to $broadcast which may be useful for
             * example if you need to pass through details of the user that was logged in
             */
            loginConfirmed: function(data, configUpdater) {
                $rootScope.$broadcast('event:authentication-loginConfirmed', data);
            }
        };
    }
]);