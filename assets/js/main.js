jQuery( document ).ready(function() {
  initBurgerMenu();
  initSlickSlider();
});

function initSlickSlider() {
  jQuery('.slider').slick({
    fade: true,
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing:'ease',
    infinity:true,
    prevArrow: '<button class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          }
      ]
});
}


function initBurgerMenu() {
  jQuery('.burger').on('click', function(e){
      e.preventDefault()
      jQuery(this).toggleClass('open');
      jQuery('body').toggleClass('burger-active');
  });
}

$(document).ready(function() {

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];


});

