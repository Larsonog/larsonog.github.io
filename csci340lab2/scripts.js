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
        url: "https://randomfox.ca/floof/",
        success: function(results) {
          console.log("CLICK");
          console.log(results["image"]);
          $('#pic').attr("src", results["image"]);
        },
        error: function(xhr,status,error) {
          console.log(error);
        }
      });
    });


});
