// Infinite Evolution Website
// Premium interactions

document.addEventListener("DOMContentLoaded", () => {

    // Navbar shadow while scrolling
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {
            navbar.style.background = "rgba(0,0,0,.85)";
            navbar.style.boxShadow = "0 8px 30px rgba(0,0,0,.45)";
        } else {
            navbar.style.background = "rgba(0,0,0,.45)";
            navbar.style.boxShadow = "none";
        }

    });

    // Reveal animation
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll(".card,.banner,.screenshots,.download").forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(60px)";
        el.style.transition = "all .8s ease";

        observer.observe(el);

    });

    // Hero button effect
    const playBtn = document.querySelectorAll(".play-button,.download-btn");

    playBtn.forEach(btn => {

        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "scale(1.08)";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "";
        });

    });

});

// Footer year
const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML = "© " + new Date().getFullYear() + " Infinite Evolution";

}
