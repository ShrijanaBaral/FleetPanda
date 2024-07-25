import { request } from './request.js';

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("isLoggedIn") === "true") {
    updateNavbar();
    displayExtraContent();
  }
});
  const logoutLink = document.createElement("a");
  logoutLink.href = "#";
  logoutLink.innerText = "Logout";
  logoutLink.addEventListener("click", function () {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    window.location.href = "index.html";
  });
  navbarLinks.appendChild(logoutLink);
}


