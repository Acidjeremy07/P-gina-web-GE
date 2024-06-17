// Script para manejar la interactividad, como un menú responsivo
document.addEventListener('DOMContentLoaded', function() {
    const navElements = document.querySelectorAll('nav ul li a');
    navElements.forEach(el => {
        el.addEventListener('click', function() {
            const sectionToGo = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: sectionToGo.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
