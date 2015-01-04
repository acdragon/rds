myApp.controller('surveyController',function($scope,$location,$routeParams){

	$scope.surveyID = $routeParams.surveyID;

	$scope.newSurvey = function(){
		$location.path('/surveys/new');
	}


	$scope.editSurvey = function(surveyID){
		$location.path('/surveys/edit/' + surveyID);
	}

	$scope.addQuestions = function(surveyID){
		$location.path('/surveys/questions/' + surveyID);
	}

})