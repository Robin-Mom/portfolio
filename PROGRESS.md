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
