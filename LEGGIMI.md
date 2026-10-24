# NEO222LAB — Lezione 14 di 15

## Il nostro sito neon va online!

Questa cartella contiene **solo il sito pubblico statico**: `index.html`, `style.css`, `script.js` e le immagini SVG nella cartella `assets`.

**Non contiene `server.js`, la cartella `dati` o i messaggi ricevuti.** Il vecchio backend delle lezioni 12 e 13 rimane sul tuo computer. GitHub Pages pubblica file statici ma non esegue il nostro backend Node.js.

## 1. Prima di pubblicare: controlla il modulo Contatti

Il sito online usa una bozza email, come nella lezione 11. Non invia un messaggio direttamente dal server e non salva i dati di chi scrive.

Apri `script.js` e cerca:

```js
const EMAIL_DESTINATARIO = "";
```

Se vuoi ricevere contatti, sostituisci le virgolette vuote con un indirizzo email **dedicato e di tua proprietà**:

```js
const EMAIL_DESTINATARIO = "contatti-esempio@example.com";
```

`contatti-esempio@example.com` è un esempio: **non lasciarlo come destinatario**.

ATTENZIONE: chiunque potrà vedere l'indirizzo nel codice JavaScript pubblico. Un indirizzo personale può ricevere spam. Se preferisci non renderne pubblico uno, non presentare il modulo come attivo: potrai configurare in futuro un servizio di gestione dei contatti.

Il visitatore dovrà avere un programma di posta configurato e premere personalmente **Invia**. Non c'è alcuna garanzia di consegna automatica.

Controlla anche il titolo e il logo del sito: nella versione attuale trovi ancora i nomi personalizzati delle lezioni precedenti. Decidi tu come vuoi presentarti pubblicamente.

## 2. Prova prima sul computer

1. Salva eventuali modifiche a `script.js`.
2. Apri `index.html` nel browser: per questa versione statica **non serve Node.js**.
3. Prova menu, tema rosa, energia, schede, galleria e pulsante di esplorazione.
4. Se hai configurato un indirizzo, prova la bozza email e **non inviare test a indirizzi altrui**.

## 3. Crea un repository GitHub

1. Vai su **https://github.com** e accedi al tuo account (creane uno se non lo hai).
2. Clicca su **New repository**.
3. Come nome puoi scegliere `neonlab-futuro`.
4. Se usi GitHub Free, imposta il repository su **Public** per GitHub Pages.
5. Conferma con **Create repository**.

Un repository è una cartella di progetto conservata su GitHub, con la cronologia delle modifiche.

## 4. Carica i file del sito

Nella pagina del repository:

1. Seleziona **Add file → Upload files**.
2. Trascina i **contenuti** della cartella `neonlab-lezione14`, non il file ZIP.
3. Assicurati che `index.html` si trovi alla **radice del repository**, insieme a `style.css`, `script.js` e alla cartella `assets`.
4. Puoi includere anche questo `LEGGIMI.md`, che non contiene messaggi privati.
5. Conferma l'upload con **Commit changes**.

Struttura che devi vedere su GitHub:

```text
neonlab-futuro (repository)
├── index.html
├── style.css
├── script.js
├── LEGGIMI.md
└── assets
    ├── favicon-neon.svg
    ├── neon-orbit.svg
    ├── neon-city.svg
    └── neon-circuit.svg
```

Se invece trovi `neonlab-lezione14/index.html` all'interno di una sottocartella, sposta i file alla radice del repository prima di pubblicare dalla cartella `/(root)`.

## 5. Attiva GitHub Pages

1. Apri il repository su GitHub.
2. Vai in **Settings → Pages**.
3. In **Build and deployment**, seleziona **Source: Deploy from a branch**.
4. Seleziona il branch **main** e la cartella **/(root)**.
5. Premi **Save**.
6. Attendi che GitHub completi la pubblicazione e apri il link mostrato in quella pagina.

Se hai scelto `neonlab-futuro`, l'indirizzo avrà una struttura simile a:

```text
https://TUO-USERNAME.github.io/neonlab-futuro/
```

Sostituisci `TUO-USERNAME` con il tuo vero username GitHub. L'indirizzo preciso sarà indicato da GitHub Pages.

## 6. Controlli dopo la pubblicazione

- [ ] Il sito si apre da un URL pubblico `https://...github.io/...`.
- [ ] Sfondo e testi sono stilizzati: significa che `style.css` è stato caricato.
- [ ] Le immagini della galleria si vedono: la cartella `assets` è corretta.
- [ ] Il pulsante **Attiva tema rosa** funziona: `script.js` è stato caricato.
- [ ] Il menu e le schede interattive funzionano anche da smartphone.
- [ ] Il form non prova a inviare dati a `/api/contatti`.
- [ ] Nessun `server.js`, `dati/messaggi.jsonl`, password o dato privato è stato caricato sul repository.

## 7. Se qualcosa non funziona

**Pagina 404:** controlla che `index.html` sia alla radice e che GitHub Pages sia configurato su `main` e `/(root)`; attendi il completamento del deploy.

**CSS o immagini assenti:** controlla maiuscole, minuscole e i percorsi `style.css`, `script.js` e `assets/...`.

**Modulo Contatti non pronto:** configura `EMAIL_DESTINATARIO` con un tuo indirizzo dedicato e carica nuovamente `script.js`; il browser del visitatore deve avere un'app di posta configurata.

**Vuoi salvare veramente le richieste sul server online?** GitHub Pages da solo non può farlo. Servirà un backend pubblicato su un hosting adatto o un servizio di moduli: non pubblicare così com'è il `server.js` didattico.

## 8. Esercizio finale

Modifica il testo principale di `index.html`, salva il file e carica la versione aggiornata nel repository. Osserva come GitHub Pages aggiorna il sito quando viene pubblicata la modifica.

Documentazione ufficiale:

- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository

**Prossima lezione: 15, rifinitura e progetto finale.**
