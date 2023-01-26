"use strict";

// Selects Elements
const heroSection = document.querySelector(".hero__section");
const emailInput = document.querySelector("#email-input");
const errorMessage = document.querySelector(".error--message");
const submit = document.querySelector(".submit");
const modalMessage = document.querySelector(".sucess--modal");

const overlay = document.querySelector(".overlay");
// Adds an event Listener to the button which verifies the email address
submit.addEventListener("click", function (e) {
  // Prevents Default Refreshing
  e.preventDefault();

  // Getting the value of the user's email
  const email = emailInput.value;

  // Email regex validation
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // IF regex is false, do this
  if (!emailRegex.test(email)) {
    errorMessage.style.display = "block";
    setTimeout(function () {
      errorMessage.style.display = "none";
    }, 2000);
  }
  // If regex is true, do this
  else {
    errorMessage.style.display = "none";
    modalMessage.classList.toggle("toggle--display");
    overlay.style.display = "block";
    emailInput.value = "";

    // Removes overlay after 2 seconds
    setTimeout(function () {
      modalMessage.classList.toggle("toggle--display");
      overlay.style.display = "none";
    }, 2000);
  }
});
