document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".newsletter-cta__form");
  const emailInput = document.getElementById("email");
  const newsletterCta = document.getElementById("newsletterCta");
  const successPopup = document.getElementById("successPopup");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

   const emailValue = emailInput.value.trim();
  const isValid = emailValue !== "" && emailValue.includes("@");

    if (!isValid) {
      emailInput.classList.add("error");
      emailInput.nextElementSibling.style.display = "block";
      return;
    }

    newsletterCta.style.display = "none";
    successPopup.classList.remove("hidden");
  });

  const dismissBtn = document.getElementById("dismissBtn");
  dismissBtn.addEventListener("click", () => {
    successPopup.classList.add("hidden");
    newsletterCta.style.display = "";
    form.reset();
    emailInput.classList.remove("error");
  emailInput.nextElementSibling.style.display = "none";
  });
  
});