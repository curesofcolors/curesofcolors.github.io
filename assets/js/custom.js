/* Constants
-----------------------------------------------*/
  const $window = $(window);


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


  /* Wow js
  -----------------------------------------------*/
    new WOW({ mobile: false }).init();
});
