// Fade in
window.onload = () => {
  document.body.style.opacity = "1";
};


// Auto scroll sliders
document.querySelectorAll(".slider").forEach(slider=>{
  let scrollAmount = 0;

  setInterval(()=>{
    if(slider.scrollWidth - slider.clientWidth <= scrollAmount){
      scrollAmount = 0;
    }else{
      scrollAmount += 200;
    }
    slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
  },3000);
});
