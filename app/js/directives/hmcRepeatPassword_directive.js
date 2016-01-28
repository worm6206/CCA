/* 
http://piotrbuda.eu/2013/02/angularjs-directive-for-password-matching.html
http://stackoverflow.com/questions/14012239/password-check-directive-in-angularjs
<input type="password" name="repeatPassword" id="repeatPassword" placeholder="repeat password" ng-model="user.repeatPassword" repeat-password="password" required>
*/
angular.module('app').directive("repeatPassword", function() {
    return {
        require: "ngModel",
        link: function(scope, elem, attrs, ctrl) {
            var otherInput = elem.inheritedData("$formController")[attrs.repeatPassword];

            ctrl.$parsers.push(function(value) {
                console.log(otherInput.$viewValue);
                console.log(value);
                if(value === otherInput.$viewValue) {
                    ctrl.$setValidity("repeat", true);
                    return value;
                }
                ctrl.$setValidity("repeat", false);
            });

            otherInput.$parsers.push(function(value) {
                console.log(otherInput.$viewValue);
                console.log(value);
                ctrl.$setValidity("repeat", value === ctrl.$viewValue);
                return value;
            });
        }
    };
});