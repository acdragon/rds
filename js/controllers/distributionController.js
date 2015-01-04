myApp.controller('distributionController',function($scope,$routeParams,$location){

	$scope.distributionID = $routeParams.distributionID;
	
	$scope.editRecord = function(distributionID){
		$location.path('/relief_distribution/edit/' + distributionID)
	}

})