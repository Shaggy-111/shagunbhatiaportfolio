document.addEventListener("DOMContentLoaded", function () {

  // SWIPER
  document.querySelectorAll(".mySwiper").forEach(slider => {
    new Swiper(slider, {
      loop: true,
      spaceBetween: 15,
      pagination: {
        el: slider.querySelector(".swiper-pagination"),
        clickable: true,
      },
    });
  });

  // CANVAS SAFE
  const canvas = document.getElementById("neural-bg");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  let particles = Array.from({length:40}, () => ({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    vx:(Math.random()-0.5)*0.4,
    vy:(Math.random()-0.5)*0.4
  }));

  function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0||p.x>canvas.width) p.vx*=-1;
      if(p.y<0||p.y>canvas.height) p.vy*=-1;
      ctx.fillStyle="#22d3ee";
      ctx.beginPath();
      ctx.arc(p.x,p.y,1.4,0,Math.PI*2);
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();

});
