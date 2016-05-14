var count = 0;

$(document).ready(function () {
  $("#tekst").bigText({
    horizontalAlign: 'left'
  });

  $("html").keyup(function(event) {
    count += 10;
    if (count > 100) count = 0;
    $('#tekst').html(count);
  })
});
