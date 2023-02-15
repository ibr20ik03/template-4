//mega_menu
let icon_menu = document.querySelector("header .icon");

icon_menu.addEventListener("click", () => {
    let mega_menu = document.querySelector("header .mega_menu");
    if (mega_menu.className == "mega_menu") {
        mega_menu.style.display = "block";
        mega_menu.classList.add("x");
    }else {
        mega_menu.style.display = "none";
        mega_menu.classList.remove("x");
    }
})