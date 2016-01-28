// http://stackoverflow.com/questions/14965968/angularjs-browser-autofill-workaround-by-using-a-directive
angular.module('app').directive('autoFillSync', ['$interval',
    function($interval) {
        function link(scope, element, attrs, ngModel) {
            var origVal = element.val();
            var refresh = $interval(function() {
                if (!ngModel.$pristine) {
                    $interval.cancel(refresh);
                } else {
                    var newVal = element.val();
                    if (origVal !== newVal) {
                        ngModel.$setViewValue(newVal);
                        $interval.cancel(refresh);
                    }
                }
            }, 100);
        }
        return ({
            require: 'ngModel',
            link: link
        });
    }
]);