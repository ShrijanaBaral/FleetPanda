import { request } from './request.js';

document.addEventListener("DOMContentLoaded", function () {
  const signUpForm = document.getElementById("signUpForm"); 
  if (signUpForm) {
    signUpForm.addEventListener("submit", function (event) { 
      event.preventDefault();
      const username = document.getElementById("username").value;
      const email = document.getElementById("signUpEmail").value;
      const password = document.getElementById("password").value;
      const age = document.getElementById("signUpAge").value;
      const address = document.getElementById("signUpAddress").value;

      const signUpData = {
        username: username,
        password: password,
        email: email,
        age: age, 
        address: address 
      };

      request('POST', 'https://reqres.in/api/login', signUpData)
      .then(data => {
        if (data.token) {
          alert("Login Successful");
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("username", username);
          console.log(signUpData); 
          window.location.href = 'home.html'; 
        } else {
          document.getElementById("alertBox").innerHTML = "<p>Invalid username or password. Please try again.</p>"; 
        }
      })
      .catch(error => {
        console.error("Error:", error);
        document.getElementById("alertBox").innerHTML = "<p>An error occurred. Please try again later.</p>"; 
      });
    });
  } else {
    console.error("Sign up form not found.");
  }
});
