import { request } from './request.js';
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("isLoggedIn") === "true") {
    updateNavbar();
  }
});

function updateNavbar() {
  const navbarLinks = document.querySelector(".navbar-links");
  const loginLink = navbarLinks.querySelector('a[href="App/signin.html"]');
  if (loginLink) {
    loginLink.remove();
  }

  const logoutLink = document.createElement("a");
  logoutLink.href = "#";
  logoutLink.innerText = "Logout";
  logoutLink.addEventListener("click", function () {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "../index.html";
    console.log(loginData);
    console.log(signUpData);
  });
  navbarLinks.appendChild(logoutLink);
}