$(function () {
  let counter = 0;

  $(".increase").click(function () {
    counter += 1;
    $("#value").text(counter);
    $("#value").css("color", "#12AD2B ");
  });
  $(".decrease").click(function () {
    counter -= 1;
    $("#value").text(counter);
    $("#value").css("color", "red");
  });
  $(".reset").click(function () {
    counter = 0;
    $("#value").text(counter);
    $("#value").css("color", "");
  });
});
