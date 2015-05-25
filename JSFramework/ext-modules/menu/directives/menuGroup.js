"use strict";

angular.module("menu").directive("menuGroup", function () {
    return {
        require: "^mainMenu",
        transclude: true,
        scope: {
            label: "@",
            icon: "@"            
        },
        templateUrl: "/ext-modules/menu/directives/menuGroup.html",
        link: function (scope, el, attr, ctrl) {
            scope.isOpen = false;
            scope.closeMenu = function() {
                scope.isOpen = false;
            };

            scope.isVertical = function () {
                return ctrl.isVertical() || el.parents('.subitem-section').length > 0;
            };

            scope.clicked = function() {
                scope.isOpen = !scope.isOpen;

                if (el.parents('.subitem-section').length == 0) {
                    scope.setSubmenuPosition();
                }

                ctrl.setOpenMenuScope(scope);
            };

            scope.setSubmenuPosition = function() {
                var pos = el.offset();
                $('.subitem-section').css({ 'left': pos.left + 20, 'top': 36 });
            }
        }
    };
});