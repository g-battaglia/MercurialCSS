const navbar = document.querySelector('.main-nav');
const bodyRef = document.querySelector('body');
const toggleIcon = document.querySelector('.toggle-icon');
const closeToggleIcon = document.querySelector('.close-toggle-icon');
const topMenuLinkDiv = document.querySelector('.top-menu__link-div');
const hoverTopMenu = document.querySelector('.hover-top-menu');
const topMenuOpenIcon = document.querySelector('.top-menu__open-icon');

const topMenuCloseIcon = document.querySelector('.top-menu__close-icon')



var toggleMenu = document.querySelector(".toggle-menu");
var sideBar = document.querySelector(".top-menu");
var mainHeader = document.querySelector(".main-header");

window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

toggleMenu.addEventListener("click", function() {
  sideBar.classList.toggle("hide");
  toggleIcon.classList.toggle("hide");
  closeToggleIcon.classList.toggle("hide");
  
})

topMenuLinkDiv.addEventListener('click', function() {
    hoverTopMenu.classList.toggle('hover-top-menu__hide');
    topMenuOpenIcon.classList.toggle('hide');
    topMenuCloseIcon.classList.toggle('hide');
    
  })