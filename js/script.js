console.log("Hello there, glad you've come to check my simple page. These are my first steps in making a webpage, so be my guest and change the page to your liking. For inquiries and suggestions contact me via e-mail: vladavramenko213@gmail.com. Cheers");

let themeToggle = document.querySelector(".theme-toggle");
let content = document.querySelector(".content");
let themeName = document.querySelector(".js-themeName");

themeToggle.addEventListener ("click", () => {
    content.classList.toggle("content--dark-mode");
    themeName.innerText = content.classList.contains ("content--dark-mode") ? "light" : "dark";
});

let button = document.querySelector(".button");
let toggleInfo = document.querySelector(".js-toggleInfo");
let contentVisible = document.querySelector(".content__container--visible");

button.addEventListener("click", () => {
    contentVisible.classList.toggle("content__container--hidden");
    toggleInfo.innerText = contentVisible.classList.contains ("content__container--hidden") ? "Pokaż" : "Ukryj";
});
