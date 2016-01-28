//tests ..
angular.module('app').controller('DialogController', ['$scope', '$http', '$routeParams', '$location', 'DialogService',
    function($scope, $http, $routeParams, $location, DialogService) {
        'use strict';       
        $scope.showDialog = function() {
            var dialogOptions = {
                closeButtonText: 'Close',
                actionButtonText: 'OK',
                headerText: 'showDialog',
                bodyText: 'DialogService.showDialog'
            };
            DialogService.showDialog(dialogOptions);
        };

        $scope.showModalDialog = function() {
            var dialogOptions = {
                //closeButtonText: 'Close',
                actionButtonText: 'OK',
                headerText: 'Show Modal Dialog',
                bodyText: 'DialogService.showModalDialog',
                callback: function() {
                    console.log('callback');
                }
            };
            DialogService.showModalDialog(dialogOptions);
        };

        $scope.showConfirmDialog = function() {
            DialogService.showConfirmDialog('[title]', '[message]');
        };

        $scope.showMessage = function() {
            var title = $location.path();
            var message = $location.absUrl();
            DialogService.showMessage('My Title', 'My Message');
        };
    }
]);