(function(){
    var mainController = function ($scope,$http) {

        $http({method:'GET', url:'https://awatoproject-4083.restdb.io/rest/dogs',headers:{
            apiKey:'5b91bfe419af4a22fafd4c52'}
        }).then(function success(response){
            console.log("$http Success");
            $scope.data = dogData;
        }, function failure(response){
            console.log("$http Failure");
            $scope.data = "$http error"
        });
        
        /*$scope.data = [
            {breed:"Akita",description:"The Akita is a large Spitz dog known for being protective and devoted to its family. Because of the Akita's protective nature it can show aggression towards other dogs and become suspicious of strangers. While a bit stubborn and independent, they are typically obedient towards their master and can be trained to behave around other dogs and strangers. Akitas require lots of exercise and prefer a home with a fenced backyard they can play in.",size:"Medium",lifespan:"10-12 Years"},
            {breed: "Basset Hound",description: "Basset Hounds are friendly, loud, lovable dogs that are good with children and are relatively low-maintenance. Basset Hounds were originally bred to hunt small game and have excellent scenting skills. Despite their short legs they can move quickly so spending extra time on training or keeping them on a leash is essential.",size: "Medium",lifespan: "10-12 Years"},
            {breed: "Pembroke Welsh Corgi",description: "Pembroke Welsh Corgis are natural herding dogs. As a result they may herd children by nipping at their heels while they play. These days they are most often seen as family dogs. Corgis are athletic and surprisingly fast. They can be a bit stubborn, have an independent streak and like to think for themselves.",size: "Medium",lifespan: "12-15 Years"}
        ];*/
    
    }; //end mainController

    mainController.$inject = ['$scope','$http'];

    angular.module('pupperApp',[])
    .controller("mainController", mainController);

}());


