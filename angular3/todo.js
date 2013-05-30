TodoController = function($scope) {
    $scope.todos = [ {text:"get oil change"}, {text: "file business tax return"} ];

    $scope.addTodo = function(todo) {
        $scope.todos.push( { text: todo } );
        $scope.newTodo = "";
    };

    $scope.removeTodoAtIndex = function(index){
        $scope.todos.splice(index, 1);
    };
}