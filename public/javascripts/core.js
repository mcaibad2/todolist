var todolist = angular.module('todolist', []);

function todoController($scope, $http) {
    $scope.formData = {};
    // when landing on the page, get all todos and show them
    $http.get('/todos').success(function (data) {
        $scope.todos = data;
    }).error(function (data) {
        console.log('Error: ' + data);
    });
    $scope.createTodo = function () {
        $http.post('/todos', $scope.formData).success(function (data) {
            $scope.formData = {};
            $scope.todos = data;
            console.log(data);
        }).error(function (data) {
            console.log('Error: ' + data);
        });
    };
    $scope.deleteTodo = function (id) {
        $http.delete('/todos/' + id).success(function (data) {
            $scope.todos = data;
        }).error(function (data) {
            console.log('Error: ' + data);
        });
    };
}