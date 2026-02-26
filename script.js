// MENU TOGGLE

function toggleMenu(){

let panel=document.getElementById("menuPanel");

panel.style.display=

panel.style.display==="flex"?"none":"flex";

}


// CLICK ONLY BOXES

document.querySelectorAll(".clickable-box").forEach(box=>{

box.addEventListener("click",e=>{

e.stopPropagation();

window.location=box.dataset.target;

});

});


// SCROLL FUNCTIONS

function scrollNext(){

window.scrollBy({

top:window.innerHeight,

behavior:"smooth"

});

}

function scrollPrev(){

window.scrollBy({

top:-window.innerHeight,

behavior:"smooth"

});

}
