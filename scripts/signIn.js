import { request } from './request.js';
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const loginData = {
        username: username,
        password: password,
      };

      request('POST', 'https://reqres.in/api/login', loginData)
        .then(data => {
          if (data.token) {
            alert("Login Successful");
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("username", username);
            console.log(loginData);
            window.location.href = 'home.html';
          } else {
            alertBox.innerHTML = "<p>Invalid username or password. Please try again.</p>";
          }
        })
        .catch(error => {
          console.error("Error:", error);
          alertBox.innerHTML = "<p>An error occurred. Please try again later.</p>";
        });
    });
  } else {
    console.error("Login form not found.");
  }
});
