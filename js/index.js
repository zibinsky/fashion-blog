// MENU MOBILE ==================================
// ==============================================

$(document).ready(function () {
   $('.burger-menu').click(function (event) {
      $('.burger-menu, .header-top__list').toggleClass('active');
      // $('body').toggleClass('lock');
   });
});

// SLIDER =======================================
// ==============================================

$('.gallery-slider').slick({
   infinite: true,
   fade: true,
   prevArrow: $('.slick-prev'),
   nextArrow: $('.slick-next'),
});

// const galleryArrow = document.querySelector('.gallery-slider');
// const slideImgOne = document.querySelector('.slide-img__1');
// const slideImgTwo = document.querySelector('.slide-img__2');
// const slideImgTree = document.querySelector('.slide-img__3');
// const slideImgFour = document.querySelector('.slide-img__4');
// const slideImgFive = document.querySelector('.slide-img__5');
// const slickPrev = document.querySelector('.slick-prev');
// const slickNext = document.querySelector('.slick-next');
// const slideNumber = document.querySelector('.slider-number');

