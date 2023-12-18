const mode = document.querySelector(".mode");
const show = document.querySelector(".show")
const close = document.querySelector(".close")
const sidebar = document.querySelector("ul")

mode.addEventListener("click", () => document.body.classList.toggle("dark-mode"))

show.addEventListener("click", () => sidebar.classList.toggle("slide"))


close.addEventListener("click", () => sidebar.classList.remove("slide"))