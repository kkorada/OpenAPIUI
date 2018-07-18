(function () {
    'use strict';


    var app = angular.module('OAIApp');
    app.controller('HomeController', HomeController);

    HomeController.$inject = ['$location', '$scope'];

    function HomeController($location, $scope) {
        $scope.data = [
            {
                "name": "name",
                "schema": {
                    "type": "string",
                    "minimum": 0,
                    "maximum": 20

                }
            },
            {
                "name": "integerinput",
                "schema": {
                    "type": "integer",
                    "format": "int32",
                    "minimum": 0,
                    "maximum": 20
                }
            },
            {
                "name": "integernormal",

                "type": "number"

            },
            {
                "name": "integernormal",

                "type": "string"


            },
            {
                "name": "integernormal",
                "schema": {
                    "type": "integer",
                    "format": "int64"
                }
            },
            {
                "name": "file",
                "schema": {
                    "type": "string",
                    "format": "binary"
                }
            }
        ];

    }
    app.directive("customInput", function () {
        return {
            scope: {
                parameter: "="
            },
            templateUrl: "components/home/home.tmpl.html",
            link: function (scope, element, attr) {
                if (scope.parameter.schema !== undefined && scope.parameter.schema.type !== undefined) {
                    scope.inputType = scope.parameter.schema.type;
                } else if (scope.parameter.type !== undefined) {
                    scope.inputType = scope.parameter.type;
                } else {
                    scope.inputType = "text";
                }
            }
        };
    });




})();
