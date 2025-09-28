import i18next from "i18next";

/* i18n setup */
const resources = {
  de: {
    translation: {
      brand: "WisdomBot",
      nav: { home: "Start", team: "Team", docs: "Dokumentation", impressum: "Impressum", terms: "AGB", privacy: "Datenschutz" },
      hero: { title: "Der All-in-One Discord Bot für Moderation, Musik und mehr.", subtitle: "Smarte Tools, saubere Performance und einfache Bedienung – alles in einem Bot." },
      cta: { invite: "Bot einladen", docs: "Zur Dokumentation" },
      features: {
        mod: { title: "Moderation", desc: "Automod, Mutes, Warnungen und Logs – robust und zuverlässig." },
        music: { title: "Musik", desc: "Warteschlange, Playlists und hochwertige Audio-Wiedergabe." },
        utility: { title: "Utilities", desc: "Rollen, Umfragen, Erinnerungen und praktische Shortcuts." }
      },
      panel: { title: "Warum WisdomBot?", point1: "Schnell, stabil und wartungsfreundlich", point2: "Einfaches Setup mit klaren Befehlen", point3: "Transparente Updates und aktive Community" },
      team: { title: "Team", subtitle: "Die Köpfe hinter WisdomBot.", roles: { founder: "Gründer • Lead Developer", community: "Community Manager • Support", ops: "DevOps • Infrastruktur" } },
      docs: {
        title: "Dokumentation", subtitle: "Schneller Einstieg und Referenz.",
        getting: { title: "Erste Schritte", step1: "Bot einladen und die erforderlichen Berechtigungen wählen.", step2: "/setup im Server ausführen, um Grundfunktionen zu aktivieren.", step3: "Module nach Bedarf in den Einstellungen aktivieren/deaktivieren." },
        commands: { title: "Befehle (Auszug)", warn: "Verwarnt einen Nutzer", play: "Spielt einen Track", poll: "Erstellt eine Umfrage" }
      },
      impressum: { title: "Impressum", subtitle: "Angaben gemäß § 5 TMG", operator: "Diensteanbieter:", contact: "Kontakt:", responsible: "Verantwortlich:", note: "Hinweis: Dies ist ein Platzhalter-Impressum. Bitte mit echten Daten ersetzen." },
      terms: {
        title: "Allgemeine Geschäftsbedingungen", subtitle: "Bitte sorgfältig lesen.",
        use: { title: "Nutzung", desc: "Die Nutzung des Bots erfolgt auf eigenes Risiko. Änderungen der Funktionen sind jederzeit möglich." },
        liability: { title: "Haftung", desc: "Wir übernehmen keine Haftung für Datenverluste, Ausfälle oder Schäden, die durch die Nutzung entstehen." },
        termination: { title: "Beendigung", desc: "Wir behalten uns vor, den Zugang bei Missbrauch zu sperren." }
      },
      privacy: {
        title: "Datenschutzerklärung", subtitle: "Transparenz und Kontrolle über deine Daten.",
        data: { title: "Welche Daten werden verarbeitet?", desc: "Minimal notwendige Server- und Nutzerinformationen zur Bereitstellung der Funktionen." },
        storage: { title: "Speicherdauer", desc: "Logs werden regelmäßig rotiert und nur so lange gespeichert wie erforderlich." },
        rights: { title: "Deine Rechte", desc: "Kontaktier uns für Auskunft, Löschung oder Berichtigung deiner Daten." }
      },
      error404: {
          title: "404 - Seite nicht gefunden",
          subtitle: "Ups! Die angeforderte Seite existiert nicht oder wurde verschoben.",
          cta_home: "Zur Startseite",
          cta_docs: "Zur Dokumentation"
      }
    }
  },
  en: {
    translation: {
      brand: "WisdomBot",
      nav: { home: "Home", team: "Team", docs: "Docs", impressum: "Imprint", terms: "Terms", privacy: "Privacy" },
      hero: { title: "The all-in-one Discord bot for moderation, music, and more.", subtitle: "Smart tools, clean performance, and simple controls — all in one bot." },
      cta: { invite: "Invite Bot", docs: "Open Docs" },
      features: {
        mod: { title: "Moderation", desc: "Automod, mutes, warnings and logs — robust and reliable." },
        music: { title: "Music", desc: "Queue, playlists and high-quality audio playback." },
        utility: { title: "Utilities", desc: "Roles, polls, reminders and handy shortcuts." }
      },
      panel: { title: "Why WisdomBot?", point1: "Fast, stable, and maintainable", point2: "Easy setup with clear commands", point3: "Transparent updates and active community" },
      team: { title: "Team", subtitle: "The people behind WisdomBot.", roles: { founder: "Founder • Lead Developer", community: "Community Manager • Support", ops: "DevOps • Infrastructure" } },
      docs: {
        title: "Documentation", subtitle: "Quickstart and reference.",
        getting: { title: "Getting Started", step1: "Invite the bot and choose required permissions.", step2: "Run /setup on your server to enable core features.", step3: "Enable/disable modules as needed in settings." },
        commands: { title: "Commands (excerpt)", warn: "Warns a user", play: "Plays a track", poll: "Creates a poll" }
      },
      impressum: { title: "Imprint", subtitle: "Information according to § 5 TMG", operator: "Service provider:", contact: "Contact:", responsible: "Responsible:", note: "Note: This is placeholder content. Replace with real data." },
      terms: {
        title: "Terms of Service", subtitle: "Please read carefully.",
        use: { title: "Use", desc: "Use of the bot is at your own risk. Features may change at any time." },
        liability: { title: "Liability", desc: "We assume no liability for data loss, outages, or damages resulting from use." },
        termination: { title: "Termination", desc: "We reserve the right to restrict access in cases of abuse." }
      },
      privacy: {
        title: "Privacy Policy", subtitle: "Transparency and control over your data.",
        data: { title: "What data is processed?", desc: "Minimal necessary server and user information to provide features." },
        storage: { title: "Retention", desc: "Logs are rotated regularly and kept only as long as needed." },
        rights: { title: "Your rights", desc: "Contact us to request access, deletion, or correction of your data." }
      },
      error404: {
          title: "404 - Page Not Found",
          subtitle: "Oops! The requested page doesn't exist or has been moved.",
          cta_home: "Go Home",
          cta_docs: "Open Docs"
      }
    }
  }
};

await i18next.init({ lng: localStorage.getItem("lng") || "de", resources });

/* apply translations */
function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const text = i18next.t(key);
    if (text) el.textContent = text;
  });
}

/* nav interactions */
const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector("[data-nav]");
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
}

/* language switch */
const langSelect = document.getElementById("lang-select");
if (langSelect) {
  langSelect.value = i18next.language;
  langSelect.addEventListener("change", (e) => {
    const lng = e.target.value;
    i18next.changeLanguage(lng).then(() => {
      localStorage.setItem("lng", lng);
      applyTranslations();
    });
  });
}

/* year */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* initial translate */
applyTranslations();

/* close nav on link tap (mobile UX) */
nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menuBtn?.setAttribute("aria-expanded", "false");
}));