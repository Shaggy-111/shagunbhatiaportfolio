// Smooth reveal animation on scroll
const scrollReveal = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.exp-card, .work-card').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(50px)";
        el.style.transition = "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)";
        observer.observe(el);
    });
};

// CSS Injection for reveal
const style = document.createElement('style');
style.innerHTML = `
    .active {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', scrollReveal);

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = "rgba(5, 5, 5, 0.8)";
        nav.style.backdropFilter = "blur(10px)";
        nav.style.borderBottom = "1px solid rgba(255,255,255,0.05)";
    } else {
        nav.style.background = "transparent";
        nav.style.borderBottom = "none";
    }
});
