"use strict";

angular.module("app").directive("wwaDashboard", [
    function() {
        return {
            scope: {

            },
            template: "<dashboard></dashboard>",
            link: function (scope) {

                scope.title = "My first dashboard";

                scope.gridsterOpts = {
                    columns: 12,
                    margins: [20, 20],
                    outerMargin: false,
                    pushing: true,
                    floating: true,
                    swapping: false
                };

                scope.widgets = [
                    {
                        title: "First",
                        sizeX: 3,
                        sizeY: 3,
                        row: 0,
                        col: 0
                    },
                    {
                        title: "Second",
                        sizeX: 2,
                        sizeY: 4,
                        row: 0,
                        col: 5
                    }
                ];
            }
        }
    }
]);