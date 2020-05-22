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

if (phoneInput) {
  phoneInput.setCustomValidity(`Заполните это поле.`);
  phoneInput.addEventListener(`input`, () => {
    if (phoneInput.value.indexOf(`_`) === -1) {
      phoneInput.setCustomValidity(``);
      formValidity = true;
    }
  });
}

if (form) {
  form.addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    if (formValidity) {
      setTimeout(() => {
        form.reset();
      }, 750);
    }
  });
}

const timeCellsArray = document.querySelectorAll(`.time-list__item`);
const dayCellsArray = document.querySelectorAll(`.day-list__item`);
const exerciseListsArray = document.querySelectorAll(`.exercise-list`);

const dropDownArrow = document.querySelector(`.schedule-block__arrow`);
const dropDownArrowSpan = dropDownArrow.querySelector(`span`);
const dropDownItemList = document.querySelectorAll(`.drop-down__item`);

if (exerciseListsArray) {
  exerciseListsArray.forEach((list, listIndex) => {
    const itemsArray = list.querySelectorAll(`.exercise-list__item`);
    itemsArray.forEach((item, itemIndex) => {
      item.addEventListener(`mouseover`, (evt) => {
        item.classList.add(`exercise-list__item--active`);
        timeCellsArray[itemIndex].classList.add(`time-list__item--active`);
        dayCellsArray[listIndex].classList.add(`day-list__item--active`);
        dropDownItemList[listIndex].classList.add(`drop-down__item--active-cell`);
      });

      item.addEventListener(`mouseout`, (evt) => {
        item.classList.remove(`exercise-list__item--active`);
        timeCellsArray[itemIndex].classList.remove(`time-list__item--active`);
        dayCellsArray[listIndex].classList.remove(`day-list__item--active`);
        dropDownItemList[listIndex].classList.remove(`drop-down__item--active-cell`);
      })
    });
  });
}

const addAnimation = (element, animationClass) => {
  element.classList.add(animationClass);
  setTimeout(() => {
    element.classList.remove(animationClass);
  }, 500);
};

const startIndex = [0, 1, 2];
const endIndex = [4, 5, 6];
const sliderPin = document.querySelector(`.schedule-block__slider-pin`);

// if (sliderPin) {
//   sliderPin.addEventListener(`click`, (evt) => {
//     evt.preventDefault();
//     // sliderPin.style.left = `100px`;
//     // sliderPin.classList.toggle(`schedule-block__slider-pin--position-right`);
//     // let count = 0;
//     // exerciseListsArray.forEach((item, itemIndex) => {
//     //   if (item.classList.contains(`exercise-list--tablet`) && itemIndex >= 4 && count < 3) {
//     //     count++;
//     //     exerciseListsArray[itemIndex].classList.remove(`exercise-list--tablet`);
//     //     addAnimation(exerciseListsArray[3], `unfade`);
//     //     addAnimation(exerciseListsArray[itemIndex], `unfade`);
//     //     startIndex.forEach((item) => {
//     //       exerciseListsArray[item].classList.add(`exercise-list--tablet`);
//     //     });
//     //   } else if (item.classList.contains(`exercise-list--tablet`) && itemIndex <= 2 && count < 3) {
//     //     count++;
//     //     exerciseListsArray[itemIndex].classList.remove(`exercise-list--tablet`);
//     //     addAnimation(exerciseListsArray[3], `unfade`);
//     //     addAnimation(exerciseListsArray[itemIndex], `unfade`);
//     //     endIndex.forEach((item) => {
//     //       exerciseListsArray[item].classList.add(`exercise-list--tablet`);
//     //     });
//     //   }
//     // });
//   });
// }

sliderPin.addEventListener(`mousedown`, (evt) => {
  const initLocationX = evt.clientX;

  const onMouseMove = (moveEvt) => {
    moveEvt.preventDefault();
  }
});

const removeArrayClass = (block, className) => {
  block.forEach((item) => {
    item.classList.remove(className);
  });
};

const initDropDown = () => {
  dropDownArrowSpan.classList.add(`rotate`);

  timeCellsArray.forEach((item) => {
    item.classList.add(`time-list__item--drop-down-opened`);
  });

  exerciseListsArray.forEach((item) => {
    item.classList.add(`exercise-list--drop-down-opened`);
  });

  dropDownItemList.forEach((item, index) => {
    item.classList.add(`drop-down__item--active`);
    item.classList.add(`drop-down__item--border`);
    dropDownItemList.forEach((item, index) => {
      item.addEventListener(`click`, (evt) => {
        removeArrayClass(dropDownItemList, `drop-down__item--active`);
        removeArrayClass(dropDownItemList, `drop-down__item--border`);
        dropDownItemList[index].classList.add(`drop-down__item--active`);
        exerciseListsArray[index].classList.remove(`exercise-list--drop-down-opened`);
        exerciseListsArray[index].classList.add(`exercise-list--mobile`);
        removeArrayClass(timeCellsArray, `time-list__item--drop-down-opened`);
        dropDownArrowSpan.classList.remove(`rotate`);
        item.style.borderBottomWidth = `2px`;
      });

    });
  });
};

if (dropDownArrow) {
  dropDownArrow.addEventListener(`click`, initDropDown);
}
