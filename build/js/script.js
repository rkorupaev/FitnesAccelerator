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
      document.querySelector(".passtype-list--active").classList.remove("passtype-list--active");
      toggler.classList.add('active');
      tabIndex.classList.add('passtype-list--active');
    })
  })
})();
