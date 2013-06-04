var app = angular.module('Todo', ['ngResource'])
    .config(function($httpProvider){ delete $httpProvider.defaults.headers.common['X-Requested-With'];})
    .controller('TodoController',
        function($scope, $resource) {
        $scope.resource = $resource('http://localhost\\:8123/',
            {},
            {
            'get': {
                method: 'GET',
                isArray: true //since your list property is an array
            }}
        );


        $scope.newTodo = "Learn angular";



        $scope.todos = $scope.resource.get();

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
