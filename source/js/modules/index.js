let monthToggler = document.querySelectorAll(`.months-list__item`);
monthToggler = Array.prototype.slice.call(monthToggler, 0);

monthToggler.forEach((toggler) => {
  toggler.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    let tabIndex = document.querySelector(toggler.getAttribute(`href`));
    document.querySelector(`.months-list .months-list__item--active`).classList.remove(`months-list__item--active`);
    document.querySelector(`.passtype-list--active`).classList.remove(`passtype-list--active`);
    toggler.classList.add(`months-list__item--active`);
    tabIndex.classList.add(`passtype-list--active`);
  });
});

let mySwiper = new Swiper(`.coaches-block__slider`, {
  // Optional parameters
  direction: `horizontal`,
  loop: true,
  grabCursor: true,
  speed: 1500,
  // Navigation arrows
  navigation: {
    nextEl: `.swiper-button-next`,
    prevEl: `.swiper-button-prev`,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 47,
      slidesPerGroup: 1
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
      slidesPerGroup: 4
    }
  }
});

let mySwiper2 = new Swiper(`.reviews-block__slider`, {
  // Optional parameters
  direction: `horizontal`,
  loop: true,
  grabCursor: true,
  speed: 1500,
  // Navigation arrows
  navigation: {
    nextEl: `.reviews-block__next`,
    prevEl: `.reviews-block__prev`,
  },
});

let scroll = new SmoothScroll(`a[href*="#"]`, {
  speed: 500
});

let phoneInput = document.getElementById(`phone`);

let phoneMask = IMask(phoneInput, {
  mask: `+{7}(000)000-00-00`,
  lazy: true,
  placeholderChar: `#`
});

let phoneBlock = document.querySelector(`.form-block__item--phone`);

phoneBlock.addEventListener(`focus`, () => {
  phoneMask.updateOptions({lazy: false});
}, true);

phoneBlock.addEventListener(`mouseover`, () => {
  phoneMask.updateOptions({lazy: false});
}, true);

// let formTest = document.querySelector(`.form-block`);

// formTest.addEventListener(`submit`, (evt) => {
//   evt.preventDefault();
//   if (!phoneInput.checkValidity()) {
//     evt.preventDefault();
//     phoneInput.setCustomValidity(`Заполните это поле.`);
//     console.log(`worked`);

//     console.dir(phoneInput);
//     console.dir(phoneMask);
//   }
// });
