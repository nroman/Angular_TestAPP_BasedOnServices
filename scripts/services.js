angular.module('angularJS.services', [])
    .service('globalService', function($http){        
        var getRedditImages = function(){
            return $http.get("http://www.reddit.com/r/pics/.json")
             .then(function(response){
                        return response.data.data.children;
                    });
        };
        
        return{
            getImages: getRedditImages
        };
    });