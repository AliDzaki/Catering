var hamburger = document.querySelector('#hamburger');
var navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
  });

  window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
  
    if (window.pageYOffset > fixedNav) {
      header.classList.add('shadow-xl');
    } else {
      header.classList.remove('shadow-xl');
    }
  };