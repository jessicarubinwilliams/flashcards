$(document).ready(function() {
  $("p#operator").click(function() {
    $(".definitions").css("background-color", "green");
    $("#operator-definition").show();
  });
});