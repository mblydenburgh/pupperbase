(function(){
    var AddController = function ($scope,$http,$routeParams) {
        $scope.form = {};
        $scope.data = {}
        $scope.addDog = function(dog){
            $scope.data = angular.copy(dog)
            $http({method:'POST',
                   url:'https://awatoproject-4083.restdb.io/rest/dogs',
                   data: $scope.data,
                   headers:{apiKey:'5b91bfe419af4a22fafd4c52'}
        }).then(function success(response){
            //console.log('$http post success');
            //console.log('data: '+$scope.dog);
            //console.log('description: '+$scope.dog.description);
            //console.log(response);
            $scope.reset();
            
        }, function failure(response){
            //console.log('$http post failure');
            //console.log(response);
        })


        } //end addDog

        $scope.reset = function(){
            $scope.dog = {};
            $scope.form.dogForm.$setPristine(true);
            console.log('reset!');
        };
        

    
    }; //end mainController

    AddController.$inject = ['$scope','$http','$routeParams'];

    angular.module('pupperApp')
    .controller("AddController", AddController);

}());