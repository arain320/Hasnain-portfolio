let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("nav-toggle");
});

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("nav-toggle");
};
let typed = new Typed(".auto-type", {
  strings: [
    "Hasnain Saleem",
    "Web Designer",
    "Frontend Developer",
    "Mern Stack Developer",
    "from Pir Mahal",
  ],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
const putDate = document.getElementById("putDate");
const date = new Date().getFullYear();
putDate.innerText = date;
