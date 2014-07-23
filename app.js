angular.module('angularJS', ['angularJS.services','ngRoute'])
    .config(['$routeProvider', function($routeProvider){
             $routeProvider
                .when('/', {
                  templateUrl:'partials/home.html',
                  controller: 'HomeCtrl'
                })
                .when('/service', {
                  templateUrl:'partials/service.html',
                  controller: 'ServiceCtrl'
                })
                .when('/about', {
                  templateUrl:'partials/about.html',
                  controller: 'HomeCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
         }])
    .config(function($httpProvider) {
      //Enable cross domain calls
      $httpProvider.defaults.useXDomain = true;

      //Remove the header used to identify ajax call  that would prevent CORS from working
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });