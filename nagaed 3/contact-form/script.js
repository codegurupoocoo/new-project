// Function to validate the form inputs
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const successMessage = document.getElementById('successMessage');

    // Reset previous success message
    successMessage.classList.add('hidden');

    if (name === "") {
        alert("Name is required.");
        return false;
    }
    if (email === "") {
        alert("Email is required.");
        return false;
    }
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (message === "") {
        alert("Message is required.");
        return false;
    }

    // Display success message and log data to the console
    successMessage.classList.remove('hidden');
    console.log({
        name: name,
        email: email,
        message: message
    });

    // Prevent form from submitting and refreshing the page
    return false;
}

// Function to validate email format using regex
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
