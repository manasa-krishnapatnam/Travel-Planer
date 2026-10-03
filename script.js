// Header interactions
console.log("JavaScript loaded");
const menuBtn   = document.getElementById('menu-bar');
const navbar    = document.getElementById('navbar');
//const searchBtn = document.getElementById('search-btn');
//const searchFrm = document.getElementById('search-form');
const searchClose = document.getElementById('search-close');
const loginBtn  = document.getElementById('login-btn');
const loginModal= document.getElementById('login-modal');
const formClose = document.getElementById('form-close');
const navLinks  = document.querySelectorAll('.navbar a');
const searchBtn = document.getElementById('search-btn');
    const searchForm = document.getElementById('search-form');

    searchBtn.addEventListener('click', () => {
      searchForm.classList.toggle('active');
      // Optional: focus the input when shown
      if (searchForm.classList.contains('active')) {
        document.getElementById('search-bar').focus();
      }
    });

menuBtn?.addEventListener('click', () => {
  navbar.classList.toggle('open');
});


loginBtn?.addEventListener('click', () => {
  loginModal.classList.add('active');
  loginModal.setAttribute('aria-hidden','false');
});
formClose?.addEventListener('click', () => {
  loginModal.classList.remove('active');
  loginModal.setAttribute('aria-hidden','true');
});
loginModal?.addEventListener('click', (e)=>{
  if(e.target === loginModal){ formClose.click(); }
});

// Active link on scroll
const sections = [...document.querySelectorAll('section[id]')];
const setActive = () => {
  const y = scrollY + 120;
  for (const link of navLinks) link.classList.remove('active');
  for (const sec of sections){
    const top = sec.offsetTop, bottom = top + sec.offsetHeight;
    if (y >= top && y < bottom){
      const link = document.querySelector(`.navbar a[href="#${sec.id}"]`);
      link?.classList.add('active');
      break;
    }
  }
};
window.addEventListener('scroll', setActive);
setActive();

// Swiper - Hero
const heroSwiper = new Swiper('.hero-swiper', {
  loop: true,
  effect: 'fade',
  autoplay: { delay: 4000, disableOnInteraction: false },
  speed: 800
});

// Custom hero dots (to match screenshot)
const dotsWrap = document.getElementById('hero-dots');
const makeDot = () => {
  dotsWrap.innerHTML = '';
  for (let i = 0; i < heroSwiper.slides.length - 2; i++){
    const s = document.createElement('span');
    s.addEventListener('click', ()=> heroSwiper.slideToLoop(i));
    dotsWrap.appendChild(s);
  }
};
makeDot();
heroSwiper.on('slideChange', () => {
  const realIndex = heroSwiper.realIndex;
  dotsWrap.querySelectorAll('span').forEach((el, i) => {
    el.classList.toggle('active', i === realIndex);
  });
});
heroSwiper.emit('slideChange');

// Swiper - Reviews
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next.custom-nav',
        prevEl: '.swiper-button-prev.custom-nav',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-swiper .swiper-slide");
  const dotsContainer = document.getElementById("hero-dots");

  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    if (index === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll("span");

  const heroSwiper = new Swiper(".hero-swiper", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    on: {
      slideChange: function () {
        const realIndex = this.realIndex;
        dots.forEach(dot => dot.classList.remove("active"));
        dots[realIndex % dots.length].classList.add("active");
      }
    }
  });
});
document.querySelectorAll('.gbox img').forEach(img => {
    img.addEventListener('click', () => {
      const figure = img.closest('figure');
      figure.classList.toggle('active');
    });
  });