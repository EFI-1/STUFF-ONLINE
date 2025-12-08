/* ============================================================
   Dreamy Portal Theme Switcher (Keyboard Controls + Legend)
   ------------------------------------------------------------
   - Press 1 → Dreamy ✨
   - Press 2 → Misty 🌫️
   - Press 3 → Cosmic 🌌
   - Press 4 → Red Lightbulb 💡
   Themes are applied by swapping CSS variables defined in :root.
   A floating legend shows the shortcuts.
=========================================================== */

const root = document.documentElement;

/* === Theme definitions ===
   Modular: add new themes here.
=========================================================== */
const themes = {
  dreamy: {
    '--bg-main': '#191932',
    '--bg-fade': '#000000',
    '--fog1-color': 'rgba(255,255,255,0.08)',
    '--fog2-color': 'rgba(200,200,255,0.05)',
    '--heading-color': 'rgba(255,255,255,0.8)',
    '--heading-glow': 'rgba(255,255,255,0.4)'
  },
  misty: {
    '--bg-main': '#2a2a2a',
    '--bg-fade': '#000000',
    '--fog1-color': 'rgba(255,255,255,0.12)',
    '--fog2-color': 'rgba(180,180,180,0.08)',
    '--heading-color': 'rgba(240,240,240,0.85)',
    '--heading-glow': 'rgba(200,200,200,0.3)'
  },
  cosmic: {
    '--bg-main': '#0b0033',
    '--bg-fade': '#000000',
    '--fog1-color': 'rgba(150,0,255,0.08)',
    '--fog2-color': 'rgba(0,200,255,0.05)',
    '--heading-color': 'rgba(255,255,255,0.9)',
    '--heading-glow': 'rgba(0,200,255,0.5)'
  },
  redlightbulb: {
    '--bg-main': '#330000',
    '--bg-fade': '#000000',
    '--fog1-color': 'rgba(255,0,0,0.08)',
    '--fog2-color': 'rgba(255,50,50,0.05)',
    '--heading-color': 'red',
    '--heading-glow': 'black'
  }
};

/* === Apply a theme by name === */
function applyTheme(themeName) {
  const theme = themes[themeName];
  if (!theme) return;
  for (const variable in theme) {
    root.style.setProperty(variable, theme[variable]);
  }
  console.log(`Applied theme: ${themeName}`);
}

/* === Keyboard shortcuts === */
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case '1':
      applyTheme('dreamy');
      showOverlay('✨ Dreamy');
      break;
    case '2':
      applyTheme('misty');
      showOverlay('🌫️ Misty');
      break;
    case '3':
      applyTheme('cosmic');
      showOverlay('🌌 Cosmic');
      break;
    case '4':
      applyTheme('redlightbulb');
      showOverlay('💡 Red Lightbulb');
      break;
  }
});

/* === Overlay feedback === */
function showOverlay(label) {
  const overlay = document.createElement('div');
  overlay.textContent = label;
  overlay.style.position = 'fixed';
  overlay.style.top = '50%';
  overlay.style.left = '50%';
  overlay.style.transform = 'translate(-50%, -50%)';
  overlay.style.fontSize = '2rem';
  overlay.style.color = '#fff';
  overlay.style.textShadow = '0 0 10px rgba(255,255,255,0.7)';
  overlay.style.background = 'rgba(0,0,0,0.4)';
  overlay.style.padding = '0.5rem 1rem';
  overlay.style.borderRadius = '8px';
  overlay.style.zIndex = '9999';
  document.body.appendChild(overlay);

  setTimeout(() => overlay.remove(), 1000);
}

/* === Legend display ===
   Responsive: shrinks font size if more themes are added.
=========================================================== */
function showLegend() {
  const legend = document.getElementById('legend');
  legend.style.position = 'fixed';
  legend.style.bottom = '1rem';
  legend.style.left = '1rem';
  legend.style.color = '#fff';
  legend.style.background = 'rgba(0,0,0,0.3)';
  legend.style.padding = '0.5rem 1rem';
  legend.style.borderRadius = '6px';
  legend.style.textShadow = '0 0 6px rgba(255,255,255,0.5)';
  legend.style.fontSize = '0.9rem'; // smaller font for more themes
  legend.textContent = '1 ✨  2 🌫️  3 🌌  4 💡';
}

/* === Initialize on page load === */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme('dreamy');
  showOverlay('✨ Dreamy');
  showLegend();
});
