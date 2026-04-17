/* CGP Protocol Site — Shared JS */

// ── Sidebar active-link tracking via IntersectionObserver ──
(function () {
  const headings = document.querySelectorAll('.content h2, .content h3');
  const links    = document.querySelectorAll('.sidebar a[href^="#"]');
  if (!headings.length || !links.length) return;

  const map = {};
  links.forEach(l => { map[l.getAttribute('href').slice(1)] = l; });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const lnk = map[e.target.id];
        if (lnk) lnk.classList.add('active');
      }
    });
  }, { rootMargin: '0px 0px -70% 0px', threshold: 0 });

  headings.forEach(h => { if (h.id) obs.observe(h); });
})();

// ── Collapsible TOC on mobile ──
(function () {
  const btn = document.querySelector('.toc-toggle');
  const sb  = document.querySelector('.sidebar');
  if (!btn || !sb) return;
  btn.addEventListener('click', () => {
    sb.classList.toggle('open');
    btn.textContent = sb.classList.contains('open') ? '▲ Hide Contents' : '▼ Contents';
  });
})();

// ── Variant tabs ──
(function () {
  const btns   = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.tab);
      if (target) target.classList.add('active');
    });
  });
})();
