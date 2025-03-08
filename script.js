document.addEventListener('DOMContentLoaded', () => {
    let imageIndex = 1;
    const totalImages = 4; // Número total de imagens
    const imageContainer = document.querySelector('.image');

    function rotateImage() {
        imageIndex = imageIndex < totalImages ? imageIndex + 1 : 1; // Alterna entre 1 e 5
        const newSrc = `src/Imagem-${imageIndex}.jpg`;
        console.log(`Trocando para: ${newSrc}`); // Log para depuração
        imageContainer.src = newSrc;
    }

    setInterval(rotateImage, 3000);

    // Add hover effect to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Add smooth scroll animation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add fade-in animation for elements
    const fadeInElements = document.querySelectorAll('.content, .card, .final-message');
    fadeInElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 200 * (index + 1));
    });

    // Add heartbeat animation to hearts
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        setInterval(() => {
            heart.style.transform = 'scale(1.2)';
            setTimeout(() => {
                heart.style.transform = 'scale(1)';
            }, 200);
        }, 2000);
    });
});
