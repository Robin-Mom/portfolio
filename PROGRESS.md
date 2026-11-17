# Aquaporins project — progress

Branch: `portfolio/aquaporins-project`
Base: `98d5d2cae72c6bbfc6f6c98b8bc0086adc04a03b` (published Human–Machine Interface integration).

## Scope and constraints
- Redesign only the Aquaporins & regulation project details.
- Two tabs: Published regulations (default), Methods.
- Next feature: rotating 3D protein with clickable annotations, short explanations and article links in the first tab.
- Homepage animation remains undecided. Placement of scientific Deep Dives links and a possible Reflections tab remains undecided; do not add either yet.
- Small independent checked commits; update this file and push each step.
- User explicitly authorized final checks, merge of PR #2 and publication of this redesign on 2026-11-12.
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

## Step 6 — Project overview, talk and award
- Updated the project intro exactly as requested, removing "human".
- Added the user's two-sentence aquaporin overview above the protein figure in Published regulations.
- Added project-specific Talks and Prizes and awards sections, visible under either project tab. Corrected "2nd price" to "2nd prize"; used "A 40-minute talk".
- Talk link expects assets/talks/RM_LBMC_web.pdf. User must upload this file manually; the link will be unresolved until then. Do not publish this step before upload verification.
- Original supplied PDF: 280,846,323 bytes, 59 pages. Produced a separate web-optimized copy of approximately 6 MB, preserving all 59 pages and extractable text on every page. Rendered/contact-sheet inspection completed across all pages. Original untouched.
- PDF checksum for the user upload: `76a44bea9d0ecae350ac769a9c9fd802591ec7f3615aae2f6ac34203f02e0bf1`.
- Syntax and project-configuration checks passed for the new intro, overview, talk/PDF reference, award link and isolation from other project extras.
- Prize description is user-provided. The supplied GDR Vertige destination could not be retrieved by the web lookup; independent award verification remains incomplete.
- No merge or publication.

## Manual PDF upload — next task
1. Download RM_LBMC_web.pdf from the conversation.
2. On GitHub, select branch portfolio/aquaporins-project and open assets/talks/.
3. Choose Add file > Upload files, select RM_LBMC_web.pdf, and commit directly to this work branch. Keep the exact filename.
4. Report completion; verify the uploaded checksum, Talks link and rendering before merging or publishing.

## Step 7 — Manual presentation upload verified
- User uploaded assets/talks/RM_LBMC_web.pdf in commit `79feeb78158dfcfcca011f7b72d75646846191ba`.
- Remote PDF is present at the exact Talks href: 6,034,012 bytes, 59 readable pages, extractable text on all pages.
- Remote SHA-256: `09fd58d5df69bd8535ed2ab1aa41ab71f25d288fb1619123b2530ddf392da2a8`.
- This differs from the pre-upload local checksum noted in step 6. Verified equivalence directly: extracted text identical on all 59 pages; page dimensions identical; every page rasterized identically at 0.5x resolution to the visually checked local web copy. The bytes are therefore not claimed identical.
- app.js Talks href resolves to the uploaded repository file. Upload blocker is resolved; no more manual PDF upload is needed.
- No merge or publication. This step updates the progress checkpoint only.
- Next task: final embedded/mobile regression of the updated overview, five annotation cards and Talks/Awards sections, including WebGL verification if available; then draft PR and user review.

## Step 8 — Final integrated layout check and annotation-height fix
- Tested the full preview synchronized from remote commit 2fd8570, including the uploaded PDF.
- Desktop: updated intro, Talks and Prizes and awards visible; steroid annotation card opens; Methods opens and keeps Talks visible.
- Opened the exact Talks PDF destination in Chrome: native PDF viewer renders the title slide and reports 59 pages.
- Narrow viewport tests found the annotation viewer height cap of 1200 px caused an internal vertical scrollbar when longer cards were open.
- Raised the guarded finite-height cap to 2400 px. The existing same-origin/source checks are retained.
- Rechecked at 320 px with zinc card: viewer content and viewport heights both 1333 px; client/scroll widths both 252 px. At 390 px with steroid card and all three article links: heights both 1215 px, widths both 322 px. Outer project dialog has no horizontal overflow (296 px at 320, 366 px at 390).
- app.js syntax check passed. No protein coordinates, annotation text, sources, PDF, homepage animation or scientific article files changed in this step.
- Limits: cloud Chrome exercises the Canvas fallback, not WebGL. Real-device touch, reduced-motion browser emulation and WebGL ribbon/picking remain unverified.
- No merge or publication. Ready for a draft review PR, with these validation limits stated explicitly; user authorization is required before merging/publishing this redesign.

## Step 9 — Draft review prepared
- Opened [draft PR #2](https://github.com/Robin-Mom/portfolio/pull/2), from portfolio/aquaporins-project into main.
- Compared branch with main: 12 changed paths, limited to project rendering, viewer assets, the presentation and progress documentation. Existing Deep Dives files and homepage HTML are unchanged.
- PR summarizes the resulting experience, checks completed and remaining WebGL/touch/reduced-motion verification limits.
- Verified creation response: PR is open, draft=true and merged=false. No merge or publication performed.
- Next: owner review and completion of outstanding renderer/device checks. Explicit authorization is required before merging and publishing this redesign.

## Step 10 — Final checks and publication approval
- User explicitly authorized the final checks, merge and publication of PR #2.
- Before release PR #2 was open, mergeable and based on reviewed head 693f9c0bb0f72e5dabf3588b2d59e5fc434a98c2.
- Final JS syntax checks passed for app.js and all three viewer/annotation scripts.
- Runtime controller checks using a simulated DOM/viewer passed with reduced-motion both false and true: correct initial rotation state, explicit play when reduced motion is enabled, stop for inactive panel, resume when active, stop when document is hidden.
- These controller tests do not constitute a rendered WebGL or physical touch test. WebGL ribbon rendering/picking and real-device touch remain unverified in this environment. Canvas/browser/layout and PDF checks are recorded above.
- Next: merge PR #2 and confirm GitHub Pages deployment plus live resources. Final publication outcome will be recorded on the retained work branch.

## Copy refinement — 2026-11-12
- Working branch: portfolio/aquaporins-copy, based on published main commit 57989b3bcacd7d5d59c652aebec76e4518e8d8df.
- Removed the full "A question of regulation" and "Two types of modulation" sections from Published regulations, including their accompanying old zinc-study note.
- Removed the small Structural reference figcaption below the iframe.
- Updated the viewer legend to begin "Spinach SoPIP2;1 (PDB 1Z98, ...)".
- Replaced this project's Sources & Documentation footer with Research profile and the user-supplied ORCID link: https://orcid.org/0000-0002-0141-2651.
- Static/runtime configuration checks passed: JS syntax, removed text absent, iframe retained, Talks/Awards unchanged, other project configurations unchanged, correct ORCID and legend wording. No browser rendering checks needed for this text-only refinement.
- No merge/publication authorized for this new refinement. Next task: review and merge/publish upon explicit approval.

## Methods rewrite — 2026-11-12
- Replaced the old Aquaporins Methods panel with a fluent English version of the user draft, retaining its explanation of MD, Born–Oppenheimer separation, force fields, Newtonian integration, GROMACS and MDAnalysis.
- Corrected the Nobel claim: 2013 recognized development of multiscale models for complex chemical systems, not the invention of MD. Added the official Nobel reference.
- Qualified reliability through force-field choice, simulation setup and sampling; avoided claiming arbitrary collective variables are automatically available.
- Included the three requested resource links, with in silico in italics.
- Sources checked: GROMACS reference manual introduction and MD algorithms; official 2013 Nobel scientific background/summary search record; MDAnalysis official site; LiveCoMS About page.
- Checks passed: app.js syntax and runtime project configuration; old Methods text absent, new panel present, resource destinations and emphasis correct.
- This changes only Aquaporins Methods and this progress note. The earlier copy refinement remains on the same work branch. No merge or publication.
- Next task: review the two pending copy edits together before merging/publishing with explicit approval.

## Copy release authorized — 2026-11-12
- User explicitly requested publication of the pending overview/footer/legend and Methods refinements.
- Pre-release comparison: branch ahead of main by two commits, no divergence. Changes limited to app.js, protein-annotations.js and PROGRESS.md.
- Prior syntax and configuration checks passed for both edits.
- Next: merge the copy refinement PR and verify successful GitHub Pages deployment and live text.

## Reflections tab — 2026-11-12
- Branch portfolio/aquaporins-reflections starts from published main f09ccaefdb42219c9fefa5e071a011657ae268ea.
- Added a third Aquaporins project tab, Reflections, with the user's validated three-paragraph text.
- The link targets the existing homepage collection-title anchor for Scientific Articles — Research Reflections (12 articles).
- Added a scoped link handler to close the project modal before following that anchor, so the destination is accessible. Other project links keep their existing behavior.
- Checks passed: JS syntax; runtime project configuration confirms three labels/panels, exact preservation of the original two panels, Talks/Awards and other project data. Link target exists in the homepage markup inspected when proposing this change.
- No renderer, media or article content changes. No merge/publication authorized for this new tab.
- Next task: browser check of tab navigation and modal-to-collection link, then review and publish upon explicit approval.

## Reflections release approved — 2026-11-12
- User explicitly requested publication of the Reflections tab.
- Browser check passed: third tab displays the validated text; following its link closes the dialog (open=false), updates the hash to #collection-title and targets the scientific collection heading.
- Pre-merge comparison: one implementation commit ahead of main, no divergence; changes limited to app.js and progress documentation.
- Next: merge and verify GitHub Pages publication.

## DeepDream project — step 1
- Branch portfolio/deepdream-project starts from main 577d22b3a640ede69b92c095daf734ad64882095.
- Replaced DeepDream Objective / Methods / Results with Building dreams (default) and Reflections.
- Set intro to "A mini project to run the DeepDream code locally."
- Rewrote the user's description fluently and corrected gradient wording: maximize an activation-based objective through gradient ascent on input pixels while weights remain fixed.
- Original Google sources identify three authors: Alexander Mordvintsev, Christopher Olah and Mike Tyka. Sources: https://research.google/blog/inceptionism-going-deeper-into-neural-networks/ and https://github.com/google/deepdream.
- Verified user project repository: https://github.com/Robin-Mom/projet_Sphinx_deepdream. Its README documents Docker CPU/GPU environments, Caffe and the adapted original notebook.
- Reflections links to the three existing DeepDream articles in The Human – Machine Interface.
- User additionally requested a generated image. Await the selected image attachment, then guide manual upload as a separate file and add it with a caption. No placeholder/broken image path added.
- Checks passed: app.js syntax, two labels/panels, intro and repository URL, unchanged Aquaporins and Supply-Chain data.
- No merge or publication. Next task: receive selected DeepDream image and arrange manual upload; then verify image rendering and the new tabs.

## DeepDream project — step 2
- Expanded Reflections with the user's personal motivation, rephrased fluently in English: aesthetics and questions at the intersection of deep learning, computer vision, neuroscience and information theory.
- Added the invitation to explore the author's perspective; retained all three existing DeepDream article links.
- Checks passed: app.js syntax, two DeepDream panels, new introduction and three article destinations.
- No merge/publication. Image selection/upload remains pending as recorded in step 1.

## DeepDream project — step 3: generated image prepared
- User selected deepdreams_googlenet_5b_output.jpg and approved the fluent caption: DeepDream generated by maximizing activations in the “5b output” hidden layer of a pretrained GoogLeNet.
- Prepared a responsive figure at the beginning of Building dreams, with alt text and a link to open the original image.
- Original JPG validated: 1536 × 1152, 665,934 bytes; SHA-256 efbbb2ab28b2d98099242bbe36ae255f2b3f42e333bed4189cdcedb42724a300.
- Layer/model attribution is supplied by the user; it cannot be inferred independently from the image pixels.
- Markup expects assets/deepdream/deepdreams_googlenet_5b_output.jpg. Manual upload still required before publication; this path is unresolved until then.
- Checks passed: image decoding, JS syntax, single responsive image with intrinsic dimensions and caption, retained Reflections.
- No image upload, merge or publication performed. No Base64.

## Next task — manual image upload
1. On GitHub, choose branch portfolio/deepdream-project and open assets/deepdream/.
2. Choose Add file > Upload files and select the original deepdreams_googlenet_5b_output.jpg already attached in the conversation.
3. Commit directly to this work branch, preserving the filename. Report completion.
4. Verify remote checksum/path and browser image rendering/new tabs, then review before publication.

## DeepDream project — step 4: uploaded image verified
- User uploaded the original JPG on portfolio/deepdream-project (upload commit bcceb815048c10e331bd62ea3383706e92a456fb).
- Remote asset exists at assets/deepdream/deepdreams_googlenet_5b_output.jpg; its SHA-256 matches the original exactly (efbbb2ab28b2d98099242bbe36ae255f2b3f42e333bed4189cdcedb42724a300). JPEG decoding confirms 1536 × 1152 pixels.
- Local preview synchronized to the uploaded branch commit. Browser check passed: Building dreams opens, the image loads at its original intrinsic dimensions and scales to the panel, and the approved caption appears.
- Reflections tab checked in the browser: the revised text and all three DeepDream article links appear.
- No blocking issue observed in these checks. No merge or publication performed.
- Next task: final review of the DeepDream changes, then merge/publication when explicitly approved. Resume from portfolio/deepdream-project and this file.

## DeepDream release approved — 2026-11-12
- User explicitly requested publication of the DeepDream changes.
- Final comparison: five commits ahead of main, no divergence; changes limited to app.js, the selected JPG, its upload documentation and this progress file.
- Final app.js syntax check passed; image, caption and both tabs were checked in the browser in step 4.
- Next: merge the release PR and verify GitHub Pages deployment plus live image and content. Record final outcome on the retained work branch.

## DeepDream publication completed — 2026-11-12
- PR #5 merged into main as 5e1625cfde8f10c5d1d434aa8b2622dc299a93cb: https://github.com/Robin-Mom/portfolio/pull/5.
- GitHub Pages run 43279821384 completed successfully for that exact merge commit: https://github.com/Robin-Mom/portfolio/actions/runs/43279821384.
- Live HTTP checks passed: updated app.js serves Building dreams; selected JPG responds 200 with the exact original SHA-256; all three linked DeepDream reflection pages respond 200.
- Published site: https://robin-mom.github.io/portfolio/.
- No outstanding publication blocker. Prior browser checks are recorded in step 4. This final checkpoint is retained on the work branch without triggering another main deployment.
- Next task: await the owner’s next portfolio change. Start subsequent implementation from published main 5e1625cfde8f10c5d1d434aa8b2622dc299a93cb and consult this checkpoint.

## Homepage animation words — 2026-11-13
- Working branch: portfolio/home-animation-words, based on published main 5e1625cfde8f10c5d1d434aa8b2622dc299a93cb.
- Biology labels: GENOMIC, BIOCHEMISTRY, PHYSIOLOGY (spelling supplied by the owner).
- Bioinformatics labels: CLUSTERING, SIMULATION, DEVELOPMENT.
- AI labels: VISION, LANGUAGE, PHYSIOLOGICAL SIGNALS.
- Initial HTML uses Biology labels; selecting a mode updates the three text nodes while preserving secondary captions and animation controls.
- Checks passed: node --check app.js; git diff --check; desktop browser confirmed all three sets; narrow iframe (320 px content viewport, 280 px art) confirmed AI labels fit inside the artwork and switching back restores Biology labels.
- User requested clickable words with a hover effect. Destinations have not yet been specified, so links are pending; do not invent targets.
- No merge or publication. Next: obtain the destination for each word, implement accessible links and hover/focus styling, then verify before publication approval.

## Homepage topic navigation — 2026-11-13
- Added a shared dismissible popover for each of the nine animation words, opened by hover, keyboard focus or click; ArrowDown enters the panel, Escape/outside click/close dismiss it. Mode changes dismiss stale content. Native buttons retain the existing animation labels and captions.
- GENOMIC and CLUSTERING link to Artificial Intelligence and Frogs and the owner's exact Oxford Academic URL; CLUSTERING also opens Supply-Chain-MLOps.
- BIOCHEMISTRY opens Aquaporins & regulation and links to the Aquaporins and Ions series. PHYSIOLOGY links to the Aquaporins and Steroids and Plants and Uncertainty series. SIMULATION opens Aquaporins & regulation.
- VISION opens DeepDream and links to the newly grouped three-part Diving into the Depths of Dreams series within The Human - Machine Interface. LANGUAGE opens Supply-Chain-MLOps.
- DEVELOPMENT and PHYSIOLOGICAL SIGNALS display More to come soon. The latter retains the previous correctly spelled label.
- Grouped the three existing DeepDream reading links beneath a named section; all six Human-Machine article destinations/order and article files remain unchanged.
- Checks passed: JS syntax; whitespace; unique HTML IDs; project/series anchors; six unchanged reading destinations; three grouped existing article paths. Browser checked all nine content/link sets, all three project modal openings, keyboard activation/Tab/Escape, and navigation to the three-article series.
- Mobile iframe check found a scrollbar-related panel overflow; corrected positioning to use document clientWidth. Recheck at 320 px: panel bounds 8–312 px, client/scroll width both 302 px. Browser confirms rendered panel display:block with the intended links.
- Oxford Academic URL is preserved exactly as supplied. Web retrieval redirected to an inaccessible publisher CDN; article content/availability was not independently verified here. No new scientific claim added.
- Preview needed restarting after inactivity; browser checks then completed. No binary assets changed or encoded.
- No merge/publication. Next: owner review, then merge and publish the homepage changes only when explicitly approved. Resume from portfolio/home-animation-words and this file.

## Homepage release approved — 2026-11-13
- Owner explicitly requested publication of the homepage words, topic navigation and grouped DeepDream series.
- Final comparison: two implementation commits ahead of main, no divergence; four changed text files (index.html, app.js, style.css, PROGRESS.md). No media or reading-page changes.
- Final app.js syntax check passed; desktop, keyboard and 320 px checks are recorded above.
- Next: merge the release PR and verify GitHub Pages for the exact merge commit plus live content and destination paths.

## Homepage publication completed — 2026-11-13
- PR #6 merged into main as fad1fc2dbabe4529fed701074ab7f65b11707ecd: https://github.com/Robin-Mom/portfolio/pull/6.
- GitHub Pages run 43448240233 completed successfully for that exact merge commit: https://github.com/Robin-Mom/portfolio/actions/runs/43448240233.
- Live HTTP verification passed: index.html, app.js, style.css, Artificial Intelligence and Frogs and all three DeepDream article pages return 200 and match the corresponding committed files byte for byte.
- Published site: https://robin-mom.github.io/portfolio/. Browser interaction checks completed before release are recorded above; no new live browser check was required after exact source verification.
- No outstanding publication blocker. Oxford Academic publisher retrieval limitation remains as documented; the owner-supplied URL is unchanged.
- This final checkpoint is retained on the work branch without triggering another main deployment. Next task: await the owner’s next change; start new implementation from published main fad1fc2dbabe4529fed701074ab7f65b11707ecd and consult this file.

## Homepage topic descriptions — 2026-11-13
- Working branch: portfolio/home-topic-descriptions, based on published main fad1fc2dbabe4529fed701074ab7f65b11707ecd.
- Replaced the three generic orbit subtitles with the nine descriptions supplied by the owner, selected together with their corresponding words for Biology, Bioinformatics and AI. Initial HTML contains the Biology descriptions.
- Preserved wording and capitalization as supplied; corrected only algorith to algorithm in the PHYSIOLOGICAL SIGNALS description.
- Added width limits so long descriptions wrap within the animation. No link destinations, project data, article content or binary assets changed.
- Checks passed: app.js syntax; whitespace; browser verified all nine descriptions across the three modes. At a 320 px content viewport (280 px artwork), all nine label boxes stay within the artwork without horizontal text overflow; Biology boxes do not overlap. BIOCHEMISTRY still opens the correct project/series link panel.
- No blocking issue observed. No merge or publication performed.
- Next: owner review, then merge/publish this description refinement when explicitly approved. Resume from portfolio/home-topic-descriptions and this file.

## Topic descriptions release approved — 2026-11-13
- Owner explicitly requested publication of the nine homepage topic descriptions.
- Final comparison: one implementation commit ahead of main with no divergence; only app.js, index.html, style.css and progress documentation changed.
- Final app.js syntax check passed; desktop/mobile browser checks are recorded above.
- Next: merge the release PR and confirm GitHub Pages deployment and exact live source files.

## Topic descriptions publication completed — 2026-11-13
- PR #7 merged into main as b8a6376b951509a6094c5f915556a030350b2203: https://github.com/Robin-Mom/portfolio/pull/7.
- GitHub Pages run 43451578531 completed successfully for that exact merge commit: https://github.com/Robin-Mom/portfolio/actions/runs/43451578531.
- Live index.html, app.js and style.css return HTTP 200 and match the release commit byte for byte, confirming publication of the nine descriptions and wrapping rules.
- Published site: https://robin-mom.github.io/portfolio/. No publication blocker observed.
- Final checkpoint retained on portfolio/home-topic-descriptions without another main deployment. Next: await the owner’s next change; start from published main b8a6376b951509a6094c5f915556a030350b2203 and consult this checkpoint.

## Supply-Chain-MLOps reflections subgroup — 2026-11-17
- Working branch: portfolio/supply-chain-reflections, based on published main b8a6376b951509a6094c5f915556a030350b2203.
- Owner supplied supply_chain_mlops_reflections(1).md, then clarified that its two articles belong within The Human - Machine Interface as a subgroup alongside DeepDream, rather than a third collection.
- Added Supply-Chain-MLOps: Reflections on Collaboration and AI Coding with two reading pages: Trustpilot: Without Trust, Skills Are Not Enough; AI Coding Assistants: Finding the Right Balance.
- Stored the supplied Markdown byte for byte at deep-dives/supply-chain-mlops/README.md. Article bodies are rendered directly with Pandoc; original wording, emphasis, lists, internal code terms and GitHub links are preserved. Personal/project claims are owner-supplied, not independently audited here.
- Homepage retains two collections; Human-Machine count is now eight, with the new subgroup and articles 07–08. Updated all eight reading-page collection menus and previous/next pagination; all six existing article bodies remain byte-identical.
- Extended scripts/build_human_machine.py to reproduce all eight pages from the existing six-article source and the new two-article source. Reuses existing article styles; no media files changed or encoded.
- Static checks passed: supplied source byte equality; exact Pandoc-rendered body equality for the new articles; unchanged existing bodies; unique IDs and all internal link/file/fragment targets across homepage and all eight pages; whitespace.
- Browser checks passed: subgroup is inside Human-Machine and total article count is eight; both reading pages open; adjacent-article navigation works; reading menu shows eight items and correct relative links. At a 320 px article viewport, document clientWidth and scrollWidth both equal 320 px.
- No blocking issue observed. No merge or publication performed.
- Next: owner review, then merge/publish the new subgroup when explicitly approved. Resume from portfolio/supply-chain-reflections and this file.

## Supply-Chain-MLOps project presentation — 2026-11-17
- Working branch: portfolio/supply-chain-project, based on 7256f1b2fe0ddbfe96f1e2bfda9b7f3d2f77b322 (pending Supply-Chain reflections subgroup). This branch includes the preceding unpublished article addition so the new link resolves.
- Recentered modal intro and homepage card on the owner’s intended purpose: Exploring the end-to-end MLOps workflow through semantic clustering.
- Rewrote Objective around hands-on MLOps experimentation, the notebook-to-scripts engineering challenge, reproducibility and the personal lessons discussed in Reflections.
- Updated Methods from Robin-Mom/Supply-Chain-MLOps main at 1402b766313c2f65eb9a305fe9f766093f6602cc: README.md, compose.yaml, params.yaml, dvc.yaml and src/select_best.py. Sources: https://github.com/Robin-Mom/Supply-Chain-MLOps/tree/1402b766313c2f65eb9a305fe9f766093f6602cc.
- Current summary covers normalized multilingual SentenceTransformer embeddings, KMeans/Spherical KMeans, five seeds, held-out cosine silhouette and ARI tie-breaking; selected MPNet/Spherical KMeans with ten clusters; frozen inference and independent final evaluation.
- Engineering stack summarized as Python/uv, Git/DVC, MLflow/DagsHub, FastAPI, Docker Compose, NGINX, Prometheus/Grafana and offline Evidently/SciPy drift reports. Removed Airflow and obsolete clustering-method emphasis. No performance score or public-production claim added.
- Replaced Results with Reflections and a short link to #supply-chain-reflections, reusing the existing close-modal navigation. Removed the requested Sources & Documentation sentence; retained repository and added README/reproduction links as verifiable references.
- Checks passed: JS syntax and whitespace; runtime project configuration confirms Objective/Methods/Reflections and exact preservation of Aquaporins/DeepDream data. Browser checked revised intro, all three tabs, source links and navigation from Reflections (modal closes, anchor correct, two article links). At 320 px viewport, Methods dialog client/scroll width both 296 px.
- No blocking issue observed. No merge/publication. Next: owner review and, when explicitly approved, publish this branch together with the pending reflections subgroup; avoid publishing the project link without its target.

## Source cleanup and homepage legend layout — 2026-11-17
- Branch portfolio/hero-layout-cleanup starts from pending Supply-Chain project update 4894d42edaf30941ea0a3ee07968599ee9b33ae3. It retains both preceding unpublished steps (reflections subgroup and Supply-Chain overview).
- Removed the requested DeepDream source-note sentence, retaining its three links. Removed the global Sources & information footer button and modal-content event handler.
- Kept all nine descriptions in a legend below a dedicated animation stage: three columns on desktop, stacked title/description rows on mobile. Preserved buttons, links, hover/focus popovers, mode and pause controls.
- Adjusted canvas scale for the shorter stage and kept the decorative ellipse within the narrow artwork. No protein viewer, media or article changes.
- Checks passed: JS syntax and whitespace; runtime comparison confirms Supply-Chain/Aquaporins data and DeepDream panels unchanged; removed control/text/handler absent.
- Desktop visual check: canvas bottom 592 px, labels top 610 px. VISION links and DeepDream modal work; its source footer contains only three links. Pause toggles to Play animation.
- At 320 px, all three modes have bounded label boxes below the canvas without mutual overlap. With stylesheet fully loaded, artwork clientWidth/scrollWidth both 280 px, page clientWidth/scrollWidth both 320 px; first label sits 16 px below the canvas.
- No blocking issue observed. No merge/publication. Next: owner review and explicit publication approval for this branch including the two pending Supply-Chain steps. Resume from portfolio/hero-layout-cleanup and this file.

## Journey research background and profile links — 2026-11-17
- Branch portfolio/journey-research-links starts from pending cleanup commit 45d7b182c642a9d1a620f4fd20413e6c20f62a1f and retains the preceding unpublished changes.
- Added the owner’s requested idea before ORCID, fluently rephrased: Several years of research shaped my critical thinking before I expanded my skills to include AI tools and engineering.
- Added My Google Scholar publications beside the existing ORCID profile. Reused https://scholar.google.com/citations?user=QTEqD08AAAAJ from the portfolio’s existing contact link; no profile identifier was guessed. Both links open externally with noopener/noreferrer.
- Added a wrapping flex group for the two profile links. Browser checked paragraph placement, exact profile hrefs and mobile layout: links wrap onto separate rows within a 280 px group, clientWidth equals scrollWidth. Whitespace check passed.
- No blocking issue observed. No merge/publication. Next: owner review and explicit publication approval for this branch, including all preceding pending changes. Resume from portfolio/journey-research-links and this file.
