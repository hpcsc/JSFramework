"use strict";

angular.module("menu").directive("mainMenu", function () {
    return {
        transclude: true,
        scope: {
            
        },
        controller: "menuController",
        templateUrl: "/ext-modules/menu/directives/mainMenu.html",
        link: function(scope, el, attr) {
            
        }
    };
});