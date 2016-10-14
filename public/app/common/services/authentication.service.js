/**
 * Deals with the authentication of the user, registration and logging in and out.
 * @service
 **/

(function () {
  'use strict';

  angular
    .module('bookApp')
    .service('AuthService', AuthService);

  AuthService.$inject = ['$http', '$window'];

  function AuthService ($http, $window) {

    var vm = this;

    vm.currentUser = currentUser;
    vm.getName = getName;
    vm.getToken = getToken;
    vm.getUsername = getUsername;
    vm.isLoggedIn = isLoggedIn;
    vm.login = login;
    vm.logout = logout;
    vm.register = register;
    vm.saveToken = saveToken;


    /****************************/
    /****************************/


    function currentUser() {
      if(isLoggedIn()){
        var token = getToken();
        var payload = token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);
        return {
          email : payload.email,
          name : payload.name
        };
      }
    }

    function getName() {
      var name = currentUser().name;
      return name ? name : '';
    }

    function getToken() {
      return $window.localStorage['mean-token'];
    }


    function getUsername() {
      var email = currentUser().email;
      return email ? email : '';
      //if ( email ) {
      //  return email;
      //} else {
      //  return '';
      //}
    }


    function isLoggedIn() {
      var token = getToken();
      var payload;

      if(token){
        payload = token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);

        return payload.exp > Date.now() / 1000;
      } else {
        return false;
      }
    }


    function login(user) {
      return $http.post('/api/login', user).success(function(data) {
        saveToken(data.token);
      });
    }


    function logout() {
      $window.localStorage.removeItem('mean-token');
    }


    function register(user) {
      return $http.post('/api/register', user).success(function(data){
        saveToken(data.token);
      });
    }


    function saveToken(token) {
      $window.localStorage['mean-token'] = token;
    }

  }


})();
