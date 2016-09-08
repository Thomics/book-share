/**
 * Controls the menu and it's dropdown content.
 * @controller
 **/

(function() {
  'use strict';

  angular
    .module('bookApp')
    .controller('MenuController', MenuController);

  MenuController.$inject = [];

  function MenuController() {

    var vm = this;

    vm.items = [
      'The first choice!',
      'And another choice for you.',
      'but wait! A third!'
    ];

    vm.status = {
      isopen: false
    };

    vm.toggled = function(open) {
      console.log('Dropdown is now: ', open);
    };

    vm.toggleDropdown = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      vm.status.isopen = !vm.status.isopen;
    };

    vm.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));

  }

})();
