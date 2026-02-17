// ================================
// Page Fade-in
// ================================
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});


// ================================
// Smooth Scroll
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = this.getAttribute('href');
    if (target.length > 1) {
      e.preventDefault();
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// ================================
// IMAGE LIGHTBOX (Click to Zoom)
// ================================
document.addEventListener("DOMContentLoaded", () => {

  const images = document.querySelectorAll(".gallery img");
  if (!images.length) return;

  const lightbox = document.createElement("div");
  lightbox.style.position = "fixed";
  lightbox.style.top = 0;
  lightbox.style.left = 0;
  lightbox.style.width = "100%";
  lightbox.style.height = "100%";
  lightbox.style.background = "rgba(0,0,0,0.9)";
  lightbox.style.display = "none";
  lightbox.style.alignItems = "center";
  lightbox.style.justifyContent = "center";
  lightbox.style.zIndex = "9999";

  const img = document.createElement("img");
  img.style.maxWidth = "90%";
  img.style.maxHeight = "85%";
  img.style.borderRadius = "10px";

  lightbox.appendChild(img);
  document.body.appendChild(lightbox);

  images.forEach(image => {
    image.addEventListener("click", () => {
      img.src = image.src;
      lightbox.style.display = "flex";
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.style.display = "none";
    }
  });
});
