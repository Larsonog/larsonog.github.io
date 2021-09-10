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
  
  $('#clickbutton').click(function() {
      $.ajax({
        dataType: "json",
        url: "https://random-d.uk/api?format=json",
        success: function(results) {
          console.log(results["url"]);
          if (results["url"].endsWith(".mp4")) {
            $('<img>').attr("src", "images/question.png");
          } else {
            $('<img>').attr("src", results["url"]);
          }
        },
        error: function(xhr,status,error) {
          console.log(error);
        }
      });
    });


});
