function validateEmail() {
    var emailInput = document.getElementById("emailInput");
    var emailError = document.getElementById("emailError");
    var signupForm = document.querySelector(".newsletter-form");
    var thanksSection = document.querySelector(".thanks-success");
    var emailSpan = document.getElementById("email");
    //Regular Expression :)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = "Valid email address required";
      emailInput.classList.add("invalid");
    } else {
      emailError.textContent = "";
      emailInput.classList.remove("invalid");
      signupForm.style.display = "none";
      thanksSection.style.display = "flex";
      emailSpan.textContent = emailInput.value;
    }
  }
function closeMessage() {
    var thanksSection = document.querySelector(".thanks-success");
    thanksSection.style.display = "none";
}