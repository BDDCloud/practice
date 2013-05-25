TodoController = function($scope) {
    $scope.newTodo = "Learn angular";

    $scope.todos = [{ description:"read angular ebook", id: guid() },
                    { description:"add e2e tests", id: guid() }];

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

}
