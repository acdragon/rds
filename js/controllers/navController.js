/*global angular */
myApp.controller('navController', [
    '$scope', '$location',
    function ($scope, $location) {
        'use strict';

        angular.isUndefinedOrNull = function(val) {
        return angular.isUndefined(val) || val === null || val === '';
        }
        
        $scope.items = [
            {
                path: '/home',
                title: 'Home'
            },
            {
                path: '/test',
                title: 'TEsst'
            },
            {
                path: '/surveys',
                title: 'Surveys'
            },
            {
                path: '',
                title: 'Distribution',
                content: [
                    {
                        path:'/dist1',
                        title: 'Dis1'
                    },
                    {
                        path:'/dist2',
                        title: 'Dis2'
                    }
                ]
            },
            {
                path: '/reports',
                title: 'Reports'
            }
        ];

       
        //console.log(JSON.stringify($scope.items[3].title));
            
        $scope.isActive = function (item) {
            if (item.path === $location.path()) {
                return true;
            }
            return false;
        };
        $scope.isDropdown = function (item) {
           if(!angular.isUndefinedOrNull(item.content)){
                //There are subitems
                return true;
           }//If
           return false;
            
        };//DropDown

    }//Function 
]);