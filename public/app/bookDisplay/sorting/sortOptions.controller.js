/**
 * Controls the navigation, and navigation routing.
 * @controller
 **/

(function() {
  'use strict';
  
  angular
    .module('bookApp')
    .controller('SortOptionsController', SortOptionsController);
  
  SortOptionsController.$inject = ['DataService'];
  
  function SortOptionsController(DataService) {
    
    var vm = this;


    vm.sortAuthor = sortAuthor;
    vm.sortTitle = sortTitle;


    function sortTitle(isReversed) {

      DataService.books.sort(function(a,b) {
        return a.title.charCodeAt(0) < b.title.charCodeAt(0);
      });

      if(isReversed) {
        DataService.books.reverse();
      }
    }

    function sortAuthor(isReversed) {

      DataService.books.sort(function(a,b) {
        return a.author.charCodeAt(0) < b.author.charCodeAt(0);
      });

      console.log(DataService.books);
      if(isReversed) {
        DataService.books.reverse();
      }
    }


    
  }
  
})();
