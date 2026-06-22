/* ==========================================================================
   Bamboo 88 — Interaktionen
   ========================================================================== */
(function () {
  "use strict";

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ---------- Jahr im Footer ---------- */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- "Nach oben" – ganz nach oben scrollen ---------- */
  const toTop = $(".to-top");
  if (toTop) {
    toTop.addEventListener("click", (e) => {
      e.preventDefault();
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      history.replaceState(null, "", location.pathname + location.search);
    });
  }

  /* ---------- Mobile-Navigation ---------- */
  const nav = $("#nav");
  const toggle = $("#navToggle");
  if (nav && toggle) {
    const closeNav = () => { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Menü öffnen"); };
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    });
    nav.addEventListener("click", (e) => { if (e.target.tagName === "A") closeNav(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeNav(); });
  }

  /* ---------- Reservierung ---------- */
  const RESTAURANT_WA = "4985919396639"; // WhatsApp-Nummer (Format: Ländercode ohne +/0)
  const form = $("#reserveForm");
  if (form) {
    const dateEl = $("#rf-date");
    if (dateEl) {
      const today = new Date();
      const iso = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
      dateEl.min = iso;
      if (!dateEl.value) dateEl.value = iso;
    }

    const errEl = $("#rfError");
    const okEl = $("#rfSuccess");
    const fmtDate = (iso) => { const [y, m, d] = iso.split("-"); return d && m && y ? `${d}.${m}.${y}` : iso; };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = {
        name:  $("#rf-name").value.trim(),
        phone: $("#rf-phone").value.trim(),
        date:  $("#rf-date").value,
        time:  $("#rf-time").value,
        guests: $("#rf-guests").value,
        note:  $("#rf-note").value.trim()
      };

      const missing = [];
      if (!data.name)  missing.push("Name");
      if (!data.phone) missing.push("Telefon");
      if (!data.date)  missing.push("Datum");
      if (!data.time)  missing.push("Uhrzeit");

      if (missing.length) {
        errEl.textContent = "Bitte ausfüllen: " + missing.join(", ") + ".";
        errEl.hidden = false;
        okEl.hidden = true;
        const first = $("#rf-" + missing[0].toLowerCase().replace("telefon", "phone").replace("datum", "date").replace("uhrzeit", "time"));
        if (first) first.focus();
        return;
      }
      errEl.hidden = true;

      const text =
        "Hallo Bamboo 88, ich möchte gerne einen Tisch reservieren:\n\n" +
        "• Name: " + data.name + "\n" +
        "• Personen: " + data.guests + "\n" +
        "• Datum: " + fmtDate(data.date) + "\n" +
        "• Uhrzeit: " + data.time + " Uhr\n" +
        "• Telefon: " + data.phone + "\n" +
        (data.note ? "• Anmerkung: " + data.note + "\n" : "") +
        "\nVielen Dank!";

      window.open("https://wa.me/" + RESTAURANT_WA + "?text=" + encodeURIComponent(text), "_blank", "noopener");

      okEl.innerHTML = "Danke, " + data.name.replace(/</g, "") +
        "! Ihre Anfrage ist vorbereitet – bitte im WhatsApp-Fenster absenden. " +
        "Falls sich nichts öffnet, rufen Sie uns gerne unter <a href=\"tel:+4985919396639\">08591 9396639</a> an.";
      okEl.hidden = false;
      okEl.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  /* ---------- Highlights rendern ---------- */
  const hGrid = $("#highlightGrid");
  if (hGrid && typeof HIGHLIGHTS !== "undefined") {
    hGrid.innerHTML = HIGHLIGHTS.map((h, i) => `
      <article class="h-card reveal" style="transition-delay:${i * 60}ms">
        <div class="h-media">
          ${h.img ? `<img src="${h.img}" alt="${h.name}" loading="lazy" onerror="this.remove()">` : ""}
          <span class="h-tag">${h.tag}</span>
        </div>
        <div class="h-body">
          <h3>${h.name}</h3>
          <p>${h.desc}</p>
          <span class="h-price">${h.price} €</span>
        </div>
      </article>`).join("");
  }

  /* ---------- Speisekarte rendern ---------- */
  const chipsEl   = $("#menuChips");
  const contentEl = $("#menuContent");
  const tabs      = $$(".menu-tab");
  const vegOnly   = $("#vegOnly");

  let currentMenu = "food";

  const flagsHtml = (item) => {
    const f = [];
    if (item.v) f.push('<span class="flag flag-v" title="vegetarisch"></span>');
    if (item.s) f.push('<span class="flag flag-s" title="leicht scharf"></span>');
    return f.length ? `<span class="mi-flags">${f.join("")}</span>` : "";
  };

  const itemHtml = (item) => `
    <div class="menu-item">
      <span class="mi-code">${item.code}</span>
      <span class="mi-body"><span class="mi-name">${item.name}</span>${flagsHtml(item)}</span>
      <span class="mi-dots"></span>
      <span class="mi-price">${item.price}</span>
    </div>`;

  const getData = () => (currentMenu === "food" ? FOOD_MENU : DRINK_MENU);

  function renderMenu() {
    const data = getData();
    const onlyVeg = vegOnly && vegOnly.checked;

    // Chips
    chipsEl.innerHTML =
      `<button class="chip is-active" data-cat="all">Alle</button>` +
      data.map((c) => `<button class="chip" data-cat="${c.id}">${c.name}</button>`).join("");

    // Categories
    const cats = data.map((cat) => {
      const items = onlyVeg ? cat.items.filter((i) => i.v) : cat.items;
      if (!items.length) return "";
      const imgSrc = (typeof CAT_IMAGES !== "undefined" && CAT_IMAGES[cat.id]) || `assets/img/dishes/${cat.id}.jpg`;
      return `
        <section class="menu-cat reveal" id="cat-${cat.id}">
          <div class="cat-banner">
            <img class="cat-img" src="${imgSrc}" alt="${cat.name}" loading="lazy" onerror="this.remove()">
            <span class="cat-scrim" aria-hidden="true"></span>
            <h3>${cat.name}</h3>
          </div>
          <div class="cat-body">
            ${cat.note ? `<p class="cat-note">${cat.note}</p>` : ""}
            <div class="menu-items">${items.map(itemHtml).join("")}</div>
          </div>
        </section>`;
    }).join("");

    contentEl.innerHTML = cats.trim()
      ? cats
      : `<p class="menu-empty">Keine vegetarischen Gerichte in dieser Auswahl.</p>`;

    bindChips();
    observeReveals();
  }

  function bindChips() {
    $$(".chip", chipsEl).forEach((chip) => {
      chip.addEventListener("click", () => {
        $$(".chip", chipsEl).forEach((c) => c.classList.remove("is-active"));
        chip.classList.add("is-active");
        const cat = chip.dataset.cat;
        if (cat === "all") {
          window.scrollTo({ top: window.scrollY, behavior: "auto" });
        } else {
          const target = $(`#cat-${cat}`);
          if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => { t.classList.remove("is-active"); t.setAttribute("aria-selected", "false"); });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");
      currentMenu = tab.dataset.menu;
      renderMenu();
    });
  });

  if (vegOnly) vegOnly.addEventListener("change", renderMenu);

  /* ---------- Scroll-Reveal ---------- */
  let io;
  function observeReveals() {
    const els = $$(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("in")); return; }
    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    }
    els.forEach((el) => io.observe(el));
  }

  /* ---------- Init ---------- */
  if (chipsEl && contentEl && typeof FOOD_MENU !== "undefined") renderMenu();
  observeReveals();
})();
