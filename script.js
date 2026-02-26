// MENU

function toggleMenu(){

let panel=document.getElementById("menuPanel");

panel.style.display=
panel.style.display==="flex"?"none":"flex";

}

// CLICK NAVIGATION

document.querySelectorAll(".clickable").forEach(el=>{

el.addEventListener("click",()=>{

window.location=el.dataset.target;

});

});

// GLIDE EFFECT

window.addEventListener("scroll",()=>{

let scrolled=window.scrollY;

document.querySelectorAll(".panel-card").forEach(card=>{

card.style.transform=
`translateY(${scrolled * -0.15}px)`;

});

});

// AUTO SCROLL

let autoScroll;

function startAuto(){

autoScroll=setTimeout(()=>{

window.scrollBy({
top:window.innerHeight,
behavior:"smooth"
});

},5000);

}

function stopAuto(){

clearTimeout(autoScroll);

}

["scroll","touchstart","keydown","wheel"]
.forEach(evt=>{

window.addEventListener(evt,stopAuto);

});

startAuto();
