


$(document).ready(function() {
    AOS.init();
    $(document).on("scroll", onScroll);

    $(document).scroll(function() {
      var scrollPos = $(document).scrollTop();
      if (scrollPos > $('.hero').height()) {
        $('.sideNav').fadeIn(500);
      } else {
        $('.sideNav').fadeOut(200);
      }
    });


    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    function onScroll(event){
    var scrollPos = $(document).scrollTop();

    $('.sideNav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          console.log(currLink)
            $('.sideNav ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
    }


});
