  let monthToggler = document.querySelectorAll(".months-list__item");
  monthToggler = Array.prototype.slice.call(monthToggler, 0);

  monthToggler.forEach((toggler) => {
    toggler.addEventListener("click", (evt) => {
      evt.preventDefault();
      let tabIndex = document.querySelector(toggler.getAttribute("href"));
      document.querySelector(".months-list .months-list__item--active").classList.remove("months-list__item--active");
      document.querySelector(".passtype-list--active").classList.remove("passtype-list--active");
      toggler.classList.add('months-list__item--active');
      tabIndex.classList.add('passtype-list--active');
    })
  })

  let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    speed: 1500,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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
