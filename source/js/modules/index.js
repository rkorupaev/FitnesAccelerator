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

 if (exerciseListsArray) {
   exerciseListsArray.forEach((list, listIndex) => {
     const itemsArray = list.querySelectorAll(`.exercise-list__item`);
     itemsArray.forEach((item, itemIndex) => {
       item.addEventListener(`mouseover`, (evt) => {
         item.classList.add(`exercise-list__item--active`);
         timeCellsArray[itemIndex].classList.add(`time-list__item--active`);
         dayCellsArray[listIndex].classList.add(`day-list__item--active`);
       });

       item.addEventListener(`mouseout`, (evt) => {
         item.classList.remove(`exercise-list__item--active`);
         timeCellsArray[itemIndex].classList.remove(`time-list__item--active`);
         dayCellsArray[listIndex].classList.remove(`day-list__item--active`);
       })
     });
   });
 }

 const addAnimation = (element, animationClass) => {
   element.classList.add(animationClass);
   setTimeout(() => {
     element.classList.remove(animationClass);
   }, 1500);
 };

 // const scheduleSliderBlock = document.querySelector(`.schedule-block__slider`);
 // const exerciseListsArrayBlock = document.querySelector(`.schedule-block__exercise-wrapper`);
 // const dayCellsArrayBlock = document.querySelector(`.schedule-block__day-list`);
 // const initialExerciseArray = exerciseListsArray;
 // const initialDayArray = dayCellsArray;

 // if (scheduleSliderBlock) {
 //   exerciseListsArray.forEach((list, listIndex) => {
 //     if (listIndex >= 4) {
 //       list.remove();
 //     }
 //   });

 //   dayCellsArray.forEach((item, itemIndex) => {
 //     if (itemIndex >= 4) {
 //       item.remove();
 //     }
 //   });
 // }

 // let initialEnd = 4;
 // let initialStart = 0;

 // scheduleSliderBlock.addEventListener(`click`, (evt) => {
 //   if (initialStart >= 0 && initialEnd <= 6) {
 //     exerciseListsArray[initialStart].remove();
 //     dayCellsArray[initialStart].remove();
 //     initialStart++;

 //     exerciseListsArrayBlock.append(initialExerciseArray[initialEnd]);
 //     addAnimation(initialExerciseArray[initialEnd], `unfade`);
 //     dayCellsArrayBlock.append(initialDayArray[initialEnd]);
 //     addAnimation(initialDayArray[initialEnd], `unfade`);
 //     initialEnd++;
 //   }
 // });

 console.dir(window);

 window.addEventListener(`resize = 'horizontal'`, (evt) => {

   if (window.outerWidth < 1200) {
     exerciseListsArray.forEach((list, listIndex) => {
       if (listIndex >= 4) {
         list.classList.add(`hidden`);
       }
     });

     dayCellsArray.forEach((item, itemIndex) => {
       if (itemIndex >= 4) {
         item.classList.add(`hidden`);
       }
     });
   }

 });
