$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 3000) {
      $('footer').slideDown(200);
    } else {
      $('footer').slideUp(200);
    }

  });