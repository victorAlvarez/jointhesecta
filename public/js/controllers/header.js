window.angular.module('jst.controllers.header', [])
    .controller('HeaderController', ['$scope', 'Global',
        function ($scope, Global) {
            $scope.global = Global;

            $scope.navbarEntries = [
                {
                    "title" : "Quienes Somos",
                    "link" : "whoweare"
                },
                {
                    "title" : "Nuestra Filisofia",
                    "link" : "phylosofy"
                },
                {
                    "title" : "Modulos",
                    "link" : "modules"
                },
                {
                    "title" : "Hosting",
                    "link" : "hosting"
                },
                {
                    "title" : "Contacta",
                    "link" : "contact"
                }
            ]
        }]);