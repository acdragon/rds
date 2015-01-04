myApp.controller('reliefPackItemController',function($scope,$routeParams,$location){
	$scope.packID = $routeParams.packID;
	$scope.itemID = $routeParams.itemID;

	$scope.editRecord = function(itemID){
		$location.path('/relief_packs/' + $scope.packID + '/item/edit/' + itemID);
	}

	$scope.newPackItem = function(){

		$location.path('/relief_packs/' + $scope.packID + '/item/new');
	}


})