// Initialize Swiper with AI "Cube" or "Fade" Effect
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper(".mySwiper", {
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: { shadow: true, translate: [0, 0, -400] },
            next: { translate: ["100%", 0, 0] },
        },
        loop: true,
        autoplay: { delay: 4000 },
        pagination: { el: ".swiper-pagination", clickable: true },
    });
});

// Parallax Effect for Background Stars
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelector('.stars-container').style.transform = `translateY(${scrolled * 0.3}px)`;
});
