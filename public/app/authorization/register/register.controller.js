(function () {

  angular
    .module('bookApp')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$location', 'authentication'];

  function RegisterController($location, authentication) {

    var vm = this;

    vm.onSubmit = onSubmit;

    vm.credentials = {
      name : "",
      email : "",
      password : ""
    };

    function onSubmit() {

      console.log('Submitting registration');
      authentication
        .register(vm.credentials)
        .error(function(err){
          alert(err);
        })
        .then(function(){
          $location.path('profile');
        });
    }

  }

})();
