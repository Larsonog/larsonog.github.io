$(document).ready(function() {
  $('#clicker').on("click", function() {
    $.ajax({
      dataType: "json",
      url: "https://api.kanye.rest/json",
      success: function(results) {
        console.log(results["quote"]);
         $('#quote').html( results["quote"]);
       },
      });
  });

});
$('#clickbutton').on("click", function() {
  $.ajax({
    dataType: "json",
    url: "https://thronesapi.com/json",
    success: function(results) {
      console.log("click!");
      $('<img>').attr("src", results["imageUrl"]);
     },
    });
});
