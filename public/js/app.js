"use strict";

angular.module("bookApp", ['ngRoute'])
.config(["$routeProvider", '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'public/index.html'
    })
    .when('/home', {
      templateUrl: 'public/templates/home.html'
    });

    $locationProvider.html5Mode(true);

}]);
