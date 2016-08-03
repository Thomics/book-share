(function () {

  angular
  .module('bookApp')
  .controller('LoginController', LoginController);

  LoginController.$inject = ['$location', 'AuthService'];

  function LoginController($location, AuthService) {

    var vm = this;

    vm.onSubmit = onSubmit;


    vm.credentials = {
      email : "",
      password : ""
    };


    function onSubmit() {

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
