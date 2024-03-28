function lazyLoading() {
  const lazyImgs = document.querySelectorAll(".lazy");

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          img.classList.remove("loading");
          img.classList.add("loaded");
          io.unobserve(img);
        }
      });
    }
  );

  lazyImgs.forEach((img) => {
    io.observe(img);
  });
}

export default lazyLoading;
