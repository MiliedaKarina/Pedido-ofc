var btn = document.querySelector(".no");
var position;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  btn.addEventListener("touchstart", () => toggleMove());
  btn.addEventListener("touchend", () => toggleMove());
} else {
  btn.addEventListener("mouseover", () => toggleMove());
}

function toggleMove() {
  position = position ? 0 : 150;
  btn.style.transform = `translate(${position}px,0px)`;
  btn.style.transition = "all 0.3s ease";
}

function tanks() {
  document.getElementById("main-content").style.display = "none";
  document.getElementById("surprise").style.display = "flex";
}

function not() {
  alert("Você nem tá maluca de não aceitar! Volte lá e clique no SIM!");
}