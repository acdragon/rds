/*global angular */

var myApp = angular.module('myApp', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    'use strict';
    
    $routeProvider.when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'homeController'
    }).when('/surveys', {
        templateUrl: 'partials/surveys.html',
        controller: 'surveyController'
    }).when('/relief_operations', {
        templateUrl: 'partials/reliefoperations.html',
        controller: 'reliefOperationController'
     }).when('/relief_operations/new', {
        templateUrl: 'partials/reliefoperations_new.html',
        controller: 'reliefOperationController'
    }).when('/relief_operations/edit/:childID', {
        templateUrl: 'partials/reliefoperations_new.html',
        controller: 'reliefOperationController'
    }).
    when('/assesstment/:reliefOperationID', {
        templateUrl: 'partials/assesstmentList.html',
        controller: 'assesstmentController'
     }).when('/assesstment/:reliefOperationID/new', {
        templateUrl: 'partials/assesstmentNew.html',
        controller: 'assesstmentController'
     }).when('/assesstment/:reliefOperationID/edit/:assesstmentID', {
        templateUrl: 'partials/assesstmentEdit.html',
        controller: 'assesstmentController'
    }).
    when('/surveys', {
        templateUrl: 'partials/surveyList.html',
        controller: 'surveyController'
      }).
      when('/surveys/new', {
        templateUrl: 'partials/surveyNew.html',
        controller: 'surveyController'
      }).
       when('/surveys/edit/:surveyID', {
        templateUrl: 'partials/surveyEdit.html',
        controller: 'surveyController'
    }).
    when('/surveys/questions/:surveyID', {
        templateUrl: 'partials/surveyQuestionsList.html',
        controller: 'surveyQuestionController'
      }).
      when('/surveys/questions/new/:surveyID', {
        templateUrl: 'partials/surveyQuestionsNew.html',
        controller: 'surveyQuestionController'
      }).
       when('/surveys/questions/edit/:surveyID/:questionID', {
        templateUrl: 'partials/surveyQuestionsEdit.html',
        controller: 'surveyQuestionController'
       }).
     when('/relief_distribution', {
        templateUrl: 'partials/reliefDistributionList.html',
        controller: 'distributionController'
      }).
      when('/relief_distribution/new', {
        templateUrl: 'partials/reliefDistributionNew.html',
        controller: 'distributionController'
      }).
       when('/relief_distribution/edit/:distributionID', {
        templateUrl: 'partials/reliefDistributionEdit.html',
        controller: 'distributionController'
     }).
     when('/relief_item', {
        templateUrl: 'partials/reliefItemList.html',
        controller: 'reliefItemController'
      }).
      when('/relief_item/new', {
        templateUrl: 'partials/reliefItemNew.html',
        controller: 'reliefItemController'
      }).
       when('/relief_item/edit/:reliefItemID', {
        templateUrl: 'partials/reliefItemEdit.html',
        controller: 'reliefItemController'
     }).
     when('/relief_packs', {
        templateUrl: 'partials/reliefPacksList.html',
        controller: 'reliefPacksController'
      }).
      when('/relief_packs/new', {
        templateUrl: 'partials/reliefPacksNew.html',
        controller: 'reliefPacksController'
      }).
       when('/relief_packs/edit/:reliefPacksID', {
        templateUrl: 'partials/reliefPacksEdit.html',
        controller: 'reliefPacksController'
    }).
     when('/relief_packs/:packID/item', {
        templateUrl: 'partials/reliefPackItemList.html',
        controller: 'reliefPackItemController'
      }).
      when('/relief_packs/:packID/item/new', {
        templateUrl: 'partials/reliefPackItemNew.html',
        controller: 'reliefPackItemController'
      }).
       when('/relief_packs/:packID/item/edit/:itemID', {
        templateUrl: 'partials/reliefPackItemEdit.html',
        controller: 'reliefPackItemController'
    }).when('/test', {
        templateUrl: 'partials/test.html',
        controller: 'testController'
    }).when('/test', {
        templateUrl: 'partials/test.html',
        controller: 'testController'
    }).otherwise({
        redirectTo: '/home'
    });
}]);