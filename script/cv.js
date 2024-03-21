document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const typingText = document.getElementById('typing-text');

    menuToggle.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });

    // Function to simulate typing animation
    function typeEffect(element, speed) {
        const text = element.innerHTML;
        element.innerHTML = '';

        let i = 0;
        const timer = setInterval(function () {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }

    // Call the typing effect function
    typeEffect(typingText, 100);
});
