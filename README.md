# Robin Mom — Professional portfolio

An English-language portfolio hosted on GitHub Pages in the `portfolio` repository.
The website files live at the repository root. The code requires no application
server, package installation, API key or ChatGPT subscription.

## Content

- `index.html`: sections, project cards and the main introduction.
- `style.css`: responsive layout and visual accessibility.
- `app.js`: project details, filters, source panel and illustrations.
- `deep-dives/`: twelve scientific article pages, their Markdown source, and two
  previously published essays retained at their existing URLs. These pages also work without JavaScript.
- `assets/`: local resources.
- `.nojekyll`: direct publication of the static files.

The headline is **Understanding Biology. Building with AI.** The three-paragraph
main introduction uses the text supplied by Robin Mom. The interface, project
details, Deep Dives, source panel and accessibility labels are in English.

Deep Dives contains one series, **Scientific Articles - Research Reflections**,
with twelve articles supplied by Robin Mom in `deep-dives/scientific-articles.md`.
Original wording, emphasis and publication links are preserved.

- Aquaporins and Steroids: A Matter of Perspective — 3 articles
- Aquaporins and Ions: A Matter of Thresholds — 3 articles
- Plants and Uncertainty: A Matter of Timescales — 4 articles
- Fungal Aquaporins: Variations on an Archetype — 2 articles

Each article has a direct URL, theme navigation, previous/next article links,
a link back to Deep Dives, and an estimated reading time (220 words per minute).
The collection and reading pages work without JavaScript. Earlier essays are
retained at their existing URLs but are no longer listed in this collection.

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

The scientific collection update preserves all 12 article bodies, emphasis and
12 publication links from the supplied Markdown. All 172 internal links and
asset references resolve. JavaScript syntax passes `node --check`. Desktop
browser checks covered the collection, opening an article and next-article
navigation. Mobile layouts were not re-tested for this update.

## References

- [How GitHub Pages works](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Publishing from a branch](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Creating a site and publishing static files](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Managing GitHub App permissions](https://docs.github.com/en/apps/using-github-apps/reviewing-and-modifying-installed-github-apps)


