let burger = document.querySelector(".menu-button");
let siteNav = document.querySelector(".header__navigation");

burger.addEventListener("click", function() {
  if (burger.classList.contains("menu-button--clicked")) {
    burger.classList.remove("menu-button--clicked");
    siteNav.classList.remove("header__navigation--open");
  } else {
    burger.classList.add("menu-button--clicked");
    siteNav.classList.add("header__navigation--open");
  }
});
