angular.module('angularJS')
    .directive('redditImage', function(){
        return {
            restrict: 'EA',
            link: function (scope, element, attrs) {
                    element.bind('click', function() {
                    alert('alert');
                    });
                 }
        };
    });