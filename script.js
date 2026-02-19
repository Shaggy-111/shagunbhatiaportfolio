// NEURAL NETWORK BACKGROUND
const canvas = document.getElementById('neural-bg');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
}

for (let i = 0; i < 60; i++) particles.push(new Particle());

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(34, 211, 238, 0.5)';
    ctx.strokeStyle = 'rgba(34, 211, 238, 0.1)';
    
    particles.forEach(p => {
        p.update();
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
        
        particles.forEach(p2 => {
            let dist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (dist < 150) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        });
    });
    requestAnimationFrame(animate);
}
animate();

// FIXED MODAL FUNCTIONS
function openModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
    
    // Initialize Swiper ONLY when modal opens to prevent errors
    new Swiper(".mySwiper", {
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        pagination: { el: ".swiper-pagination", clickable: true },
        loop: true,
        observer: true,
        observeParents: true
    });
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
    document.body.style.overflow = "auto";
}

// Close modal if clicking outside content
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}
