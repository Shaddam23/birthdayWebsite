const elements = document.querySelectorAll(".animate-on-scroll");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

elements.forEach((el) => observer.observe(el));

const playPauseBtn = document.getElementById("playMusic");
const audio = document.getElementById("audio");

playPauseBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
