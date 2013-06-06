var app = angular.module('Todo', [])
    .config(function($httpProvider){ delete $httpProvider.defaults.headers.common['X-Requested-With'];})
    .controller('TodoController',
        function($scope, $http) {

        $scope.newTodo = "Learn angular";

        $http({method: 'GET', url:'http://localhost:8123/'})
            .success(function(data)
            {
                $scope.todos = data;
            })
            .error(function()
            {
                console.log("failed");
            });


        $scope.add = function(){
            $scope.todos.push( { description:$scope.newTodo, id: guid() })
        }

        $scope.remove = function(id) {
            remove(id, $scope.todos);
        };

        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };

        function guid() {
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        };

        function remove(search_term, array) {
            var index = array.map(function(e) {
                return e.id;
            }).indexOf(search_term);    // <-- Not supported in <IE9
            if (index !== -1) {
                array.splice(index, 1);
            }
        };

});
