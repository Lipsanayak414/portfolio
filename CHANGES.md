# portfolio-v2 — what changed vs. `portfolio/`

Same design language, same facts. The changes target positioning, honesty, and
the technical issues a reviewer would notice.

## Positioning (the substantive change)

- **New section: "Working with AI"** (`src/app/components/AIPractice.tsx`).
  Covers the four things AI-era BA hiring actually screens for and that the
  original site never mentioned: writing requirements for probabilistic systems,
  evaluating a system rather than a model, turning AI governance into backlog
  items, and defining where a human stays in the loop.
- **Skills reordered.** "AI Systems & Governance" now leads and spans the grid,
  with the specification/evaluation/governance skills that were missing.
  The old order buried the differentiator in fifth place.
- **Hero rewritten.** Headline is now "I turn data into product decisions, and
  make AI systems accountable for them." The old copy positioned a BA who *uses*
  AI; the market pays for a BA who can *specify and govern* it.
- **Case studies gained problem / approach / result**, collapsed by default.

## The assistant — from prop to working feature

The old widget showed a green "online" dot, claimed "usually replies in a few
hours", and then answered every question with "this assistant isn't connected
yet". On a portfolio claiming CrewAI and FastAPI, that undercut the pitch.

It now actually works:

- `src/content/profile.ts` — a hand-written knowledge base of 15 grounded facts.
- `src/app/lib/retrieve.ts` — weighted term-overlap retrieval with a confidence
  threshold. Below the threshold it **declines** instead of guessing.
- Every answer **cites its source topic** and links to the section it came from.
- `src/app/lib/retrieve.eval.ts` — a 22-case eval suite (`npm run eval`), a third
  of which assert *refusal*. This is the "Working with AI" claim made checkable
  against the site's own code.

No network call, no API key, no tracking — it runs entirely in the browser.

## Performance

- Hero photo: **1.9 MB → 67 KB** (3644×3644 → 640×640). It renders at 96px.
- Added `width`/`height`/`fetchPriority`/`decoding` to prevent layout shift.

## SEO and sharing

- Open Graph + Twitter card tags — LinkedIn shares previewed as a blank box before.
- `Person` JSON-LD structured data.
- Inline SVG monogram favicon, `theme-color`, canonical link.
- **Before deploying:** make `og:image` and `og:url` absolute URLs with the real
  domain. Relative paths will not resolve for LinkedIn or Slack.

## Fixes

- **CV was unreachable** — `Lipsa_Nayak.pdf` sat outside `public/` and nothing
  linked to it. Now `public/Lipsa-Nayak-CV.pdf`, linked from header, hero, and contact.
- **Dead links** — four cards pointed at a bare GitHub profile and one at `href="#"`.
  Now labelled accurately, with the two `.pptx` decks (previously unused, 660 KB
  of dead weight in `public/`) offered as downloads.
- Footer "back to top" pointed at `#`; hardcoded `© 2026` is now dynamic.
- `tsconfig.json` gained `types: ["vite/client"]` — clears the TS2882 error.

## Accessibility

- `<main>` landmark and a skip link.
- Mobile nav — links were `hidden md:flex` with no menu behind them.
- `prefers-reduced-motion` handling for blobs, shimmer, and smooth scroll.
- Visible `:focus-visible` ring; `aria-live` on the assistant transcript.

## Still needs a human

- Swap `Browse repositories` for direct repo URLs on LedgerLens, Process Gap
  Analyser, and UAT Test Case Generator once those repos are public.
- "Subscriber Retention Teardown" has no artefact behind it — publish one or cut it.
- Review the "Working with AI" copy: it describes method and approach, and you
  should make sure every line is one you would defend in an interview.

## Commands

    npm run dev        # http://localhost:5173
    npm run build
    npm run typecheck  # clean
    npm run eval       # 22/22

---

# Round 2 — redesigned around how recruiters actually read

The first round fixed what was broken. This round changes the design to match
documented recruiter scanning behaviour. Each change below cites what drove it.

## The research this rests on

| Finding | Source |
|---|---|
| Initial screen averages **7.4 seconds**; 94% finish the first pass under 10s | Ladders eye-tracking study (2018) |
| Reading follows an **F-pattern**; ~**80% of viewing time** lands in the top third; the right side is often unread on the first pass | Ladders / eye-tracking analyses |
| Simple layouts, clear headings, bold titles and short bullets win. **Dense paragraphs are largely ignored**; clutter and missing whitespace lose | Ladders eye-tracking study |
| **57–70% of LinkedIn traffic is mobile** — recruiters open profiles on a phone between meetings | LinkedIn / Kinsta statistics |
| **53% of mobile visitors abandon** a page taking over 3s; bounce probability rises **32%** from 1s→3s | Google / Marketing Dive |
| **Two or three strong, role-aligned cases beat ten generic ones** | Data-analyst portfolio guidance (StarAgile, Careery) |
| Quantified outcomes are the strongest single quality signal | Recruiter surveys (widely reported, weakly sourced — treated as directional) |
| **71% of employers** say portfolio quality influences their hiring decision | Hover survey |

Caveat kept in mind throughout: the 7.4-second figure is contested — Tegze (2023)
measured 17–46 seconds — and several widely circulated recruiter percentages
trace back to unsourced blog posts. The design assumes a *short, top-weighted,
mobile* first pass, which all the evidence supports, rather than a precise number.

## What changed

**1. The hero now carries the proof.** New `ProofBar.tsx` puts four hard numbers
— 5+ years, ↑32% reporting accuracy, ↓45% manual effort, ↓11% churn — directly
under the headline. These were already on the site, buried four screens down in
Experience, where a 7-second pass would never reach them. Same figures, same
sources, moved into the only real estate that reliably gets read.

**2. Hero prose cut roughly in half.** The old four-line paragraph was exactly
the dense block scan studies show gets skipped. The load-bearing content —
identity, claim, numbers, two CTAs — is now all in the left column, matching the
F-pattern; the "How I work" card moved to the right, where a second pass lands.

**3. Sections reordered so evidence leads.** Was: About → Experience → Projects →
AI → Skills. Now: **Work → Experience → Working with AI → Skills → About.**
"About me" was occupying the single most valuable block on the page; it is the
weakest thing a recruiter needs. Renumbered 01–06 accordingly; nav labels follow.

**4. Case studies split into a featured tier.** Three role-aligned cases
(LedgerLens, Process Gap Analyser, Pricing Transformation Model) are now
full-width horizontal cards; the other four are compact. A flat grid of seven
equal cards forced the reader to triage; this triages for them.

**5. Results are never hidden.** Every card shows its **Result** in a green
callout by default. Only *problem* and *approach* collapse. Round 1 hid all
three behind a click, which buried the one thing that matters most in a scan.

**6. Mobile-first hero.** Smaller avatar, stacked metadata, proof bar as 2×2 on
phones and 1×4 on desktop, tighter vertical rhythm so the headline, numbers and
both CTAs fit above the fold on a phone.

## Performance, measured on the production build

| | Over the wire (gzip) | Est. 4G load |
|---|---|---|
| **v1 (`portfolio/`)** | ~1.92 MB (the 1.9 MB photo dominates) | **~3.1s — at the abandonment cliff** |
| **v2 (this)** | **190 KB** total | **~0.31s** |

Breakdown: JS 114.5 KB · CSS 11.5 KB · image 62.6 KB · HTML 1.6 KB.

## Still open

- The three featured cases link to a repository list, not direct repos.
- No quantified outcome exists for the project cards themselves (only for the
  employment history). If any project has a real number behind it, that is the
  highest-value remaining addition.

---

# Round 3 — chatbot removed

The on-page assistant has been taken out at your request, along with everything
that existed only to serve it:

- `components/ChatWidget.tsx` — deleted
- `app/lib/retrieve.ts` and `app/lib/retrieve.eval.ts` — deleted
- `KNOWLEDGE_BASE` in `content/profile.ts` — deleted (`PROFILE`, which supplies
  contact details and the CV path across the site, is untouched)
- the `npm run eval` script — removed, since it tested the deleted retriever
- the "A worked example, running on this page" callout in `AIPractice.tsx` —
  removed, because it described the assistant by name

**What this costs.** That callout was the strongest evidence in the "Working
with AI" section: a live artefact demonstrating grounded retrieval, citation and
refusal, sitting on the page that claimed those skills. The section now asserts
the four practices without demonstrating any of them. If you want that proof
back later, a static write-up of how such a system should be designed would
recover some of it without shipping a widget.

Bundle after removal: **111.99 kB gzip JS** (from 117.51 kB), CSS 11.27 kB.
