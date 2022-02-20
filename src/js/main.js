const preloadingScreen = document.querySelector(".preloading")
const preloadingProgressBar = document.querySelector(".preloading__fill")

window.addEventListener("load", () => {
  preloadingProgressBar.classList.add("loading-ending")

  setTimeout(() => {
    preloadingScreen.classList.add("hide")
    preloadingProgressBar.classList.remove("loading-ending")

    setTimeout(() => {
      preloadingScreen.style.visibility = "hidden"
    }, 500)
  }, 1540)
})

const headerNavigation = document.querySelector(".header__navigation")
const mobileMenu = document.querySelector(".header__menu--mobile")
const headerNavigationLinks = document.querySelectorAll(".header__menu li a")

if (document.body.contains(mobileMenu)) {
  mobileMenu.addEventListener("click", () => {
    headerNavigation.classList.toggle("show")

    headerNavigationLinks.forEach((element) => {
      element.addEventListener("click", () => {
        headerNavigation.classList.remove("show")
      })
    })
  })
}

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