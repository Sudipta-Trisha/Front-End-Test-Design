const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".monile-menu-container");

menuIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.remove("active");
});


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', event => {
        event.preventDefault();

        document.querySelectorAll('.error').forEach(error => error.textContent = '');
        formMessage.textContent = '';

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const contactNumber = document.getElementById('contactNumber').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;

        if (name === '') {
            document.getElementById('nameError').textContent = 'Name is required';
            isValid = false;
        }

        if (email === '') {
            document.getElementById('emailError').textContent = 'Email is required';
            isValid = false;
        } else if (!validateEmail(email)) {
            document.getElementById('emailError').textContent = 'Invalid email format';
            isValid = false;
        }

        if (contactNumber === '') {
            document.getElementById('contactNumberError').textContent = 'Contact number is required';
            isValid = false;
        } else if (!validatePhoneNumber(contactNumber)) {
            document.getElementById('contactNumberError').textContent = 'Invalid contact number';
            isValid = false;
        }

        if (message === '') {
            document.getElementById('messageError').textContent = 'Message is required';
            isValid = false;
        }

        if (isValid) {
            formMessage.textContent = 'Form submitted successfully!';
            form.reset();
        }
    });


    const validateEmail = email => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };


    const validatePhoneNumber = phone => {
        const re = /^[0-9]{10}$/;
        return re.test(String(phone));
    };
});
