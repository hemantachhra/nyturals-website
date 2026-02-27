const sections=document.querySelectorAll(".section");
let index=0;
let direction=1;
let autoTimer;
let paused=false;

function scrollTo(i){
if(i<0||i>=sections.length)return;
index=i;
sections[index].scrollIntoView({
behavior:"smooth",
block:"start"
});
}

function scrollNext(){scrollTo(index+1)}
function scrollPrev(){scrollTo(index-1)}

document.querySelectorAll(".clickable-box").forEach(box=>{
box.onclick=e=>{
e.stopPropagation();
window.location=box.dataset.target;
};
});

function toggleMenu(){
const panel=document.getElementById("menuPanel");
panel.style.display=
panel.style.display==="flex"?"none":"flex";
}

function autoScroll(){
if(paused)return;

let next=index+direction;

if(next>=sections.length){
direction=-1;
next=index-1;
}

if(next<0){
direction=1;
next=index+1;
}

scrollTo(next);
}

function startAuto(){
autoTimer=setInterval(autoScroll,4800);
}

function stopAuto(){
paused=true;
clearInterval(autoTimer);
}

function resumeAuto(){
paused=false;
startAuto();
}

document.body.addEventListener("mouseenter",stopAuto);
document.body.addEventListener("mouseleave",()=>{
setTimeout(resumeAuto,3000);
});

setTimeout(startAuto,3000);
