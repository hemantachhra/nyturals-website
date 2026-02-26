// ===== SECTION SNAP SYSTEM =====

const sections = document.querySelectorAll("section");

let currentIndex = 0;
let autoTimer = null;
let autoDirection = 1;
let userInteracted = false;

// Scroll to exact section
function scrollToSection(index) {

if(index < 0) index = 0;
if(index >= sections.length) index = sections.length - 1;

currentIndex = index;

sections[currentIndex].scrollIntoView({
behavior: "smooth",
block: "start"
});

}

// Scroll next
function scrollNext() {

scrollToSection(currentIndex + 1);

}

// Scroll previous
function scrollPrev() {

scrollToSection(currentIndex - 1);

}


// ===== CLICKABLE BOXES ONLY =====

document.querySelectorAll(".clickable-box").forEach(box => {

box.addEventListener("click", function(e){

e.stopPropagation();

window.location = this.dataset.target;

});

});


// ===== MENU TOGGLE FIX =====

function toggleMenu(){

const panel = document.getElementById("menuPanel");

panel.style.display =
(panel.style.display === "flex") ? "none" : "flex";

}


// ===== AUTO OSCILLATION SYSTEM =====

function autoScroll(){

if(userInteracted) return;

let nextIndex = currentIndex + autoDirection;

// reverse at bottom
if(nextIndex >= sections.length){

autoDirection = -1;
nextIndex = sections.length - 2;

}

// reverse at top
if(nextIndex < 0){

autoDirection = 1;
nextIndex = 1;

}

scrollToSection(nextIndex);

}


// start oscillation after idle
function startAuto(){

clearInterval(autoTimer);

autoTimer = setInterval(autoScroll, 3500);

}


// stop on manual interaction
function stopAuto(){

userInteracted = true;
clearInterval(autoTimer);

}


// detect interaction
["wheel","touchstart","mousedown","keydown"].forEach(event => {

window.addEventListener(event, stopAuto, {passive:true});

});


// detect section currently visible
window.addEventListener("scroll", () => {

let scrollPosition = window.scrollY;

sections.forEach((section, index) => {

let top = section.offsetTop;
let height = section.offsetHeight;

if(scrollPosition >= top - height/2 &&
scrollPosition < top + height/2){

currentIndex = index;

}

});

});


// start auto after 3 seconds idle
setTimeout(startAuto, 3000);
