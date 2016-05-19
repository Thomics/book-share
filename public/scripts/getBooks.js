'use strict';

  //Search and get the information about the book using the isbn.
  var title;
  var isbn = "ISBN:9780553213508";


  $.ajax({
    type:"GET"
    //, url:"https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&callback="
    //, url:"https://openlibrary.org/api/books?bibkeys=ISBN:9780553213508&jscmd=details&callback="
    , url:"https://openlibrary.org/api/books?bibkeys=" + isbn + "&jscmd=details&callback="
    , dataType:"jsonp",
    success: function(data){
      console.log(data);
      title = data[isbn].details.title;
      console.log(title);
    }
  });

  // Search and get the book by the title of the book.
  //$.getJSON("https://openlibrary.org/search.json?q=count+of+monte+cristo", {}, function(data) {
  //  console.log('hi');
  //  console.log(data.docs[0].title_suggest);
  //  console.log(data.docs[0].isbn[1]);
  //  console.log(data);
  //  //console.log(data.docs);
  //});

var arny = [1,2,3,4,5,56,6];