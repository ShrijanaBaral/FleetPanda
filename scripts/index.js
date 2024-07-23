/** @format */

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Check login status and update navbar
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("isLoggedIn") === "true") {
    updateNavbar();
    displayExtraContent();
  }
});

function updateNavbar() {
  const navbarLinks = document.querySelector(".navbar-links");
  const username = localStorage.getItem("username");

  // Remove login link
  const loginLink = navbarLinks.querySelector('a[href="App/signin.html"]');
  if (loginLink) {
    loginLink.remove();
  }

  // Add username link
  const usernameLink = document.createElement("a");
  usernameLink.href = "#";
  usernameLink.innerText = username;
  navbarLinks.appendChild(usernameLink);

  // Add logout link
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

function displayExtraContent() {
  const main = document.getElementById("main");
  const extraSection = document.createElement("div");
  extraSection.id = "blog";
  extraSection.classList.add("section");
  extraSection.innerHTML = `

    <div class="container">
      <h2>Blogs</h2>
      <div class="blog-post">
        <h3>Revolutionizing Fuel Distribution</h3>
        <p>At FleetPanda, we are committed to transforming the fuel distribution industry through innovative technology and exceptional service. Our latest developments aim to enhance efficiency and streamline operations for our clients.</p>
        <a href="App/blog.html" class="read-more">Read More</a>
      </div>
    </div>`;
  main.appendChild(extraSection);
}
