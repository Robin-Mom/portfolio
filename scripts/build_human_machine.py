#!/usr/bin/env python3
"""Render the six supplied reflections. Requires Python 3 and Pandoc."""
import html
import math
from pathlib import Path
import re
import subprocess

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'deep-dives/human-machine-interface'
SLUGS = ['artificial-intelligence-and-frogs', 'art-or-science', 'deepdream-part-1',
         'deepdream-part-2', 'deepdream-part-3', 'context-window']
source = (OUT / 'README.md').read_text()
parts = re.split(r'^## [1-6]\. (.+)\n', source, flags=re.M)
assert len(parts) == 13, 'Expected exactly six numbered articles'
articles = []
for i, slug in enumerate(SLUGS):
    title, body = parts[1 + i*2:3 + i*2]
    body = re.sub(r'\n---\s*$', '', body).strip()
    rendered = subprocess.check_output(['pandoc', '--from=gfm', '--to=html5', '--wrap=none'], input=body, text=True)
    articles.append((slug, title, body, rendered))

escape = html.escape
for i, (slug, title, body, rendered) in enumerate(articles):
    # Keep every original reference; add an accessible native player beside its link.
    if 'assets/deepdream_4a-4b-stacked.mp4' in rendered:
        rendered = rendered.replace('<p><strong>Associated video:</strong>',
            '<figure><video controls preload="metadata" playsinline aria-label="DeepDream experiment: animal-like patterns emerging in GoogLeNet"><source src="assets/deepdream_4a-4b-stacked.mp4" type="video/mp4"><p>Your browser does not support embedded video. Use the video link below.</p></video><figcaption>DeepDream experiment — original video by Robin Mom.</figcaption></figure>\n<p><strong>Associated video:</strong>')
    rendered = rendered.replace('<img ', '<img loading="lazy" decoding="async" ')
    rendered = rendered.replace('<table>', '<div class="table-scroll" role="region" aria-label="Comparison table" tabindex="0"><table>').replace('</table>', '</table></div>')
    items = ''.join(f'<li><span aria-current="page">{escape(t)}</span></li>' if j == i else f'<li><a href="{s}.html">{escape(t)}</a></li>' for j, (s,t,_,__) in enumerate(articles))
    pagination = ''
    for j, label in [(i-1, 'Previous article'), (i+1, 'Next article')]:
        if 0 <= j < len(articles):
            s,t,_,__ = articles[j]
            pagination += f'<a href="{s}.html"><small>{label}</small>{escape(t)}</a>'
    minutes = max(1, math.ceil(len(body.split())/220))
    page = f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#0b1117">
<meta name="author" content="Robin Mom">
<meta name="description" content="{escape(title)} — a reflection by Robin Mom in The Human - Machine Interface.">
<title>{escape(title)} | Robin Mom — Deep Dives</title>
<link rel="icon" type="image/svg+xml" href="../../assets/favicon.svg">
<link rel="stylesheet" href="../../style.css">
<link rel="stylesheet" href="articles.css">
</head>
<body class="reading-page human-machine-page">
<a class="skip" href="#article">Skip to article</a>
<header class="site-header reading-header"><a href="../../index.html#home" class="brand" aria-label="Robin Mom, home"><span class="monogram">rm<span>·</span></span><span>Robin Mom<small>SCIENCE &amp; AI ENGINEERING</small></span></a><a class="reading-back" href="../../index.html#deep-dives">← Deep Dives</a></header>
<main id="article" class="reading-wrap">
<article aria-labelledby="article-title">
<header class="article-heading"><p class="eyebrow">THE HUMAN - MACHINE INTERFACE / {i+1:02d}</p><h1 id="article-title">{escape(title)}</h1><p class="article-byline">By Robin Mom · {minutes} min read</p></header>
<div class="article-body">
{rendered}</div>
</article>
<nav class="article-pagination" aria-label="Adjacent articles">{pagination}</nav>
<nav class="article-series" aria-labelledby="series-title"><p class="eyebrow">SIX REFLECTIONS</p><h2 id="series-title">The Human - Machine Interface</h2><p>From Tool Use to Philosophical Contemplation</p><ol>{items}</ol></nav>
<div class="article-end"><a class="text-link" href="../../index.html#deep-dives">← All Deep Dives</a><a class="text-link" href="#article">Back to top ↑</a></div>
</main>
<footer class="reading-wrap reading-footer"><p>© 2026 · Robin Mom</p><a href="../../index.html#projects">Explore my projects ↗</a></footer>
</body>
</html>
'''
    (OUT / f'{slug}.html').write_text(page)
print('Rendered six articles from the supplied Markdown.')
