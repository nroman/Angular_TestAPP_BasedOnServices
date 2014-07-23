angular.module('angularJS.services', [])
    .service('redditSvc', function($http, REDDIT_WATCHER){        
        var getRedditObjects = function(){
            return $http.get(REDDIT_WATCHER.topPicsPath)
             .then(function(response){
                        return response.data.data.children;
                    });
        };
        
        return{
            getRedditObjects: getRedditObjects
        };
    });