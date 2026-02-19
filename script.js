function openProject(type){
  const modal = document.getElementById("projectModal");
  const body = document.getElementById("modalBody");

  if(type === "aquatrack"){
    body.innerHTML = `
      <h2>AquaTrack Water Delivery System</h2>
      <p>
      Complete B2B & B2C automation system including order tracking,
      delivery management and admin analytics dashboard.
      </p>

      <h3>Mobile App Demo</h3>
      <video controls>
        <source src="videos/aquatrack mobile app.mp4" type="video/mp4">
      </video>

      <h3>Full Walkthrough</h3>
      <iframe src="https://drive.google.com/file/d/1zHVjfHZUD29Ks2zkqh-9LAJo5kXrO1-1/preview"></iframe>

      <h3>Screenshots</h3>
      <div class="gallery">
        <img src="screenshots/aquatrack-Front page.png">
        <img src="screenshots/aquatrack-login Page.png">
        <img src="screenshots/aquatrack-Dashboard.png">
        <img src="screenshots/aquatrack-Screen UI.png">
        <img src="screenshots/aquatrack-order track.png">
        <img src="screenshots/Admin Dashboard.png">
      </div>
    `;
  }

  if(type === "admin"){
    body.innerHTML = `
      <h2>Advanced Admin Panel</h2>
      <p>
      Smart business dashboard to manage QR codes, orders,
      complaints and analytics in real time.
      </p>

      <div class="gallery">
        <img src="screenshots/web portal-login page.png">
        <img src="screenshots/web portal -orders.png">
        <img src="screenshots/web portal -complaints.png">
        <img src="screenshots/web portal -QR Management.png">
      </div>
    `;
  }

  if(type === "solar"){
    body.innerHTML = `
      <h2>Solar Survey Mobile App</h2>
      <p>
      AI-driven solar inspection and automated calculation
      mobile application.
      </p>

      <div class="gallery">
        <img src="screenshots/solar survey 1.png">
        <img src="screenshots/solar survey 2.png">
        <img src="screenshots/solar survey 3.png">
        <img src="screenshots/solar survey 4.png">
        <img src="screenshots/solar survey 5.png">
      </div>
    `;
  }

  modal.style.display = "block";
}

function closeModal(){
  document.getElementById("projectModal").style.display = "none";
}
