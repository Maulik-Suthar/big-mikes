$(document).ready(function () {

  /* Mobile menu */
  $('.menuIcon').click(function () {
    $(this).toggleClass('menu-close');
    $('.navigationBar').toggleClass('slideMenu');
    $('body').addClass('bodyFixed');
  });

  $('.sidebar-overlay, .closeMenu').click(function () {
    $('.menuIcon').removeClass('menu-close');
    $('.navigationBar').removeClass('slideMenu');
    $('body').removeClass('bodyFixed');
  });

  $('.menuMain li:has(ul)').prepend('<span class="arrow"></span>');

  $('.arrow').click(function () {
    $(this).siblings('ul').slideToggle('slow');
    $(this).toggleClass('minus');
  });


  $('.homeSlider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true
  });

  $('.popular_slider').slick({
    infinite: true,
    arrows: true,
    appendArrows: '.slideArrows',
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true

        }
      }
    ]
  });


  $('.testimonial_slider').slick({
    infinite: true,
    arrows: true,
    appendArrows: '.testislideArrows',
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true

        }
      }
    ]
  });

  $('.logo_slider').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.listing_slider').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.productDetilsMainSilde').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    autoplay: true,
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    asNavFor: '.productDetilsMainSilde',
    dots: false,
    focusOnSelect: true,
    verticalSwiping: true,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          vertical:false
        }
      },
    ]
  });

  $('.productBenifitSlider').slick({
    infinite: true,
    arrows: true,
    appendArrows:'.productDetailsBenifitSec .slideArrows',
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true

        }
      }
    ]
  });

 

  $('.accessoriesSilder').slick({
    infinite: true,
    arrows: true,
    appendArrows:'.productAccessoriesSec .slideArrows',
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true

        }
      }
    ]
  });




  $('.related_slider').slick({
    infinite: true,
    arrows: true,
    appendArrows:'.relatedProductsSec .slideArrows',
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true

        }
      }
    ]
  });


  $('.finance-slider-main').slick({
    infinite: true,
    arrows: true,
    appendArrows:'.relatedProductsSec .slideArrows',
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true

        }
      }
    ]
  });





  /*~~~~~~~ 02. Window Scroll  ~~~~~~~~*/
  $('.scrollTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollTop').fadeIn();
      $('.headerMain').addClass('has_sticky');
      $('body').addClass('sticky_header');
    } else {
      $('.scrollTop').fadeOut();
      $('.headerMain').removeClass('has_sticky');
      $('body').removeClass('sticky_header');
    }
  });


});


$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function() {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });


        return false;
    });
});


$('.productDetailsNavBar a').bind('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top - 100
        }, 600);


        return false;
    });


$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    if (scrollDistance >= 850) {
      $('.productDetailsNavBar').css('position', 'fixed');
    } else {
      $('.productDetailsNavBar').css('position', 'relative');
    }
  
    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance+200) {
            $('.navigation a.active').removeClass('active');
            $('.navigation a').eq(i).addClass('active');
        }
    });
}).scroll();







