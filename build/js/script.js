'use strict';

(function() {
  let monthToggler = document.querySelectorAll(".months-list li a");
  let tabIndex = 0;



  monthToggler = Array.prototype.slice.call(monthToggler, 0);
  monthToggler.forEach((toggler) => {
    toggler.addEventListener("click", (evt) => {
      evt.preventDefault();

      tabIndex = document.querySelector(toggler.getAttribute("href"));
      document.querySelector(".months-list .active").classList.remove("active");
      console.log("запрос 1");
      console.log(document.querySelector(".passtype-list--active"));
      document.querySelector(".passtype-list--active").classList.remove("passtype-list--active");
      console.log("запрос 2");

      toggler.classList.add('active');
      tabIndex.classList.add('passtype-list--active');
    })
  })
})();
