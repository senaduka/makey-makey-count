var count = 0;
var pressing = false;

$(document).ready(function() {
  $("#tekst").bigText({
    horizontalAlign: 'left'
  });

  $('#tekst').html(count);

  $("html").keyup(function(event) {
    pressing = true;
    setTimeout(function() {
      if (pressing) {
        count += 10;
        if (count > 100) count = 0;
        $('#tekst').html(count);
        pressing = false;
      }
    }, 500);
  })
});
