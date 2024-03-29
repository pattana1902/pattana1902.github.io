// Wait for the DOM content to be fully loaded before executing JavaScript code
document.addEventListener('DOMContentLoaded', function () {
    // Select the menu toggle button, sidebar, typing text, and project section
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const typingText = document.getElementById('typing-text');
    const showProjectsSection = document.querySelector('.show-projects');

    // Event listener for the menu toggle button to show/hide the sidebar
    menuToggle.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });

    // Array containing project information
    const projects = [
        { name: 'Arduino Robot Line Follower', description: 'This repository contains the code and resources for a line tracing robot built using an Arduino Nano, 4 sensors, and 2 motors.', imageUrl: '../images/Line Robot.webp', link: 'https://github.com/pattana1902/Arduino-Robot-Line-Follower-' },
        { name: 'ESP32 Smart Door', description: 'This repository contains the code and resources for building a smart door system using an ESP32 microcontroller, fingerprint sensor, keypad, and relay module.', imageUrl: '../images/ESP32-Fingerprint-Lock.webp', link: 'https://github.com/pattana1902/ESP32-Smart-Door' },
        { name: 'LIFF Line Collect Data ', description: 'LIFF applications are web apps integrated with the LINE messaging platform, allowing developers to create engaging experiences within the LINE app ecosystem.', imageUrl: '../images/screencapture-quickstart-liff-vescp7-stackblitz-io-2024-03-21-02_19_50.webp', link: 'https://github.com/pattana1902/LIFF-Line-Collect-Data?tab=readme-ov-file' }
    ];

    // Function to create a project card element
    function createProjectCard(project) {
        const card = document.createElement('div');
        card.classList.add('project-card');

        const image = document.createElement('img');
        image.src = project.imageUrl;
        image.alt = project.name;

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const projectName = document.createElement('h3');
        projectName.textContent = project.name;

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        // Create a link to view the project
        const projectLink = document.createElement('a');
        projectLink.href = project.link; // Add a 'link' property to your project object
        projectLink.textContent = 'View Project';
        projectLink.target = '_blank'; // Open link in a new tab

        cardContent.appendChild(projectName);
        cardContent.appendChild(projectDescription);
        cardContent.appendChild(projectLink); // Append the project link

        card.appendChild(image);
        card.appendChild(cardContent);

        return card;
    }

    // Function to display projects on the webpage
    function displayProjects() {
        projects.forEach(project => {
            const projectCard = createProjectCard(project);
            showProjectsSection.appendChild(projectCard);
        });
    }

    // Call the function to display projects
    displayProjects();

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
