'use strict';
myApp
    .factory('apiServices', ['$scope', '$http', function ($scope, $http) {
        return {

            getSymbols: function () {
                return $http.get($scope.apiUrl + '/ToDoItems');
            },

            getItems: function () {
                return $http.get($scope.apiUrl + '/ToDoItems');
            },

            add: function (id, task) {
                return $http.post($scope.apiUrl + '/ToDoItems', { "Id": id + 1, "Text": task, "Complete": false });
            },

            complete: function (item) {
                return $http.put($scope.apiUrl + '/ToDoItems/' + item.Id, { "Id": item.Id, "Text": item.Text, "Complete": true });
            }
        }
    }]);