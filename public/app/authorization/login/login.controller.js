(function () {

  angular
  .module('bookApp')
  .controller('LoginController', LoginController);

  LoginController.$inject = ['$location', 'authentication'];

  function LoginController($location, authentication) {

    var vm = this;

    vm.onSubmit = onSubmit;


    vm.credentials = {
      email : "",
      password : ""
    };


    function onSubmit() {

      console.log('logging in');
      authentication
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
