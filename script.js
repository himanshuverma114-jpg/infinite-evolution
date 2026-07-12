// Smooth fade-in animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{opacity:0,transform:"translateY(50px)"},

{opacity:1,transform:"translateY(0px)"}

],{

duration:900,

fill:"forwards",

easing:"ease-out"

});

observer.unobserve(entry.target);

}

});

});

document.querySelectorAll(".card,.hero,.section").forEach(el=>{

el.style.opacity=0;

observer.observe(el);

});



// Floating stars

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.style.position="fixed";

star.style.width=Math.random()*3+1+"px";

star.style.height=star.style.width;

star.style.background="white";

star.style.borderRadius="50%";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.opacity=Math.random();

star.style.pointerEvents="none";

star.style.zIndex="-1";

document.body.appendChild(star);

let speed=Math.random()*0.4+0.2;

function animate(){

let y=parseFloat(star.style.top);

y+=speed;

if(y>100)y=-2;

star.style.top=y+"vh";

requestAnimationFrame(animate);

}

animate();

}



// Download button pulse

setInterval(()=>{

document.querySelectorAll(".btn").forEach(btn=>{

btn.animate([

{transform:"scale(1)"},

{transform:"scale(1.05)"},

{transform:"scale(1)"}

],{

duration:1200

});

});

},5000);
