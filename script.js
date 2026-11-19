// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");
const kagemand = document.querySelector(".kagemand");
const spisesteder = document.querySelector("#spisesteder");
const kalkebakken = document.querySelector("#kalkebakken");
const gavevarksted = document.querySelector("#gavevarksted");

if (spisesteder && kalkebakken && gavevarksted && kagemand) {
  spisesteder.querySelector("summary").addEventListener("click", () => {
    kagemand.style.transform = "translate(-270px, -215px)";
  });

  kalkebakken.querySelector("summary").addEventListener("click", () => {
    kagemand.style.transform = "translate(-55px, -390px)";
  });

  gavevarksted.querySelector("summary").addEventListener("click", () => {
    kagemand.style.transform = "translate(300px, -190px)";
  });

  const accordion = document.querySelectorAll(".accordion-item");

  accordion.forEach((item) => {
    item.addEventListener("toggle", () => {
      const allaStangda = [...accordion].every((details) => !details.open);

      if (allaStangda) {
        kagemand.style.transform = "translate(0px, 0px)";
      }
    });
  });
}

// 1. Gem data fra formular-siden (form.html)
const form = document.querySelector(".form-placeholder");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const data = {
      mail: document.getElementById("mail").value.trim(),
      fornavn: document.getElementById("fornavn").value.trim(),
      efternavn: document.getElementById("efternavn").value.trim(),
      nyhedsbrev: document.getElementById("nyhedsbrev").checked,
      variation: document.getElementById("variation")?.value || "spisested",
    };

    localStorage.setItem("julemarkedData", JSON.stringify(data));
    window.location.href = "./opsamling.html";
  });
}

// 2. Vis data, ny tekst og nyt billede på opsamlingssiden (opsamling.html)
const opsamlingContainer = document.getElementById("opsamling-indhold");

if (opsamlingContainer) {
  const raw = localStorage.getItem("julemarkedData");
  const billetSection = document.querySelector(".opsamling-placeholder");
  const billetLink = billetSection?.querySelector("a");
  const billetImg = billetSection?.querySelector("img.rabat-billet");

  if (!raw) {
    opsamlingContainer.innerHTML = `
      <h1>INGEN DATA FUNDET</h1>
      <p>Udfyld formularen først, så vi kan vise din tilmelding.</p>
      <div class="actions">
        <a class="button" href="./form.html">Gå til formular</a>
      </div>
    `;
  } else {
    const data = JSON.parse(raw);
    const fuldeNavn = `${data.fornavn} ${data.efternavn}`.trim();

    if (data.variation === "aktiviteter") {
      opsamlingContainer.innerHTML = `
        <h1>VELKOMMEN I GAVEVÆRKSTEDET, ${data.fornavn.toUpperCase()}!</h1>
        <p>Hej ${fuldeNavn} (${data.mail}) – vi har registreret din tilmelding til julemarkedet!</p>
        <p>Herunder finder du din billet til Gaveværkstedet med 20% rabat.</p>
        <div class="actions">
          <a class="button" href="./form.html">Tilbage til formular</a>
        </div>
      `;

      if (billetImg) {
        billetImg.src = "./imgs/rabatgave.png";
        billetImg.alt = "20% rabat i Gaveværkstedet";
      }
      if (billetLink) {
        billetLink.href = "./imgs/rabatgave.png";
        billetLink.download = "Gavnoe-Julemarked-Gavevaerksted.png";
      }
    } else {
      opsamlingContainer.innerHTML = `
        <h1>TAK FOR DIN TILMELDING, ${data.fornavn.toUpperCase()}</h1>
        <p>Hej ${fuldeNavn} (${data.mail}) – glæd dig til informationer om julemarkedet! Scrol ned på siden for at få din rabatbillet til et af julemarkedets mange spisesteder.</p>
        <p>Vi glæder os til at se dig!</p>
        <div class="actions">
          <a class="button" href="./form.html">Tilbage til formular</a>
        </div>
      `;

      if (billetImg) {
        billetImg.src = "./imgs/rabatbillet.png";
        billetImg.alt = "20% rabat på et valgfrit spisested";
      }
      if (billetLink) {
        billetLink.href = "./imgs/rabatbillet.png";
        billetLink.download = "Gavnoe-Julemarked-Rabatbillet.png";
      }
    }
  }
}
