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

## Next task
Generate six static article pages from the imported Markdown, preserving wording and references, with local image/video links and navigation. Then connect the new collection from the home page and verify local links and scientific-content preservation.

## Blocker and recovery
- Local source-import commit: `21bdecc` (not pushed).
- `git push` failed: could not read Username for https://github.com.
- GitHub connector supports text commits, but no direct binary file upload; do not work around this with Base64.
- A remote branch has been created from the base commit. A separate checkpoint commit will record this blocker there.
- Source import is saved in `portfolio_step1_checkpoint.zip`; it contains this progress note and `deep-dives/human-machine-interface/` with all original files.
- To resume: check out the remote branch, extract the checkpoint ZIP into the repository, compare the source files with the supplied archive, commit the imported files and push from an authenticated Git environment. Preserve the remote PROGRESS.md and update its state. Then generate article pages and connect the second collection in separate verified commits.
- No site content has been changed on main; nothing was published.

Checkpoint archive: https://chatgpt.com/library?file_id=libfile_469bf0f959d4819192f2bb09d7ae572c&account_id=personal

Remote checkpoint includes the Markdown source and this progress note only. The PNG and MP4 still need uploading. No HTML pages generated yet.
