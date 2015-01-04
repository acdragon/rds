myApp.controller('reliefPacksController',function($scope,$routeParams,$location){

	$scope.reliefPacksID = $routeParams.reliefPacksID;

	$scope.editRecord = function(reliefPacksID){
		$location.path('/relief_packs/edit/' + reliefPacksID)
	}
	$scope.addReliefItem = function(reliefPacksID){
		$location.path('/relief_packs/' + reliefPacksID + '/item');
	}

})