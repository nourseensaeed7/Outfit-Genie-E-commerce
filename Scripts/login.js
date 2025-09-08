document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const registerBtn = document.querySelector('.register-btn');
    const loginBtn = document.querySelector('.login-btn');

    // Check if the buttons and container exist before adding event listeners
    if (registerBtn && container) {
        registerBtn.addEventListener('click', () => {
            container.classList.add('active');
        });
    }

    if (loginBtn && container) {
        loginBtn.addEventListener('click', () => {
            container.classList.remove('active');
        });
    }

    // Handle login form submission
    const loginForm = document.querySelector('.form_box.login form');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent form from refreshing the page

            const username = loginForm.querySelector('input[type="text"]').value.trim();
            const password = loginForm.querySelector('input[type="password"]').value;

            if (username && password) {
                // Simulate login success
                localStorage.setItem("loggedIn", "true");
                alert("You are logged in!");

                // Redirect to homepage (update path as needed)
                window.location.href = "../Pages/index.html";
            } else {
                alert("Please enter both username and password.");
            }
        });
    }});

    // Global logout function
    function logout(event) {
        if (event) event.preventDefault(); // Prevent link from navigating
        localStorage.removeItem("loggedIn"); // Clear login status
        alert("You have been logged out.");
        window.location.href = "../Pages/index.html"; // Redirect to homepage or login page
    }

    // Handle register form submission
    const registerForm = document.querySelector('.form_box.register form');
    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            window.location.href = "../Pages/user.html"; // Redirect to user profile page after registration
        });
    }
    // function PasswordVisibility(icon) {   
    //     // const input = icon.parentElement.querySelector('input[type="password"], input[type="text"]');

    //     const passwordInput = document.getElementById("password");
    //     const eyeIcon = document.getElementById("eye");
    
    //     if (passwordInput.type === "password") {
    //         passwordInput.type = "text";
    //         eyeIcon.classList.remove("fa-eye-slash");
    //         eyeIcon.classList.add("fa-eye");
    //     } else {
    //         passwordInput.type = "password";
    //         eyeIcon.classList.remove("fa-eye");
    //         eyeIcon.classList.add("fa-eye-slash");
    //     }
    // }

    function PasswordVisibility(formType) {
        const passwordInput = document.getElementById(`${formType}-password`);
        const eyeIcon = document.getElementById(`${formType}-eye`);
    
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            eyeIcon.classList.remove("fa-eye-slash");
            eyeIcon.classList.add("fa-eye");
        } else {
            passwordInput.type = "password";
            eyeIcon.classList.remove("fa-eye");
            eyeIcon.classList.add("fa-eye-slash");
        }
    }