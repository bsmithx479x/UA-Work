var lastScrollTop = 0;

$(window).scroll(function () {

var st = $(this).scrollTop();
        if (st < lastScrollTop){
            $('#header').fadeIn();
        } else {
          $('#header').fadeOut();
        }
        lastScrollTop = st;
  })