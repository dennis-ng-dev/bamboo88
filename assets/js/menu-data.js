/* ==========================================================================
   Bamboo 88 – Menü-Daten
   Quelle: Speisekarte & Getränkekarte (Stand Mai 2026)
   Flags:  v = vegetarisch · s = leicht scharf
   ========================================================================== */

const FOOD_MENU = [
  {
    id: "sommerrollen",
    name: "Sommerrollen",
    note: "Kalt – beliebte Sommerrollen mit Reisnudeln, frischem Salat, Minze, Koriander und Thai-Basilikum. Serviert mit Hoisin-Sauce und Erdnüssen.",
    items: [
      { code: "1A", name: "2 Stück / kalt mit Hühnerfleisch", price: "5,50" },
      { code: "1B", name: "2 Stück / kalt mit Garnelen", price: "5,50" },
      { code: "1C", name: "2 Stück / kalt mit Rindfleisch und Zitronengras", price: "5,50" },
      { code: "1D", name: "2 Stück / kalt mit Tofu", price: "5,50", v: true },
      { code: "1E", name: "2 Stück / kalt mit Ente", price: "5,90" }
    ]
  },
  {
    id: "salate",
    name: "Salate",
    note: "Mit frischen vietnamesischen Kräutern (Koriander, Minze, Thai-Basilikum), roten Zwiebeln, Erdnüssen und Röstzwiebeln. Dazu ein aromatisches hausgemachtes Dressing aus Fisch-Sauce, Limetten und Chilischoten.",
    items: [
      { code: "2A", name: "Salat mit grünen Papayastreifen und Garnelen & Sesamcracker", price: "6,90" },
      { code: "2B", name: "Salat mit knusprigen Entenbruststreifen und Sojasprossen", price: "7,50" },
      { code: "2C", name: "Glasnudelsalat mit Rindfleisch", price: "6,50" },
      { code: "2D", name: "Gemischter Salat mit Edamame & Sesamcracker", price: "7,50", v: true },
      { code: "2E", name: "Mangosalat mit Garnelen, Sojasprossen & Sesamcracker", price: "7,50" }
    ]
  },
  {
    id: "vorspeisen",
    name: "Vorspeisen",
    items: [
      { code: "3A", name: "Edamame mit grünen Sojabohnen und Salz", price: "5,90", v: true },
      { code: "3B", name: "Wan Tan – gebacken, 6 Stück", price: "5,90" },
      { code: "3C", name: "Krupuk – Krabbenchips", price: "4,00" },
      { code: "3D", name: "Hühner-Saté – 2 Spießchen mit Erdnusssauce", price: "5,50" },
      { code: "3E", name: "Bio-Tofu – gebacken", price: "5,50", v: true },
      { code: "3F", name: "Hausgemachte Frühlingsrolle – Schweinefleisch & Garnelen, 2 Stück", price: "5,90" },
      { code: "3G", name: "Mini-Frühlingsrolle mit Gemüsefüllung – 6 Stück", price: "4,50", v: true },
      { code: "3H", name: "Riesengarnelen gebacken im Teig – 4 Stück", price: "6,90" },
      { code: "3I", name: "Vorspeisenteller – Wan-Tan, Hühner-Saté, Mini- & vietn. Frühlingsrolle, Garnelen", price: "11,90" }
    ]
  },
  {
    id: "suppen",
    name: "Suppen",
    items: [
      { code: "4A", name: "Pak-Choi Suppe mit Ingwer und Garnelen", price: "5,90" },
      { code: "4B", name: "Suppe mit Garnelen und frischen Champignons", price: "6,50" },
      { code: "4C", name: "Glasnudelsuppe mit Hühnerbrustfilet", price: "5,90" },
      { code: "4D", name: "Suppe mit Hühnerfleisch und Kokosmilch", price: "5,90" },
      { code: "4E", name: "Maultaschen Suppe mit Hühnerbrühe", price: "5,90" },
      { code: "4F", name: "Süß-Sauer scharfe Suppe", price: "5,50", s: true },
      { code: "4G", name: "Gemüsesuppe", price: "5,50", v: true }
    ]
  },
  {
    id: "pho",
    name: "Pho – Reisbandnudelsuppen",
    note: "Nationalgericht aus Vietnam – große Reisbandnudelsuppe in feiner, 12 Stunden gekochter Brühe mit Ingwer, Zimt, Sternanis und Kardamom. Serviert mit Sojasprossen, Thai-Basilikum, Koriander, Limette, Chili und Hoisin-Sauce.",
    items: [
      { code: "5A", name: "Rindfleisch", price: "14,90" },
      { code: "5B", name: "Hühnerfleisch", price: "14,90" },
      { code: "5C", name: "Bio-Tofu", price: "14,90", v: true },
      { code: "5D", name: "Udon-Nudelsuppe mit Hühnerfleisch", price: "14,90" },
      { code: "5E", name: "Udon-Nudelsuppe mit Rindfleisch", price: "14,90" }
    ]
  },
  {
    id: "udon-curry",
    name: "Udon-Nudel-Curry",
    note: "In roter Curry-Kokosmilch-Sauce mit Salat, Gurken, Koriander, Röstzwiebeln und asiatischen Kräutern.",
    items: [
      { code: "6A", name: "Hühnerfleisch", price: "13,90" },
      { code: "6B", name: "Rindfleisch", price: "14,90" },
      { code: "6C", name: "Bio-Tofu", price: "13,90", v: true }
    ]
  },
  {
    id: "reisbandnudeln-curry",
    name: "Reisbandnudeln-Curry",
    note: "In roter Curry-Kokosmilch-Sauce mit Salat, Gurken, Koriander, Röstzwiebeln und asiatischen Kräutern.",
    items: [
      { code: "7A", name: "Hühnerfleisch", price: "13,90" },
      { code: "7B", name: "Rindfleisch", price: "13,90" },
      { code: "7C", name: "Bio-Tofu", price: "14,90", v: true }
    ]
  },
  {
    id: "pad-thai",
    name: "Pad Thai",
    note: "Gebratene Reisbandnudeln mit Ei, Sojasprossen, Frühlingszwiebeln, Koriander, Erdnüssen und Limette in Tamarinden-Sauce.",
    items: [
      { code: "8A", name: "Bio-Tofu", price: "13,90", v: true },
      { code: "8B", name: "Hühnerfleisch", price: "13,90" },
      { code: "8C", name: "Rindfleisch", price: "14,50" },
      { code: "8D", name: "Garnelen", price: "15,50" },
      { code: "8E", name: "Knusprige Ente", price: "16,50" }
    ]
  },
  {
    id: "reisnudelschale",
    name: "Reisnudelschale",
    note: "Mit frischem Salat, Gurken, Sojasprossen, Erdnüssen und asiatischen Kräutern, dazu hausgemachte Hoisinsauce.",
    items: [
      { code: "9A", name: "Knusprige Ente", price: "15,50" },
      { code: "9B", name: "Gegrillte Riesengarnelen", price: "16,50" },
      { code: "9C", name: "Gegrilltes Schweinefleisch und Hackfleisch", price: "16,50" },
      { code: "9D", name: "Frühlingsrollen", price: "13,90" },
      { code: "9E", name: "Rindfleisch", price: "14,90" },
      { code: "9F", name: "Bio-Tofu", price: "13,90", v: true },
      { code: "9G", name: "Hühnerfleisch, Zitronengras & Chilischoten", price: "13,90", s: true },
      { code: "9H", name: "Rindfleisch gefüllt in Wild-Betelblättern", price: "15,90" }
    ]
  },
  {
    id: "gebratene-eiernudeln",
    name: "Gebratene Eiernudeln",
    note: "Mit frischem Gemüse.",
    items: [
      { code: "10A", name: "Hühnerfleisch", price: "13,50" },
      { code: "10B", name: "Gemüse", price: "13,50", v: true },
      { code: "10C", name: "Bio-Tofu", price: "13,50", v: true },
      { code: "10D", name: "Knuspriges Hähnchen", price: "14,50" },
      { code: "10E", name: "Rindfleisch", price: "13,50" },
      { code: "10F", name: "Knusprige Ente", price: "16,50" }
    ]
  },
  {
    id: "gebratener-reis",
    name: "Gebratener Reis",
    note: "Mit frischem Gemüse und Ei.",
    items: [
      { code: "11A", name: "Hühnerfleisch & Ei", price: "13,50" },
      { code: "11B", name: "Gemüse & Ei", price: "13,50", v: true },
      { code: "11C", name: "Bio-Tofu & Ei", price: "13,50", v: true },
      { code: "11D", name: "Knuspriges Hähnchen & Ei", price: "14,50" },
      { code: "11E", name: "Rindfleisch & Ei", price: "13,50" },
      { code: "11F", name: "Knusprige Ente & Ei", price: "16,50" }
    ]
  },
  {
    id: "chicken",
    name: "Chicken-Gerichte",
    note: "Mit frischem Gemüse und Reis als Beilage.",
    items: [
      { code: "12A", name: "Hühnerfleisch mit Sojasauce", price: "13,50" },
      { code: "12B", name: "Hühnerfleisch mit Kokosmilch & Currysauce", price: "13,50" },
      { code: "12C", name: "Hühnerfleisch mit Erdnusssauce", price: "13,50" },
      { code: "12D", name: "Hühnerfleisch mit Zitronengras", price: "13,50" },
      { code: "12E", name: "Hühnerfleisch mit Kokosmilch & Mangosauce", price: "13,50" },
      { code: "12F", name: "Paniertes Hähnchen mit Süßsauer-Sauce", price: "13,50" },
      { code: "12G", name: "Knuspriges Hähnchen mit Kokosmilch & roter Currysauce", price: "14,50" },
      { code: "12H", name: "Knuspriges Hähnchen mit Erdnusssauce", price: "14,50" },
      { code: "12I", name: "Knuspriges Hähnchen mit Pak-Choi & Austernsauce", price: "14,50" },
      { code: "12J", name: "Knuspriges Hähnchen mit Süßsauer-Sauce", price: "14,50" },
      { code: "12K", name: "Knuspriges Hähnchen mit Zitronengras", price: "14,50" },
      { code: "12L", name: "Knuspriges Hähnchen mit Kokosmilch & Mangosauce", price: "14,50" }
    ]
  },
  {
    id: "ente",
    name: "Enten-Gerichte",
    note: "Mit frischem Gemüse und Reis als Beilage.",
    items: [
      { code: "13A", name: "Knusprige Ente mit Ingwer & Hoisin-Sauce", price: "16,50" },
      { code: "13B", name: "Knusprige Ente mit Kokosmilch & Currysauce", price: "16,50" },
      { code: "13C", name: "Knusprige Ente mit Erdnusssauce", price: "16,50" },
      { code: "13D", name: "Knusprige Ente mit Zitronengras", price: "16,50" },
      { code: "13E", name: "Knusprige Ente mit Kokosmilch & Mangosauce", price: "16,50" },
      { code: "13F", name: "Knusprige Ente mit Thai-Basilikum", price: "16,50" },
      { code: "13G", name: "Knusprige Ente mit Pak-Choi & Sojasauce", price: "16,50" }
    ]
  },
  {
    id: "rind",
    name: "Rinder-Gerichte",
    note: "Mit frischem Gemüse und Reis als Beilage.",
    items: [
      { code: "14A", name: "Rindfleisch mit Ingwer & Hoisin-Sauce", price: "14,50" },
      { code: "14B", name: "Rindfleisch mit Kokosmilch & Currysauce", price: "14,50" },
      { code: "14C", name: "Rindfleisch mit Erdnusssauce", price: "14,50" },
      { code: "14D", name: "Rindfleisch mit Zitronengras", price: "14,50" },
      { code: "14E", name: "Rindfleisch mit Kokosmilch & Mangosauce", price: "14,50" },
      { code: "14F", name: "Rindfleisch mit Peperoni & Thai-Basilikum", price: "14,50", s: true },
      { code: "14G", name: "Rindfleisch mit Pak-Choi & Sojasauce", price: "14,50" }
    ]
  },
  {
    id: "meeresfruechte",
    name: "Meeresfrüchte",
    note: "Mit frischem Gemüse und Reis als Beilage.",
    items: [
      { code: "15A", name: "Riesengarnelen mit Tintenfisch & Austernsauce", price: "16,90" },
      { code: "15B", name: "Riesengarnelen mit Kokosmilch & Currysauce", price: "16,90" },
      { code: "15C", name: "Riesengarnelen mit Erdnusssauce", price: "16,90" },
      { code: "15D", name: "Riesengarnelen mit Zitronengras", price: "16,90" },
      { code: "15E", name: "Riesengarnelen mit Pak-Choi & Sojasauce", price: "16,90" },
      { code: "15F", name: "Riesengarnelen mit Kokosmilch & Mangosauce", price: "16,90" },
      { code: "15G", name: "Riesengarnelen mit Tunfisch, Lachs, Krebsfleisch, Kokosmilch & Currysauce", price: "17,90" },
      { code: "15H", name: "Gebackenes Fischfilet mit Kokosmilch & Currysauce", price: "13,90" }
    ]
  },
  {
    id: "vegetarisch",
    name: "Vegetarisch",
    note: "Mit frischem Gemüse und Reis als Beilage.",
    items: [
      { code: "16A", name: "Verschiedenes asiatisches Gemüse", price: "13,50", v: true },
      { code: "16B", name: "Gemüse mit Kokosmilch & Currysauce", price: "13,50", v: true },
      { code: "16C", name: "Gemüse mit Zitronengras & Chilischoten", price: "13,50", v: true, s: true },
      { code: "16D", name: "Gemüse mit Kokosmilch & Mangosauce", price: "13,50", v: true },
      { code: "16E", name: "Bio-Tofu mit Chili-Kokosmilch & Erdnusssauce", price: "13,50", v: true, s: true },
      { code: "16F", name: "Bio-Tofu mit Kokosmilch & Currysauce", price: "13,50", v: true },
      { code: "16G", name: "Bio-Tofu mit Zitronengras & Chilischoten", price: "13,50", v: true, s: true }
    ]
  },
  {
    id: "menue-2",
    name: "Menü für 2 Personen",
    items: [
      { code: "17A", name: "Hà Nội Menü – Hühner-Saté, Glasnudeln, Hühnerfleisch mit Zitronengras, knusprige Ente mit Currysauce, gebackene Banane & Ananas + 1,0 l Softdrink", price: "39,90" },
      { code: "17B", name: "Sài Gòn Menü – Mini-Frühlingsrolle & Hühnersuppe mit Kokosmilch, Hühnerfleisch mit Curry-Kokosmilch, gebratene Nudeln mit knuspriger Ente, gebackene Banane in Kokosmilch + 1,0 l Softdrink", price: "39,90" }
    ]
  },
  {
    id: "nachtisch",
    name: "Nachtisch",
    items: [
      { code: "18A", name: "Gebackene Banane & Ananas", price: "6,50", v: true },
      { code: "18B", name: "Gebackene Banane mit Kokosstreifen, Erdnüssen & Sesam in Kokosmilch", price: "7,50", v: true },
      { code: "18C", name: "Hausgemachte Mango-Creme", price: "4,90", v: true },
      { code: "18D", name: "Vietnamesische Kochbanane mit Kokosmilch & Erdnüssen", price: "5,90", v: true },
      { code: "18E", name: "Mochi-Eis (Mango, Kokos oder Vanille)", price: "4,90", v: true }
    ]
  },
  {
    id: "extras",
    name: "Extras",
    items: [
      { code: "19A", name: "Gebratene Nudeln / Reis", price: "5,90", v: true },
      { code: "—", name: "Extra Sauce (Süßsauer / Erdnuss)", price: "2,90", v: true }
    ]
  }
];

const DRINK_MENU = [
  {
    id: "softdrinks",
    name: "Softdrinks",
    items: [
      { code: "200", name: "Gerolsteiner Naturell 0,5 l / 0,7 l", price: "4,50 / 6,20" },
      { code: "201", name: "Gerolsteiner Sprudel 0,5 l / 0,7 l", price: "4,50 / 6,20" },
      { code: "202", name: "Coca-Cola 0,33 l", price: "3,50" },
      { code: "203", name: "Coca-Cola Light 0,33 l", price: "3,50" },
      { code: "204", name: "Fanta 0,33 l", price: "3,50" },
      { code: "205", name: "Sprite 0,33 l", price: "3,50" },
      { code: "206", name: "Eistee 0,33 l", price: "3,50" },
      { code: "207", name: "Cola Mix 0,5 l", price: "3,90" }
    ]
  },
  {
    id: "fruchtschorle",
    name: "Fruchtschorle",
    note: "0,2 l / 0,4 l",
    items: [
      { code: "208", name: "Orange", price: "2,90 / 3,90" },
      { code: "209", name: "Apfel", price: "2,90 / 3,90" },
      { code: "210", name: "Mango", price: "2,90 / 3,90" },
      { code: "211", name: "Lychee", price: "2,90 / 3,90" },
      { code: "212", name: "Maracuja", price: "2,90 / 3,90" },
      { code: "213", name: "Johannisbeere", price: "2,90 / 3,90" }
    ]
  },
  {
    id: "fruchtsaft",
    name: "Fruchtsaftgetränke",
    note: "0,2 l / 0,4 l",
    items: [
      { code: "214", name: "Orange", price: "3,50 / 5,50" },
      { code: "215", name: "Apfel", price: "3,50 / 5,50" },
      { code: "216", name: "Mango", price: "3,50 / 5,50" },
      { code: "217", name: "Lychee", price: "3,50 / 5,50" },
      { code: "218", name: "Maracuja", price: "3,50 / 5,50" },
      { code: "219", name: "Johannisbeere", price: "3,50 / 5,50" }
    ]
  },
  {
    id: "hotdrinks",
    name: "Hot Drinks",
    items: [
      { code: "220", name: "Ingwertee", price: "3,50" },
      { code: "221", name: "Jasmintee", price: "3,50" },
      { code: "222", name: "Grüner Tee", price: "3,50" },
      { code: "223", name: "Espresso", price: "2,50" },
      { code: "224", name: "Doppelter Espresso", price: "3,50" },
      { code: "225", name: "Kaffee", price: "3,50" },
      { code: "226", name: "Cappuccino", price: "3,50" },
      { code: "227", name: "Vietnamesischer Kaffee (warm oder kalt)", price: "5,00" }
    ]
  },
  {
    id: "limonaden",
    name: "Limonaden",
    items: [
      { code: "228", name: "Ginger – Ingwer, Limette, Maracujanektar, Soda", price: "4,50" },
      { code: "229", name: "Lemongrass – Zitronengras, Limette, Apfelsaft, Cranberry, Soda", price: "4,50" },
      { code: "230", name: "Mint – Minze, Limette, Maracuja- & Cranberrynektar, Soda", price: "4,50" },
      { code: "231", name: "Jasmin-Lime – Limette, Jasmintee, Rohrzucker, Eiswürfel", price: "4,50" }
    ]
  },
  {
    id: "mocktails",
    name: "Alkoholfreie Cocktails",
    items: [
      { code: "308", name: "Fresh Garden – Maracuja-Lychee-Mango, Zitrone, Grenadine, Minze", price: "5,50" },
      { code: "309", name: "Ipanema – Maracuja, Ginger Ale, Limetten, Rohrzucker", price: "5,50" },
      { code: "310", name: "Gurken-Limo – Gurken, Gurkensirup, Limetten, Soda, Minze", price: "5,50" },
      { code: "311", name: "Rainbow Cocktail – Grenadine, Orangensaft, Blue Curaçao, Mineralwasser", price: "5,50" }
    ]
  },
  {
    id: "aperitif",
    name: "Aperitif",
    items: [
      { code: "302", name: "Aperol Spritz – Aperol, Soda, Orange, Prosecco", price: "5,90" },
      { code: "303", name: "Campari Orange – Campari, Orangensaft, Orange", price: "6,90" },
      { code: "304", name: "Hugo – Holundersirup, Zitrone, Limette, Soda, Prosecco, Minze", price: "5,90" },
      { code: "305", name: "Lillet Wild Berry – Lillet, Russian Wild Berry, Beeren", price: "6,90" },
      { code: "306", name: "Gin Tonic – Gin, Tonic Water, Gurken, Rosmarin", price: "7,90" },
      { code: "307", name: "Wild Berry Spritz – Russian Wild Berry, Prosecco, Limetten, Minze", price: "5,90" }
    ]
  },
  {
    id: "bier",
    name: "Bier",
    items: [
      { code: "312", name: "Urtyp Hell 0,5 l", price: "3,90" },
      { code: "313", name: "Radler 0,5 l", price: "3,90" },
      { code: "314", name: "Stockbauer Weiße Original 0,5 l", price: "3,90" },
      { code: "315", name: "Stockbauer Weiße Dunkel 0,5 l", price: "3,90" },
      { code: "316", name: "Erdinger Alkoholfrei 0,5 l", price: "3,90" },
      { code: "317", name: "Pils 0,33 l", price: "3,50" }
    ]
  },
  {
    id: "wein",
    name: "Wein",
    note: "0,2 l",
    items: [
      { code: "400", name: "Weißwein", price: "4,50" },
      { code: "401", name: "Weinschorle – erfrischend & leicht", price: "4,50" },
      { code: "402", name: "Grauburgunder – trocken, fruchtig & leicht nussig", price: "5,50" },
      { code: "403", name: "Rosé – trocken, frisch & fruchtig", price: "5,00" },
      { code: "404", name: "Merlot – trocken, weich & vollmundig", price: "5,00" },
      { code: "405", name: "Cabernet Sauvignon – trocken, kräftig & würzig", price: "5,00" },
      { code: "406", name: "Prosecco – feinperlig & elegant", price: "5,50" },
      { code: "407", name: "Flaschenweine – Einheitspreis", price: "20,90" }
    ]
  },
  {
    id: "spirituosen",
    name: "Spirituosen",
    note: "0,2 cl",
    items: [
      { code: "318", name: "Nếp Mới", price: "3,50" },
      { code: "319", name: "Vodka", price: "3,50" },
      { code: "320", name: "Jägermeister", price: "3,50" },
      { code: "321", name: "Jack Daniel's / Rum Stone", price: "3,50" }
    ]
  }
];

const HIGHLIGHTS = [
  { name: "Phở Rind", desc: "12-Stunden-Brühe, Reisbandnudeln, frische Kräuter", price: "14,90", tag: "Klassiker", img: "assets/img/dishes/pho.jpg" },
  { name: "Frische Sommerrollen", desc: "Reisnudeln, Salat, Minze – mit Hoisin & Erdnuss", price: "5,50", tag: "Beliebt", img: "assets/img/dishes/frische-sommerrollen.jpg" },
  { name: "Knusprige Ente Süß-Sauer", desc: "Knusprige Ente mit frischem Gemüse & Reis", price: "16,50", tag: "Spezialität", img: "assets/img/dishes/ente-suess-sauer.jpg" },
  { name: "Knuspriges Hähnchen Curry", desc: "Knuspriges Hähnchen in roter Currysauce & Reis", price: "14,50", tag: "Empfehlung", img: "assets/img/dishes/chicken.jpg" },
  { name: "Gebratene Nudeln mit Ente", desc: "Eiernudeln mit knuspriger Ente & Gemüse", price: "16,50", tag: "Hausgemacht", img: "assets/img/dishes/gebratene-nudeln.jpg" },
  { name: "Meeresfrüchte mit Gemüse", desc: "Riesengarnelen & frisches Gemüse in brauner Sauce", price: "16,90", tag: "Beliebt", img: "assets/img/dishes/meeresfruechte.jpg" }
];

/* Kategorie-Bilder (Bild pro Menü-Kategorie).
   Fehlt ein Eintrag, versucht die Seite automatisch assets/img/dishes/<id>.jpg –
   einfach eine passend benannte Datei dort ablegen, dann erscheint sie automatisch. */
const CAT_IMAGES = {
  "sommerrollen":         "assets/img/dishes/sommerrollen.jpg",
  "salate":               "assets/img/dishes/frische-sommerrollen.jpg",
  "pho":                  "assets/img/dishes/pho.jpg",
  "udon-curry":           "assets/img/dishes/udon.jpg",
  "reisbandnudeln-curry": "assets/img/dishes/udon.jpg",
  "pad-thai":             "assets/img/dishes/gebratene-nudeln.jpg",
  "reisnudelschale":      "assets/img/dishes/gebratene-nudeln.jpg",
  "gebratene-eiernudeln": "assets/img/dishes/gebratene-nudeln.jpg",
  "chicken":              "assets/img/dishes/chicken.jpg",
  "ente":                 "assets/img/dishes/ente.jpg",
  "meeresfruechte":       "assets/img/dishes/meeresfruechte.jpg"
};

const SPECIALTIES = [
  "Meeresfrüchte mit Gemüse in brauner Sauce",
  "Sommerrollen mit Garnelen",
  "Frische Sommerrollen",
  "Udon-Nudeln in Cremesauce",
  "Knuspriges Hähnchen in Currysoße",
  "Knusprige Ente in roter Currysoße",
  "Knusprige Ente süß-sauer",
  "Gebratene Reisbandnudeln mit Ente"
];
