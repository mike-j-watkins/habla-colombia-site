const myVw = Math.max(document.documentElement.clientWidth);
const navBackground = document.querySelector(".navigation");
const inputs = document.querySelectorAll(".form__input");
const whatsappLinks = document.querySelectorAll(".whatsapp-item");
const instagramLink = document.querySelector(".instagram-item");
const navLinks = document.querySelectorAll(".navigation__link");

//SWIPER FUNCTIONALITY. slidesperview checks width > 900 then sets visible slides to 3 or 1
const swiper = new Swiper(".swiper-container", {
  spaceBetween: 30,
  slidesPerView: myVw > 900 ? 3 : 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

myVw >= 700
  ? (instagramLink.href = "https://www.instagram.com/hablacolombiaspanish/")
  : (instagramLink.href = "instagram://user?username=hablacolombiaspanish");

//NAV FUNCTIONALITY REQUIRES CLASS TOGGLING TO ACTIVE
const navFunctionality = navBackground.addEventListener("click", function () {
  navBackground.classList.toggle("navigation__active");
});

//remove previous values from form fields
const refresher = function () {
  // iterate through the form inputs and set value to '' in each.
  inputs.forEach((element) => (element.value = ""));
};

refresher();
