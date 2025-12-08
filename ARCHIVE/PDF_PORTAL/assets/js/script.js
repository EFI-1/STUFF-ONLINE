/* ============================================================
   Dreamy Portal Theme Switcher (Keyboard Controls + Legend)
   ------------------------------------------------------------
   THEMES AVAILABLE:
   - Press 1 → Dreamy ✨
   - Press 2 → Misty 🌫️
   - Press 3 → Cosmic 🌌
   - Press 4 → Red Lightbulb Awareness 💡
=========================================================== */

const root = document.documentElement;

/* === Theme definitions === */
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
    '--bg-main': 'rgb(1,
