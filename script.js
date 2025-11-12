document.addEventListener('DOMContentLoaded', function() {

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    AOS.init({
        duration: 1000, 
        once: true,     
        offset: 100,    
    });

    const typed = new Typed('#typed-text', {
        strings: ['Sua parceira em mobilidade.', 'A solução para sua frota.', 'Agilidade e segurança.'],
        typeSpeed: 50,   
        backSpeed: 30,   
        loop: true,      
        backDelay: 2000, 
    });
    const swiper = new Swiper('.frota-slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });

});