// dependencies: none
angular.module('app').directive("clickToEdit", [
    function() {
        'use strict';

        var editorTemplate = '<div class="click-to-edit">' +
            '<div ng-hide="view.editorEnabled" style="word-wrap:break-word">' +
            '{{value}}' +
            '&nbsp;<br><button type="button" class="btn-link" ng-click="enableEditor()">Edit</button>' +
            '</div>' +
            '<div ng-show="view.editorEnabled">' +
            '<textarea msd-elastic ng-model="view.editableValue" style="width:90%" ></textarea>' +
            '&nbsp;<br><button type="button" class="btn-link" ng-click="save()">Save</button>' +
            '&nbsp;<button type="button" class="btn-link" ng-click="disableEditor()">Cancel</button>' +
            '</div>' +
            '</div>';

        return {
            restrict: "A",
            replace: true,
            template: editorTemplate,
            scope: {
                value: "=clickToEdit"
            },
            controller: ['$scope',
                function($scope) {
                    $scope.view = {
                        editableValue: $scope.value,
                        editorEnabled: false
                    };

                    $scope.$on('clickToEditModelChanged', function(event) {
                        $scope.disableEditor();
                    });

                    $scope.enableEditor = function() {
                        $scope.view.editorEnabled = true;
                        $scope.view.editableValue = $scope.value;
                    };

                    $scope.disableEditor = function() {
                        $scope.view.editorEnabled = false;
                    };

                    $scope.save = function() {
                        $scope.value = $scope.view.editableValue;
                        $scope.disableEditor();
                        $scope.$emit('clickToEditValueChanged', $scope.view.editableValue);
                    };
                }
            ]
        };
    }
]);