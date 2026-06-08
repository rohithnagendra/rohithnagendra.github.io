# Implemented Requirements — Portfolio Site

This document lists the features and requirements already implemented in the repository as of 2026-06-08.

## General
- Static site hosted as GitHub Pages (CNAME present).
- Pages present: index.html, iot.html, iot-weathermonitor.html, python-matplotlib.html, python-opencv.html.

## index.html
- meta charset="UTF-8" and meta viewport present.
- Title set to "Rohith Nagendra - Student Profile".
- Google Fonts (Roboto) linked in the head and style.css linked.
- Inline JavaScript implementing collapsible sections (runs on DOMContentLoaded).
- Main content structure:
  - div.container wrapping content
  - h1.animated-header with name
  - multiple div.info rows with .label spans
  - six utton.collapsible elements each followed by div.content with <p>
- Footer .footer with Instagram, Email, and GitHub links.

## style.css
- Imports Roboto via @import.
- Global body gradient background, font-family, and min-height rules.
- .container styled with max-width, padding, border-radius, box-shadow, and neon border.
- .animated-header neon styling and keyframes animation defined.
- .greet-btn styled (uses Orbitron in fallback but Orbitron is not imported).
- .info, .label, .collapsible, .content, and .footer styles implemented.
- Responsive @media (max-width: 600px) rules for .container, .collapsible, and .content.

## Other pages
- iot.html, iot-weathermonitor.html, and python-*.html include inline <style> blocks and project content; visuals are self-contained.
- Images on iot.html are external Wikimedia URLs; iot-weathermonitor.html contains inline SVG.

## Accessibility / Meta
- Basic metadata present (charset & viewport). No meta description currently.
- Collapsible interaction exists but lacks ARIA attributes for expanded state and content regions.
- No skip-link or explicit main landmark currently wrapping .container.

## Notes
- Colors are hard-coded in style.css (no CSS variables present).
- Inline JS and duplicated inline CSS on other pages available for improvement.
