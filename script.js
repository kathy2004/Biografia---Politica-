// Scroll reveal com IntersectionObserver
const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  
  // preparar elementos
  document.querySelectorAll(".reveal, .tl-item").forEach((el) => observer.observe(el));
  
  // rolagem suave para o menu
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });
  
  // acessibilidade: tecla ESC retorna foco ao topo
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelector(".brand")?.focus?.();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
  // menu hamburguer
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
menuBtn?.addEventListener("click", () => {
  nav.classList.toggle("show");
});
