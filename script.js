// Lezione 3: cambio del tema
const pulsanteTema = document.querySelector("#cambia-tema");

pulsanteTema.addEventListener("click", function () {
  const temaRosa = document.body.classList.toggle("tema-rosa");
  pulsanteTema.textContent = temaRosa ? "Modalità Cyberpunk attiva!" : "Attiva tema rosa";
  pulsanteTema.setAttribute("aria-pressed", String(temaRosa));
});

// Lezione 4: contatore con limite a 10
let energia = 0;
const numero = document.querySelector("#numero-energia");
const messaggio = document.querySelector("#messaggio-energia");
const aumenta = document.querySelector("#aumenta-energia");
const azzera = document.querySelector("#azzera-energia");
const barra = document.querySelector("#barra-energia");
const riempimento = document.querySelector("#riempimento-energia");

function aggiornaPannello() {
  numero.textContent = energia;
  riempimento.style.width = (energia * 10) + "%";
  barra.setAttribute("aria-valuenow", String(energia));
  aumenta.disabled = energia >= 10;

  if (energia === 0) {
    messaggio.textContent = "Sistema in standby";
  } else if (energia < 10) {
    messaggio.textContent = "Energia in aumento...";
  } else {
    messaggio.textContent = "⚡ Potenza massima raggiunta!";
  }

  console.log("Energia attuale:", energia);
}

aumenta.addEventListener("click", function () {
  if (energia < 10) {
    energia = energia + 1;
    aggiornaPannello();
  }
});

azzera.addEventListener("click", function () {
  energia = 0;
  aggiornaPannello();
});

aggiornaPannello();

// Lezione 5: selezione interattiva delle schede
const schede = document.querySelectorAll(".card");
const dettaglioTitolo = document.querySelector("#dettaglio-titolo");
const dettaglioDescrizione = document.querySelector("#dettaglio-descrizione");

schede.forEach(function (scheda) {
  scheda.addEventListener("click", function () {
    // Togliamo la selezione da tutte le schede
    schede.forEach(function (altraScheda) {
      altraScheda.classList.remove("selezionata");
      altraScheda.setAttribute("aria-pressed", "false");
    });

    // Selezioniamo la scheda premuta e leggiamo i suoi dati
    scheda.classList.add("selezionata");
    scheda.setAttribute("aria-pressed", "true");
    dettaglioTitolo.textContent = scheda.dataset.titolo;
    dettaglioDescrizione.textContent = scheda.dataset.descrizione;
  });
});

// Lezione 6: apertura e chiusura del menu sugli smartphone
const apriMenu = document.querySelector("#apri-menu");
const linkMenu = document.querySelector("#link-menu");

function chiudiMenu() {
  linkMenu.classList.remove("aperto");
  apriMenu.setAttribute("aria-expanded", "false");
  apriMenu.textContent = "☰ Menu";
}

apriMenu.addEventListener("click", function () {
  const aperto = linkMenu.classList.toggle("aperto");
  apriMenu.setAttribute("aria-expanded", String(aperto));
  apriMenu.textContent = aperto ? "✕ Chiudi" : "☰ Menu";
});

document.querySelectorAll("#link-menu a").forEach(function (link) {
  link.addEventListener("click", chiudiMenu);
});

// Lezione 6: animazioni al primo ingresso nello schermo
const sezioniDaAnimare = document.querySelectorAll(".rivelazione");

if ("IntersectionObserver" in window) {
  document.documentElement.classList.add("reveal-ready");

  const osservatore = new IntersectionObserver(function (elementi) {
    elementi.forEach(function (elemento) {
      if (elemento.isIntersecting) {
        elemento.target.classList.add("visibile");
        osservatore.unobserve(elemento.target);
      }
    });
  }, { threshold: .15 });

  sezioniDaAnimare.forEach(function (sezione) {
    osservatore.observe(sezione);
  });
}

// Lezione 9: galleria con anteprima in una finestra modale
const pulsantiGalleria = document.querySelectorAll(".galleria-item");
const finestraAnteprima = document.querySelector("#anteprima-dialog");
const immagineAnteprima = document.querySelector("#anteprima-immagine");
const titoloAnteprima = document.querySelector("#anteprima-titolo");
const descrizioneAnteprima = document.querySelector("#anteprima-descrizione");
const chiudiAnteprima = document.querySelector("#chiudi-anteprima");
let ultimoPulsanteAperto = null;

pulsantiGalleria.forEach(function (pulsante) {
  pulsante.addEventListener("click", function () {
    ultimoPulsanteAperto = pulsante;
    immagineAnteprima.src = pulsante.dataset.src;
    immagineAnteprima.alt = pulsante.dataset.alt;
    titoloAnteprima.textContent = pulsante.dataset.titolo;
    descrizioneAnteprima.textContent = pulsante.dataset.descrizione;
    finestraAnteprima.showModal();
  });
});

chiudiAnteprima.addEventListener("click", function () {
  finestraAnteprima.close();
});

// Il tasto Esc è già gestito automaticamente dal tag <dialog>.
finestraAnteprima.addEventListener("close", function () {
  if (ultimoPulsanteAperto) ultimoPulsanteAperto.focus();
});

finestraAnteprima.addEventListener("click", function (evento) {
  if (evento.target !== finestraAnteprima) return;
  const rettangolo = finestraAnteprima.getBoundingClientRect();
  const fuori = evento.clientX < rettangolo.left || evento.clientX > rettangolo.right ||
                evento.clientY < rettangolo.top || evento.clientY > rettangolo.bottom;
  if (fuori) finestraAnteprima.close();
});

// Lezione 14: scrivi qui un TUO indirizzo email dedicato ai contatti.
// ATTENZIONE: sarà visibile a chiunque nel codice del sito pubblico.
// Configuralo prima di pubblicare su GitHub Pages.
const EMAIL_DESTINATARIO = "dlarocca79@gmail.com";

// Lezioni 10-11 e 14: controllo del modulo e bozza email senza backend.
const moduloContatti = document.querySelector("#form-contatti");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoMessaggio = document.querySelector("#messaggio");
const contatoreCaratteri = document.querySelector("#contatore-caratteri");
const statoForm = document.querySelector("#stato-form");
const linkEmailManuale = document.querySelector("#apri-email-manuale");
const campiContatto = [campoNome, campoEmail, campoMessaggio];

function nascondiLinkEmail() {
  linkEmailManuale.hidden = true;
  linkEmailManuale.removeAttribute("href");
}

// Questa funzione restituisce un messaggio di errore oppure una stringa vuota.
function erroreDelCampo(campo) {
  const testo = campo.value.trim();

  if (testo.length === 0) return "Questo campo è obbligatorio.";
  if (campo === campoNome && testo.length < 2) return "Scrivi almeno 2 caratteri.";
  if (campo === campoEmail && campo.validity.typeMismatch) return "Inserisci un indirizzo email valido.";
  if (campo === campoMessaggio && testo.length < 15) return "Scrivi almeno 15 caratteri.";

  return "";
}

// Mostriamo l'errore accanto al campo che dobbiamo correggere.
function validaCampo(campo) {
  const errore = erroreDelCampo(campo);
  const messaggioErrore = document.querySelector("#errore-" + campo.id);
  messaggioErrore.textContent = errore;
  campo.setAttribute("aria-invalid", String(errore !== ""));
  return errore === "";
}

campoMessaggio.addEventListener("input", function () {
  contatoreCaratteri.textContent = campoMessaggio.value.length + " / 500";
});

campiContatto.forEach(function (campo) {
  campo.addEventListener("input", function () {
    // Dopo un errore, controlliamo di nuovo il campo mentre lo correggiamo.
    if (campo.getAttribute("aria-invalid") === "true") validaCampo(campo);
    statoForm.textContent = "";
    statoForm.classList.remove("errore-generale");
    nascondiLinkEmail();
  });
});

// mailto: prepara un'email nel programma di posta dell'utente.
// encodeURIComponent protegge spazi, a capo e caratteri speciali.
function creaLinkEmail() {
  const oggetto = "Richiesta dal sito LUCAZZO";
  const testo = [
    "Nuova richiesta dal sito",
    "",
    "Nome: " + campoNome.value.trim(),
    "Email per rispondere: " + campoEmail.value.trim(),
    "",
    "Messaggio:",
    campoMessaggio.value.trim(),
  ].join("\n");

  return "mailto:" + EMAIL_DESTINATARIO.trim() +
    "?subject=" + encodeURIComponent(oggetto) +
    "&body=" + encodeURIComponent(testo);
}

moduloContatti.addEventListener("submit", function (evento) {
  evento.preventDefault(); // Evita il ricaricamento della pagina.
  nascondiLinkEmail();

  let primoCampoErrato = null;

  campiContatto.forEach(function (campo) {
    if (!validaCampo(campo) && primoCampoErrato === null) primoCampoErrato = campo;
  });

  if (primoCampoErrato) {
    statoForm.textContent = "Controlla i campi evidenziati e riprova.";
    statoForm.classList.add("errore-generale");
    primoCampoErrato.focus();
    return;
  }

  // Senza l'indirizzo del destinatario non possiamo preparare un'email reale.
  const emailConfigurata = EMAIL_DESTINATARIO.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailConfigurata)) {
    statoForm.textContent = "✓ I dati sono validi. Per aprire l'email, inserisci il tuo indirizzo in EMAIL_DESTINATARIO nel file script.js.";
    statoForm.classList.remove("errore-generale");
    return;
  }

  const linkMailto = creaLinkEmail();
  linkEmailManuale.href = linkMailto;
  linkEmailManuale.hidden = false;
  statoForm.classList.remove("errore-generale");
  statoForm.textContent = "✓ Bozza pronta! Controlla il programma di posta e premi Invia. Se non si apre, usa il link qui sotto.";

  // Il browser potrebbe chiedere quale programma usare: non invia nulla da solo.
  window.location.href = linkMailto;
});

moduloContatti.addEventListener("reset", function () {
  campiContatto.forEach(function (campo) {
    campo.setAttribute("aria-invalid", "false");
    document.querySelector("#errore-" + campo.id).textContent = "";
  });
  contatoreCaratteri.textContent = "0 / 500";
  statoForm.textContent = "";
  statoForm.classList.remove("errore-generale");
  nascondiLinkEmail();
});
