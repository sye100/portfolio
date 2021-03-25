// Nav Mobile
const closeBtn = document.querySelector('.btn--close');
const openBtn = document.querySelector('.menu-bar');
const navMobile = document.querySelector('.nav-mobile');
const navItem = document.querySelectorAll('.nav-item');
const mobileNavItem = document.querySelectorAll(".nav-item--mobile");

// mobile header 
const headerMobile = document.querySelector('.mobile-header')


openBtn.addEventListener('click' , function() {
  navMobile.classList.add('nav-mobile-active');
});

closeBtn.addEventListener('click', function() {
  navMobile.classList.remove('nav-mobile-active');
});


mobileNavItem.forEach(e => e.addEventListener('click', () => {
  navMobile.classList.remove('nav-mobile-active');
  headerMobile.style.top = "0";
}));

 

 

// #Project SLider
const right = document.querySelector('.right');
const left = document.querySelector('.left');
const sliderWrapper = document.querySelector('.slider');
const slideItem = document.querySelectorAll('.slider-item');
const size = slideItem[0].clientWidth;
const indicatorParents = document.querySelector('.controls ul');

let index = 0;

function setIndex() {
  document.querySelector('.controls .selected').classList.remove('selected');
  sliderWrapper.style.transform = "translateX(" + (-33.33333 * index) + "%)";
} 

document.querySelectorAll('.controls li').forEach(function(indicator, ind) {
  indicator.addEventListener('click', function() {
    index = ind;
    setIndex();
    indicator.classList.add('selected');
  });
});


left.addEventListener('click', function () {
  index = (index !== 0) ? --index : 0;
  setIndex();
  indicatorParents.children[index].classList.add('selected');

});

right.addEventListener('click', function () {
  index = (index < slideItem.length - 1) ? index + 1 : slideItem.length - 1;
  setIndex();
  indicatorParents.children[index].classList.add('selected');
});

 
// smooth scroll
const scroll = new SmoothScroll('.nav-item a[href*="#"]', {
	speed: 400
});