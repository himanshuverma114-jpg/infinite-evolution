// =============================
// Infinite Evolution Website
// =============================

// Navbar effect
const navbar = document.querySelector(".top");

window.addEventListener("scroll", () => {
    if (!navbar) return;

    if (window.scrollY > 30) {
        navbar.style.background = "#0b1020";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.35)";
    } else {
        navbar.style.background = "#121a30";
        navbar.style.boxShadow = "none";
    }
});

// =============================
// Scroll Reveal Animation
// =============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".card, .gallery img, .videos video, .heroimg").forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .7s ease";

    observer.observe(el);

});

// =============================
// Screenshot Lightbox
// =============================

document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.left = "0";
        overlay.style.top = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,.92)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.cursor = "pointer";
        overlay.style.zIndex = "99999";

        const image = document.createElement("img");

        image.src = img.src;
        image.style.maxWidth = "90%";
        image.style.maxHeight = "90%";
        image.style.borderRadius = "18px";
        image.style.boxShadow = "0 0 35px rgba(46,204,113,.5)";

        overlay.appendChild(image);

        overlay.onclick = () => {

            overlay.remove();

        };

        document.body.appendChild(overlay);

    });

});

// =============================
// Download Button Pulse
// =============================

setInterval(() => {

    document.querySelectorAll(".btn").forEach(btn => {

        btn.animate([
            { transform: "scale(1)" },
            { transform: "scale(1.05)" },
            { transform: "scale(1)" }
        ], {
            duration: 900
        });

    });

}, 5000);
