const headerNavigation = document.querySelector(".header__navigation")
const mobileMenu = document.querySelector(".header__menu--mobile")

mobileMenu.addEventListener("click", () => {
  headerNavigation.classList.toggle("show")
})

