/**
 * Created by webashlar-ubuntu1 on 16/9/14.
 */
//Controller
myApp.controller("loginCtrl", ['$scope', '$http', '$resource', '$location', function($scope, $http, $resource, $location) {
    $scope.user = {
        email : "",
        password : ""
    };


    $scope.fnLogin = function() {
        console.log($scope.user);
        $http({
            url: 'http://192.168.0.17/admin',
            method: "POST",
            data: $scope.user
        })
            .then(function (response) {
                // success
                console.log("success");
            },
            function (response) { // optional
                // failed
                console.log("error");
            });
    }

}]);

