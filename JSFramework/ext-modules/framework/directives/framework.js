"use strict";

angular.module("framework").directive("framework", function() {
    return {
        transclude: false,
        scope: {
            title: "@",
            subtitle: "@",
            iconFile: "@"
        },
        controller: "frameworkController",
        templateUrl: "/ext-modules/framework/directives/framework.html"
    };
});