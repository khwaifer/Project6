$(document).ready(function() {
  /* This animates the nav bar*/
  $("button").ready(function() {
    $("#div1").animate(
      {
        width: "100%"
      },
      2000
    );
  });
  /* Function to make box flicker*/
  $(document).ready(function() {
    $("button").click(function() {
      var div = $("#div2");
      div.animate({ opacity: "0.4" }, "slow");
      div.animate({ opacity: "0.8" }, "slow");
      div.animate({ opacity: "0.4" }, "slow");
      div.animate({ opacity: "1" }, "slow");
    });
  });

  /* Function to change color of p */
  $(document).ready(function() {
    $("button").click(function() {
      $("p").css("color", "red");
    });
  });
});