'use strict';

angular.module('bookApp')
  .service( 'BookService', function ( $http, $q ) {

    this.getBook = function( title ) {
        return $http.get("https://openlibrary.org/search.json?&jscmd=details&q=" + title);
    };

    this.getUserBooks = function( username ) {
      //return $http.get('../mock/user-books.json');
      return $http.get('/api/books');
    };




    this.saveBooks = function( books ) {
      var queue = [];

      //We want to loop through each book, and push a request to the queue to post the data to the server.
      books.forEach(function(book) {
        var request;


        //If our book doesn't have an id
        if (!book._id) {

          request = $http.post('/api/books', book);
        } else {

          request = $http.put('/api/books', book).then(function(result){
            book = result.data.book;
            return book;
          });
        }
        queue.push(request);
      });

      //Runs all of our requests together. Iterates through all of them and returns a promise.
      return $q.all(queue).then(function(result) {
        console.log('Saved ' + result.length + ' books');
      });

    };



    this.saveTodos = function(todos) {
      var queue = [];
      todos.forEach(function(todo) {
        var request;
        if(!todo._id) {
          request = $http.post('/api/todos', todo);
        } else {
          request = $http.put('/api/todos/' + todo._id, todo).then(function(result) {
            todo = result.data.todo;
            return todo;
          });
        }
        queue.push(request);
      });
      return $q.all(queue).then(function(results) {
        console.log("I saved " + todos.length + " todos!");
      });
    };


  });

