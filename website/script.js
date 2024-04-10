// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        window.scrollTo({
            top: section.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Form validation for query section
document.getElementById('query-form').addEventListener('submit', function(e) {
    // Clear existing error messages
    clearErrorMessages();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate name
    if (name === '') {
        showError('name', 'Please enter your name.');
        e.preventDefault();
    }

    // Validate email
    if (email === '') {
        showError('email', 'Please enter your email address.');
        e.preventDefault();
    } else if (!isValidEmail(email)) {
        showError('email', 'Please enter a valid email address.');
        e.preventDefault();
    }

    // Validate message
    if (message === '') {
        showError('message', 'Please enter your message.');
        e.preventDefault();
    } else if (message.length < 10) {
        showError('message', 'Message should be at least 10 characters long.');
        e.preventDefault();
    }
});

// Function to display error message
function showError(inputId, message) {
    const inputField = document.getElementById(inputId);
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.innerText = message;
    inputField.parentNode.insertBefore(errorElement, inputField.nextSibling);
}

// Function to clear error messages
function clearErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(errorMessage => {
        errorMessage.remove();
    });
}

// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// JavaScript for Lightbox Modal
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('lightbox-modal');
    const images = document.querySelectorAll('.lightbox-link');
    const modalImg = document.getElementById('lightbox-image');
    const closeBtn = document.getElementsByClassName('close')[0];
    const prevBtn = document.getElementsByClassName('prev')[0];
    const nextBtn = document.getElementsByClassName('next')[0];
    let currentImageIndex = 0;

    images.forEach((image, index) => {
        image.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            currentImageIndex = index;
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    prevBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        modalImg.src = images[currentImageIndex].src;
    });

    nextBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        modalImg.src = images[currentImageIndex].src;
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});


// Enquiry light-box model
document.addEventListener('DOMContentLoaded', function() {
    const enquiryLinks = document.querySelectorAll('.enquiry-link');
    const enquiryModal = document.getElementById('enquiry-modal');
    const closeModalBtn2 = document.querySelector('.close2');

    enquiryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            enquiryModal.style.display = 'block';
        });
    });

    // Close the modal when clicking the close button
    closeModalBtn2.addEventListener('click', function() {
        enquiryModal.style.display = 'none'; 
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target == enquiryModal) {
            enquiryModal.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const orderLinks = document.querySelectorAll('.order-link');
    const orderModal = document.getElementById('order-modal');
    const closeModalBtn3 = document.querySelector('.close3');

    orderLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            orderModal.style.display = 'block'; 
        });
    });

    // Close the modal when clicking the close button
    closeModalBtn3.addEventListener('click', function() {
        orderModal.style.display = 'none'; 
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target == orderModal) {
            orderModal.style.display = 'none'; 
        }
    });
});