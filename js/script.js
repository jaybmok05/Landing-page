const navMenu = document.querySelector("#header-nav");
const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click", () => {
    const visibleMenu = navMenu.getAttribute("data-visible");
    let toggleIcon = document.querySelector(".fa-bars");

    if(visibleMenu === "false"){
        navMenu.setAttribute("data-visible", true);
        navToggler.setAttribute("aria-expanded", true);
    } else if (visibleMenu === "true") {
        navMenu.setAttribute("data-visible", false);
        navToggler.setAttribute("aria-expanded", false);
    }
})


