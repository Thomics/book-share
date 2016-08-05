(function () {

  angular
  .module('bookApp')
  .controller('LoginController', LoginController);

  LoginController.$inject = ['$location', '$window', '$route', 'AuthService'];

  function LoginController($location, $window, $route, AuthService) {

    var vm = this;

    vm.credentials = {
      email : "",
      password : ""
    };
    vm.logUserOut = logUserOut;
    vm.logUserOn = logUserOn;
    vm.sessionToken = $window.localStorage['mean-token'];


    function logUserOut() {
      AuthService.logout();
      $location.path('/');
      $route.reload();
    }


    function logUserOn() {

      console.log('logging in');
      AuthService
        .login(vm.credentials)
        .error(function(err){
          alert(err);
        })
        .then(function(){
          $location.path('/displayBooks');
          $route.reload();
        });
    }

  }

})();
