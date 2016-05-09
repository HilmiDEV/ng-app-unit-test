// The application of our unit test
var app = angular.module('testApp',[]);
//Create a service for use in the test
app.factory('Social', function($http, $q){

    return {
        twitterAPI: 'http://urls.api.twitter.com/1/urls/count.json?callback=angular.callbacks._0&url=',
        getTwitterCount: function(url){
            q = $q.defer()
            $http.jsonp(this.twitterAPI + url)
                .then(function(result){
                    q.resolve(result.data.count)
                })
            return q.promise
        }
    }

})


