//(function() {
//  'use strict';
//
//  angular
//    .module('bookApp')
//    .controller('BookModuleController', BookModuleController);
//
//  BookModuleController.$inject = ['$uibModal'];
//
//  function BookModuleController($uibModal) {
//
//    var vm = this;
//
//    vm.open = open;
//
//    function open(data) {
//
//      var modalInstance = $uibModal.open({
//        animation: true,
//        templateUrl: 'app/bookDisplay/bookModal.html',
//        controller: 'DisplayBooksController',
//        controllerAs: 'modal',
//        resolve: {
//          data: function () {
//            return data;
//          }
//        }
//      });
//      modalInstance.result
//        .then(function (selectedItem) {
//          vm.selected = selectedItem;
//        }, function () {
//          console.log('exit');
//        });
//
//    }
//
//
//  }
//
//})();
