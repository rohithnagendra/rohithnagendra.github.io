# Project Tasks — Portfolio Improvements

Use this checklist to track work. Mark - [x] when done.

- [x] 1) Add meta description — Add <meta name="description"> to index.html head. (files: index.html) — Priority: High
- [x] 2) Improve collapsible accessibility (ARIA) — Add aria-expanded, aria-controls, ids, 
ole="region" and update JS to toggle. (files: index.html, scripts.js) — Priority: High
- [x] 3) Add semantic landmarks & skip link — Wrap main content in <main id="main"> and add a skip link. (files: index.html) — Priority: High
- [x] 4) Centralize CSS + add CSS variables — Add :root variables and replace repeated literals; update inline styles. (files: style.css, other pages) — Priority: Medium-High
- [ ] 5) Import/remove Orbitron for .greet-btn — Decide to import or remove; update fonts. (files: style.css, index.html) — Priority: Low
- [x] 6) Move/enhance inline script (collapsibles) — Move to scripts.js or initialize unobtrusively at end of body. (files: index.html, scripts.js) — Priority: Medium
- [x] 7) Cross-page CSS consolidation — Extract inline <style> from iot.html, iot-weathermonitor.html, python-*.html into style.css or common.css. (files: iot.html, iot-weathermonitor.html, python-*.html) — Priority: Medium (defer)
- [x] 8) Responsive polish (mobile) — Improve padding, font-sizes, touch targets; add media-query tweaks for <=600px and <=480px. (files: style.css) — Priority: High
- [x] 9) Color-contrast audit & adjustments — Run WCAG checks and adjust variables if needed. (files: style.css) — Priority: High
- [ ] 10) Project gallery with modal previews — Design gallery grid and modal/lightbox for project previews. (files: index.html, style.css, scripts.js) — Priority: Medium (defer)
- [ ] 11) Theme toggle (dark/light) — Implement theme switcher using CSS variables and localStorage. (files: style.css, index.html, scripts.js) — Priority: Medium (after variables)
- [ ] 12) Contact form / email integration — Add contact form or integrate a form service (Formspree/Netlify). (files: index.html, service config) — Priority: Medium (defer)
- [ ] 13) Downloadable resume / vCard — Add /assets/resume.pdf and vCard link, or button to download. (files: index.html, /assets) — Priority: Low (defer)
- [ ] 14) Performance: lazy-load images — Add loading="lazy" to images and consider optimizing external images. (files: iot.html, other pages) — Priority: Low
- [x] 15) Housekeeping: docs & backups — Ensure docs/plan.md, docs/proposed_changes.md, and backups exist. (files: docs/*) — Priority: Completed/Keep

## Notes / Next actions
- Selected immediate patches to prepare: items 1,2,3,4,6,8,9.
- After you approve patches, I can prepare PR-ready patch snippets for review.

Generated: 2026-06-08
