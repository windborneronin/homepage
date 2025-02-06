{
    const welcome = () => {
        console.log("Hello there, glad you've come to check my simple page. These are my first steps in making a webpage, so be my guest and change the page to your liking. For inquiries and suggestions contact me via e-mail: vladavramenko213@gmail.com. Cheers");
    }

    welcome();

    const onThemeToggleClick = () => {
        const content = document.querySelector(".content");
        const themeName = document.querySelector(".js-themeName");
        content.classList.toggle("content--dark-mode");
        themeName.innerText = content.classList.contains("content--dark-mode") ? "light" : "dark";
    }

    const init = () => {
        const themeToggle = document.querySelector(".theme-toggle");
        themeToggle.addEventListener("click", onThemeToggleClick);
    }

    init();

    const onToggleInfoClick = () => {
        const toggleInfo = document.querySelector(".js-toggleInfo");
        const contentVisible = document.querySelector(".content__container--visible");
        contentVisible.classList.toggle("content__container--hidden");
        toggleInfo.innerText = contentVisible.classList.contains("content__container--hidden") ? "Pokaż" : "Ukryj";
    }

   const toggleInfo = () => {
    const button = document.querySelector(".button");
    button.addEventListener("click", onToggleInfoClick);
   }

   toggleInfo();
}
