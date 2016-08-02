"use strict";

angular.module("bookApp", ['ngRoute'])
.config(["$routeProvider", '$locationProvider', function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        //template: '<h1>noope</h1>',
        templateUrl: 'app/bookDisplay/bsDisplayBooks.html',
        controller: function() {
          console.log("inside router");
        }
      })
      .when('/home', {
        template: '<h1>boop</h1>'
      })
      .otherwise({redirectTo: '/'});

}]);
