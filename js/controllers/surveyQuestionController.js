myApp.controller('surveyQuestionController',function($scope,$routeParams,$location){
	$scope.surveyID = $routeParams.surveyID;
	$scope.questionID = $routeParams.questionID;

	$scope.newQuestion = function(){
		$location.path('surveys/questions/new/' + $scope.surveyID);
	}
	$scope.editQuestion = function(questionID){
		$location.path('surveys/questions/edit/' + $scope.surveyID + '/' + questionID);
	}
})