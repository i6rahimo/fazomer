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
    
});


const allSlides = document.querySelectorAll('.swiper-slide');
allSlides.forEach(el => {
    
})

const tel = document.getElementById("phone");

var im = new Inputmask("+7-(999)-999-99-99");
im.mask(tel);