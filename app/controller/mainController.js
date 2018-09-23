(function () {
    var MainController = function ($scope, $http, $routeParams) {

        $http({
            method: 'GET', url: 'https://awatoproject-4083.restdb.io/rest/dogs', headers: {
                apiKey: '5b91bfe419af4a22fafd4c52'
            }
        }).then(function success(response) {
            console.log("$http Success");
            console.log(response);
            $scope.data = response.data;
        }, function failure(response) {
            console.log("$http Failure");
            $scope.data = "$http error"
        });


        // remove entry based on id on clicking trashcan
        $scope.removeDog = function (dog) {
            $scope.dog = angular.copy(dog);
            let del = confirm('Delete entry for ' + $scope.dog.breed + '?');
            if (del === true) {
                $http({
                    method: 'DELETE', url: 'https://awatoproject-4083.restdb.io/rest/dogs' + '/' + $scope.dog._id, headers: {
                        apiKey: '5b91bfe419af4a22fafd4c52'
                    }
                })
                // wait for http delete to finish, then reload page to refresh list
                .then(function(){
                    window.location.reload();
                });
    
            } else {
                console.log('delete failed')
            }

        }

    }; //end mainController

    MainController.$inject = ['$scope', '$http', '$routeParams'];

    angular.module('pupperApp')
        .controller("MainController", MainController);

}());


