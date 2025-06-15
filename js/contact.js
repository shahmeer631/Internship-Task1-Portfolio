// Form Elements
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMessage = document.getElementById('successMessage');

// Error Elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

// Email Validation Regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Form Validation
function validateForm() {
    let isValid = true;

    // Name Validation
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Email Validation
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Message Validation
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Message is required';
        isValid = false;
    } else {
        messageError.textContent = '';
    }

    return isValid;
}

// Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateForm()) {
        // Simulate form submission
        contactForm.style.display = 'none';
        successMessage.style.display = 'block';

        // Reset form after 3 seconds
        setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = 'block';
            successMessage.style.display = 'none';
        }, 3000);
    }
});

// Real-time Validation
nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
    } else {
        nameError.textContent = '';
    }
});

emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required';
    } else if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address';
    } else {
        emailError.textContent = '';
    }
});

messageInput.addEventListener('input', () => {
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Message is required';
    } else {
        messageError.textContent = '';
    }
}); 