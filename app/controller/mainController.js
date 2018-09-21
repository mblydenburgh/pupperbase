(function(){
    var MainController = function ($scope,$http,$routeParams) {

        $http({method:'GET', url:'https://awatoproject-4083.restdb.io/rest/dogs',headers:{
            apiKey:'5b91bfe419af4a22fafd4c52'}
        }).then(function success(response){
            console.log("$http Success");
            console.log(response);
            $scope.data = response.data;
        }, function failure(response){
            console.log("$http Failure");
            $scope.data = "$http error"
        });

        $scope.removeDog = function(dog){
            $scope.dog = angular.copy(dog);
            console.log(dog._id);
        }
    
    }; //end mainController

    MainController.$inject = ['$scope','$http','$routeParams'];

    angular.module('pupperApp')
    .controller("MainController", MainController);

}());


