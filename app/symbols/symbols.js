'use strict';

angular.module('myApp.symbols', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/symbols', {
    templateUrl: 'symbols/symbols.html',
    controller: 'SymbolsCtrl'
  });
}])

.controller('SymbolsCtrl', ['$scope', '$http', function($scope,$http) {
        $scope.loadSymbols = function(){
            console.log($scope.apiUrl);
        }
}]);