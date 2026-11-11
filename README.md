# Robin Mom — Portfolio professionnel

Portfolio statique à publier sur GitHub Pages dans un dépôt dédié nommé `portfolio`.
Les fichiers du site se trouvent à la racine. Aucun serveur applicatif, paquet à installer,
clé API ou abonnement ChatGPT n’est requis par le code.

## Contenu

- `index.html` : sections et cartes projets.
- `style.css` : design responsive et accessibilité visuelle.
- `app.js` : fiches projets, filtres, carnet de réflexions et illustrations.
- `assets/` : ressources locales.
- `.nojekyll` : publication directe des fichiers statiques.

Les trois réflexions restent identifiées comme des ébauches éditoriales. Les informations
scientifiques et techniques sont accompagnées de liens dans les fiches et dans
« Sources & informations ». Les illustrations sont synthétiques et signalées comme telles.

## Publier avec GitHub Pages

1. Placer ces fichiers **à la racine** de la branche `main` du dépôt `portfolio`.
2. Dans le dépôt : **Settings → Pages → Build and deployment**.
3. Choisir **Deploy from a branch**, puis **main** et **/(root)**, et enregistrer.
4. Attendre la réussite du déploiement dans **Actions**, puis ouvrir l’adresse indiquée
   dans **Settings → Pages → Visit site**.

Le site est public avec cette configuration. Avec GitHub Free, le dépôt doit également
être public. L’adresse habituelle est `https://<compte>.github.io/portfolio/` ; utiliser
l’adresse réellement retournée par GitHub après publication.

## Mettre à jour après le retrait du plugin

Modifier les fichiers depuis GitHub ou depuis une copie locale du dépôt. Un push vers
la branche de publication met automatiquement le site à jour. Le mécanisme utilise
GitHub Pages directement et ne dépend d’aucune autorisation du plugin ChatGPT.

La désinstallation du plugin et la révocation de ses autorisations n’effacent pas les
fichiers versionnés du dépôt. Conserver le compte GitHub, le dépôt et la configuration
Pages pour maintenir cet hébergement.

## Vérifications

La version d’origine a été vérifiée sur ordinateur et dans des viewports mobiles.
Cette adaptation a aussi été vérifiée dans le navigateur sous le sous-chemin
`/portfolio/`, sur ordinateur et dans un viewport mobile de 390 px : menu, filtre,
fiches, onglets et panneau des sources. Aucun débordement horizontal observé. Ne pas inclure de configuration `.openai`, de jeton,
de fichier `.env` ou de document privé dans ce dépôt public.

## Sources

- [GitHub Pages : fonctionnement](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Configurer une publication depuis une branche](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Créer le site et publier des fichiers statiques](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Retirer les autorisations d’une GitHub App](https://docs.github.com/en/apps/using-github-apps/reviewing-and-modifying-installed-github-apps)
