/**
 * Deals with retrieving, saving and modifying books.
 * @service
 **/

(function() {
  'use strict';

  angular
    .module('bookApp')
    .service('DataService', DataService);

  DataService.$inject = ['$http', '$q', '$route', 'AuthService'];

  function DataService($http, $q, $route, AuthService) {

    var vm = this;

    vm.allBooks = [];
    vm.books = [];
    vm.deleteBook = deleteBook;
    vm.getAllBooks = getAllBooks;
    vm.getBook = getBook;
    vm.getUserBooks = getUserBooks;
    vm.reloadRoute = reloadRoute;
    vm.saveBook = saveBook;
    vm.userBooks = [];


    function getAllBooks() {
      return $http.get('/api/books');
    }

    
    function getBook(title) {
      return $http.get('https://openlibrary.org/search.json?&jscmd=details&q=' + title);
    }


    function getUserBooks() {
      return $http.get('/api/books/' + AuthService.getUsername());
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
        console.log('I deleted the ' + book.title + ' book!');
      });
    }

    function reloadRoute() {
      setTimeout(function(){
        $route.reload();
      }, 300);
    }


  }

})();
