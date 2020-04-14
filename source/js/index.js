let burger = document.querySelector(".menu-button");
let siteNav = document.querySelector(".header__navigation");

siteNav.classList.remove("header__navigation--nojs");

burger.addEventListener("click", function () {
  if (burger.classList.contains("menu-button--clicked")) {
    burger.classList.remove("menu-button--clicked");
    siteNav.classList.add("header__navigation--closed");
  } else {
    burger.classList.add("menu-button--clicked");
    siteNav.classList.remove("header__navigation--closed");
  }
});

let myMap;

ymaps.ready(init);

function init() {
  myMap = new ymaps.Map(
    "map",
    {
      center: [59.938631, 30.323055],
      zoom: 15,
    },
    {
      searchControlProvider: "yandex#search",
    }
  );
}
