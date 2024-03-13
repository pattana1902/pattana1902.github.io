document.addEventListener('DOMContentLoaded', function () {

    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    const toggleButton = document.getElementById('toggleGallery');
    const gallery = document.querySelector('.gallery');

    if (toggleButton && gallery) {
        toggleButton.addEventListener('click', function () {
            gallery.classList.toggle('hidden');
        });
    }

});
