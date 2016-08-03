(function () {

  angular
  .module('bookApp')
  .controller('LoginController', LoginController);

  LoginController.$inject = ['$location', 'authentication'];

  function LoginController($location, authentication) {

    var vm = this;

    vm.onSubmit = onSubmit;
    vm.navigationLogin = navigationLogin;


    vm.credentials = {
      email : "",
      password : ""
    };


    function navigationLogin() {
      $location.url('/login');
    }


    function onSubmit() {
      authentication
        .login(vm.credentials)
        .error(function(err){
          alert(err);
        })
        .then(function(){
          $location.path('profile');
        });
    }

  }

})();
