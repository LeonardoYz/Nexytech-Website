const preloadingScreen = document.querySelector(".preloading")
const preloadingProgressBar = document.querySelector(".preloading__fill")

window.addEventListener("load", () => {
  preloadingProgressBar.classList.add("loading-ending")

  setTimeout(() => {
    preloadingScreen.classList.add("hide")

    setTimeout(() => {
      preloadingProgressBar.classList.remove("loading-ending")
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

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('scroll')
  } else {
    backToTopButton.classList.remove('scroll')
  }
}

window.addEventListener("scroll", () => {
  addShadowOnHeaderWhenScroll()
  if (document.body.contains(backToTopButton)) {
    backToTop()
  }
})

// Theme switcher
const themeButton = document.querySelector('.theme-switcher')
const switcherIcon = document.getElementById("switcher-icon")
const darkTheme = 'dark-theme'
const iconTheme = 'sun-icon'
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => switcherIcon.classList.contains(iconTheme) ? 'moon-icon' : 'sun-icon'

function verifySelectedTheme() {
  if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    switcherIcon.classList[selectedIcon === 'moon-icon' ? 'add' : 'remove'](iconTheme)
  }
}

verifySelectedTheme()

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  switcherIcon.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

function checkUserThemePreference() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add(darkTheme)
    switcherIcon.classList.add(iconTheme)
    verifySelectedTheme()
  }
}

checkUserThemePreference()
