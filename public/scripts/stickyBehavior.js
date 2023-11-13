window.addEventListener("DOMContentLoaded",() => {
    const header = document.getElementById("header");
    let lastScrollPosition = 0;
    const scrollThreshold = 5; // Tweak this value for sensitivity
    window.addEventListener("scroll", () => {
        const currentScrollPosition = window.scrollY;

        if (currentScrollPosition > lastScrollPosition) {
            if (currentScrollPosition >= scrollThreshold) {
                header.className = "header sticky"
            }
        } else {
            if (currentScrollPosition <= scrollThreshold) {
                header.className = "header"
            }
        }

        lastScrollPosition = currentScrollPosition;
    });

});
