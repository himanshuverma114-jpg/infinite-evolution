// =========================
// NAVBAR EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>30){

navbar.style.background="rgba(5,8,22,.92)";
navbar.style.boxShadow="0 15px 30px rgba(0,0,0,.45)";

}else{

navbar.style.background="rgba(0,0,0,.45)";
navbar.style.boxShadow="none";

}

});


// =========================
// SCROLL ANIMATION
// =========================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

},{
threshold:.12
});

document.querySelectorAll(".card,.gallery img,.video-grid video,.banner").forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(50px)";
el.style.transition=".8s";

observer.observe(el);

});


// =========================
// IMAGE LIGHTBOX
// =========================

const overlay=document.createElement("div");

overlay.id="lightbox";

overlay.innerHTML="<img>";

document.body.appendChild(overlay);

const overlayImg=overlay.querySelector("img");

document.querySelectorAll(".gallery img").forEach(img=>{

img.onclick=()=>{

overlay.style.display="flex";

overlayImg.src=img.src;

}

});

overlay.onclick=()=>{

overlay.style.display="none";

};


// =========================
// BUTTON PULSE
// =========================

setInterval(()=>{

document.querySelectorAll(".play-button,.download-btn").forEach(btn=>{

btn.animate([

{transform:"scale(1)"},

{transform:"scale(1.06)"},

{transform:"scale(1)"}

],{

duration:900

});

});

},4500);
