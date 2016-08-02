"use strict";

angular.module("bookApp", ['ngRoute'])
.config(["$routeProvider", '$locationProvider', function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'app/home/home.html'
      })
      .when('/displayBooks', {
        templateUrl: 'app/text.html'
      })
      .otherwise({redirectTo: '/'});

}]);
