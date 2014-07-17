angular.module('angularJS', ['angularJS.services','ngRoute'])
    .config(['$routeProvider', function($routeProvider, globalService){
             $routeProvider
                .when('/', {
                  templateUrl:'views/home.html',
                  controller: 'HomeController'
                })
                .when('/service', {
                  templateUrl:'views/service.html',
                  controller: 'ServiceController'
                })
                .when('/about', {
                  templateUrl:'views/about.html',
                  controller: 'HomeController'
                })
                .otherwise({
                    redirectTo: '/'
                });
         }]);