myApp.controller('assesstmentController',function($scope,$routeParams,$location){

	$scope.roID = $routeParams.reliefOperationID;
	$scope.assesstmentID = $routeParams.assesstmentID;

	$scope.newAssesstment = function(){
		$location.path('/assesstment/' + $scope.roID + '/new');
	}

	$scope.editAssesstment = function(assesstmentID){
		$scope.assesstmentID = assesstmentID;
		$location.path('/assesstment/' + $scope.roID + '/edit/' + assesstmentID);
	}

	
		
})