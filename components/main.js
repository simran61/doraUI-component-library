const hamburgerIcon = document.querySelector(".humber-icon");
const sidebar = document.querySelector(".sidebar-wrapper");
const container = document.querySelector(".container");

hamburgerIcon.addEventListener("click", () => {
  sidebar.classList.toggle("trans-on");
  sidebar.classList.toggle("trans-off");

  if (sidebar.classList.contains("trans-on")) {
    hamburgerIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    hamburgerIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
});

function closeMenu() {
  if (sidebar.classList.contains("trans-on")) {
    sidebar.classList.remove("trans-on");
    sidebar.classList.add("trans-off");
    hamburgerIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
}

container.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !hamburgerIcon.contains(e.target)) {
    closeMenu();
  }
});
