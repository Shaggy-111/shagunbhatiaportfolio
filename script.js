// Background & Modal Controls
function openModal(id) {
    document.getElementById(id).style.display = "flex";
    document.body.style.overflow = "hidden";
    new Swiper(".mySwiper", { 
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        loop: true, observer: true, observeParents: true 
    });
}
function closeModal(id) {
    document.getElementById(id).style.display = "none";
    document.body.style.overflow = "auto";
}

// Neural Background
const canvas = document.getElementById('neural-bg');
const ctx = canvas.getContext('2d');
let particles = [];
function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
window.onresize = resize; resize();
class Particle {
    constructor() { this.x = Math.random()*canvas.width; this.y = Math.random()*canvas.height; this.vx = (Math.random()-0.5)*0.5; this.vy = (Math.random()-0.5)*0.5; }
    update() { this.x += this.vx; this.y += this.vy; if (this.x<0 || this.x>canvas.width) this.vx*=-1; if (this.y<0 || this.y>canvas.height) this.vy*=-1; }
}
for (let i=0; i<50; i++) particles.push(new Particle());
function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height); ctx.fillStyle = 'rgba(34,211,238,0.3)'; ctx.strokeStyle = 'rgba(34,211,238,0.05)';
    particles.forEach(p => {
        p.update(); ctx.beginPath(); ctx.arc(p.x, p.y, 1, 0, Math.PI*2); ctx.fill();
        particles.forEach(p2 => { let d = Math.hypot(p.x-p2.x, p.y-p2.y); if(d<120){ ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(p2.x,p2.y); ctx.stroke(); }});
    });
    requestAnimationFrame(animate);
}
animate();
