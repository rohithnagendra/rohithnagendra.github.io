## Plan: 15-minute Grill-me Session — Improve Portfolio

TL;DR — Run a focused 15-minute session to produce a single draft of suggested edits that implement prioritized improvements: accessibility, responsive polish, CSS centralization, project gallery, theme toggle, contact integration, and hero redesign. No workspace file changes will be applied during this session; I will capture code snippets and a single draft suggested-edits file for your review.

**Steps**
1. Quick review (2 minutes): show the index.html hero, collapsibles, and style.css key rules to align on visible problems and design direction.
2. Prioritized walkthrough (8 minutes total):
   - Accessibility & semantics (3 min): discuss ARIA, main landmark, skip link, and exact modifications to add.
   - Responsive polish (2 min): show mobile pain points and small CSS adjustments.
   - CSS centralization + variables (1.5 min): list properties to extract and demonstrate variable examples.
   - Feature proposals (1.5 min): outline project gallery modal, theme toggle, and contact form integration — show minimal HTML/CSS/JS sketches.
3. Capture draft edits (4 minutes): assemble a single proposed_changes.md draft (saved to session memory and repo memory) with code snippets and exact file/line suggestions. This draft will include bite-sized patches you can approve.
4. Wrap-up (1 minute): confirm next actions (apply edits, create PR, or iterate further).

**Relevant files (for quick lookups)**
- index.html — collapsible blocks and hero (lines ~1–120)
- style.css — container, animated header, collapsible, content, footer, responsive (lines ~1–200)
- iot.html, iot-weathermonitor.html, python-*.html — pages with inline styles for consolidation

**Deliverable**
- Single draft suggested-edits file: /memories/repo/portfolio_docs/proposed_changes.md (updated with session outputs). I will NOT modify workspace files unless you explicitly approve a PR.

**Verification**
- During session: I will produce concrete snippets for each suggested change and point to exact lines to edit.
- After session: you review the draft; if you approve, I can prepare a PR implementing the approved changes.

**Decisions / Assumptions**
- You confirmed: keep edits as draft only during this session.
- Visual style preference: simplify to clean/professional.
- Prioritized features selected by you: Accessibility, Responsive, Centralize CSS, Project gallery, Theme toggle, Contact form, Hero redesign.

**Open questions (resolved now)**
- Color-contrast checks: I will include a quick contrast note for the hero and content text in the draft.
- Deliverable format: single draft suggested-edits file (you selected).

Ready to run the 15-minute session now — I will start with a 2-minute walkthrough of index.html hero and the collapsible UX. If you want any change to the focus, tell me now.
