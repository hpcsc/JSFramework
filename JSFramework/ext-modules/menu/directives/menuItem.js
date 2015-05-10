"use strict";

angular.module("menu").directive("menuItem", function () {
    return {
        require: "^mainMenu",
        scope: {
            label: "@",
            icon: "@",
            route: "@"
        },
        templateUrl: "/ext-modules/menu/directives/menuItem.html",
        link: function (scope, el, attr, ctrl) {

            scope.isActive = function() {
                return el === ctrl.getActiveElement();
            };

            el.on("click", function(evt) {
                evt.stopPropagation();
                evt.preventDefault();

                scope.$apply(function() {
                    ctrl.setActiveElement(el);
                    ctrl.setRoute(scope.route);
                });
            });
        }
    };
});