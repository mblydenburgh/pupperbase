(function(){
    var app = angular.module('pupperApp',['ngRoute']);

    app.config(function($routeProvider){
        $routeProvider
            .when('/',{
                controller:'MainController',
                templateUrl: 'app/views/dogs.html'
            })
            .when('/add/',{
                controller:'AddController',
                templateUrl: 'app/views/add.html'
            })
            .otherwise({redirectTo:'/'});
    });

}());