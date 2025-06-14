document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".newsletter-cta__form");
  const emailInput = document.getElementById("email");
  const newsletterCta = document.getElementById("newsletterCta");
  const successPopup = document.getElementById("successPopup");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isValid = emailInput.checkValidity();

    if (!isValid) {
      emailInput.classList.add("error");
      return;
    }

    newsletterCta.style.display = "none";
    successPopup.classList.remove("hidden");
  });

  const dismissBtn = document.getElementById("dismissBtn");
  dismissBtn.addEventListener("click", () => {
    successPopup.classList.add("hidden");
    newsletterCta.style.display = "block";
    form.reset();
  });
  
});