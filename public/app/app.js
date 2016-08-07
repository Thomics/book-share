"use strict";

angular.module("bookApp", ['ngRoute'])
.config(["$routeProvider", '$locationProvider', function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'app/home/home.html'
      })
      .when('/userBooks', {
        templateUrl: 'app/bookDisplay/userBooks.html'
        //Controller is declared in the directive.
      })
      .when('/allBooks', {
        templateUrl: 'app/bookDisplay/allBooks.html'
      })
      .when('/login', {
        templateUrl: 'app/authorization/login/login.view.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .when('/register', {
        templateUrl: 'app/authorization/register/register.view.html',
        controller: 'RegisterController',
        controllerAs: 'register'
      })
      .otherwise({redirectTo: '/'});

}]);
