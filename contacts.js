document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const successModal = document.createElement('div');
    const errorModal = document.createElement('div');

    // Create and style the modals for success and error messages
    successModal.id = 'success-modal';
    successModal.innerHTML = `
        <div class="modal-content">
            <h3>Thank you for contacting us!</h3>
            <p>Your message has been sent successfully. We will get back to you shortly.</p>
            <button class="close-modal">Close</button>
        </div>`;
    document.body.appendChild(successModal);

    errorModal.id = 'error-modal';
    errorModal.innerHTML = `
        <div class="modal-content">
            <h3>Oops! Something went wrong.</h3>
            <p>There was a problem sending your message. Please try again later.</p>
            <button class="close-modal">Close</button>
        </div>`;
    document.body.appendChild(errorModal);

    // Close modal function
    const closeModal = (modal) => {
        modal.classList.remove('visible');
    };

    // Open modal function
    const openModal = (modal) => {
        modal.classList.add('visible');
    };

    // Event listener for closing modals
    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', () => {
            closeModal(successModal);
            closeModal(errorModal);
        });
    });

    // Form validation function
    const validateForm = () => {
        let isValid = true;

        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Name is required');
            isValid = false;
        } else {
            clearError(nameInput);
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            showError(emailInput, 'Enter a valid email address');
            isValid = false;
        } else {
            clearError(emailInput);
        }

        if (messageInput.value.trim() === '') {
            showError(messageInput, 'Message is required');
            isValid = false;
        } else {
            clearError(messageInput);
        }

        return isValid;
    };

    // Show error message
    const showError = (input, message) => {
        const errorSpan = input.nextElementSibling;
        input.classList.add('error');
        if (!errorSpan) {
            const span = document.createElement('span');
            span.classList.add('error-message');
            span.textContent = message;
            input.parentNode.appendChild(span);
        } else {
            errorSpan.textContent = message;
        }
    };

    // Clear error message
    const clearError = (input) => {
        input.classList.remove('error');
        const errorSpan = input.nextElementSibling;
        if (errorSpan) {
            errorSpan.remove();
        }
    };

    // Form submission with AJAX
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        if (validateForm()) {
            // Simulating an AJAX form submission (this would be replaced with actual AJAX request)
            setTimeout(() => {
                openModal(successModal);
                form.reset(); // Clear the form
            }, 1000); // Simulate form submission delay
        } else {
            openModal(errorModal);
        }
    });
});
