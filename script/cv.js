// Event listener for DOMContentLoaded event to ensure the document is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Selecting the menu toggle button and sidebar elements
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    // Selecting the element for the typing effect
    const typingText = document.getElementById('typing-text');

    // Event listener for the menu toggle button click
    menuToggle.addEventListener('click', function () {
        // Toggling the 'active' class on the sidebar
        sidebar.classList.toggle('active');
    });

    // Function to simulate typing animation
    function typeEffect(element, speed) {
        // Getting the text content of the element
        const text = element.innerHTML;
        // Clearing the element's content
        element.innerHTML = '';

        // Initializing index for iterating through the text
        let i = 0;
        // Setting up a timer for the typing effect
        const timer = setInterval(function () {
            // Checking if there are characters left to type
            if (i < text.length) {
                // Appending the next character to the element's content
                element.innerHTML += text.charAt(i);
                // Moving to the next character
                i++;
            } else {
                // Clearing the timer when all characters are typed
                clearInterval(timer);
            }
        }, speed);
    }

    // Calling the typing effect function with the specified speed
    typeEffect(typingText, 100);
});
