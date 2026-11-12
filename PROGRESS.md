# Aquaporins project — progress

Branch: `portfolio/aquaporins-project`
Base: `98d5d2cae72c6bbfc6f6c98b8bc0086adc04a03b` (published Human–Machine Interface integration).

## Scope and constraints
- Redesign only the Aquaporins & regulation project details.
- Two tabs: Published regulations (default), Methods.
- Next feature: rotating 3D protein with clickable annotations, short explanations and article links in the first tab.
- Homepage animation remains undecided. Placement of scientific Deep Dives links and a possible Reflections tab remains undecided; do not add either yet.
- Small independent checked commits; update this file and push each step.
- No merge or publication authorized for this new redesign. Earlier approval concerned PR #1 only.
- No Base64; user handles any necessary image/video upload manually.

## Step 1 — Tab structure
- Added project-specific tab labels, preserving Objective / Methods / Results defaults for other projects.
- Aquaporins opens with Published regulations and retains Methods as its second tab.
- Combined existing objective and results text in the default tab; preserved existing methods and publication links. No new scientific claims or 3D model added.
- Checks passed: node --check app.js; git diff --check; runtime evaluation of the project configuration confirms two aquaporin panels in order and three-panel defaults for other projects.
- Browser verification could not complete: preview connection failed, then browser navigation timed out after preview restart. Interactive tab/keyboard validation remains pending.

## New structure received
- User supplied `1z98.pdb`, superseding 1J4N as the current candidate.
- File header: spinach aquaporin SoPIP2;1, closed conformation, X-ray structure at 2.10 angstrom resolution.
- ATOM records contain chains A and M, each with 251 represented residues.
- Source: supplied PDB header and ATOM records; no binary content displayed.
- Chain A is now stored as assets/structures/1z98-chain-a.pdb; the original full upload remains in the conversation.
- Scientific mapping caution: the existing project text discusses zinc modulation of human AQP0/2/4/5. Do not map those results onto specific SoPIP2;1 residues without supporting evidence.

## Previous next step
- Complete browser validation of the two tabs.
- Integrate a single-chain 1Z98 viewer into Published regulations with slow rigid rotation, pause/resume and source attribution. This is structural visualization, not a molecular dynamics trajectory.
- Establish the regulatory annotations and article links from verified sources or user-provided mappings before assigning clickable residue sites.
- Decide the Deep Dives link placement later with the user.

## Step 2 — Single-chain protein viewer integrated
- Added an embedded viewer to Published regulations. Only protein chain A from the supplied 1Z98 structure is included: 1,878 atoms, 251 modeled residues, original numbers 24–274 and names retained.
- The ATOM records are identical to the selected original records. Waters, ligands and chain M are omitted; chain A HELIX records retained.
- Included a downloadable chain-A PDB and residue TSV for future user-specified annotations.
- Preferred rendering: ribbon via 3Dmol.js 2.5.5, pinned CDN URL, loaded only when opening this project. API reference: https://3dmol.org/doc/GLViewer.html.
- Added a C-alpha-coordinate Canvas fallback when the library or WebGL is unavailable. It is explicitly labeled as a backbone view.
- Controls: slow rotation, pause/play, reset, left/right and zoom; drag rotates and pauses autoplay. Reduced-motion preference starts paused. Rotation stops when hidden, switching to Methods, or closing the project.
- Kept the plant structure attribution separate from the existing human-aquaporin zinc research text. No residue links or functional annotations have been invented.
- Validation passed: JS syntax for all three scripts; chain/atom/residue counts; exact source ATOM-record equality; residue TSV count; Canvas fallback runtime checks for drawing, rotation, reset, zoom and animation start/stop.
- Browser observation: Published regulations opens by default; fallback structure is visible, pause toggles its aria-pressed state, and Methods opens. Return-tab interaction timed out in the browser tooling.
- Verification limitation: cloud Chrome cannot create a WebGL context, so ribbon rendering is implemented but not visually verified. Full tab-return, close/reopen and mobile/reduced-motion browser regression checks remain pending.
- No merge or publication. Source files and progress checkpoint are saved on the work branch.

## Next task
- Finish browser regression checks, including a WebGL-capable environment for ribbon rendering.
- Await the user's residue names/numbers, explanations and article destinations before implementing clickable annotations. Use PDB chain A numbering 24–274; explicitly check any sequence numbering offset.
- Homepage animation and placement of scientific Deep Dives links remain undecided.

## Step 3 — Viewer lifecycle and narrow-layout correction
- Desktop browser checks passed: Methods opens; returning to Published regulations makes the viewer visible again; closing the dialog removes its iframe after the close event; reopening creates a visible viewer. Pause sets aria-pressed=true.
- At a 320 px content viewport, the initial fixed-height iframe clipped its wrapped controls/source footer: content height 631 px versus a 558 px viewport.
- Fixed by reporting the viewer body height through a same-origin postMessage. Parent accepts messages only from the current protein iframe and clamps finite heights to 400–1200 px.
- Recheck at 320 px passed: inner content/viewport heights both 631 px, scroll width equals client width (252 px); no internal vertical scrolling or horizontal overflow. Project dialog also had equal client/scroll widths before correction.
- app.js and protein-viewer.js syntax checks passed. Preview files only were used for the temporary responsive harness.
- Browser automation timed out during the additional 390 px check; that width and reduced-motion browser checks remain unverified. WebGL ribbon rendering still needs a compatible browser; the Canvas fallback was exercised here.
- No merge or publication. No changes to protein coordinates, residue numbering or annotations.

## Current next task
Await user-provided residue names/numbers, explanations and article links for clickable annotations. Complete WebGL, 390 px and reduced-motion browser checks when an appropriate environment is available. No approval to merge/publish this redesign has been given.

## Step 4 — User annotation specification saved
- Captured all five user-supplied annotation groups, inclusive residue ranges and nine article URLs in assets/structures/1z98-annotations.json. Text preserved as supplied; not yet wired to the viewer.
- Checked every specified endpoint and individual residue against chain A: names and numbers match (K64, V72, F81, N101, S115, G143, N160, V174, A182, A198, H210, T219, R225, V263, S274).
- Shared selections overlap: ar/R residues belong to fungal/steroid groups, R225 also voltage; A182 belongs to loop-D and zinc selections. Next implementation must allow multiple topics per residue, e.g. topic selector plus highlighted region.
- Bibliographic identity/topic checked via publisher pages and PubMed indexed abstracts. Several MDPI full-text fetches were rate limited and Wiley full text unavailable; no claim of exhaustive mechanistic/full-text validation.
- SoPIP2;1 serves as structural reference. Human and fungal article results must be labeled as comparisons, not direct experimental claims for 1Z98.
- Suggest separating fungal selectivity/diversity from regulation and identifying the cation review as a broader review; these are presentation suggestions, not changes to user text.
- Next: implement topic selection/highlights and user-provided text/article cards, with multiple-topic handling. WebGL-specific picking and reduced-motion checks remain pending.

### Legend decision confirmed by user
Use SoPIP2;1 for illustration and broad localization of regulatory regions. Proposed viewer legend: "SoPIP2;1 (PDB 1Z98, chain A) is used as an illustrative structural reference to indicate the general location of regulatory regions across aquaporins. Linked studies may concern other aquaporin isoforms or organisms."
This legend decision is approved; residue-level cross-isoform equivalence is not implied.

## Step 5 — Interactive annotation themes
- Added five accessible theme buttons, region highlighting and short article cards with all nine user-supplied URLs. User wording and inclusive PDB residue selections preserved.
- Selecting a theme pauses rotation. Clicking a residue selects an associated theme; an existing matching selection is preserved for overlapping regions, and shared-topic text directs readers to the theme buttons.
- Added highlighting/picking to the coordinate-based Canvas fallback and 3Dmol selection/click handlers for the ribbon renderer.
- Added the approved illustrative SoPIP2;1 legend beneath the cards.
- Browser checks passed in Canvas fallback: all five theme cards, all nine exact link destinations, selected-state/rotation pause, highlighted regions visible. Clicking the displayed structure at residue 188 opened the loop-D phosphorylation card.
- JS syntax checks passed for annotation, viewer and fallback scripts.
- Limitations: WebGL ribbon picking/rendering remains unverified in the cloud browser. Recheck embedded mobile height with annotation cards, reduced-motion behavior and overlapping-residue picking before publication.
- No merge or publication. Next task: focused embedded/mobile regression, then user review.
