﻿'use strict';
app.controller('IndexCtrl', ['$scope', '$mdSidenav', '$state', function ($scope, $mdSidenav, $state) {
    
    $scope.title = 'ANGULAR MATERIAL';

    $scope.go = function (path) {
        $state.go(path);
        
    }

    $scope.toggleLeft = function () {
        $mdSidenav('left')
              .toggle();
    }

    $scope.menuIcon = 'menu';
    $scope.menuToggle = function () {
        if ($scope.menuIcon == 'menu') {
            $mdSidenav('left')
              .open();
            $scope.menuIcon = 'arrow_back';
        }
        else {
            $mdSidenav('left')
              .close();
            $scope.menuIcon = 'menu';
        }
    }
}]);