/* 
http://www.bennadel.com/blog/2449-Directive-Link-observe-And-watch-Functions-Execute-Inside-An-AngularJS-Context.htm
*/
angular.module('app').directive('hmcVisibleTrigger', ['$window',
    function($window) {
        return function($scope, element, attributes) {
            var raw = element[0];
            var win = $($window);
            var height = null;
            var triggerTimer = null;
            var triggerDelay = 2000;

            // determine if the element is above the given fold of the page.

            function isVisible(topFoldOffset, bottomFoldOffset) {
                // If the element is not visible because it 
                // is hidden, don't bother testing it.
                if (!element.is(":visible")) {
                    return (false);
                }
                // If the height has not yet been calculated, 
                // the cache it for the duration of the page.
                if (height === null) {
                    height = element.height();
                }
                // Update the dimensions of the element.
                var top = element.offset().top;
                var bottom = (top + height);
                // Return true if the element is:
                // 1. The top offset is in view.
                // 2. The bottom offset is in view.
                // 3. The element is overlapping the viewport.
                return (
                    ((top <= bottomFoldOffset) && (top >= topFoldOffset)) ||
                    ((bottom <= bottomFoldOffset) && (bottom >= topFoldOffset)) ||
                    ((top <= topFoldOffset) && (bottom >= bottomFoldOffset))
                );
            }

            function handleLoadSync() {
                $scope.$eval(attributes.hmcVisibleTrigger);
            }

            function handleLoadAsync() {
                $scope.$apply(
                    function() {
                        handleLoadSync();
                    }
                );
            }

            function loadMore() {
                // Determine the window dimensions.
                var windowHeight = win.height();
                var scrollTop = win.scrollTop();
                // Calculate the viewport offsets.
                var topFoldOffset = scrollTop;
                var bottomFoldOffset = (topFoldOffset + windowHeight);
                if (isVisible(topFoldOffset, bottomFoldOffset)) {
                    if ($scope.$$phase) {
                        handleLoadSync();
                    } else {
                        handleLoadAsync();
                    }
                    startTriggerTimer();
                } else {
                    clearTriggerTimer();
                }
            }

            function clearTriggerTimer() {
                clearTimeout(triggerTimer);
                triggerTimer = null;
            }

            function startTriggerTimer() {
                triggerTimer = setTimeout(loadMore, triggerDelay);
            }

            attributes.$observe(
                "hmcVisibleTrigger",
                function(visible) {
                    loadMore();
                }
            );

            win.bind('scroll', function() {
                loadMore();
            });

            win.bind('resize', function() {
                loadMore();
            });
            // When the scope is destroyed, we need to remove
            // the image from the render queue.
            $scope.$on(
                "$destroy",
                function() {
                    win.unbind('scroll');
                    win.unbind('resize');
                }
            );
        };
    }
]);