/* ============================================================
   Dreamy Portal Theme Switcher (Keyboard Controls + Legend)
   ------------------------------------------------------------
   THEMES AVAILABLE:
   - Press 1 → Dreamy ✨
   - Press 2 → Misty 🌫️
   - Press 3 → Cosmic 🌌
   - Press 4 → Red Lightbulb Awareness 💡
   ------------------------------------------------------------
   Themes are applied by swapping CSS variables defined in :root.
   A floating legend shows the shortcuts.
   Overlay feedback appears briefly when switching themes.
=========================================================== */

const root = document.documentElement;

/* === Theme definitions ===
   Modular: add new themes here.
   Red Lightbulb Awareness is emphasized with bold styling.
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
  redlightbulbawareness: {
    '--bg-main': 'rgb(1,0,0)',   // pure red background
    '--bg-fade': '#000000',
    '--fog1-color': 'rgba(255,0,0,0.08)',
    '--fog2-color': 'rgba(255,50,50,0.05)',
    '--heading-color': 'red',
    '--heading-glow': 'black'
  }
};

/* === Apply a theme by name ===
   Loops through variables in the theme object and sets them.
   Special handling: Red Lightbulb Awareness adds a CSS class
   to portal headings for dramatic styling.
=========================================================== */
function applyTheme(themeName) {
  const theme = themes[themeName];
  if (!theme) return;

  // Apply CSS variables
  for (const variable in theme) {
    root.style.setProperty(variable, theme[variable]);
  }

  // Special emphasis for Red Lightbulb Awareness
  const portals = document.querySelectorAll('.portal h1');
  portals.forEach(h1 => {
    if (themeName === 'redlightbulbawareness') {
      h1.classList.add('redlightbulbawareness'); // add special class
    } else {
      h1.classList.remove('redlightbulbawareness'); // remove if not active
    }
  });

  console.log(`Applied theme: ${themeName}`);
}

/* === Keyboard shortcuts ===
   Listen for key presses and apply themes accordingly.
   Overlay feedback shows emoji + name.
=========================================================== */
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
      applyTheme('redlightbulbawareness');
      showOverlay('💡 Red Lightbulb Awareness');
      break;
  }
});

/* === Overlay feedback ===
   Shows emoji + name briefly in the center when theme changes.
=========================================================== */
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

  setTimeout(() => overlay
