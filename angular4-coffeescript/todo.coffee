angular.module('TodoApp').controller 'TodoController', ($scope) ->
  s4 = ->
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)

  guid =  ->
    s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4()

  removeById = (search_term, array) ->
    index = array
      .map((e) -> e.id)
      .indexOf(search_term)    # <-- Not supported in <IE9
    if index != -1
      array.splice(index, 1)

  $scope.newTodo = "Learn Angular"

  $scope.todos = [{ description:"read angular ebook", id: guid() },
        { description: "add e2e tests", id: guid() }]

  $scope.add = ->
    $scope.todos.push( { description:$scope.newTodo, id: guid() })
    $scope.newTodo = ''

  $scope.remove = (id) ->
    removeById id, $scope.todos


