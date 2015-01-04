/*global angular */
myApp.controller('testController', [
    '$scope', 'testService',
    function ($scope, testService) {
        'use strict';
        
        $scope.test = function () {
            testService.test();
        };
    }
]);