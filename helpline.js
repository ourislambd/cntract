document.addEventListener("DOMContentLoaded", function() {
  // Create blur overlay
  var blurDiv = document.createElement("div");
  blurDiv.id = "blurOverlay";
  blurDiv.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.3);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;

  // Message and button
  blurDiv.innerHTML = `
    
  `;

  document.body.appendChild(blurDiv);

  // Unlock button handler
  document.getElementById("unlockBtn").addEventListener("click", function() {
    blurDiv.remove(); // Remove blur overlay
  });
});
