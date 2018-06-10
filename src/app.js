const app = angular.module('App', []);

app.controller('todoController', function($scope){
  $scope.input = "";
  $scope.todos = [
    {
      "text": "Créer une todo",
      "done": false
    },
    {
      "text": "Tester mon application",
      "done": false
    }
  ];

  $scope.addTodo = () => {
    if($scope.input.length > 0) {
      $scope.todos.push({
        "text": $scope.input,
        "done": false
      });
      $scope.input = "";
    } else {
      alert('Veuillez saisir au moins 1 caractère.');
    }
  }
  $scope.editTodo = key => {
    $scope.todos[key].text = prompt("Changer la todo :", $scope.todos[key].text);
  }
  $scope.removeTodo = key => {
    confirm("Êtes-vous sûr de vouloir suprimer cette todo ?") ? $scope.todos.splice(key, 1) : ""
  }
});