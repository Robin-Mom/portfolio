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
- The uploaded PDB is not yet committed. Original supplied file remains available in the conversation.
- Scientific mapping caution: the existing project text discusses zinc modulation of human AQP0/2/4/5. Do not map those results onto specific SoPIP2;1 residues without supporting evidence.

## Next step
- Complete browser validation of the two tabs.
- Integrate a single-chain 1Z98 viewer into Published regulations with slow rigid rotation, pause/resume and source attribution. This is structural visualization, not a molecular dynamics trajectory.
- Establish the regulatory annotations and article links from verified sources or user-provided mappings before assigning clickable residue sites.
- Decide the Deep Dives link placement later with the user.
