"use strict";

// Selects Elements
const emailInput = document.querySelector("#email-input");
const errorMessage = document.querySelector(".error--message");
const submit = document.querySelector(".submit");

// Adds an event Listener to the button which verifies the email address
submit.addEventListener("click", function (e) {
  e.preventDefault();
  const email = emailInput.value;
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegex.test(email)) {
    errorMessage.style.display = "block";
    setTimeout(function () {
      errorMessage.style.display = "none";
    }, 2000);
  } else {
    errorMessage.style.display = "none";
  }
});
