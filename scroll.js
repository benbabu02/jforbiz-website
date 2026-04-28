const elements = document.querySelectorAll(".fade-in-on-scroll");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  });
});

elements.forEach(el => observer.observe(el));