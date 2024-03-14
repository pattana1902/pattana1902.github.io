document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const typingText = document.getElementById('typing-text');
    const showProjectsSection = document.querySelector('.show-projects');

    menuToggle.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });

    const projects = [
        { name: 'Arduino Robot Line Follower', description: 'This repository contains the code and resources for a line tracing robot built using an Arduino Nano, 4 sensors, and 2 motors. The robot is programmed to follow a line on the ground using the sensor inputs to adjust its movements.', imageUrl: 'https://i.ibb.co/r0NkgVj/Line-Robot.jpg' },
        { name: 'Project 2', description: 'Ut fringilla libero sed urna accumsan, in varius magna feugiat. In hac habitasse platea dictumst.', imageUrl: 'https://via.placeholder.com/300' },
        { name: 'Project 3', description: 'Integer nec eros eu purus ultricies vehicula. Sed consequat ultricies est nec feugiat.', imageUrl: 'https://via.placeholder.com/300' }
        // Add more projects as needed
    ];

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

    function displayProjects() {
        projects.forEach(project => {
            const projectCard = createProjectCard(project);
            showProjectsSection.appendChild(projectCard);
        });
    }

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
