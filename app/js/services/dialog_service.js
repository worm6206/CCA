// http://angular-ui.github.io/bootstrap/
angular.module('app').service('DialogService', ['$modal',
    function($modal) {
        'use strict';

        var dialogOptions = {
            backdrop: true,
            keyboard: true,
            dialogFade: true,
            templateUrl: 'angular/dialogTemplate.html',
            closeButtonText: 'Cancel',
            actionButtonText: 'OK',
            headerText: '[headerText]',
            bodyText: '[bodyText]'
        };

        this.showDialog = function(customDialogOptions) {
            //Create temp objects to work with since we're in a singleton service
            var tempDialogOptions = {};
            //Map dialog.html $scope custom properties to defaults defined in this service
            angular.extend(tempDialogOptions, dialogOptions, customDialogOptions);

            if (!tempDialogOptions.controller) {
                tempDialogOptions.controller = ['$scope', '$modalInstance',
                    function($scope, $modalInstance) {
                        $scope.dialogOptions = tempDialogOptions;
                        $scope.dialogOptions.close = function(reason) {
                            $modalInstance.dismiss(reason);
                        };
                        $scope.dialogOptions.callback = function(result) {
                            $modalInstance.close(result);
                        };
                    }
                ];
            }

            return $modal.open(tempDialogOptions);
        };

        this.showModalDialog = function(customDialogOptions) {
            if (!customDialogOptions) {
                customDialogOptions = {};
            }
            customDialogOptions.backdrop = 'static';
            return this.showDialog(customDialogOptions);
        };

        this.showConfirmDialog = function(title, message) {
            var customDialogOptions = {};
            customDialogOptions.backdrop = 'static';
            customDialogOptions.headerText = title;
            customDialogOptions.bodyText = message;
            customDialogOptions.closeButtonText = 'Cancel';
            customDialogOptions.actionButtonText = 'Ok';
            return this.showDialog(customDialogOptions);
        };

        this.showMessage = function(title, message) {
            var customDialogOptions = {};
            customDialogOptions.backdrop = 'static';
            customDialogOptions.headerText = title;
            customDialogOptions.bodyText = message;
            //customDialogOptions.closeButtonText = 'Cancel';
            customDialogOptions.actionButtonText = 'Ok';
            return this.showDialog(customDialogOptions);
        };
    }
]);