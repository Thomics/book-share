"use strict";

angular.module("bookApp", ['ngRoute'])
.config(["$routeProvider", '$locationProvider', function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);
  //$locationProvider.hashPrefix();

  $routeProvider
    .when('/', {
      templateUrl: 'public/index.html'
    })
    .when('/display', {
      templateUrl: 'public/app/bookDisplay/bsDisplayBooks.html'
    })
    .otherwise({redirectTo: '/'});

}]);
