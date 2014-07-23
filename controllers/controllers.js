angular.module('angularJS')
    .controller('HomeCtrl', function($scope, $routeParams, $location, $http){
        $scope.congr = "Hello!";
        $scope.currentPath = $location.path();
        
        $scope.onRedirect = function(){
            putNewReddit();
           // $location.path('/about').replace();
            
        };
        
        //var putNewReddit = function(){
            
        //   $http({
        //            method: "POST",
        //            url: "http://localhost:61533/api/userOperations",
        //            data: "ds",                        
        //            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}//x-www-form-urlencoded'}
        //            })
        //        .success(function(){
        //            alert('Success!');
        //        })
        //        .error(function(){
        //            $scope.error = "Error while connecting to the server."
        //        });
        //};
       
        
    })
    .controller('ServiceCtrl', function($scope, $http, $location, $timeout, redditSvc, ERROR_MESSAGE){
        $scope.data = '';
        
        $scope.pageInit = function(){
          redditSvc.getRedditObjects().then(onUpload, onError);          
        };  
        
        var onUpload = function(response){
            $scope.data = response;//.data.children;
            $scope.error = '';
        };
        
        var onError = function(data){
            $scope.data = '';
            $scope.error = ERROR_MESSAGE.bedRequestToRedditSvc;
        };
    })
    .controller('CustomCtrl', function($scope, customSvc){
        $scope.val = customSvc.val;
        
    });
    