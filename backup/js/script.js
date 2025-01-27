console.log("Hello there, glad you've come to check my simple page. These are my first steps in making a webpage, so be my guest and change the page to your liking. For inquiries and suggestions contact me via e-mail: vladavramenko213@gmail.com. Cheers");

let darkLightModeButton = document.querySelector(".darkLightModeButton");
let content = document.querySelector(".content");
let themeName = document.querySelector(".themeName");

darkLightModeButton.addEventListener ("click", () => {
    content.classList.toggle("dark");
    themeName.innerText = content.classList.contains ("dark") ? "light" : "dark";
});



let showTrainButton = document.querySelector(".showTrainButton");
let hideInfo = document.querySelector(".hideInfo");
let trainInfo = document.querySelector(".trainInfo");

showTrainButton.addEventListener("click", () => {
    trainInfo.classList.toggle("hidden");
    hideInfo.innerText = trainInfo.classList.contains ("hidden") ? "Pokaż" : "Ukryj";
});
