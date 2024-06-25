window.addEventListener('DOMContentLoaded', (event) => {
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    
    function adjustNav() {
        const headerHeight = header.offsetHeight; // Se recalcula cada vez que se llama a la función
        if (window.pageYOffset > headerHeight) {
            nav.classList.add('fixed');
            nav.style.top = "0px"; // Posiciona la barra de navegación en la parte superior
        } else {
            nav.classList.remove('fixed');
            nav.style.top = `${headerHeight}px`; // Mantiene la barra debajo del encabezado
        }
    }

    window.addEventListener('scroll', adjustNav);
    adjustNav(); // Llama inicialmente para establecer la posición correcta
});
