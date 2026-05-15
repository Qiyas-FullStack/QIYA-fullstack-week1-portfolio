const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


const text = [
    "Full-Stack Developer",
    "Networking Enthusiast",
    "IoT Learner",
    "Problem Solver"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".typing-text").textContent = letter;

    if (letter.length === currentText.length) {

        count++;
        index = 0;

        setTimeout(type, 1000);

    } else {

        setTimeout(type, 100);
    }

})();


const form = document.querySelector("form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Message Sent Successfully!");

    form.reset();

});