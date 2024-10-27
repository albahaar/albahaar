document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('enrollment-form');
    const courseSelect = document.getElementById('course-select');
    const additionalQuestions = document.getElementById('additional-questions');
    const successModal = document.getElementById('success-modal');
    const closeModalBtn = document.getElementById('close-modal');

    // Function to validate the form fields
    function validateForm() {
        let valid = true;
        const requiredFields = document.querySelectorAll('.required');
        
        requiredFields.forEach(field => {
            const errorMessage = field.nextElementSibling;
            if (!field.value.trim()) {
                valid = false;
                errorMessage.textContent = `${field.placeholder} is required.`;
                errorMessage.classList.add('visible');
            } else {
                errorMessage.textContent = '';
                errorMessage.classList.remove('visible');
            }

            // Special validation for email field
            if (field.type === 'email' && !validateEmail(field.value)) {
                valid = false;
                errorMessage.textContent = 'Please enter a valid email.';
                errorMessage.classList.add('visible');
            }
        });

        return valid;
    }

    // Function to validate email format
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Display additional questions based on course selection
    courseSelect.addEventListener('change', function() {
        const selectedCourse = courseSelect.value;
        if (selectedCourse === 'quran') {
            additionalQuestions.innerHTML = `
                <label for="tajweed-level">What is your current level in Tajweed?</label>
                <input type="text" id="tajweed-level" placeholder="Beginner, Intermediate, Advanced" class="required">
                <span class="error-message"></span>
            `;
        } else if (selectedCourse === 'english') {
            additionalQuestions.innerHTML = `
                <label for="english-proficiency">What is your current English proficiency?</label>
                <input type="text" id="english-proficiency" placeholder="Beginner, Intermediate, Advanced" class="required">
                <span class="error-message"></span>
            `;
        } else if (selectedCourse === 'pashto') {
            additionalQuestions.innerHTML = `
                <label for="pashto-level">What is your current level in Pashto?</label>
                <input type="text" id="pashto-level" placeholder="Beginner, Intermediate, Advanced" class="required">
                <span class="error-message"></span>
            `;
        } else {
            additionalQuestions.innerHTML = '';
        }
    });

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission to server

        if (validateForm()) {
            successModal.classList.add('open'); // Open success modal if form is valid
        }
    });

    // Close modal when the user clicks the "Close" button
    closeModalBtn.addEventListener('click', function() {
        successModal.classList.remove('open');
    });
});
