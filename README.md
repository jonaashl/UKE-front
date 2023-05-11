# Caseoppgave for UKE (frontend)

## Quickstart

CD inn i UKE-front dersom du ikke er i directoriet.

```
cd UKE-front
npm install
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## Docker

```
docker build -t jonashl/uke-front .
rocker run -p 3000:3000 jonashl/uke-front
```

---

## Generelt om prosjektet

Veldig morsom oppgave!

Det har vært vanskelig å holde alle optional tasks i hver sin feature branch, men jeg har prøvd mitt beste!

Kun skrevet tester for backend, har svært lite erfaring med frontend unit-testing.

React med Oslo kommune styleguide har vært.. utfordrende

---

### Forbedringer

-   Flytte API-kall til en egen funksjon, generell refaktorering for scalability
-   Accessibility / Semantic HTML
-   Design
-   Logikken for romertall konvertering tar ikke hensyn til om brukeren inputer et - "feilformatert" romertall.
-   Frontend-build optional task..

---

License: MIT
