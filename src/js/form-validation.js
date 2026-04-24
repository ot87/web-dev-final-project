const form = document.getElementById("cafe-form");

const cafeNameInput = document.getElementById("cafe-name");
const cafeLocationInput = document.getElementById("cafe-location");
const cafeVibeInput = document.getElementById("cafe-vibe");
const cafeFeaturesSelect = document.getElementById("cafe-features");

const cafeNameError = document.getElementById("cafe-name-error");
const cafeLocationError = document.getElementById("cafe-location-error");
const cafeVibeError = document.getElementById("cafe-vibe-error");
const cafeFeaturesError = document.getElementById("cafe-features-error");

const successMessage = document.getElementById("success-message");

const resetErrorMessages = () => {
  cafeNameError.textContent = "";
  cafeNameError.classList.remove("form-error");
  cafeLocationError.textContent = "";
  cafeLocationError.classList.remove("form-error");
  cafeVibeError.textContent = "";
  cafeVibeError.classList.remove("form-error");
  cafeFeaturesError.textContent = "";
  cafeFeaturesError.classList.remove("form-error");
};

document.getElementById("cafe-form").addEventListener("submit", function () {
  event.preventDefault();

  if (form.checkValidity() && cafeFeaturesSelect.selectedOptions.length > 0) {
    successMessage.textContent =
      "Thank you for your submission! We will review the café and add it to our gallery if it meets the criteria.";
    successMessage.classList.add("success-message");

    form.reset();
  } else {
    successMessage.textContent = "";
    successMessage.classList.remove("success-message");

    if (cafeNameInput.checkValidity()) {
      cafeNameError.textContent = "";
      cafeNameError.classList.remove("form-error");
    } else {
      cafeNameError.textContent = "Please enter a valid café name.";
      cafeNameError.classList.add("form-error");
    }

    if (cafeLocationInput.checkValidity()) {
      cafeLocationError.textContent = "";
      cafeLocationError.classList.remove("form-error");
    } else {
      cafeLocationError.textContent = "Please enter a valid location.";
      cafeLocationError.classList.add("form-error");
    }

    if (cafeVibeInput.checkValidity()) {
      cafeVibeError.textContent = "";
      cafeVibeError.classList.remove("form-error");
    } else {
      cafeVibeError.textContent = "Please describe the vibe of the café.";
      cafeVibeError.classList.add("form-error");
    }

    if (cafeFeaturesSelect.selectedOptions.length > 0) {
      cafeFeaturesError.textContent = "";
      cafeFeaturesError.classList.remove("form-error");
    } else {
      cafeFeaturesError.textContent = "Please select at least one feature.";
      cafeFeaturesError.classList.add("form-error");
    }
  }
});

document
  .getElementById("cafe-form")
  .addEventListener("reset", resetErrorMessages);
