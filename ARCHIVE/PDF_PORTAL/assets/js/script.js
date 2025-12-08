/* ============================================================
   Portal Theme Switcher with ESC Popup Menu
   ------------------------------------------------------------
   THEMES AVAILABLE:
   - Dreamy ✨
   - Misty 🌫️
   - Cosmic 🌌
   - Red Lightbulb Awareness 💡
   ------------------------------------------------------------
   Keyboard shortcuts:
   - 1–4 apply themes directly
   - ESC toggles popup menu
=========================================================== */

const root = document.documentElement;

/* === Theme definitions ===
   Modular: add new themes here.
   Each theme sets CSS variables for background/fog/text.
=========================================================== */
const themes = {
  dreamy: {
    '--bg-main': '#191932',
    '--bg-fade': '#000000'
  },
  misty: {
    '--bg-main': '#2a2a2a',
    '--bg-fade': '#000000'
  },
  cosmic: {
    '--bg-main': '#0b0033',
    '--bg-fade': '#000000'
  },
  redlightbulbawareness: {
    '--bg-main': 'rgb(1,0,0)',   // pure red background
    '--bg-fade': '#000000'
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
  for (const variable in theme) {
    root.style.setProperty(variable, theme[variable]);
  }
  const h1 = document.querySelector('.portal h1');
  if (themeName === 'redlightbulbawareness') {
    h1.classList.add('redlightbulbawareness');
  } else {
    h1.classList.remove('redlightbulbawareness');
  }
}

/* === Build popup menu dynamically ===
   Adds a label and emoji icons next to each theme name.
=========================================================== */
function buildMenu() {
  const menu = document.getElementById('themeMenu');
  const ul = document.createElement('ul');

  // Add a label at the top of the menu
  const label = document.createElement('div');
  label.textContent = 'Select Theme';
  menu.innerHTML = ''; // clear previous
  menu.appendChild(label);

  // Map theme names to emojis
  const emojiMap = {
    dreamy: '✨',
    misty: '🌫️',
    cosmic: '🌌',
    redlightbulbawareness: '💡'
  };

  // Add each theme as a list item
  Object.keys(themes).forEach(name => {
    const li = document.createElement('li');
    li.textContent = `${emojiMap[name]} ${name}`;
    li.addEventListener('click', () => {
      applyTheme(name);
      menu.style.display = 'none';
    });
    ul.appendChild(li);
  });

  menu.appendChild(ul);
}

/* === Toggle menu visibility === */
function toggleMenu() {
  const menu = document.getElementById('themeMenu');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    buildMenu();
    menu.style.display = 'block';
  }
}

/* === Keyboard shortcuts ===
   1–4 apply themes directly, ESC toggles menu.
=========================================================== */
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case '1': applyTheme('dreamy'); break;
    case '2': applyTheme('misty'); break;
    case '3': applyTheme('cosmic'); break;
    case '4': applyTheme('redlightbulbawareness'); break;
    case 'Escape': toggleMenu(); break;
  }
});

/* === Initialize on page load === */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme('dreamy'); // default theme
});
