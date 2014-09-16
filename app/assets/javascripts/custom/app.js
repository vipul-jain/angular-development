/**
 * Created by webashlar-ubuntu1 on 16/9/14.
 */
var myApp = angular.module('myapplication', ['ngRoute', 'ngResource']);

//Routes
myApp.config([
    '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.when('/login',{
            templateUrl: '/templates/users/login.tpl.html',
            controller: 'loginCtrl'
        });
        $routeProvider.when('/dashboard', {
            templateUrl: '/templates/users/dashboard.tpl.html',
            controller: 'dashboardCtrl'
        });
        $routeProvider.otherwise({
            redirectTo: '/login'
        });
    }
]);