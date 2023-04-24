function mobileNav() {
  const headerBars = document.querySelector(".header__bars");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav__link");

  // State
  let isMobileNavOpen = false;

  headerBars.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      mobileNav.style.display = "flex";
      document.body.style.overflowY = "hidden";
    } else {
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    }
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.style.display = "none";
      isMobileNavOpen = false;
      document.body.style.overflowY = "auto";
    });
  });
}

export default mobileNav;
