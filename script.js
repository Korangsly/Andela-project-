" Use strict";
const showPassword = document.querySelector(".eye");
const showPasswordL = document.querySelector(".eye2");
const password = document.querySelector(".password-enter");
const passwordL = document.querySelector(".password-enter2");
const eyeEL = document.querySelector(".eye");
const eyeEL2 = document.querySelector(".eye2");
const eye0 = "/assets/eye--0.png";
const eye1 = "/assets/eye--1.png";

const show = function () {
  if (password.type === "password") {
    eyeEL.src = eye1;
    password.type = "text";
  } else {
    eyeEL.src = eye0;
    password.type = "password";
  }
};
const showL = function () {
  if (passwordL.type === "password") {
    eyeEL2.src = eye1;
    passwordL.type = "text";
  } else {
    eyeEL2.src = eye0;
    passwordL.type = "password";
  }
};
showPassword.addEventListener("click", show);
showPasswordL.addEventListener("click", showL);
