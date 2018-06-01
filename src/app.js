const app = angular.module('App', []);

app.controller('todoController', function($scope){
	$scope.input = "";
	$scope.title = "Ma todolist en AngularJs";
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

	$scope.addTodo = function(){
		if($scope.input.length > 0) {
			console.log($scope.input);
			$scope.todos.push({
				"text": $scope.input,
				"done": false
			});
			$scope.input = "";
		} else {
			alert('Veuillez saisir au moins 1 caractère.');
		}
	}
});