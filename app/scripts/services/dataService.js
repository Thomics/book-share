(function() {
  'use strict';

  angular
    .module('bookApp')
    .service('BookService', BookService);

  BookService.$inject = ['$http', '$q'];

  function BookService($http, $q) {

    var vm = this;

    vm.deleteBook = deleteBook;
    vm.getBook = getBook;
    vm.getUserBooks = getUserBooks;
    vm.saveBooks = saveBooks;


    function getBook(title) {
      return $http.get("https://openlibrary.org/search.json?&jscmd=details&q=" + title);
    }


    function getUserBooks() {
      return $http.get('/api/books');
    }


    function saveBooks(books) {
      var queue = [];
      books.forEach(function(book) {
        var request;
        if (!book._id) {
          request = $http.post('/api/books', book);
          queue.push(request);
        }
      });
      return queue;
    }


    function deleteBook(book) {
      if (!book._id) {
        return $q.resolve();
      }
      return $http.delete('/api/books/' + book._id).then(function() {
        console.log("I deleted the " + book.name + " book!");
      });
    }


  }

})();
