document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    clearAlert();
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();

    if (username === '') {
        displayAlert('Please enter your username');
        return;
    }

    if (password === '') {
        displayAlert('Please enter your password');
        return;
    }

    alert('Logged In Successfully');
    document.getElementById('feedbackForm').reset();
});

function isValidEmail(email) {
 
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function displayAlert(message) {
    var alertBox = document.getElementById('alertBox');
    var alertMsg = document.createElement('div');
    alertMsg.classList.add('alert');
    alertMsg.textContent = message;
    alertBox.appendChild(alertMsg);
}

function clearAlert() {
    var alertBox = document.getElementById('alertBox');
    alertBox.innerHTML = '';
}
document.getElementById('signUpButton').addEventListener('click', function() {
    window.location.href = 'signUp.html';
});
document.getElementById('signUpButton').addEventListener('click', function() {
    window.location.href = 'signUp.html';
});

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('Age').value;
    const email = document.getElementById('email').value;
    const contactNo = document.getElementById('contactNo').value;
    const companyName = document.getElementById('CompanyName').value;
    const feedback = document.getElementById('feedback').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    const loginData = {
        username: username,
        password: password,
        age: age,
        email: email,
        contactNo: contactNo,
        companyName: companyName,
        feedback: feedback,
        rememberMe: rememberMe
    };

    fetch('https://api.example.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Handle successful login (e.g., redirect to homepage)
            window.location.href = 'homepage.html';
        } else {
            // Display error message
            document.getElementById('alertBox').innerText = data.message;
            document.getElementById('alertBox').classList.add('error');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('alertBox').innerText = 'An error occurred.';
        document.getElementById('alertBox').classList.add('error');
    });
});
