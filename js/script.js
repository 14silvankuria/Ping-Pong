// Business (or back-end) logic:
for var a = 1; a <= 100 ; a++
{
  if a % 3 == 0 && a % 5 == 0
  {
    println("PingPong")
    continue
  }
  if a % 5 == 0
  {
    println("Pong")
    continue
  }
  if a % 3 == 0
  {
    println("Ping")
    continue
  }
  else
  {
    println(a)
  }
}
// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
  $("button#btn").submit(function(event) {
    event.preventDefault();
    var a = parseInt($("#Number").val());
    $("#output").text(result);
  });
});
