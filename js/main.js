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

const buttonElems = document. querySelectorAll('.price__btn');
const modalElem = document. querySelector('.modal');

modalElem.style.cssText = `
display: flex;
visibility: hidden;
opacity: 0;
transition: opacity 300ms ease-in-out;
`;

const closeModal = event => {
  const target = event.target;
  if (target === modalElem || target.closest('.modal__close')) {
    modalElem.style.opacity = 0;

    setTimeout(() => {
      modalElem.style.visibility = 'hidden';
    }, 300)
  } 
}

const openModal = () => {
  modalElem.style.visibility = 'visible';
  modalElem.style.opacity = 1;
};

buttonElems.forEach(btn =>{
  btn.addEventListener('click', openModal);
});
modalElem.addEventListener('click', closeModal);

AOS.init({
  once: true,
  disable: 'mobile'
});
