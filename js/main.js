$(function(){

  $('.menu, a[href*="#"]').on('click', function() {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1500);
    return false;
  });

  $('.menu__btn, .menu a').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
});

});