// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}

const kagemand = document.querySelector(".kagemand");

const spisesteder = document.querySelector("#spisesteder");
const kalkebakken = document.querySelector("#kalkebakken");
const gavevarksted = document.querySelector("#gavevarksted");

spisesteder.querySelector("summary").addEventListener("click", () => {
  kagemand.style.transform = "translate(-270px, -215px)";
});

kalkebakken.querySelector("summary").addEventListener("click", () => {
  kagemand.style.transform = "translate(-55px, -390px)";
});

gavevarksted.querySelector("summary").addEventListener("click", () => {
  kagemand.style.transform = "translate(300px, -190px)";
});

// Flytta tillbaka kagemanden när alla menyer är stängda
const accordion = document.querySelectorAll(".accordion-item");

accordion.forEach((item) => {
  item.addEventListener("toggle", () => {
    const allaStangda = [...accordion].every((details) => !details.open);

    if (allaStangda) {
      kagemand.style.transform = "translate(0px, 0px)";
    }
  });
});
