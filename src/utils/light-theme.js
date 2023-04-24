function lightTheme() {
  const toggleThemeBtns = document.querySelectorAll(".toggle-theme");

  // State
  const theme = localStorage.getItem("theme");

  // On mount -> when first visit the page or reload the page
  theme && document.body.classList.add(theme);

  toggleThemeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      if (document.body.classList.contains("light-theme"))
        localStorage.setItem("theme", "light-theme");
      else localStorage.removeItem("theme");
    });
  });
}

export default lightTheme;
