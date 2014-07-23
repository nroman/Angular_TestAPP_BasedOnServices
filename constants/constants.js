angular.module('angularJS')
    .constant('REDDIT_WATCHER',{
        topPicsPath: 'http://www.reddit.com/r/pics/.json'
    })
    .constant('ERROR_MESSAGE', {
        bedRequestToRedditSvc: 'Bed request to reddit server.'
    });