window.angular.module('jst.controllers.header', [])
    .controller('HeaderController', ['$scope', 'Global',
        function ($scope, Global) {
            $scope.global = Global;
        }]);