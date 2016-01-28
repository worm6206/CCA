angular.module('app').controller('NavbarController', ['$scope', '$location', '$rootScope',
      function($scope, $location, $rootScope) {
        'use strict';

        function init() {
            $scope.navOpen = false;
            $scope.homeOpen = false;
            $scope.coursesOpen = false;
            $scope.activitiesOpen = false;
            $scope.adminOpen = false;
            $scope.userOpen = false;
        }

        $scope.isActive = function(path) {
            var locationArray = $location.path().split('/');
            var pathArray = path.split('/');
            if (pathArray.length > locationArray.length) {
                return false;
            }
            for (var i = 0; i < pathArray.length; i++) {
                if (pathArray[i] !== locationArray[i]) {
                    return false;
                }
            }
            return true;
        };
        $scope.login = function() {
            $rootScope.$broadcast('event:authentication-loginRequired', $location.path());
        };
        $scope.toggleNavOpen = function() {
            $scope.navOpen = !$scope.navOpen;
        };        
        $scope.toggleHome = function() {
            $scope.homeOpen = !$scope.homeOpen;
            $scope.coursesOpen = false;
            $scope.activitiesOpen = false;            
            $scope.adminOpen = false;
            $scope.userOpen = false;
            $scope.registrationOpen = false;
        };
        $scope.toggleCourses = function() {
            $scope.homeOpen = false;
            $scope.coursesOpen = !$scope.coursesOpen;
            $scope.activitiesOpen = false;            
            $scope.adminOpen = false;
            $scope.userOpen = false;
            $scope.registrationOpen = false;
        };
        $scope.toggleActivities = function() {
            $scope.homeOpen = false;
            $scope.coursesOpen = false;
            $scope.activitiesOpen = !$scope.activitiesOpen;
            $scope.adminOpen = false;
            $scope.userOpen = false;
            $scope.registrationOpen = false;
        };
        $scope.toggleAdmin = function() {
            $scope.homeOpen = false;
            $scope.coursesOpen = false;
            $scope.activitiesOpen = false;            
            $scope.adminOpen = !$scope.adminOpen;
            $scope.userOpen = false;
            $scope.registrationOpen = false;
        };
        $scope.toggleUser = function() {
            $scope.homeOpen = false;
            $scope.coursesOpen = false;
            $scope.activitiesOpen = false;            
            $scope.adminOpen = false;
            $scope.userOpen = !$scope.userOpen;
            $scope.registrationOpen = false;
        };
        $scope.toggleRegistration = function() {
            $scope.homeOpen = false;
            $scope.coursesOpen = false;
            $scope.activitiesOpen = false;            
            $scope.adminOpen = false;
            $scope.userOpen = false;
            $scope.registrationOpen = !$scope.registrationOpen;
        };
        $scope.closeSubMenus = function() {
            $scope.homeOpen = false;
            $scope.coursesOpen = false;
            $scope.activitiesOpen = false;            
            $scope.adminOpen = false;
            $scope.userOpen = false;
            $scope.registrationOpen = false;
        };
        init();
    }
]);