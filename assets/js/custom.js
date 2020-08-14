/* Constants
-----------------------------------------------*/
  const $window = $(window);
  const $goTop = $('.go-top');


/* Debounce event callbacks like smoothscroll
-----------------------------------------------*/
  const debounce = (func, wait, immediate) => {
    var timeout;

    return function executedFunction() {
      var context = this;
      var args = arguments;

      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;

      clearTimeout(timeout);

      timeout = setTimeout(later, wait);

      if (callNow) func.apply(context, args);
    };
  };


/* jQuery Pre loader
-----------------------------------------------*/
  $window.load(function() {
    $('.preloader').fadeOut(1000);
  });


$(document).ready(function() {

  /* Hide mobile menu after clicking on a link
  -----------------------------------------------*/
    $('.navbar-collapse a').click(function() {
      $('.navbar-collapse').collapse('hide');
    });


  /* Smoothscroll js
  -----------------------------------------------*/
    $(function() {
      $('a.smoothScroll').bind('click', function(event) {
        event.preventDefault();

        var $anchor = $(this);

        $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top - 47
        }, 1000);
      });
    });


  /* Home Slideshow Vegas
  -----------------------------------------------*/
    $(function() {
      $('body').vegas({
        slides: [{ src: 'assets/images/drawing-bg.png' }],
        timer: false,
        transition: [ 'zoomIn', ],
        animation: ['kenburns']
      });
    });


  /* Back to Top
  -----------------------------------------------*/
    const toggleGoTop = () => {
      $(this).scrollTop() > 200 ? $goTop.fadeIn(200) : $goTop.fadeOut(200);
    };

    $window.scroll(debounce(toggleGoTop, 200));

    // Animate the scroll to top
    $goTop.click(function(event) {
      event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
    });


  /* Wow js
  -----------------------------------------------*/
    new WOW({ mobile: false }).init();
});
