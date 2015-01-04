/*global angular, alert */
myApp.service('homeService', ['$rootScope', function () {
    'use strict';
    
    this.test = function () {
        alert('done');
    };
}]);