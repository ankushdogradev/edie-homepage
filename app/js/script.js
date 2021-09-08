const menuBtn = document.querySelector(".head__ham-cont");
const overlay = document.querySelector(".overlay");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("active");
    overlay.classList.add("active");
    menuOpen = true;
  } else if (menuOpen) {
    menuBtn.classList.remove("active");
    overlay.classList.remove("active");
    menuOpen = false;
  }
});
