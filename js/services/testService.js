/*global angular, alert */
myApp.service('testService', ['$rootScope', function () {
    'use strict';
    
    this.test = function test() {
        alert('Hello from Service');
    };
}]);