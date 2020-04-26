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

ymaps.ready(function () {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [59.940262328564486, 30.323117499999945],
        zoom: 15,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    myPlacemark = new ymaps.Placemark(
      myMap.getCenter(),
      {
        hintContent: "Cat Energy",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "img/map-pin.png",
        iconImageSize: [120, 110],
        iconImageOffset: [-5, -38],
      }
    );
  myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent);
});
