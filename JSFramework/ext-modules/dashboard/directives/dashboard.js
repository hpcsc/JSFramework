"use strict";

angular.module("dashboard").directive("dashboard", function() {
    return {
        templateUrl: "/ext-modules/dashboard/directives/dashboard.html",
        link: function(scope, elements, attrs) {
            scope.addNewWidget = function(widget) {
                var newWidget = angular.copy(widget.settings);
                scope.widgets.push(newWidget);
            }
        }
    }
});