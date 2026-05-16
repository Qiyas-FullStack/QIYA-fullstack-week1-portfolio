const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
});

const observerOpts = { threshold: 0.15 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOpts);

document.querySelectorAll(".card, .contact__inner").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(28px)";
  el.style.transition = "opacity .5s ease, transform .5s ease";
  observer.observe(el);
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card, .contact__inner").forEach((el) => {
    el.addEventListener("transitionend", () => {}, { once: true });
  });
});

const origObserve = observer;
const cards = document.querySelectorAll(".card, .contact__inner");
const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        cardObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

cards.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(28px)";
  el.style.transition = "opacity .55s ease, transform .55s ease";
  cardObserver.observe(el);
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__links a");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((a) => (a.style.color = ""));
        const active = document.querySelector(
          `.nav__links a[href="#${entry.target.id}"]`,
        );
        if (active) active.style.color = "#c8a96e";
      }
    });
  },
  { threshold: 0.4 },
);

sections.forEach((s) => sectionObserver.observe(s));
