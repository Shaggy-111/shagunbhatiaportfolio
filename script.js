// OPEN MODAL
function openModal(src, isImage=false){
  const modal = document.getElementById("modal");
  const content = document.getElementById("modalContent");

  modal.style.display = "flex";
  content.innerHTML = "";

  if(isImage){
    content.innerHTML = `<img src="${src}">`;
  }else{
    content.innerHTML = `
      <video controls autoplay>
        <source src="${src}" type="video/mp4">
      </video>`;
  }
}

// CLOSE MODAL
function closeModal(){
  document.getElementById("modal").style.display = "none";
  document.getElementById("modalContent").innerHTML="";
}

// ESC CLOSE
document.addEventListener("keydown",e=>{
  if(e.key==="Escape") closeModal();
});
