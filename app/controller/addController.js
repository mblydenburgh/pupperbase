(function(){
    var AddController = function ($scope,$http,$routeParams) {
        $scope.data = {breed:String,description:String,size:String,lifespan:String};

        $scope.addDog = function(){
            $http({method:'PUT',
                   url:'https://awatoproject-4083.restdb.io/rest/dogs',
                   data: data,
                   headers:{apiKey:'5b91bfe419af4a22fafd4c52'}
        }).then(function success(response){
            console.log('$http put success');
            console.log(response);
        }, function failure(response){
            console.log('$http put failure');
            console.log(response);
        })

        } //end add


        

    
    }; //end mainController

    AddController.$inject = ['$scope','$http','$routeParams'];

    angular.module('pupperApp')
    .controller("AddController", AddController);

}());