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

const coachesBlock = document.querySelector(`.coaches-block__slider`);

const mySwiper = (el) => {
  // eslint-disable-next-line no-undef
  return new Swiper(el, {
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
};

if (coachesBlock) {
  mySwiper(coachesBlock);
}

const reviewsBlock = document.querySelector(`.reviews-block__slider`);

const mySwiper2 = (el) => {
  // eslint-disable-next-line no-undef
  return new Swiper(el, {
    // Optional parameters
    direction: `horizontal`,
    loop: true,
    grabCursor: true,
    speed: 1500,
    spaceBetween: 100,
    // Navigation arrows
    navigation: {
      nextEl: `.reviews-block__next`,
      prevEl: `.reviews-block__prev`,
    },
  });
};

if (reviewsBlock) {
  mySwiper2(reviewsBlock);
}

const scroll = () => {
  // eslint-disable-next-line no-undef
  return new SmoothScroll(`a[href*="#"]`, {
    speed: 500
  });
};

scroll();

const phoneInput = document.getElementById(`phone`);

const phoneMask = (el) => {
  // eslint-disable-next-line no-undef
  return new IMask(el, {
    mask: `+{7}(000)000-00-00`,
    lazy: false
  });
};

if (phoneInput) {
  phoneMask(phoneInput);
}

let form = document.querySelector(`.contacts-block__form-wrapper form`);
let formValidity = false;
phoneInput.setCustomValidity(`Заполните это поле.`);

phoneInput.addEventListener(`input`, () => {
  if (phoneInput.value.indexOf(`_`) === -1) {
    phoneInput.setCustomValidity(``);
    formValidity = true;
  }
});

form.addEventListener(`submit`, (evt) => {
  evt.preventDefault();
  if (formValidity) {
    setTimeout(() => {
      form.reset();
    }, 750);
  }
});
