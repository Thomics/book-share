/**
 * Controls the users registration.
 * @controller
 **/

(function () {

  angular
    .module('bookApp')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$location', '$route', 'AuthService'];

  function RegisterController($location, $route,  AuthService) {

    var vm = this;

    vm.onSubmit = onSubmit;

    vm.credentials = {
      name : '',
      email : '',
      password : ''
    };

    function onSubmit() {

      console.log('Submitting registration');
      AuthService
        .register(vm.credentials)
        .error(function(err){
          console.log(err);
        })
        .then(function(){
          $location.path('/account');
          $route.reload();
        });
    }

  }

})();
