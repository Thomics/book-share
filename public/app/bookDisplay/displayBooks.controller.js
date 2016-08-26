(function() {
  'use strict';

  angular
    .module('bookApp')
    .controller('DisplayBooksController', DisplayBooksController);

  DisplayBooksController.$inject = ['$window', '$location', '$scope', '$uibModal', 'DataService', 'AuthService'];

  function DisplayBooksController($window, $location, $scope, $uibModal, DataService, AuthService) {

    var vm = this;

    vm.books = [];
    vm.createBookObj = createBookObj;
    vm.currentPage = $location.path();
    vm.deleteBook = deleteBook;
    vm.getAllBooks = getAllBooks;
    vm.getUserBooks = getUserBooks;
    vm.isLoggedIn = AuthService.isLoggedIn();
    vm.searchBook = searchBook;


    vm.open = open;

    activate();


    ///////////////////////////////////////////////////////////////


    function activate() {

      if ($window.localStorage['mean-token']) {
        if (vm.currentPage === '/userBooks') {
          vm.getUserBooks();
        }
        if (vm.currentPage === '/allBooks') {
          vm.getAllBooks();
        }
      }
    }

    //Using data returned from openlibrary.org, generates an object for an individual book.
    function createBookObj(data) {

      var bookObj = {
        title : data.docs[0].title_suggest,
        isbn : data.docs[0].isbn[0],
        image : 'http://covers.openlibrary.org/b/isbn/' + data.docs[0].isbn[0] + "-M.jpg",
        reviews : ['No Reviews'],
        description : "No description. Write one.",
        owner: AuthService.getUsername()
      };

      vm.books.push(bookObj);
      DataService.saveBook(bookObj);

    }


    function deleteBook(book) {

      DataService.deleteBook(book)
        .then(function() {
          vm.books.splice(book, 1);
        });

    }


    function getAllBooks() {

      DataService.getAllBooks()
        .success(function(data) {
          vm.books = data.books || [];
        })
        .error(function(err) {
          console.log(err);
        });

    }


    function getUserBooks() {

      DataService.getUserBooks()
        .success(function(data) {
          vm.books = data.books || [];
        })
        .error(function(err) {
          console.log(err);
        });

    }


    //Searches for a book by title by making a call to the open library api.
    function searchBook(book) {

      DataService.getBook(book)

        .success(function(data) {


          //open(data);
          createBookObj(data);
        })

        .error(function(err) {
          console.log(err);
        });

    }




    //function open(data) {
    //  $scope.data = data;
    //  var modalInstance = $uibModal.open({
    //    animation: true,
    //    templateUrl: 'app/bookDisplay/bookModal.html',
    //    resolve: {
    //      data: function () {
    //        return $scope.data;
    //      }
    //    },
    //    controller: function($scope, data) {
    //      $scope.data = data;
    //    }
    //  });
    //  modalInstance.result.then(function (data) {
    //    $scope.data = data;
    //  });
    //}


  }

})();



//
//// Please note that $uibModalInstance represents a modal window (instance) dependency.
//// It is not the same as the $uibModal service used above.
//
//angular.module('ui.bootstrap.demo').controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
//  var $ctrl = this;
//  $ctrl.items = items;
//  $ctrl.selected = {
//    item: $ctrl.items[0]
//  };
//
//  $ctrl.ok = function () {
//    $uibModalInstance.close($ctrl.selected.item);
//  };
//
//  $ctrl.cancel = function () {
//    $uibModalInstance.dismiss('cancel');
//  };
//});
//
//
//
//
//// Please note that the close and dismiss bindings are from $uibModalInstance.
//
//angular.module('ui.bootstrap.demo').component('modalComponent', {
//  templateUrl: 'myModalContent.html',
//  bindings: {
//    resolve: '<',
//    close: '&',
//    dismiss: '&'
//  },
//  controller: function () {
//    var $ctrl = this;
//
//    $ctrl.$onInit = function () {
//      $ctrl.items = $ctrl.resolve.items;
//      $ctrl.selected = {
//        item: $ctrl.items[0]
//      };
//    };
//
//    $ctrl.ok = function () {
//      $ctrl.close({$value: $ctrl.selected.item});
//    };
//
//    $ctrl.cancel = function () {
//      $ctrl.dismiss({$value: 'cancel'});
//    };
//  }
//});
