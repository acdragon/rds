/*global angular */
myApp.controller('homeController', [
    '$scope', 'homeService',
    function ($scope, homeService) {
        'use strict';
        
        $scope.title = "RMS - Relief Management System";
        $scope.description = "Provides an insight";
    }
]);