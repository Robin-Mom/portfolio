# Robin Mom — Professional portfolio

An English-language portfolio hosted on GitHub Pages in the `portfolio` repository.
The website files live at the repository root. The code requires no application
server, package installation, API key or ChatGPT subscription.

## Content

- `index.html`: sections, project cards and the main introduction.
- `style.css`: responsive layout and visual accessibility.
- `app.js`: project details, filters, source panel and illustrations.
- `deep-dives/`: five standalone article pages, including a connected three-part
  series on aquaporins and steroids. These pages also work without JavaScript.
- `assets/`: local resources.
- `.nojekyll`: direct publication of the static files.

The headline is **Understanding Biology. Building with AI.** The three-paragraph
main introduction uses the text supplied by Robin Mom. The interface, project
details, Deep Dives, source panel and accessibility labels are in English.

Deep Dives replaces the former Reflections section. The five articles use the
English texts supplied by Robin Mom in `deep_dives.md`, preserving their wording,
emphasis and scientific publication links. The collection contains:

- **Artificial Intelligence and Frogs**
- **Art or Science? An Age-Old Question Revisited by AI**
- **Aquaporins and Steroids: A Matter of Perspective**, parts 1–3

Each article has a direct URL, a link back to the collection and an estimated
reading time (word count divided by 220 words per minute, rounded up). The three
aquaporin articles also link to every part of the series.
Scientific and technical information is linked to sources in the project details
and the Sources & information panel. Synthetic illustrations are labeled as such.

## GitHub Pages publishing

1. Keep these files at the root of the `main` branch.
2. In **Settings → Pages → Build and deployment**, choose **Deploy from a branch**.
3. Select **main** and **/(root)**, then save.
4. Wait for a successful deployment in **Actions**, then open the address shown by
   **Settings → Pages → Visit site**.

This configuration publishes a public website. GitHub Free also requires a public
repository. Use the actual URL returned by GitHub after deployment.

## Updates

Edit files on GitHub or in a local copy of the repository and push to `main`.
GitHub Pages republishes changes from the configured source branch. This process
does not depend on the ChatGPT GitHub plugin.

The website uses relative resource paths and supports the `/portfolio/` subpath.
Do not commit `.openai` configuration, tokens, `.env` files or private documents.

## Verification

The original version was checked on desktop and mobile browser viewports.
The English update was checked under `/portfolio/`: the exact introduction, all
project tabs, source panel, mobile menu and English filter labels.
Desktop and 320, 390, 768 and 1024 px browser viewports showed no horizontal overflow.

The Deep Dives update was checked against the supplied Markdown: all five article
bodies and all four scientific links are preserved. All 63 internal links and
asset references resolve. Browser checks covered desktop reading, mobile menu,
article pages at 320 and 390 px, the 768 px reading layout, navigation between all
three series parts, return links, the source panel and the existing MLOps modal.

## References

- [How GitHub Pages works](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Publishing from a branch](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Creating a site and publishing static files](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Managing GitHub App permissions](https://docs.github.com/en/apps/using-github-apps/reviewing-and-modifying-installed-github-apps)

