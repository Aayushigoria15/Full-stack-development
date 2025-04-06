document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    clearErrors();

    const isValid = validateRequiredFields([
      { id: "email", message: "Email is required" },
      { id: "password", message: "Password is required" },
      { id: "repassword", message: "Re-type Password is required" },
      { id: "mobile", message: "Mobile number is required" },
      { id: "firstName", message: "First name is required" },
      { id: "lastName", message: "Last name is required" },
      { id: "country", message: "Please select a country" },
    ]);

    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
      showError("genderError", "Please select gender");
    }

    const terms = document.getElementById("terms");
    if (!terms.checked) {
      showError("termsError", "You must agree to terms and conditions");
    }

    const password = document.getElementById("password").value;
    const repassword = document.getElementById("repassword").value;

    if (password && repassword && password !== repassword) {
      showError("repasswordError", "Passwords do not match");
    }

    if (
      document.querySelectorAll(".error:empty").length ===
      document.querySelectorAll(".error").length
    ) {
      alert("Registration successful!");
      this.reset();
    }
  });

function validateRequiredFields(fields) {
  let allValid = true;
  fields.forEach((field) => {
    const value = document.getElementById(field.id).value.trim();
    if (!value) {
      showError(field.id + "Error", field.message);
      allValid = false;
    }
  });
  return allValid;
}

function showError(id, message) {
  const errorDiv = document.getElementById(id);
  errorDiv.textContent = message;
}

function clearErrors() {
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
}

// Allow only numbers in mobile field
document.getElementById("mobile").addEventListener("keydown", function (e) {
  const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Tab"];
  if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
    e.preventDefault();
  }
});
