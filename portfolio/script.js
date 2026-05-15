const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.from_name.value.trim();
  const email = form.from_email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    showToast("Please fill in all fields. ⚠️");
    return;
  }

  const mailto = `mailto:estifanosdefaru8@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}`;

  window.location.href = mailto;

  form.reset();
  showToast("Opening your email app... ✅");
});

function showToast(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.classList.add("toast");

  document.body.appendChild(toast);
  setTimeout(() => (toast.style.opacity = "1"), 10);
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}
