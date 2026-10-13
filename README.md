# Japan Trip 2026

Mini-app web statica per il viaggio in Giappone.

## Pubblicazione gratuita con GitHub Pages
1. Crea un repository pubblico chiamato `japan-trip-2026`.
2. Carica tutti i file e la cartella `icons` nella radice del repository.
3. Vai in **Settings → Pages**.
4. In **Build and deployment**, scegli **Deploy from a branch**.
5. Seleziona il branch `main` e la cartella `/(root)`, poi salva.
6. Attendi il completamento della pubblicazione e apri l'URL mostrato da GitHub Pages.

## Installazione su iPhone
Apri l'URL pubblicato in Safari → Condividi → Aggiungi alla schermata Home → attiva “Apri come app web” se disponibile → Aggiungi.

## Note
- Gli orari dei treni e i dettagli di prenotazione non sono compilati perché devono corrispondere ai biglietti effettivi.
- La checklist usa `localStorage` del browser/dispositivo e non è sincronizzata tra dispositivi.
- Il service worker memorizza le risorse principali per tentare una consultazione offline dopo la prima apertura online; link a mappe e siti esterni richiedono connessione.
- Non pubblicare dati personali, codici di prenotazione o documenti riservati in un repository pubblico.
