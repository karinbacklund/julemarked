// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}

/* Animationen på rabatbiletten */
const rabatBillet = document.querySelector(".rabat-billet");

// Opretter en "observer", der holder øje med, hvornår billetten kommer ind i skærmbilledet
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // Når billetten er synlig på skærmen
      if (entry.isIntersecting) {
        entry.target.classList.add("synlig");
        // Stopper med at observere, så animationen kun kører én gang
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2, // Animationen starter, når 20% af billetten er rullet ind på skærmen
  },
);

// Starter overvågningen, hvis billetten findes på siden
if (rabatBillet) {
  observer.observe(rabatBillet);
}
