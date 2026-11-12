# Portfolio progress

Branch: `portfolio/human-machine-interface`
Base: `cf0908f49c0134a6fae9f06d3092a5830b5bde77`

## Constraints
- Keep the existing scientific collection and its twelve articles unchanged.
- Work in small checked commits and push each step to this branch.
- Keep PNG/MP4 as separate files; no Base64.
- Merge/publication explicitly authorized by the user on 2026-11-12 for PR #1.

## Step 1 — Source import complete
- Imported the supplied README (six articles), PNG and MP4 into `deep-dives/human-machine-interface/`.
- Source: user attachment `human_machine_interface_portfolio(6).zip`.
- Verified SHA-256 equality for all three extracted files against the archive extraction.
- Existing site files unchanged; no repository workflows found.
- Problems: none. Browser validation not yet applicable.

## Step 2 — Static article pages complete
- Generated six standalone English HTML pages from the imported README, with shared collection navigation, previous/next links and estimated reading times.
- Added collection-scoped CSS for responsive image/video display, blockquotes and scrollable tables. Existing scientific pages, global CSS and homepage remain unchanged.
- Preserved the original reference URLs. Video uses a native controls-enabled player with preload=metadata and an ordinary MP4 link; image uses its original PNG path and alt text.
- Rebuild: `python3 scripts/build_human_machine.py` (requires Pandoc). The deployed site itself needs no build runtime.
- Checks passed: six pages, one h1 per page, unique IDs, navigation targets and anchors, CSS paths, source reference destinations, one video, one image and two context-window tables; no Base64.
- Known missing files on the remote branch: the original PNG and MP4. Both are retained in the step-1 checkpoint archive.
- Browser layout and video playback were not tested; static HTML checks only.

## Step 3 — Second collection connected to the homepage
- Added The Human - Machine Interface to Deep Dives with six article links, original titles and reading times matching the article pages.
- Added navigation to both collections and updated the shared Deep Dives introduction.
- Reused existing responsive collection styles. The scientific collection markup is preserved verbatim, including its original title.
- Checks passed: all homepage local paths and anchors resolve, six new article links, unique IDs, balanced HTML, git diff --check. All pre-existing article files are byte-identical to main.
- Verification limit: no browser layout or playback check in this step. The missing PNG/MP4 remain the only known media blocker from step 2.

## Step 4 — Manual media handoff prepared (2026-11-12)
- Remote branch inspected at `c6a0ea4883bc83baa38cdbf45c7da77ff32d8885`.
- Verified: six collection HTML pages are present; neither required media file is present in the complete remote tree.
- Verified exact references: DeepDream part 2 uses `assets/deepdream_4a-4b-stacked.mp4`; part 3 uses `assets/deepdream_attention_post3.png`.
- No repository Actions workflows were present in the inspected tree.
- This step changes only PROGRESS.md. No media upload, merge or publication was performed.
- Earlier step-1 media verification concerned the local checkpoint, not the remote branch. Prior browser checks remain outstanding.
- User will upload the media manually. Do not attempt binary transfer through the connector or use Base64.

## Step 5 — Uploaded media connected (2026-11-12)
- User uploaded both media files in commit `8b13194d6b10a065c0a0b105c7be97c68446d0e5`, under root `assets/`.
- Fixed the resulting broken article paths by moving both files into `deep-dives/human-machine-interface/assets/`. HTML, source Markdown and the generator already reference that location and were not changed.
- Binary contents preserved exactly, verified by Git blob IDs:
  - MP4: `6e773d80fc04335acd40f7e80581b06694ee86cc` (9,960,314 bytes).
  - PNG: `0657c003bf0894f010361fa76a53408277c229e2` (4,141,505 bytes).
- No Base64 or binary content was printed. Remote move reuses the existing Git blobs.
- Static checks passed: homepage and six collection pages have resolvable local links/anchors and unique IDs. Pre-existing scientific pages are unchanged from main.
- Local Chrome checks passed: homepage article navigation; next-article navigation; PNG loaded at natural dimensions 1843 × 2048 and rendered at approximately 760 px wide; native MP4 loaded at 1536 × 576 with duration 10 seconds, started via its control, and advanced to 7.84 seconds without a media error.
- Desktop image rendering inspected. Mobile viewport and full-site visual checks remain outstanding.
- Preview-only dist/ and .openai/ configuration are not part of this commit.
- No merge into main or publication performed.

## Step 6 — Responsive layout checks complete (2026-11-12)
- Tested source at `c30969e00a1e5b4b66d3a0633d3d34f19a22c7fa`. All 29 preview site/content/media files were verified byte-identical to the remote branch using Git blob hashes.
- Used a temporary local Chrome iframe harness with measured content viewport widths of 320, 390 and 768 CSS pixels. This checks responsive CSS; it is not a physical mobile device or touch/browser emulation.
- Checked homepage and all six Human–Machine Interface articles at all three widths (21 page/width combinations). Document scroll width equals viewport width in every case: no page-level horizontal overflow.
- Image and video remain within their content containers: approximately 280, 350 and 704 px wide respectively.
- At 320 px, the wider context-window table has a 316 px scrollable area inside a 280 px container. Keyboard focus and ArrowRight successfully moved scrollLeft to 36 px; horizontal scrolling is confined to the table. Both tables fit without horizontal scrolling at 390 and 768 px.
- Narrow-layout homepage menu opens, the Deep Dives link navigates to its anchor, and the menu closes (aria-expanded returns to false). Homepage-to-context-window article navigation also passed.
- Native video controls are visible at 320 px. Keyboard playback starts and currentTime advances past 3.69 seconds with no media error.
- Inspected narrow-layout screenshots of collection links, the table and the video player.
- No defect found in this focused check; no application or media changes were needed. This commit updates only PROGRESS.md.
- Limitations: no real-device touch test, Safari/iOS test or exhaustive cross-browser review. Temporary preview harness/configuration/build output are excluded from the commit.
- No merge or publication performed.

## Step 7 — Draft review prepared (2026-11-12)
- Opened [draft pull request #1](https://github.com/Robin-Mom/portfolio/pull/1) from `portfolio/human-machine-interface` into `main`.
- Compared the branch with main: 13 changed paths limited to the new collection, its media, homepage integration, generation script and this progress note. Existing scientific article files remain unchanged.
- Checked main's complete tree: no GitHub Actions workflow files. No workflow or publication was manually triggered.
- PR description summarizes final behavior, completed validation and real-device/cross-browser limitations.
- Verified PR is open, in draft status, and not merged. Main remains at `cf0908f49c0134a6fae9f06d3092a5830b5bde77`.
- This step modifies only PROGRESS.md in the repository; prior application checks remain applicable.

## Current state
The integration is merged into main and published on GitHub Pages. Desktop media/navigation checks, responsive checks and live HTTP/media-integrity checks passed. The scientific articles and original media remain unchanged.

## Step 8 — Merge and publication authorized (2026-11-12)
- User explicitly approved merging PR #1 and publishing the portfolio.
- Pre-merge check: PR #1 is open and mergeable; reviewed head was `a9c4b986324682c0d55158b31daf7e2e4a889e8a`.
- Next: merge this branch into main, then verify the GitHub Pages deployment and live article/media endpoints.
- Deployment outcome will be recorded in a follow-up checkpoint on the working branch.

## Previous review checkpoint
Review [draft pull request #1](https://github.com/Robin-Mom/portfolio/pull/1). The implementation and verification steps are complete. Any requested refinements should be handled in another small checked commit on `portfolio/human-machine-interface`. Authorization has now been granted for this integration; see step 8.

## Resume
Read this file and the current branch head before editing. Preserve the twelve scientific articles and the original media bytes. Media live in `deep-dives/human-machine-interface/assets/`. No further upload is needed.

## Step 9 — Merge and publication complete (2026-11-12)
- PR #1 merged with explicit user approval. Merge commit: `98d5d2cae72c6bbfc6f6c98b8bc0086adc04a03b`.
- [GitHub Pages deployment](https://github.com/Robin-Mom/portfolio/actions/runs/43193148332) completed successfully for that merge commit.
- Live site: https://robin-mom.github.io/portfolio/
- Live HTTP checks passed (200): homepage, context-window article, DeepDream parts 2 and 3, PNG and MP4. Homepage contains the new collection link.
- Live PNG served as image/png (4,141,505 bytes) and MP4 as video/mp4 (9,960,314 bytes). Their Git blob hashes match the original uploaded files exactly.
- This completion checkpoint is committed on the retained working branch after the merge, so it does not trigger an additional production deployment. Main contains the approval checkpoint and the complete site.
- No outstanding implementation task. Future edits should start from current main, with this branch's final progress checkpoint available for context.
