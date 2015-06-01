"use strict";

angular.module("dashboard").directive("widgetBody", [
    "$compile", "$modal", function ($scompile, $modal) {
        return {
            templateUrl: "/ext-modules/dashboard/directives/widgetBody.html",
            link: function(scope, element, attrs) {
                var newElement = angular.element(scope.item.template);
                element.append(newElement);
                $scompile(newElement)(scope);

                scope.close = function() {
                    scope.widgets.splice(scope.widgets.indexOf(scope.item), 1);
                };

                scope.settings = function() {
                    var options = {
                        templateUrl: scope.item.widgetSettings.templateUrl,
                        controller: scope.item.widgetSettings.controller,
                        scope: scope
                    };

                    $modal.open(options);
                };

                scope.iconClicked = function() {
                    //Used by ng-click in the template so that icon clicks aren't intercepted by widgets
                };
            }
        };
    }
]);