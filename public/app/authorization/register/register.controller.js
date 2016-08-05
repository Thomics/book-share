(function () {

  angular
    .module('bookApp')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$location', 'AuthService'];

  function RegisterController($location, AuthService) {

    var vm = this;

    vm.onSubmit = onSubmit;

    vm.credentials = {
      name : "",
      email : "",
      password : ""
    };

    function onSubmit() {

      console.log('Submitting registration');
      AuthService
        .register(vm.credentials)
        .error(function(err){
          alert(err);
        })
        .then(function(){
          $location.path('/account');
          $route.reload();
        });
    }

  }

})();
