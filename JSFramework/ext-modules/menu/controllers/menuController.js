"use strict";

angular.module("menu").controller("menuController", [
    "$scope", "$rootScope",
    function ($scope, $rootScope) {

        $scope.showMenu = true;

        this.getActiveElement = function() {
            return $scope.activeElement;
        };

        this.setActiveElement = function(el) {
            $scope.activeElement = el;
        };

        this.setRoute = function(route) {
            $rootScope.$broadcast("menu-item-selected-event", {
                route: route
            });
        };

        $scope.$on("menu-show", function(evt, data) {
            $scope.showMenu = data.show;
        });
    }
]);