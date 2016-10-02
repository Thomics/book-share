/**
 * Creates a framework for the bookshare application.
 * @module
 **/

angular.module('bookApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

'use strict';


    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'app/home/home.html'
      })
      .when('/account', {
        templateUrl: 'app/account/account.html',
        controller: 'AccountController',
        controllerAs: 'account'
      })
      .when('/allBooks', {
        templateUrl: 'app/bookDisplay/allBooks.html'
      })
      .when('/login', {
        templateUrl: 'app/authorization/login/login.view.html'
        //controller: 'LoginController',
        //controllerAs: 'login'
      })
      .when('/register', {
        templateUrl: 'app/authorization/register/register.view.html',
        controller: 'RegisterController',
        controllerAs: 'register'
      })
      .when('/group', {
        templateUrl: 'app/group/bsGroup.html',
        controller: 'GroupController',
        controllerAs: 'group'
      })
      .when('/userBooks', {
        templateUrl: 'app/bookDisplay/userBooks.html',
        controller: 'DisplayBooksController',
        controllerAs: 'display'
      })
      .otherwise({redirectTo: '/'});

}]);
