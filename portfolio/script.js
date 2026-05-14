const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-menu a");

// open / close menu
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

const reveals = document.querySelectorAll(".reveal-left, .reveal-right");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
        el.style.opacity = "1";
        el.style.transform = "translateX(0)";
    }
  });
});


const revealUp = document.querySelectorAll(".reveal-up");

window.addEventListener("scroll", () => {
  revealUp.forEach((el, i) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
        setTimeout(()=>{
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, i * 150);
    }
});