function burgerMenu() {
    const burgerBtn = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    
    burgerBtn.addEventListener('click', ()=> {
      menu.classList.toggle('active');
      burgerBtn.classList.toggle('active')
    })
  }
  burgerMenu()