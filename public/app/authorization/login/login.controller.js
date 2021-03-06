/**
 * Controls the users login.
 * @controller
 **/

(function () {

  angular
  .module('bookApp')
  .controller('LoginController', LoginController);

  LoginController.$inject = ['$location', '$window', '$route', '$uibModal', 'AuthService'];

  function LoginController($location, $window, $route, $uibModal, AuthService) {

    var vm = this;

    vm.checkLoggedIn = checkLoggedIn;
    vm.credentials = {
      email : '',
      password : ''
    };
    vm.isLoggedIn = AuthService.isLoggedIn();
    vm.logInPopup = logInPopup;
    vm.logUserOut = logUserOut;
    vm.logUserOn = logUserOn;
    vm.sessionToken = $window.localStorage['mean-token'];
    vm.getUsers = AuthService.getUsers;


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
          console.log(err);
        })
        .then(function(){
          $location.path('/userBooks');
          $route.reload();
        });
    }


    function logInPopup() {

      $uibModal.open({
        animation: true,
        templateUrl: 'app/authorization/login/login.view.html',
        controller: 'LoginModalController',
        controllerAs: 'modal'
      });

    }

    function checkLoggedIn() {
      if (vm.isLoggedIn ) {
        $location.path('/userBooks');
        $route.reload();
      }
    }


  }

})();
