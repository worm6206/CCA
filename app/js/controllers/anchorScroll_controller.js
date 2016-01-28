angular.module('app').controller('AnchorScrollController', ['$anchorScroll', '$location', '$scope',
    function ($anchorScroll, $location, $scope) {
        'use strict';

        function init() {
            $anchorScroll.yOffset = 10;
        }

        $scope.gotoAnchor = function(anchor) {
            if ($location.hash() !== anchor) {
                $location.hash(anchor);
            } 
            else {
                // call $anchorScroll() explicitly, since $location.hash hasn't changed
                $anchorScroll();
          }
        };
        init();
    }
]);