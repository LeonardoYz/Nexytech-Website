const headerNavigation = document.querySelector(".header__navigation")
const mobileMenu = document.querySelector(".header__menu--mobile")

mobileMenu.addEventListener("click", () => {
  headerNavigation.classList.toggle("show")
})

const header = document.querySelector(".header")
const headerHeight = header.offsetHeight

function addShadowOnHeaderWhenScroll() {
  if (window.scrollY >= headerHeight) {
    header.classList.add("scroll")
  } else {
    header.classList.remove("scroll")
  }
}

window.addEventListener("scroll", () => {
  addShadowOnHeaderWhenScroll()
})