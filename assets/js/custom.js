/* Constants
-----------------------------------------------*/
  const $window = $(window);


/* jQuery Pre loader
-----------------------------------------------*/
  $window.load(function() {
    $('.preloader').fadeOut(1000);
  });


$(document).ready(function() {

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
