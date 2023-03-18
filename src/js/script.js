$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:'<button type="button" class="slick-prev"><img src="../icon/left_solid.svg"></button>',
        nextArrow: '<button type="button" class="slick-prev"><img src="../icon/right_solid.svg"></button>'
      });
  });