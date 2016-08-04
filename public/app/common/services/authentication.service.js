(function () {
  'use strict';

  angular
    .module('bookApp')
    .service('AuthService', AuthService);

  AuthService.$inject = ['$http', '$window'];

  function AuthService ($http, $window) {

    var vm = this;

    vm.currentUser = currentUser;
    vm.getToken = getToken;
    vm.getUsername = getUsername;
    vm.isLoggedIn = isLoggedIn;
    vm.login = login;
    vm.logout = logout;
    vm.register = register;
    vm.saveToken = saveToken;



    function saveToken(token) {
      $window.localStorage['mean-token'] = token;
    }

    function getToken() {
      return $window.localStorage['mean-token'];
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


    function currentUser() {
      if(isLoggedIn()){
        var token = getToken();
        var payload = token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);
        console.log(payload.email);
        return {
          email : payload.email,
          name : payload.name
        };
      }
    }

    function getUsername() {
      var email = currentUser().email;
      console.log(email);
      if ( email ) {
        return email
      } else {
        return '';
      }
    }


    function register(user) {
      return $http.post('/api/register', user).success(function(data){
        saveToken(data.token);
      });
    }


    function login(user) {
      return $http.post('/api/login', user).success(function(data) {
        saveToken(data.token);
      });
    }


    function logout() {
      $window.localStorage.removeItem('mean-token');
    }


  }


})();