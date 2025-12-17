// Menu Mobile
const btnMenu = document.getElementById("btn-menu")
const menuMobile = document.getElementById("menu-mobile")
const overlayMenu = document.getElementById("overlay-menu")
const btnFechar = document.querySelector(".btn-fechar")

btnMenu.addEventListener("click", () => {
  menuMobile.classList.add("abrir-menu")
})

btnFechar.addEventListener("click", () => {
  menuMobile.classList.remove("abrir-menu")
})

overlayMenu.addEventListener("click", () => {
  menuMobile.classList.remove("abrir-menu")
})

// Fechar menu mobile ao clicar em um link
const menuLinks = document.querySelectorAll(".menu-mobile nav ul li a")
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuMobile.classList.remove("abrir-menu")
  })
})
