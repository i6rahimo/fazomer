function burgerMenu() {
    const burgerBtn = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    
    burgerBtn.addEventListener('click', ()=> {
      menu.classList.toggle('active');
      burgerBtn.classList.toggle('active')
    })
  }
  burgerMenu()
  
  function inputMask()  {
    const tel = document.getElementById("phone");
    
    var im = new Inputmask("+7-(999)-999-99-99");
    im.mask(tel);  
  
  }  
  inputMask()
  