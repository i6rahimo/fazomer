window.addEventListener('DOMContentLoaded', (event) => {

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
    // spaceBetween: 25,
    // centeredSlides: true,
    initialSlide: 0,
    navigation: {
      nextEl: '.swiper-button-next'
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
      },
      900: {
        slidesPerView: 3,
 
      },
      // when window width is >= 480px
      1200: {
        slidesPerView: 3,
      },
      // when window width is >= 640px
      1500: {
        slidesPerView: 5,
      }
    }
    
});
try  {
  
  function inputMask()  {
    const tel = document.getElementById("phone");
    
    var im = new Inputmask("+7-(999)-999-99-99");
    im.mask(tel);  
  }
  
  inputMask()
} catch(error) {
}

const commentSwiper = new Swiper('.comment__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  wrapperClass: 'comment__swiper-wrapper',
  slideClass: 'comment__swiper-slide',
  slidesPerView: 2,
  spaceBetween: 75,
  navigation: {
    nextEl: '.comment__swiper-button-next',
    prevEl: '.comment__swiper-button-prev'
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 35,
    },
    900: {
      slidesPerView: 2,
    },
  }
});
});


function burgerMenu() {
  const burgerBtn = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  
  burgerBtn.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    burgerBtn.classList.toggle('active')
  })
}
burgerMenu()