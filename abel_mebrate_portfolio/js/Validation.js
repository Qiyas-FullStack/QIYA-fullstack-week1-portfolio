// ==================== VALIDATION.JS - CONTACT FORM ====================

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (!form) {
    console.error("❌ contactForm not found! Check form id.");
    return;
  }

  // 🔧 SELECTORS (now matching your HTML/CSS)
  const inputs = form.querySelectorAll(".text-input");
  const popupOverlay = document.getElementById("success-popup"); // ✅ The overlay wrapper
  const popupContent = popupOverlay?.querySelector(".popup-content");
  const formFields = form.querySelector(".text-fields");
  const submitBtn = form.querySelector(".btn-dark");
  const backLink = document.getElementById("popup-back");

  // Ensure popup starts hidden (CSS handles this, but JS fallback)
  if (popupOverlay) {
    popupOverlay.classList.remove("show");
    popupOverlay.setAttribute("aria-hidden", "true");
  }

  // REAL-TIME VALIDATION
  inputs.forEach((input) => {
    input.addEventListener("blur", () => validateField(input));
    input.addEventListener("input", () => {
      if (
        input.classList.contains("error-input") ||
        input.classList.contains("success-input")
      ) {
        validateField(input);
      }
    });
  });

  // FORM SUBMIT
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateForm()) {
      showSuccessPopup();
    }
  });

  // VALIDATION FUNCTION
  function validateField(field) {
    const errorEl = field.parentElement?.querySelector(".error-message");
    field.classList.remove("success-input", "error-input");
    if (errorEl) errorEl.textContent = "";
    field.setAttribute("aria-invalid", "false");

    if (field.required && field.value.trim() === "") {
      if (errorEl) errorEl.textContent = `${field.placeholder} is required`;
      field.classList.add("error-input");
      field.setAttribute("aria-invalid", "true");
      return false;
    }

    if (field.type === "email" && field.value.trim() !== "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(field.value.trim())) {
        if (errorEl) errorEl.textContent = "Please enter a valid email address";
        field.classList.add("error-input");
        field.setAttribute("aria-invalid", "true");
        return false;
      }
    }

    if (field.id === "message" && field.value.trim().length < 10) {
      if (errorEl)
        errorEl.textContent = "Message must be at least 10 characters";
      field.classList.add("error-input");
      field.setAttribute("aria-invalid", "true");
      return false;
    }

    if (field.id === "phone" && field.value.trim() !== "") {
      const phoneRegex = /^\+?[\d\s\-().]{7,15}$/;
      if (!phoneRegex.test(field.value.trim())) {
        if (errorEl) errorEl.textContent = "Please enter a valid phone number";
        field.classList.add("error-input");
        field.setAttribute("aria-invalid", "true");
        return false;
      }
    }

    if (field.value.trim() !== "") {
      field.classList.add("success-input");
    }
    return true;
  }

  function validateForm() {
    let isValid = true;
    inputs.forEach((input) => {
      if (!validateField(input)) isValid = false;
    });
    return isValid;
  }

  // SHOW SUCCESS POPUP
  function showSuccessPopup() {
    // Hide form UI
    if (formFields) formFields.style.display = "none";
    if (submitBtn) submitBtn.style.display = "none";

    // Update lead text after submit success
    const leadEl = document.getElementById("contact-lead");
    if (leadEl) leadEl.textContent = "Message Sent Successfully";

    // Show popup using your CSS animation classes
    if (popupOverlay) {
      popupOverlay.classList.add("show");
      popupOverlay.setAttribute("aria-hidden", "false");
      // Optional: trap focus inside popup for accessibility
      popupContent?.focus();
    }

    // Reset form
    form.reset();
    inputs.forEach((input) => {
      input.classList.remove("success-input", "error-input");
      input.setAttribute("aria-invalid", "false");
      const errorEl = input.parentElement?.querySelector(".error-message");
      if (errorEl) errorEl.textContent = "";
    });
  }

  //  BACK LINK HANDLER
  if (backLink) {
    backLink.addEventListener("click", (e) => {
      e.preventDefault();

      // Hide popup
      if (popupOverlay) {
        popupOverlay.classList.remove("show");
        popupOverlay.setAttribute("aria-hidden", "true");
      }

      // Restore form
      if (formFields) formFields.style.display = "grid"; // matches your CSS Grid
      if (submitBtn) submitBtn.style.display = "inline-block";

      // Optional: navigate after animation completes
      setTimeout(() => {
        window.location.href = backLink.href;
      }, 300); // matches your CSS transition duration
    });
  }

  // =============== ESC KEY TO CLOSE POPUP ===============
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && popupOverlay?.classList.contains("show")) {
      backLink?.click(); // reuse back link logic
    }
  });
});
