angular.module('app').controller('HomeController', ['$http', '$scope', 'contextRoot',
    function($http, $scope, contextRoot) {
        'use strict';

        function init() {
            $scope.contextRoot = contextRoot;
        }

        init();
    }
]);