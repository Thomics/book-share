(function () {

  angular
  .module('bookApp')
  .controller('LoginController', LoginController);

  LoginController.$inject = ['$location', '$window', 'AuthService'];

  function LoginController($location, $window, AuthService) {

    var vm = this;

    vm.credentials = {
      email : "",
      password : ""
    };
    vm.logUserOut = logUserOut;
    vm.logUserOn = logUserOn;
    vm.sessionToken = $window.localStorage['mean-token'];


    //function logUserOut() {
    //  $window.localStorage.removeItem('mean-token');
    //}

    function logUserOut() {
      AuthService.logout();
      $location.path('/');
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
        });
    }

  }

})();
