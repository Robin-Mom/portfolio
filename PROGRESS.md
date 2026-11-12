# Portfolio progress

Branch: `portfolio/human-machine-interface`
Base: `cf0908f49c0134a6fae9f06d3092a5830b5bde77`

## Constraints
- Keep the existing scientific collection and its twelve articles unchanged.
- Work in small checked commits and push each step to this branch.
- Keep PNG/MP4 as separate files; no Base64.
- Do not merge into main or publish without user approval.

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

## Current state
The two collections, six Human–Machine Interface articles and both media are connected on the working branch. The former missing-media blocker is resolved. The upload instructions from step 4 are superseded; no further upload is needed.

## Next task
Perform a focused mobile layout and navigation review, including the image, video controls and context-window tables. Fix any observed issue in a small coherent change; update this file with actual results and commit/push to `portfolio/human-machine-interface`. Do not merge or publish without explicit user approval.

## Resume
Read this file and the current branch head before editing. Preserve the twelve scientific articles and the original media bytes. The original upload paths at root assets/ have been replaced by the collection-scoped paths above.
