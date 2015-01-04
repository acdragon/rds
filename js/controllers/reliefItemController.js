myApp.controller('reliefItemController',function($scope,$routeParams,$location){

	$scope.reliefItemID = $routeParams.reliefItemID;

	$scope.editRecord = function(reliefItemID){
		$location.path('/relief_item/edit/' + reliefItemID);
	}
})