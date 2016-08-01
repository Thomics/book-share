"use strict";

angular.module("bookApp", ['ngRoute'])
.config(["$routeProvider", '$locationProvider', function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      templateUrl: 'public/index.html'
    })
    .when('/display', {
      templateUrl: 'public/app/bookDisplay/bsDisplayBooks.html'
    })
    .otherwise({redirectTo: '/'});

}]);
