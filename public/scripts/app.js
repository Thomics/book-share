
(function() {

  var app = angular.module("Gapp", ['ngAnimate']);

  app.controller('mainCtrl', function($scope) {

    $scope.books = bookJSON;

  });


  var bookJSON = (function() {
    var bookSon;
    $.ajax({
      "async": false,
      //Links as if from public
      "url": "scripts/books.json",
      'success': function (data) {
        bookSon = data;
      }
    });
    shrinkDescription(bookSon, 225);
    shrinkTitle(bookSon, 20);

    return bookSon;
  })();

  console.log(bookJSON);



})();


//Checks the description of the books character length. If it is above a set length,
//the function cuts off the excess length and appends an ellipsis.
function shrinkDescription(bookArr, length) {
  for ( var i = 0; i < bookArr.length; i++ ) {
    if ( bookArr[i].description.length > length ) {
      bookArr[i].description = bookArr[i].description.slice(0,length) + '...';
    }
  }
}

//Checks the title of the books character length. If it is above a set length,
//the function cuts off the excess length and appends an ellipsis.
function shrinkTitle(bookArr, length) {

  for ( var i = 0; i < bookArr.length; i++ ) {
    if ( bookArr[i].title.length > length ) {
      bookArr[i].title = bookArr[i].title.slice(0,length) + '...';
    }
  }
}



$(document).ready(function() {

  console.log($('.book-description').text().length);

});
