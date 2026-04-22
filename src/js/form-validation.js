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

document.getElementById("cafe-form").addEventListener("submit", function () {
  event.preventDefault();

  if (form.checkValidity() && cafeFeaturesSelect.selectedOptions.length > 0) {
    successMessage.textContent =
      "Thank you for your submission! We will review the café and add it to our gallery if it meets the criteria.";

    form.reset();
    cafeNameError.textContent = "";
    cafeLocationError.textContent = "";
    cafeVibeError.textContent = "";
    cafeFeaturesError.textContent = "";
  } else {
    successMessage.textContent = "";

    if (cafeNameInput.checkValidity()) {
      cafeNameError.textContent = "";
    } else {
      cafeNameError.textContent = "Please enter a valid café name.";
    }

    if (cafeLocationInput.checkValidity()) {
      cafeLocationError.textContent = "";
    } else {
      cafeLocationError.textContent = "Please enter a valid location.";
    }

    if (cafeVibeInput.checkValidity()) {
      cafeVibeError.textContent = "";
    } else {
      cafeVibeError.textContent = "Please describe the vibe of the café.";
    }

    if (cafeFeaturesSelect.selectedOptions.length > 0) {
      cafeFeaturesError.textContent = "";
    } else {
      cafeFeaturesError.textContent = "Please select at least one feature.";
    }
  }
});
