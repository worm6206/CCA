angular.module('app').controller('DragDropController', ['$scope',
    function($scope, contextRoot) {
        'use strict';

        function init() {
            $scope.list1 = {
                title: 'AngularJS - Drag Me'
            };
            $scope.list2 = {};
        }
        init();
    }
]);