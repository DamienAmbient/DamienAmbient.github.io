document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const errorMessages = document.getElementById("errorMessages");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function isValidPassword(password) {
            const passwordRegex =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
            return passwordRegex.test(password);
        }

        function displayError(message) {
            const errorMessage = document.createElement("p");
            errorMessage.textContent = message;
            errorMessage.style.color = "red";
            errorMessages.appendChild(errorMessage);
        }

        errorMessages.textContent = "";

        if (username === "") {
            displayError("ім’я користувача не може бути пустим");
            return;
        }

        if (!isValidEmail(email)) {
            displayError("електронна адреса має бути у правильному форматі");
            return;
        }

        if (password.length < 8) {
            displayError("пароль має містити принаймні 8 символів,");
            return;
        }

        if (!isValidPassword(password)) {
            displayError(
                "пароль має містити принаймні одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ."
            );
            return;
        }

        form.reset();
        alert("Registration successful!");
    });
});
