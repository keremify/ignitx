/* ═══════════════════════════════════════════════════
   IGNITX — main.js
═══════════════════════════════════════════════════ */

// ── Scroll reveal ──────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('revealed'); revealObserver.unobserve(e.target); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

// ── Sticky nav ─────────────────────────────────────
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ── Tab switching ──────────────────────────────────
function showTab(name, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const panel = document.getElementById('tab-' + name);
  if (panel) panel.classList.add('active');
  if (btn) btn.classList.add('active');
  // Trigger reveal on newly visible cards
  panel.querySelectorAll('[data-reveal]').forEach(el => {
    if (!el.classList.contains('revealed')) revealObserver.observe(el);
  });
}
window.showTab = showTab;

// Activate first tab
const firstTab = document.querySelector('.tab-btn');
if (firstTab) firstTab.click();

// ── Copy scripts ───────────────────────────────────
function copyCode(btn) {
  const card  = btn.closest('.tool-card');
  const pre   = card.querySelector('.code-pre');
  const text  = pre ? pre.textContent : '';
  navigator.clipboard.writeText(text).then(() => {
    btn.classList.add('copied');
    btn.innerHTML = `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2,8 6,12 14,4"/></svg> Copied!`;
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="10" height="10" rx="2"/><path d="M2 12V2h10"/></svg> Copy Script`;
    }, 2000);
  });
}
window.copyCode = copyCode;

// ── Smooth scroll nav links ─────────────────────────
document.querySelectorAll('[data-scroll]').forEach(el => {
  el.addEventListener('click', () => {
    const target = document.getElementById(el.dataset.scroll);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ── Populate code blocks from <script type="text/plain"> ──
document.querySelectorAll('.code-pre').forEach(pre => {
  const id = pre.dataset.src;
  const src = document.getElementById(id);
  if (!src) return;
  const code = pre.querySelector('code');
  if (code) {
    code.textContent = src.textContent.trim();
    if (window.Prism) Prism.highlightElement(code);
  }
});

// ── Nav highlight on scroll ─────────────────────────
const sections = ['how', 'tools', 'safety'];
const sectionEls = sections.map(id => document.getElementById(id));
const navLinks   = document.querySelectorAll('.nav-link[data-section]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-link[data-section="${e.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sectionEls.forEach(el => { if (el) sectionObserver.observe(el); });
