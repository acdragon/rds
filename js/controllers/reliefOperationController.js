myApp.controller('reliefOperationController',function($scope,$routeParams){
	$scope.title = 'Relief Operations';

	if($routeParams.childID){
		$scope.title = 'Edit Child ID - ' + $routeParams.childID;				
	}
});

