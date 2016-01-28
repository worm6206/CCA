angular.module('app').config(['$routeProvider', '$locationProvider', '$httpProvider', 'contextRoot',
    function($routeProvider, $locationProvider, $httpProvider, contextRoot) {
        'use strict';
        // CCA
        $routeProvider.when("/", {
            templateUrl: "angular/home/index.html",
            controller: "HomeController",
            reloadOnSearch: false
        });
        $routeProvider.when("/home/mission", {
            templateUrl: "angular/home/mission.html",
            controller: "HomeController",
            reloadOnSearch: false
        });
        $routeProvider.when("/home/history", {
            templateUrl: "angular/home/history.html",
            controller: "HomeController",
            reloadOnSearch: false
        });
        $routeProvider.when("/home/bylaws", {
            templateUrl: "angular/home/bylaws.html",
            controller: "HomeController",
            reloadOnSearch: false
        });
        $routeProvider.when("/home/rules", {
            templateUrl: "angular/home/rules.html",
            controller: "HomeController",
            reloadOnSearch: false
        });
        $routeProvider.when("/home/forms", {
            templateUrl: "angular/home/forms.html",
            controller: "HomeController",
            reloadOnSearch: false
        });
        $routeProvider.when("/contact", {
            templateUrl: "angular/home/contact.html",
            controller: "HomeController",
            reloadOnSearch: false
        });

        $routeProvider.when("/courses", {
            templateUrl: "angular/courses/index.html",
            controller: "HomeController",
            reloadOnSearch: false
        });
        $routeProvider.when("/courses/chinese", {
            templateUrl: "angular/courses/chinese.html",
            controller: "HomeController",
            reloadOnSearch: false
        });
        $routeProvider.when("/courses/extracurricular", {
            templateUrl: "angular/courses/extracurricular.html",
            controller: "HomeController",
            reloadOnSearch: false
        });
        $routeProvider.when("/courses/classroom", {
            templateUrl: "angular/courses/classroom.html",
            controller: "HomeController",
            reloadOnSearch: false
        });
        $routeProvider.when("/courses/teachers", {
            templateUrl: "angular/courses/teachers.html",
            controller: "HomeController",
            reloadOnSearch: false
        });
        $routeProvider.when("/activities", {
            templateUrl: "angular/activities/index.html",
            controller: "HomeController",
            reloadOnSearch: false
        });        
        $routeProvider.when("/activities/events", {
            templateUrl: "angular/activities/events.html",
            controller: "HomeController",
            reloadOnSearch: false
        });
        $routeProvider.when("/activities/calendar", {
            templateUrl: "angular/activities/calendar.html",
            controller: "HomeController",
            reloadOnSearch: false
        });
        $routeProvider.when("/registration", {
            templateUrl: "angular/registration/index.html",
            controller: "HomeController",
            reloadOnSearch: false
        });
        $routeProvider.when("/registration/chinese", {
            templateUrl: "angular/registration/chinese.html",
            controller: "HomeController",
            reloadOnSearch: false
        });
        $routeProvider.when("/registration/extracurricular", {
            templateUrl: "angular/registration/extracurricular.html",
            controller: "HomeController",
            reloadOnSearch: false
        });
        //
        $routeProvider.otherwise({
            redirectTo: "/"
        });
        // 
        // $locationProvider.html5Mode(true);
        // http://victorblog.com/2012/12/20/make-angularjs-http-service-behave-like-jquery-ajax/
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        // Override $http service's default transformRequest
        /**
         * The workhorse; converts an object to x-www-form-urlencoded serialization.
         * @param {Object} obj
         * @return {String}
         */
        $httpProvider.defaults.transformRequest = [
            function(data) {
                var param = function(obj) {
                    var query = '';
                    var name, value, fullSubName, subName, subValue, innerObj, i;

                    for (name in obj) {
                        value = obj[name];

                        if (value instanceof Array) {
                            for (i = 0; i < value.length; ++i) {
                                subValue = value[i];
                                fullSubName = name + '[' + i + ']';
                                innerObj = {};
                                innerObj[fullSubName] = subValue;
                                query += param(innerObj) + '&';
                            }
                        } else if (value instanceof Object) {
                            for (subName in value) {
                                subValue = value[subName];
                                fullSubName = name + '[' + subName + ']';
                                innerObj = {};
                                innerObj[fullSubName] = subValue;
                                query += param(innerObj) + '&';
                            }
                        } else if (value !== undefined && value !== null) {
                            query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
                        }
                    }
                    return query.length ? query.substr(0, query.length - 1) : query;
                };
                return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
            }
        ];
    }
]);