document.addEventListener('DOMContentLoaded', function() {
    // Initialize the form tabs
    showForm('login');

    // Event listeners for tab buttons
    document.getElementById('login-tab').addEventListener('click', function() {
        showForm('login');
    });

    document.getElementById('register-tab').addEventListener('click', function() {
        showForm('register');
    });

    // Function to show the correct form based on the type
    function showForm(formType) {
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        const loginTab = document.getElementById('login-tab');
        const registerTab = document.getElementById('register-tab');

        if (formType === 'login') {
            loginForm.classList.add('active');
            registerForm.classList.remove('active');
            loginTab.classList.add('active');
            registerTab.classList.remove('active');
        } else if (formType === 'register') {
            loginForm.classList.remove('active');
            registerForm.classList.add('active');
            loginTab.classList.remove('active');
            registerTab.classList.add('active');
        }
    }
});
