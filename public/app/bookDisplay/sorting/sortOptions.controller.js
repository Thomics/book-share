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


    vm.sortBooks = sortBooks;


    function sortBooks(sortBy, isReversed) {

      DataService.books.sort(function(a,b) {
        if(a[sortBy] > b[sortBy]) { return -1; }
        if(a[sortBy] < b[sortBy]) { return 1;  }
        return 0;
      });

      if(isReversed) {
        DataService.books.reverse();
      }
    }

    
  }
  
})();
