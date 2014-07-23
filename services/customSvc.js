angular.module('angularJS.services')
    .service('customSvc', function($http){
        return {
            val: "I'm custom service!"
        }        
    });