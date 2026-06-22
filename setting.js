// Beispiel-Konfiguration für die Stapler-Transport-Normalisierung.
// Diese Datei ist optional. Wenn sie fehlt, nutzt index.html interne Default-Werte.
window.APP_SETTINGS = {
  alreadyAnalysedUntil: "2026-06-16",
  outputPrefix: "stapler_normalisiert",
  debugPrefix: "DEBUG_stapler_match_probleme",
  kalenderwocheModus: "ISO",
  zeitzone: "Europe/Berlin",

  staplerOhnePallet: {
    fileNameStartsWith: ["ROHDATEN", "stapler_prämie"],
    sheets: ["Staplerfahrer", "SL", "Tabelle1"]
  },

  staplerMitPallet: {
    fileNameStartsWith: ["ROHDATEN", "stapler_prämie", "Stapler", "Transport"],
    sheets: ["Staplerfahrer", "SL", "Tabelle1"]
  }
};
