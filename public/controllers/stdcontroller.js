var myApp = angular.module('stdApp', []);
myApp.controller('StdCtrl', ['$scope', '$http',    function($scope, $http) {
   
    console.log("Hello World from controller");

var refresh = function() { 
$http.get('/test').success(function(response){
    console.log("i got the data i requested");
    $scope.test = response;
    $scope.student = "";
                                            
    })
};
refresh();
    
$scope.addStudent = function(){
    console.log($scope.student);
    $http.post('/test',$scope.student).
               success(function(response){
        console.log(response);
        refresh();
    });
};
   
$scope.remove = function(id){
    console.log(id);
    $http.delete('/test/'+id).success(function(response){
        refresh();
    });
}


$scope.edit = function(id){
    console.log(id);
    $http.get('/test/'+id).success(function(response){
        $scope.student = response;
    });
}

$scope.update = function(){
    console.log($scope.student._id);
    $http.put('/test/'+$scope.student._id, $scope.student).success(function(response){
        refresh();
    })
}

$scope.deselect = function(){
    $scope.student = "";
}
}]);


