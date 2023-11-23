document.addEventListener("DOMContentLoaded", function() {
    const hero = document.getElementById('hero');
    const navLinks = document.querySelectorAll('nav a');
    const screenWidth = window.innerWidth; // Get the current screen width

    const defaultBackgroundImage = getComputedStyle(hero).backgroundImage;

    const backgroundImages = {
        design: 'url("/assets/img/test-realistic-portfolio.png")',
        web: 'url("/assets/img/WIP.svg")',
        video: 'url("/assets/video/roccat_cinemagraph.mp4")',
        photo: 'url("/assets/img/photo.jpg")'
    };

    function isScreenWidthGreaterThan850() {
        return screenWidth >= 850;
    }

    if (isScreenWidthGreaterThan850()) {
        navLinks.forEach(link => {
            link.addEventListener("mouseover", function() {
                const id = this.id;
                hero.style.backgroundImage = backgroundImages[id];
            });

            link.addEventListener("mouseout", function() {
                hero.style.backgroundImage = defaultBackgroundImage;
            });
        });
    }
});
