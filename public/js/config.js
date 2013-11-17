//Setting up route
window.app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/',
        {
            templateUrl: 'views/index.html'
        })
        .when('/whoweare',
        {
            templateUrl: 'views/whoweare.html'
        })
        .when('/phylosofy',
        {
            templateUrl: 'views/phylosofy.html'
        })
        .when('/modules',
        {
            templateUrl: 'views/modules.html'
        })
        .when('/contact',
        {
            templateUrl: 'views/contact.html'
        })
        .when('/hosting',
        {
            templateUrl: 'views/hosting.html'
        })
        .otherwise({redirectTo: '/'});
}]);

//Removing tomcat unspported headers
window.app.config(['$httpProvider', function ($httpProvider, Configuration) {
    //delete $httpProvider.defaults.headers.common["X-Requested-With"];
}]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider', function ($locationProvider) {
    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("!");
}]);