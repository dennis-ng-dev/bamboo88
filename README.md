# Bamboo 88 – Restaurant Website

Statische One-Page-Website für **Bamboo 88**, vietnamesische & asiatische Spezialitäten in Obernzell.
Vanilla HTML / CSS / JS – kein Build-Schritt nötig.

## Lokal ansehen

```bash
python -m http.server 8099
# danach http://localhost:8099 öffnen
```

(Oder einfach `index.html` im Browser öffnen.)

## Struktur

```
index.html
assets/
  css/styles.css
  js/menu-data.js   # Speise- & Getränkekarte, Highlights, Kategorie-Bilder
  js/script.js      # Menü-Rendering, Reservierung, Navigation
  img/              # Bilder + dishes/ (Kategorie-/Gerichtsbilder) + qr-order.svg
```

## Funktionen

- Vollständige Speise- & Getränkekarte (Tabs, Kategorie-Filter, „nur vegetarisch")
- Tischreservierung per WhatsApp + Telefon
- QR-Code zum Online-Bestellen
- Responsive, Accessibility, Schema.org-Daten

## Inhalte anpassen

- **Gerichte/Preise:** `assets/js/menu-data.js`
- **Kategorie-Bild hinzufügen:** Datei `assets/img/dishes/<kategorie-id>.jpg` ablegen oder Eintrag in `CAT_IMAGES`
- **Reservierungs-Nummer:** `RESTAURANT_WA` in `assets/js/script.js`

## Deployment

Statische Seite – deploybar auf Vercel, Netlify oder jedem Webhost.
