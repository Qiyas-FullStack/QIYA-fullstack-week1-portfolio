// Find the button on the page
const button = document.querySelector('.btn-primary');

// Trigger the popup as soon as the mouse hovers over the button
button.addEventListener('mouseover', () => {
    alert('Thank you for visiting my portfolio! Let\'s build something great together.');
});