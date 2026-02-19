// ================================
// SWIPER INIT
// ================================
document.addEventListener("DOMContentLoaded", function () {

    const swipers = document.querySelectorAll(".mySwiper");

    swipers.forEach(swiperEl => {
        new Swiper(swiperEl, {
            loop: true,
            spaceBetween: 20,
            pagination: {
                el: swiperEl.querySelector(".swiper-pagination"),
                clickable: true,
            },
        });
    });

});


// ================================
// SIMPLE NEURAL BACKGROUND
// ================================
const canvas = document.getElementById("neural-bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 60; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.fillStyle = "#22d3ee";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
