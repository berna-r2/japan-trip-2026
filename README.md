# Japan Trip 2026 — versione 2

## Aggiornamenti
- Rimossa la sezione Checklist.
- Ogni città ha una scheda con itinerari organizzati per giornata/area.
- Filtri interattivi: Tutto, Luoghi, Negozi, Ristoranti.
- Ogni elemento apre una ricerca su Google Maps.
- La guida è una PWA statica pensata per GitHub Pages.

## Aggiornare il repository
Carica e sostituisci nella radice del repository `index.html`, `style.css`, `app.js`, `manifest.json`, `sw.js` e la cartella `icons`. Conferma con Commit changes. Non caricare credenziali o dati riservati.

## Pubblicazione
GitHub Pages deve pubblicare dal branch `main`, cartella `/(root)`.
Dopo il commit, attendi il deployment. Se l'iPhone mostra la vecchia versione, chiudi la web app e riapri il sito; potrebbe essere necessario aggiornare o rimuovere e riaggiungere l'icona alla Home.

## Nota
Gli itinerari sono suggerimenti iniziali per aree geografiche, non prenotazioni né orari verificati. Verifica aperture, prezzi e tempi di spostamento prima della visita.


Aggiornamento: aggiunta la sezione **Ristoranti** con elenco compatto, ricerca testuale, filtro per zona e collegamenti di ricerca a Tabelog e Google Maps. I collegamenti aprono la ricerca per nome: verificare la sede corretta prima di visitare.


Aggiornamento v4: intestazione con immagine panoramica del Giappone e titolo “Japan 2026”. Conservata la sezione Ristoranti con link di ricerca a Tabelog e Google Maps.


Versione 5: aggiunta una mappa Google Maps incorporata per ogni località, pulsante per aprire la mappa esterna e collegamento per aprire in Google Maps l’itinerario giornaliero con le tappe in sequenza. Le mappe incorporate richiedono connessione internet.


Versione 6: aggiornate le tratte ferroviarie secondo gli orari comunicati dall’utente per il 28/10, 29/10 e 1/11; evidenziate le prenotazioni ancora da effettuare e aggiunti link discreti ai siti ufficiali Tobu, JR-East, JR-West e JR Miyajima Ferry. Le altre tratte restano da confermare.

\n## Versione 7 — dati locali e backup\n- Le tappe possono essere segnate come visitate e annotate per singolo dispositivo.\n- I dati personali vengono conservati in locale nel browser e restano disponibili offline dopo il primo caricamento.\n- Nella sezione Info utili sono disponibili esportazione e importazione di un file JSON per trasferire i dati tra telefoni.\n- Non c'è sincronizzazione automatica: il programma comune viene aggiornato tramite GitHub Pages; note e visite sono separate finché non si importa/esporta un backup.\n

Versione 8: aggiunta scheda Programma giornaliero, scheda Città separata e marcatura rossa degli spostamenti/prenotazioni da completare.


Versione 17: checklist locale per prenotazioni/preparativi, preferiti ristoranti salvati sul dispositivo, filtro solo preferiti e link rapido al percorso giornaliero. Backup include checklist e preferiti.


## Versione 17 – organizzazione completa
- Checklist locale per prenotazioni e preparativi, con avanzamento salvato sul dispositivo.
- Preferiti dei ristoranti con filtro dedicato.
- Backup JSON include checklist e preferiti, oltre a note e visite completate.
- Link rapido al percorso del giorno nella scheda Città.
- Dati personali conservati localmente; non è prevista sincronizzazione automatica tra telefoni.
