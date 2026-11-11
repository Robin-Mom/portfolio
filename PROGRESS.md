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

## Next task
Upload these two original binary files from the saved checkpoint to the same branch using authenticated Git:
- deep-dives/human-machine-interface/assets/deepdream_attention_post3.png
- deep-dives/human-machine-interface/assets/deepdream_4a-4b-stacked.mp4
Then check desktop/mobile navigation, image rendering and native video playback in a browser; update this progress note and commit/push. Keep main unchanged and do not publish without approval.

## Blocker and recovery
- Local source-import commit: `21bdecc` (not pushed).
- `git push` failed: could not read Username for https://github.com.
- GitHub connector supports text commits, but no direct binary file upload; do not work around this with Base64.
- A remote branch has been created from the base commit. A separate checkpoint commit will record this blocker there.
- Source import is saved in `portfolio_step1_checkpoint.zip`; it contains this progress note and `deep-dives/human-machine-interface/` with all original files.
- To resume: check out the remote branch, extract the checkpoint ZIP into the repository, compare the source files with the supplied archive, commit the imported files and push from an authenticated Git environment. Preserve the current remote PROGRESS.md rather than replacing it with the older checkpoint copy. Article pages and homepage integration are already complete; upload only the missing media, verify and update progress.
- No site content has been changed on main; nothing was published.

Checkpoint archive: https://chatgpt.com/library?file_id=libfile_469bf0f959d4819192f2bb09d7ae572c&account_id=personal

Remote branch now contains the Markdown source, six HTML pages, collection CSS, generation script and this progress note. The PNG and MP4 still need uploading. The home page now links to both collections (12 scientific articles and 6 human-machine reflections).
