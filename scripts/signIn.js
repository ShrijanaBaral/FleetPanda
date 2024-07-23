/** @format */
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const alertBox = document.getElementById("alertBox");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const loginData = {
        username: username,
        password: password,
      };

      fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.token) {
            alert("Login Successful");
            localStorage.setItem("isLoggedIn", "true");
            console.log(localStorage.getItem("loginData"));
            window.location.href = "../App/home.html";
          } else {
            alertBox.innerHTML =
              "<p>Invalid username or password. Please try again.</p>";
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alertBox.innerHTML =
            "<p>An error occurred. Please try again later.</p>";
        });
    });
  } else {
    console.error("Login form not found.");
  }
});
