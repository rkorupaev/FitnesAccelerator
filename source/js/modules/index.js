const removeArrayClass = (block, className) => {
  block.forEach((item) => {
    item.classList.remove(className);
  });
};

const addArrayClass = (block, className) => {
  block.forEach((item) => {
    item.classList.add(className);
  });
};

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
const dropDownArrowSpan = document.querySelector(`span`);
const dropDownItemList = document.querySelectorAll(`.drop-down__item`);
const sliderPin = document.querySelector(`.schedule-block__slider-pin`);
const sliderContainer = document.querySelector(`.schedule-block__slider`);
const COLUMN_WIDTH = 152;

const getColumnsAmount = () => {
  const mainContainer = document.querySelector(`.schedule-block__container`);
  if (mainContainer) {
    let columnAmount = Math.floor(mainContainer.offsetWidth / COLUMN_WIDTH);
    return columnAmount;
  }
};

const initiateColumns = () => {
  let columnAmount = getColumnsAmount();
  for (let i = columnAmount; i <= dayCellsArray.length; i++) {
    if (dayCellsArray[i]) {
      dayCellsArray[i].classList.add(`day-list__item--tablet`);
      exerciseListsArray[i].classList.add(`exercise-list--tablet`);
    }
  }
  if (sliderContainer) {
    sliderContainer.style.width = COLUMN_WIDTH * columnAmount + `px`;
    sliderPin.style.width = sliderContainer.style.width / 2;
  }
};

const debounce = (func, wait, immediate) => {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
};


const recalcColumns = debounce(function () {
  removeArrayClass(dayCellsArray, `day-list__item--tablet`);
  removeArrayClass(exerciseListsArray, `exercise-list--tablet`);
  initiateColumns();
}, 200);

window.addEventListener(`load`, (evt) => {
  evt.preventDefault();
  initiateColumns();
});

window.addEventListener(`resize`, recalcColumns);

const MIN_LEFT = 0;
let initialExerciseArray = exerciseListsArray;
let initialDayArray = dayCellsArray;

initialExerciseArray = Array.prototype.slice.call(initialExerciseArray, 0);
initialDayArray = Array.prototype.slice.call(initialDayArray, 0);

if (sliderPin) {
  sliderPin.addEventListener(`mousedown`, (evt) => {
    let initLocationX = evt.clientX;
    let columnCount = getColumnsAmount();

    let maxLeft = sliderContainer.offsetWidth / 2;
    let devideIndex = maxLeft / (7 - columnCount);

    const onMouseMove = (moveEvt) => {
      moveEvt.preventDefault();

      let shift = initLocationX - moveEvt.clientX;

      initLocationX = moveEvt.clientX;

      sliderPin.style.left = (sliderPin.offsetLeft - shift) + `px`;

      if (sliderPin.offsetLeft <= MIN_LEFT) {
        sliderPin.style.left = MIN_LEFT + `px`;
      } else if (sliderPin.offsetLeft >= maxLeft) {
        sliderPin.style.left = maxLeft + `px`;
      }

      let countIndex = Math.floor(sliderPin.offsetLeft / devideIndex);
      if (countIndex < 0) {
        countIndex = 0;
      }

      let changedExerciseArray = initialExerciseArray.slice(countIndex, countIndex + columnCount);
      let changedDayArray = initialDayArray.slice(countIndex, countIndex + columnCount);

      addArrayClass(initialExerciseArray, `exercise-list--tablet`);
      addArrayClass(initialDayArray, `day-list__item--tablet`);
      removeArrayClass(changedExerciseArray, `exercise-list--tablet`);
      removeArrayClass(changedDayArray, `day-list__item--tablet`);
    };

    const onMouseUp = (upEvt) => {
      upEvt.preventDefault();

      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  });
}


const initDropDown = () => {
  dropDownArrowSpan.classList.add(`rotate`);

  timeCellsArray.forEach((item) => {
    item.classList.add(`time-list__item--drop-down-opened`);
  });

  exerciseListsArray.forEach((item) => {
    item.classList.add(`exercise-list--drop-down-opened`);
  });

  dropDownItemList.forEach((item) => {
    item.classList.add(`drop-down__item--active`);
    item.classList.add(`drop-down__item--border`);
    dropDownItemList.forEach((item, index) => {
      item.addEventListener(`click`, () => {
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

if (exerciseListsArray) {
  exerciseListsArray.forEach((list, listIndex) => {
    const itemsArray = list.querySelectorAll(`.exercise-list__item`);
    itemsArray.forEach((item, itemIndex) => {
      item.addEventListener(`mouseover`, () => {
        item.classList.add(`exercise-list__item--active`);
        timeCellsArray[itemIndex].classList.add(`time-list__item--active`);
        dayCellsArray[listIndex].classList.add(`day-list__item--active`);
        dropDownItemList[listIndex].classList.add(`drop-down__item--active-cell`);
      });

      item.addEventListener(`mouseout`, () => {
        item.classList.remove(`exercise-list__item--active`);
        timeCellsArray[itemIndex].classList.remove(`time-list__item--active`);
        dayCellsArray[listIndex].classList.remove(`day-list__item--active`);
        dropDownItemList[listIndex].classList.remove(`drop-down__item--active-cell`);
      });
    });
  });
}
