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
