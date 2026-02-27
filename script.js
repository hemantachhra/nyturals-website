/* =========================
   NYTURALS MOTION ENGINE
   HARD-LOCK SAFE
========================= */

// clickable cards only
document.querySelectorAll(".clickable-box").forEach(box=>{
box.addEventListener("click",e=>{
e.stopPropagation();
window.location = box.dataset.target;
});
});

// menu toggle
function toggleMenu(){
const panel=document.getElementById("menuPanel");
panel.style.display =
panel.style.display==="flex" ? "none" : "flex";
}

/* ===== AUTO SCROLL ===== */

let autoTimer=null;
let idleTimer=null;
let paused=false;

/* gentle motion */
function autoMove(){

if(paused) return;

window.scrollBy({
top: window.innerHeight * 0.25,   // smaller movement
behavior:"smooth"
});

}

/* start motion */
function startAuto(){
clearInterval(autoTimer);
autoTimer=setInterval(autoMove,11000); // slower luxury pacing
}

/* stop instantly */
function stopAuto(){
paused=true;
clearInterval(autoTimer);
clearTimeout(idleTimer);

/* resume after idle */
idleTimer=setTimeout(()=>{
paused=false;
startAuto();
},3000);

}

/* detect REAL interaction only */
["wheel","touchstart","keydown","mousedown"].forEach(evt=>{
window.addEventListener(evt,stopAuto,{passive:true});
});

/* initial showroom delay */
setTimeout(()=>{
paused=false;
startAuto();
},6000);
