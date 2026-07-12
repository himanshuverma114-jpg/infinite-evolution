// ===== Scroll Reveal =====
const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{threshold:0.15});

document.querySelectorAll(".card,.hero,.section").forEach(el=>{
el.classList.add("hidden");
observer.observe(el);
});

// ===== Animated Stars =====
const starCount=180;

for(let i=0;i<starCount;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";
star.style.top=Math.random()*100+"vh";

star.style.animationDuration=(4+Math.random()*8)+"s";

star.style.opacity=Math.random();

document.body.appendChild(star);

}

// ===== Mouse Glow =====
const glow=document.createElement("div");

glow.className="cursorGlow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});

// ===== Button Animation =====
setInterval(()=>{

document.querySelectorAll(".btn").forEach(btn=>{

btn.animate([

{transform:"scale(1)"},

{transform:"scale(1.06)"},

{transform:"scale(1)"}

],{

duration:900

});

});

},4500);
