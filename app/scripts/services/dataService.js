(function() {
  'use strict';

  angular
    .module('bookApp')
    .service('DataService', DataService);

  DataService.$inject = ['$http', '$q'];

  function DataService($http, $q) {

    var vm = this;

    vm.deleteBook = deleteBook;
    vm.getBook = getBook;
    vm.getUserBooks = getUserBooks;
    vm.saveBook = saveBook;


    function getBook(title) {
      return $http.get("https://openlibrary.org/search.json?&jscmd=details&q=" + title);
    }


    function getUserBooks() {
      return $http.get('/api/books');
    }


    function saveBook(book) {
      if (!book._id) {
        console.log('save successful');
        $http.post('/api/books', book);
      }
    }


    function deleteBook(book) {
      console.log(book.title);
      if (!book._id) {
        return $q.resolve();
      }
      return $http.delete('/api/books/' + book._id).then(function() {
        console.log("I deleted the " + book.title + " book!");
      });
    }


  }

})();
