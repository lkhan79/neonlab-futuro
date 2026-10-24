# ⚡ NeonLab — Lezione 15 di 15: il progetto finale

Complimenti! Hai attraversato 15 lezioni pratiche, partendo da HTML e CSS fino a JavaScript, un backend locale con Node.js e la pubblicazione di una versione statica con GitHub Pages.

Questa è la **versione finale da portfolio**, con tutti i file aggiornati.

## 1. Prima cosa: proteggi le tue personalizzazioni

Il progetto viene fornito con questa riga in `script.js`:

```js
const EMAIL_DESTINATARIO = "";
```

**IMPORTANTE:** se nella lezione 14 avevi inserito un tuo indirizzo email, devi **reinserirlo** prima di caricare il nuovo `script.js` su GitHub. Il nuovo file non conosce le modifiche che hai effettuato sul tuo computer.

Usa preferibilmente un indirizzo dedicato: sarà visibile nel JavaScript pubblico e potrebbe attirare spam. Il modulo apre una bozza di posta, non invia messaggi automaticamente e non salva dati su un server.

Se nella versione precedente hai personalizzato il nome del sito, i colori o i testi, confronta i file e riporta le modifiche desiderate. Il nostro pacchetto non cancella il tuo progetto precedente.

## 2. Cosa abbiamo aggiunto

### Sezione "Percorso"

In `index.html` cerca:

```html
<section id="percorso" class="percorso rivelazione" aria-labelledby="titolo-percorso">
```

La sezione presenta quattro tappe: HTML, CSS neon, JavaScript e backend/pubblicazione. Usa un elenco ordinato `<ol>` e uno stile a schede per raccontare il progetto nel portfolio.

### Pulsante "Torna su"

Nel nuovo `script.js` trovi:

```js
function aggiornaPulsanteTornaSu() {
  pulsanteTornaSu.hidden = window.scrollY < 450;
}
```

- `window.scrollY` indica quanto sei sceso nella pagina.
- `hidden` mostra o nasconde il pulsante.
- `window.scrollTo(...)` riporta il visitatore all'inizio.
- Se una persona preferisce movimento ridotto, il ritorno avviene senza animazione.

### Anno automatico nel footer

```js
annoCorrente.textContent = String(new Date().getFullYear());
```

Il sito legge l'anno dal dispositivo del visitatore; non dovrai modificarlo manualmente ogni gennaio.

### Presentazione del repository

Abbiamo aggiunto `README.md`: GitHub lo mostra nella pagina principale del repository per spiegare il progetto, le tecnologie usate e come avviarlo.

### Collegamenti SEO

Nel `<head>` sono presenti `rel="canonical"` e `og:url` con l'indirizzo previsto:

```text
https://lkhan79.github.io/neonlab-futuro/
```

Se cambi username, nome del repository o dominio, aggiorna anche questi collegamenti.

## 3. Prova il progetto prima di caricarlo

1. Estrai la cartella e apri `index.html` nel browser.
2. Controlla che grafica, menu, tema rosa, energia, tecnologie e galleria funzionino.
3. Scorri fino alla nuova sezione **Percorso**.
4. Scendi di oltre 450 pixel: deve comparire in basso a destra la freccia **↑**.
5. Cliccala: devi tornare all'inizio.
6. Controlla nel footer che l'anno sia aggiornato.
7. Testa il modulo Contatti solo se hai impostato un indirizzo di tua proprietà e un'app di posta.

## 4. Aggiorna il sito su GitHub Pages

Questi file sono una **nuova versione** del sito, non un secondo sito da creare.

1. Torna al repository **https://github.com/lkhan79/neonlab-futuro**.
2. Conserva una copia dei file e delle personalizzazioni esistenti sul tuo computer.
3. Carica i nuovi `index.html`, `style.css`, `script.js`, `README.md` e `LEGGIMI.md` nella radice del repository, aggiornando i file omonimi. La cartella `assets` può restare uguale.
4. Conferma con **Commit changes**.
5. In **Settings → Pages**, controlla che la pubblicazione usi ancora `main` e `/(root)`.
6. Visita **https://lkhan79.github.io/neonlab-futuro/** quando la nuova versione sarà stata distribuita.

GitHub Pages può richiedere qualche minuto per pubblicare una modifica. Se il sito appare vecchio, aggiorna la pagina con `CTRL + F5` dopo aver verificato che il deploy sia terminato.

**Non caricare `server.js`, la cartella `dati` o `messaggi.jsonl`.** Il backend Node.js delle lezioni precedenti è un progetto locale separato e non è incluso in questa versione pubblica.

## 5. Collaudo finale da portfolio

- [ ] Il sito pubblico si apre in HTTPS.
- [ ] L'icona neon appare nella scheda del browser.
- [ ] La navigazione funziona su computer e smartphone.
- [ ] Il cambio tema funziona.
- [ ] Le tre schede tecnologiche aggiornano il dettaglio.
- [ ] Le tre immagini aprono l'anteprima e si chiudono con Esc.
- [ ] La sezione Percorso è leggibile.
- [ ] Il pulsante ↑ compare dopo lo scroll e riporta all'inizio.
- [ ] Nel footer compare l'anno corrente.
- [ ] Il repository GitHub mostra `README.md`.
- [ ] Il modulo Contatti è configurato consapevolmente; non promette un invio server che non esiste.
- [ ] Non sono stati pubblicati dati privati.

## 6. Ultimo esercizio: personalizzazione autonoma

Modifica uno dei quattro passaggi della sezione Percorso, per esempio cambia il titolo **Design CSS neon** con una tua specializzazione. Pubblica la modifica e controlla il risultato da un altro dispositivo.

Quando funziona, hai completato il percorso pratico. Il progetto può continuare: hosting di backend, database, componenti React, animazioni avanzate e progetti reali saranno i passi successivi.
