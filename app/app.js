'use strict';

// Declare app level module which depends on views, and core components
var myApp = angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.symbols',
    'myApp.version'
]).
        config(['$locationProvider', '$routeProvider', '$httpProvider', function ($locationProvider, $routeProvider, $httpProvider) {
                $locationProvider.hashPrefix('!');
                //$scope.apiUrl = "http://52.179.128.13/api/v2/mysql/_table/";
                //$scope.apiKey = "b978645fd01e697102d09e006ba460397490d38f4b31a16a456a6aee797aae2d";
                $httpProvider.defaults.headers.common = {"X-DreamFactory-Api-Key": "b978645fd01e697102d09e006ba460397490d38f4b31a16a456a6aee797aae2d"};
                $routeProvider.otherwise({redirectTo: '/view1'});
            }]);

myApp.controller('myController', function myController($scope) {
    $scope.apiUrl = "http://52.179.128.13/api/v2/mysql/_table/";
    $scope.apiKey = "b978645fd01e697102d09e006ba460397490d38f4b31a16a456a6aee797aae2d";
});