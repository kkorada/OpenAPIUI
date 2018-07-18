(function () {
    'use strict';

    angular
        .module('OAIApp', ['ngRoute'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'components/home/home.html',
                controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/' });
    }

    run.$inject = ['$rootScope', '$location'];
    function run($rootScope, $location) {

    }
})();