window.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("mobileHamburger");
    const header = document.getElementById("header");
    const navlinkElements = document.querySelectorAll("li.navLink");
    console.log(navlinkElements)
    hamburger.onclick = () => {
        header.classList.toggle("active")
    };

    navlinkElements.forEach(navlinkElement => {   
        const link = navlinkElement.firstElementChild;
        const content = navlinkElement.lastElementChild;
        link.onclick = () => {
            content.classList.toggle("active")
        }
    });
    

});