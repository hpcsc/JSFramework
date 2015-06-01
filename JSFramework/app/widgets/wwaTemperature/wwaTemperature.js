"use strict";

angular.module("app").directive("wwaTemperature", [
    "dataService",
    function(dataService) {
        return {
            templateUrl: "/app/widgets/wwaTemperature/wwaTemperature.html",
            link: function (scope, el, attrs) {
                scope.selectedLocation = null;

                dataService.getLocation(scope.item.widgetSettings.id)
                    .then(function(data) {
                        scope.selectedLocation = data;
                    });
            }
        }
    }
]);