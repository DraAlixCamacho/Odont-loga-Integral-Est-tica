<script>
  document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("bg-music");
    const toggleBtn = document.getElementById("music-toggle");
    const btnText = toggleBtn.querySelector(".text");
    
    // Configurar volumen inicial bajo (20%)
    audio.volume = 0.2;

    toggleBtn.addEventListener("click", function() {
      if (audio.paused) {
        audio.play();
        toggleBtn.classList.add("playing");
        btnText.textContent = "Pausar música";
      } else {
        audio.pause();
        toggleBtn.classList.remove("playing");
        btnText.textContent = "Activar música";
      }
    });
  });
</script>