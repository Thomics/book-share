//'use strict';

$(document).ready(function() {
  $.ajax({
    type:"GET"
    , url:"https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&callback="
    , dataType:"jsonp",
    success: function(data){

      console.log(data);

    }
  });
});