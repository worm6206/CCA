/**
 * LoadingIndicatorHandler object to show a loading animation while we load the next page or wait
 * for a request to finish.
 */
angular.module('app').factory('loadingIndicatorService', ['$timeout',
    function($timeout) {
        'use strict';
        // The element we want to show/hide.
        var $element = angular.element(document.querySelector('#loading-indicator'));
        return {
            // Counters to keep track of how many requests are sent and to know
            // when to hide the loading element.
            enable_count: 0,
            disable_count: 0,
            /**
             * Fade the blocker in to block the screen.
             *
             * @return {void}
             */
            enable: function() {
                this.enable_count++;
                if ($element.length) {
                    $element.show();
                }
            },
            /**
             * Fade the blocker out to unblock the screen.
             *
             * @return {void}
             */
            disable: function() {
                this.disable_count++;
                if (this.enable_count === this.disable_count) {
                    if ($element.length) {
                        /* add artificial timeout */
                        var stop = $timeout(function() {
                            $timeout.cancel(stop);
                        }, 3000);
                        $element.hide();
                    }
                }
            }
        };
    }
]);