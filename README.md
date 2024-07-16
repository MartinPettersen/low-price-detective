## Low Price Detective README.md

### Introduksjon

Low Price Detective er en app som hjelper brukere med å finne den beste prisen på et produkt ved å sammenligne priser fra forskjellige forhandlere i nærheten. Den bruker en barcodescanner for å identifisere produktet og presenterer prisinformasjon, avstand til butikker og veibeskrivelser i et brukervennlig grensesnitt.

### Hvordan appen fungerer

1. **Produktidentifikasjon:** Brukeren skanner et produkt med appens barcodescanner.
2. **Prisinformasjon:** Appen henter prisinformasjon for produktet fra Kassalapp.
3. **Geolokasjon:** Appen bruker brukerens enhetsgeolokasjon for å identifisere butikker i nærheten som tilbyr produktet.
4. **Presentasjon av resultater:** Appen viser en liste over butikker med prisinformasjon og avstand til hver butikk. Hvis en butikk blir valgt så viser den også et kart som viser veien til den valgte butikken.

### Fordeler

* **Spar penger:** Finn den beste prisen på et produkt ved å sammenligne priser fra forskjellige butikker.
* **Enkel å bruke:** Bruk barcodescanneren for å identifisere produktet raskt og enkelt.
* **Praktisk:** Få oversikt over priser og avstander til butikker i nærheten.
* **Visuell:** Se veibeskrivelser til den valgte butikken på et kart.

### Begrensninger

* **Appen er for øyeblikket ikke publisert på App Store eller Google Play.**
* **Prisinformasjon kan være feil eller utdatert i noen tilfeller.**
* **Appen krever en internettforbindelse for å fungere.**
* **Appen krever en maskin med React Native expo og en telefon med expo go for å fungere.**

### Hvordan få en API-nøkkel

1. Gå til [https://kassal.app/api](https://kassal.app/api).
2. Klikk på "Opprett API Nøkkel".
3. Fyll ut informasjonen din og velg "Gratis tier".
4. Kopier API-nøkkelen din og opprett så en .env fil og legg til EXPO_PUBLIC_KASSAL_KEY=<din kassal API-nøkkel her>.


**Takk for din interesse for Low Price Detective!**
