angular.module('angularJS')
    .controller('HomeController', function($scope, $routeParams, $location){
        $scope.congr = "Hello!";
        $scope.currentPath = $location.path();
        
        $scope.onRedirect = function(){
            $location.path('/about').replace();            
        };
    })
    .controller('ServiceController', function($scope, $http, $location, $timeout, globalService){
        $scope.data = '';
        
        $scope.pageInit = function(){
          globalService.getImages().then(onUpload, onError);
         //$http.get("http://www.reddit.com/r/pics/.json").then(onUpload, onError);
          
        }  
        
        var onUpload = function(response){
            $scope.data = response;//.data.children;
            $scope.error = '';
        };
        
        var onError = function(data){
            $scope.data = '';
            $scope.error = 'Bed request to reddit server.';
        };
        
    });