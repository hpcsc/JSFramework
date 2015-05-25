"use strict";

angular.module("menu").directive("mainMenu", ["$timeout", function ($timeout) {
    return {
        transclude: true,
        scope: {
            
        },
        controller: "menuController",
        templateUrl: "/ext-modules/menu/directives/mainMenu.html",
        link: function(scope, el, attr) {
            var item = el.find('.selectable-item:first');
            $timeout(function() {
                item.trigger('click');
            });
        }
    };
}]);