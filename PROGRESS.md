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

## Next task — User uploads the two original files
Follow these steps on your own computer. Use a fresh clone so existing local work is not affected.

1. Download and extract `portfolio_step1_checkpoint.zip` from your private ChatGPT files (download link supplied only in the conversation). Keep the extracted folder separate from the repository.
2. Open a terminal in a directory where `portfolio-media-upload` does not already exist, then run:

   ```bash
   git clone --branch portfolio/human-machine-interface --single-branch https://github.com/Robin-Mom/portfolio.git portfolio-media-upload
   cd portfolio-media-upload
   mkdir -p deep-dives/human-machine-interface/assets
   ```

3. Using your file manager, copy only these two files from the extracted checkpoint into the clone's `deep-dives/human-machine-interface/assets/` folder, preserving their exact names:
   - `deepdream_attention_post3.png`
   - `deepdream_4a-4b-stacked.mp4`

   Do not copy the checkpoint's old PROGRESS.md, HTML pages or Git metadata over this clone.

4. Open the PNG and MP4 locally to check that both are readable. In the terminal, verify the target branch and file presence:

   ```bash
   git branch --show-current
   ls -lh deep-dives/human-machine-interface/assets/
   git status --short
   ```

   The branch must be `portfolio/human-machine-interface`. Stop if it differs, either file is missing, or unexpected changes appear.

5. After those checks pass, record the upload preparation and commit only the two media files plus this progress note:

   ```bash
   cat >> PROGRESS.md <<'EOF'

## Manual media upload checkpoint
- Copied the original PNG and MP4 into the paths expected by the article pages.
- Checked the branch, file presence and local image/video readability.
- Website desktop/mobile rendering and embedded playback still need verification.
- Next task: confirm both files on the remote branch, then run browser checks; no merge or publication authorized.
EOF
   git add -- deep-dives/human-machine-interface/assets/deepdream_attention_post3.png deep-dives/human-machine-interface/assets/deepdream_4a-4b-stacked.mp4 PROGRESS.md
   git diff --cached --stat
   git diff --cached --check
   git commit -m "feat(portfolio): add original DeepDream image and video"
   git push origin HEAD:refs/heads/portfolio/human-machine-interface
   ```

   Run the commit only after the checks pass. If authentication or push fails, retain the local clone and report the error without sharing credentials. Do not force-push.

6. After a successful push, run `git log -1 --oneline` and send that commit reference in the conversation.

## Resume after upload
- Read the current remote PROGRESS.md and inspect the current branch head.
- Confirm that both media files are present at the exact paths above.
- Verify desktop/mobile navigation, PNG rendering and native video playback with a local preview.
- Record actual results and any limitations, then commit and push on the same branch.
- Preserve the twelve scientific articles. Do not merge into main or publish without explicit approval.

## Recovery
- Historical unpushed source-import commit: `21bdecc`; its Git push lacked authentication.
- The checkpoint archive preserves the original media. Do not restore its older progress note over this one.
- Remote source, six article pages, collection CSS, generation script and homepage integration are already present.
- Main was observed at `cf0908f49c0134a6fae9f06d3092a5830b5bde77` before this documentation-only step.
