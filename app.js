'use strict';

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const external = (href, label) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label} <svg class="arrow-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg></a>`;
const sourceLinks = {
  paper: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10888569/',
  repo: 'https://github.com/Robin-Mom/Supply-Chain-MLOps',
  clusters: 'https://scikit-learn.org/stable/modules/clustering.html#clustering-performance-evaluation',
  sbert: 'https://sbert.net/docs/sentence_transformer/usage/semantic_textual_similarity.html',
  dream: 'https://research.google/blog/inceptionism-going-deeper-into-neural-networks/',
  dvc: 'https://doc.dvc.org/user-guide/pipelines',
  mlflow: 'https://mlflow.org/docs/latest/ml/tracking/'
};

const projects = {
  supply: {
    kicker: '01 / NLP · MACHINE LEARNING · MLOPS', title: 'Supply-Chain-MLOps',
    intro: 'Regrouper des avis clients par leur sens et construire une chaîne de travail qui permet de comparer, reproduire et exploiter les modèles.',
    tags: ['SentenceTransformers', 'KMeans', 'DVC', 'MLflow', 'FastAPI', 'Docker'],
    panels: [
      `<h3>Faire émerger les thèmes des avis</h3><p>Le projet porte sur des avis francophones concernant Oscaro, collectés sur Trustpilot. L’objectif est de regrouper automatiquement des commentaires proches sur le plan sémantique, sans catégories d’apprentissage préétablies.</p><div class="process"><div>01 · Représenter<small>Encoder les commentaires en vecteurs sémantiques.</small></div><div>02 · Regrouper<small>Comparer des méthodes de clustering.</small></div><div>03 · Exploiter<small>Attribuer un groupe aux nouveaux avis.</small></div></div><p>Le second enjeu est l’ingénierie : passer du notebook à des scripts d’entraînement, d’évaluation et de prédiction, avec un suivi des expériences.</p>`,
      `<h3>Comparer avant de choisir</h3><ul><li>Embeddings SentenceTransformers normalisés ; exploration de KMeans, Spherical KMeans, HDBSCAN et UMAP + HDBSCAN.</li><li>Évaluation par silhouette, Davies–Bouldin, couverture et stabilité des partitions via l’Adjusted Rand Index.</li><li>Extraction de mots caractéristiques avec c-TF-IDF pour aider à interpréter les groupes.</li><li>Pipeline DVC et suivi des paramètres, métriques et artefacts avec MLflow ; travail d’intégration à DagsHub.</li></ul><p>Le projet comprend également des travaux autour d’une API FastAPI, de Docker, d’Airflow et du monitoring avec Prometheus et Grafana.</p>`,
      `<h3>Ce qui est documenté</h3><p>Des scripts distincts permettent d’entraîner, d’évaluer et d’attribuer de nouveaux avis aux groupes KMeans. Plusieurs approches de clustering ont été explorées ; la chaîne MLOps poursuit son évolution.</p><div class="info-box"><p><strong>État : en développement.</strong> Aucun score de performance ni gain métier n’est publié dans cette fiche : les résultats chiffrés restent à intégrer à partir de runs vérifiés.</p></div><h3>Les limites à examiner</h3><p>Un score géométrique ne garantit pas la pertinence d’un thème. L’interprétation des groupes, leur stabilité et le comportement sur de nouveaux avis doivent être évalués conjointement. La visualisation de la carte est synthétique.</p>`
    ],
    sources: `${external(sourceLinks.repo, 'Dépôt du projet')}<p>Présentation fondée sur les informations et la documentation des scripts fournies par Robin Mom. Les résultats chiffrés restent à compléter.</p>`
  },
  aquaporins: {
    kicker: '02 / RECHERCHE · BIOPHYSIQUE', title: 'Aquaporines & régulation',
    intro: 'Une recherche sur les mécanismes moléculaires qui influencent la perméabilité à l’eau des aquaporines humaines.',
    tags: ['Dynamique moléculaire', 'Analyse structurale', 'Bioinformatique'],
    panels: [
      `<h3>Une question de régulation</h3><p>Comment les ions zinc modulent-ils les canaux à eau ? Mom et collaborateurs (2024) examinent quatre aquaporines humaines.</p>`,
      `<h3>Explorer à l’échelle atomique</h3><p>Simulations de dynamique moléculaire et analyse des interactions ions–protéines.</p><p>Contributions déclarées de Robin Mom : conceptualisation, méthodologie, analyse formelle et rédaction initiale.</p>`,
      `<h3>Deux types de modulation</h3><p>Dans les conditions simulées, le zinc augmente la perméabilité d’AQP0 et d’AQP5 et la diminue pour AQP2 et AQP4. L’étude propose des mécanismes impliquant la stabilité structurale et les interactions électrostatiques.</p><div class="info-box"><p>Résultats <em>in silico</em>, sans validation clinique. Illustration abstraite.</p></div><p>Publié en 2024 dans l’International Journal of Molecular Sciences, 25(4), 2267.</p>`
    ],
    sources: `${external(sourceLinks.paper, 'Mom et al., 2024 · texte intégral')} · ${external('https://www.mdpi.com/1422-0067/25/4/2267','Éditeur')}<p>DOI : 10.3390/ijms25042267. Les informations scientifiques et les contributions présentées proviennent de cet article.</p>`
  },
  deepdream: {
    kicker: '03 / EXPLORATION · DEEP LEARNING', title: 'DeepDream',
    intro: 'Explorer le fonctionnement d’un réseau de neurones à travers les motifs qu’il fait émerger dans une image.',
    tags: ['Caffe', 'GoogLeNet', 'Docker', 'Visualisation'],
    panels: [
      `<h3>Observer ce qu’un réseau amplifie</h3><p>DeepDream transforme une image en renforçant certaines activations d’un réseau préentraîné. L’approche rend visibles des motifs associés aux représentations internes du réseau.</p><p>Cette exploration s’appuie sur le projet historique de Google et sert de support à la compréhension des réseaux convolutifs.</p>`,
      `<h3>Faire évoluer l’image</h3><p>Le gradient d’un objectif d’activation est utilisé pour modifier les pixels. Les poids du réseau restent fixes. Le processus est répété, éventuellement à plusieurs échelles.</p><p>L’environnement de travail communiqué pour ce projet associe Caffe, GoogLeNet et Docker.</p>`,
      `<h3>Un projet d’exploration</h3><p>Ce travail est présenté comme une démarche d’apprentissage et de visualisation. Aucune comparaison quantitative ni galerie de sorties authentifiées n’est encore intégrée à cette première version.</p><div class="info-box"><p>Le visuel de la carte est une composition procédurale créée pour ce portfolio ; il ne provient pas d’une exécution de DeepDream.</p></div>`
    ],
    sources: `${external(sourceLinks.dream, 'Google Research · Inceptionism, 2015')}<p>Principe méthodologique : publication de Google Research. Environnement du projet : éléments communiqués par Robin Mom.</p>`
  }
};

const notes = {
  clusters: {
    kicker: 'CARNET / MÉTHODES · NLP', title: 'Un bon cluster ne tient pas en un score.',
    body: `<p class="lead">Comment examiner un regroupement sémantique quand aucune « bonne réponse » n’est fournie à l’avance ?</p><h3>La géométrie est un point de départ</h3><p>La silhouette renseigne sur la cohésion et la séparation des groupes. Elle décrit une partition dans un espace et avec une distance donnés. Un score n’est donc interprétable qu’en connaissant la représentation des textes et le protocole de calcul.</p><h3>La stabilité pose une autre question</h3><p>Retrouve-t-on des groupes comparables après une variation des données ou de l’initialisation ? L’Adjusted Rand Index permet de comparer des partitions portant sur les mêmes observations. Cela invite à distinguer la stabilité d’une solution de sa pertinence.</p><h3>Revenir au contenu</h3><p>La lecture d’exemples et de mots caractéristiques peut ensuite aider à juger si un groupe représente un thème exploitable. Cette lecture complète les indicateurs numériques.</p><div class="info-box"><p><strong>Piste à développer :</strong> documenter une grille de lecture associant géométrie, stabilité et interprétation sur Supply-Chain-MLOps.</p></div>`,
    sources: `${external(sourceLinks.clusters, 'scikit-learn · Évaluation du clustering')} · ${external(sourceLinks.sbert, 'SentenceTransformers · Similarité sémantique')}`
  },
  models: {
    kicker: 'CARNET / SCIENCE · MODÉLISATION', title: 'De la molécule au modèle : relier les échelles.',
    body: `<p class="lead">Que peut apporter un changement d’échelle à une question biologique ?</p><h3>Partir d’une question</h3><p>L’étude sur les aquaporines et les ions zinc offre un exemple concret : une question sur la perméabilité à l’eau est examinée par des simulations moléculaires. Le modèle permet d’explorer des interactions difficiles à isoler à une autre échelle.</p><h3>Expliciter ce que l’on représente</h3><p>Une simulation décrit un système dans un cadre donné. Pour interpréter un résultat, la méthode, les conditions étudiées et les limites de l’analyse doivent rester visibles.</p><h3>Une question pour ce carnet</h3><p>Comment conserver cette attention aux hypothèses lorsqu’on passe de la modélisation moléculaire à l’apprentissage automatique ? Cette comparaison est une piste éditoriale, à enrichir avec des exemples de projets.</p>`,
    sources: external(sourceLinks.paper, 'Mom et al., 2024 · Aquaporines et zinc')
  },
  repro: {
    kicker: 'CARNET / INGÉNIERIE · MLOPS', title: 'La reproductibilité fait partie du résultat.',
    body: `<p class="lead">Une métrique devient plus utile lorsqu’on peut retrouver les conditions qui l’ont produite.</p><h3>Conserver le contexte d’une expérience</h3><p>Les données, les paramètres, le code et les artefacts donnent un contexte au résultat. MLflow permet de consigner des paramètres, des métriques et des fichiers de sortie au sein de runs.</p><h3>Décrire le chemin jusqu’au résultat</h3><p>DVC permet de décrire les étapes d’un pipeline et leurs dépendances. Une commande de reproduction s’appuie sur cette description pour déterminer les étapes à exécuter.</p><h3>Rendre le travail relisible</h3><p>Dans Supply-Chain-MLOps, la séparation entre entraînement, évaluation et prédiction sert de point de départ à cette démarche. Une piste pour ce carnet consiste à raconter ce passage du notebook aux scripts à travers un exemple reproductible.</p>`,
    sources: `${external(sourceLinks.dvc, 'DVC · Pipelines')} · ${external(sourceLinks.mlflow, 'MLflow · Experiment tracking')}`
  }
};

// Navigation and project filters remain small, independent UI components.
const menu = $('.menu-toggle');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Fermer la navigation' : 'Ouvrir la navigation');
  $('#navigation').classList.toggle('open', open);
});
const closeMenu = () => { menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Ouvrir la navigation'); $('#navigation').classList.remove('open'); };
$$('#navigation a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => {if(e.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true'){closeMenu();menu.focus();}});
$$('[data-filter]').forEach(button => button.addEventListener('click', () => {
  $$('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  let count = 0;
  $$('.project-card').forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; if (!card.hidden) count++; });
  $('#project-count').textContent = `${count} projet${count > 1 ? 's' : ''} à explorer`;
}));

const dialog = $('#detail-dialog');
let previousFocus;
function openDialog(kicker, html) {
  previousFocus = document.activeElement;
  $('#dialog-kicker').textContent = kicker;
  $('#dialog-content').innerHTML = html;
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.style.overflow = 'hidden';
  $('.close-dialog').focus({preventScroll:true});
}
$('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => {if(e.target === dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close', () => {document.body.style.overflow = '';previousFocus?.focus({preventScroll:true});});
function activateTab(index) {
  $$('.dialog-tabs button',dialog).forEach((tab,i) => {tab.setAttribute('aria-selected',String(index===i));tab.tabIndex=index===i?0:-1;});
  $$('.tab-panel',dialog).forEach((panel,i) => panel.hidden=i!==index);
}
$$('[data-project]').forEach(button => button.addEventListener('click', () => {
  const p = projects[button.dataset.project];
  openDialog(p.kicker, `<h2 id="dialog-title">${p.title}</h2><p class="lead">${p.intro}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><div class="dialog-tabs" role="tablist" aria-label="Explorer le projet">${['Objectif','Méthodes','Résultats'].map((label,i)=>`<button role="tab" id="tab-${i}" aria-controls="panel-${i}" aria-selected="${i===0}" tabindex="${i===0?0:-1}">${label}</button>`).join('')}</div>${p.panels.map((html,i)=>`<section class="tab-panel" id="panel-${i}" role="tabpanel" tabindex="0" aria-labelledby="tab-${i}" ${i?'hidden':''}>${html}</section>`).join('')}<div class="detail-source"><p>SOURCES & DOCUMENTATION</p>${p.sources}</div>`);
  const tabs = $$('.dialog-tabs button', dialog);
  tabs.forEach((tab,i) => {
    tab.addEventListener('click', () => activateTab(i));
    tab.addEventListener('keydown', e => {let n=i;if(e.key==='ArrowRight')n=(i+1)%tabs.length;else if(e.key==='ArrowLeft')n=(i+tabs.length-1)%tabs.length;else if(e.key==='Home')n=0;else if(e.key==='End')n=tabs.length-1;else return;e.preventDefault();activateTab(n);tabs[n].focus();});
  });
}));
$$('[data-note]').forEach(button => button.addEventListener('click', () => {
  const n = notes[button.dataset.note];
  openDialog(n.kicker, `<span class="draft-label">Ébauche éditoriale · à valider par Robin Mom</span><h2 id="dialog-title">${n.title}</h2><div class="article-text">${n.body}</div><div class="detail-source"><p>Ce texte de travail a été préparé pour ce portfolio. Il ne constitue pas un article publié ni une prise de position validée.</p>${n.sources}</div>`);
}));
$('#sources-open').addEventListener('click', () => openDialog('À PROPOS DE CE PORTFOLIO', `<h2 id="dialog-title">Sources & informations</h2><h3>Parcours et projets</h3><p>Les diplômes, domaines de compétence et descriptions de projets reposent sur les informations fournies par Robin Mom. Les résultats scientifiques sont reliés à leurs publications ; les scores des modèles seront ajoutés à partir d’expériences documentées.</p><ul><li>${external(sourceLinks.paper,'Publication scientifique sur les aquaporines')}</li><li>${external(sourceLinks.repo,'Dépôt Supply-Chain-MLOps')}</li></ul><h3>Références méthodologiques</h3><ul><li>${external(sourceLinks.sbert,'SentenceTransformers · Similarité')}</li><li>${external(sourceLinks.clusters,'scikit-learn · Clustering')}</li><li>${external(sourceLinks.mlflow,'MLflow · Suivi des expériences')}</li><li>${external(sourceLinks.dvc,'DVC · Pipelines')}</li><li>${external(sourceLinks.dream,'Google Research · DeepDream')}</li></ul><h3>Visuels et réflexions</h3><p>Les visuels sont des illustrations créées pour ce site et ne représentent pas des résultats expérimentaux. Les trois réflexions sont des ébauches éditoriales, signalées comme telles.</p><h3>Inspiration</h3><p>Direction visuelle inspirée de ${external('https://meganefarelle.me/','meganefarelle.me')}, avec une composition et des contenus propres à ce portfolio.</p><h3>Fonctionnement</h3><p>Ce portfolio est un site statique. Son code n’ajoute aucun outil de mesure d’audience ni formulaire de collecte. Les liens externes ouvrent les sites concernés dans un nouvel onglet.</p>`));

// Reproducible, explicitly synthetic illustrations. No project metrics are invented.
const svgNS = 'http://www.w3.org/2000/svg';
function svgEl(tag, attrs, root) {const el=document.createElementNS(svgNS,tag);for(const [k,v] of Object.entries(attrs))el.setAttribute(k,v);root.appendChild(el);return el;}
function randomGenerator(seed) {return () => {seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};}
const random = randomGenerator(42), cluster = $('#cluster-svg');
for(let x=40;x<=600;x+=45)svgEl('path',{d:`M${x} 30V235`,stroke:'#93b3ac',opacity:'.07'},cluster);
for(let y=35;y<=230;y+=40)svgEl('path',{d:`M30 ${y}H600`,stroke:'#93b3ac',opacity:'.07'},cluster);
const groups=[{x:157,y:89,c:'#a7e4c0'},{x:326,y:155,c:'#77bfc9'},{x:465,y:80,c:'#b39bdf'},{x:469,y:200,c:'#d4b987'}];
groups.forEach((g,k)=>{
  svgEl('ellipse',{cx:g.x,cy:g.y,rx:68,ry:40,fill:g.c,'fill-opacity':'.025',stroke:g.c,'stroke-opacity':'.18','stroke-dasharray':'3 5',transform:`rotate(-17 ${g.x} ${g.y})`},cluster);
  for(let i=0;i<50;i++){const angle=random()*Math.PI*2,r=Math.sqrt(random());svgEl('circle',{cx:g.x+Math.cos(angle)*r*58,cy:g.y+Math.sin(angle)*r*32,r:1.2+random()*1.7,fill:g.c,opacity:.35+random()*.55},cluster);}
  svgEl('circle',{cx:g.x,cy:g.y,r:5,fill:g.c,stroke:'#0d2022','stroke-width':2},cluster);
});
const molecule=$('#molecule-svg');
for(let row=0;row<2;row++)for(let i=0;i<36;i++){const x=20+i*13,y=76+row*120+Math.sin(i*.65)*6;svgEl('circle',{cx:x,cy:y,r:3.4,fill:'#88bfd0',opacity:'.3'},molecule);svgEl('path',{d:`M${x-1} ${y+(row?-5:5)}l-3 ${row?-13:13}m6 ${row?13:-13}l3 ${row?-13:13}`,stroke:'#77b1c5',opacity:'.18'},molecule);}
for(let strand=0;strand<6;strand++){
 let path='';for(let i=0;i<100;i++){const y=40+i*1.8,x=185+strand*20+Math.sin(i*.22+strand*.8)*18;path+=(i?'L':'M')+x.toFixed(2)+' '+y.toFixed(2)+' ';}
 svgEl('path',{d:path,fill:'none',stroke:['#72b9c5','#b1d7df','#81b5c8'][strand%3],'stroke-width':3.5,opacity:.38+strand*.05},molecule);
}
for(let i=0;i<12;i++)svgEl('circle',{cx:235+Math.sin(i*2.1)*9,cy:40+i*17,r:2.1,fill:'#c1f0e5',opacity:'.8'},molecule);
svgEl('circle',{cx:326,cy:108,r:9,fill:'#d7c58a',opacity:'.85'},molecule);
const zn=svgEl('text',{x:342,y:112,fill:'#dfd3ae','font-size':10},molecule);zn.textContent='Zn²⁺';
const dream=$('#dream-svg');
for(let j=0;j<8;j++){let path='';for(let i=0;i<=170;i++){const t=i/170*Math.PI*2,r=42+j*8+Math.sin(t*7+j*.6)*7,x=240+Math.cos(t)*r*1.25,y=138+Math.sin(t)*r*.85;path+=(i?'L':'M')+x.toFixed(2)+' '+y.toFixed(2)+' ';}svgEl('path',{d:path+'Z',fill:'none',stroke:['#c4b5e5','#9f8fbf','#8acbc9','#c99baf'][j%4],'stroke-width':1.1,opacity:.26+j*.04},dream);}
for(let i=0;i<60;i++){const a=i*.61,r=12+Math.sqrt(i)*12;svgEl('circle',{cx:240+Math.cos(a)*r,cy:138+Math.sin(a)*r*.75,r:1.7,fill:i%3?'#b8a5dd':'#8acbc9',opacity:'.7'},dream);}

// Lightweight interactive 3D-style drawing: conceptual, not a molecular model.
const canvas=$('#connection-canvas'),ctx=canvas.getContext('2d');
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
let paused=reducedMotion.matches,angle=0,mode='bio',frame=null,visible=true;
const pauseButton=$('#motion-toggle');
function syncPause(){pauseButton.innerHTML=paused?'<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="m8 5 11 7-11 7Z" fill="currentColor"/></svg>':'<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M8 5v14M16 5v14" stroke="currentColor" stroke-width="2"/></svg>';pauseButton.setAttribute('aria-pressed',String(paused));pauseButton.setAttribute('aria-label',paused?'Lancer l’animation':'Mettre l’animation en pause');}
syncPause();
const canvasPoints=Array.from({length:130},(_,i)=>{const t=i/129;return {t,a:t*Math.PI*5.4,r:77+Math.sin(t*Math.PI)*40};});
function draw(){
 const rect=canvas.getBoundingClientRect(),w=rect.width,h=rect.height;
 if(!w||!h)return;
 const dpr=Math.min(window.devicePixelRatio||1,2);
 if(canvas.width!==Math.round(w*dpr)||canvas.height!==Math.round(h*dpr)){canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);}
 ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);
 const scale=Math.min(w/470,h/500),cx=w*.52,cy=h*.49;
 ctx.save();ctx.translate(cx,cy);ctx.scale(scale,scale);ctx.rotate(-.34);
 const color=mode==='bio'?'174,232,194':mode==='data'?'111,202,213':'186,167,230';
 const project=(a,y,r)=>{const z=Math.sin(a),x=Math.cos(a)*r;return {x:x*(1+z*.12),y:y+z*32,z};};
 // Orbital reference grid.
 for(let j=0;j<4;j++){ctx.beginPath();ctx.ellipse(0,0,138+j*11,157-j*11,0,0,Math.PI*2);ctx.strokeStyle=`rgba(${color},.055)`;ctx.lineWidth=.7;ctx.stroke();}
 const strands=[[],[]];
 canvasPoints.forEach(({t,a,r},i)=>{
   for(let s=0;s<2;s++){
     let point=project(a+angle+s*Math.PI,(t-.5)*330,r);
     if(mode==='data'){point.x+=Math.sin(t*37+s*3)*23;point.y+=Math.cos(t*29)*16;}
     if(mode==='ai'){const n=Math.floor(t*6);point.x=(s?1:-1)*(45+n%3*27)+Math.sin(a+angle)*24;point.y=(n-2.5)*55+Math.cos(a)*17;}
     strands[s].push(point);
     if(i>0){const prev=strands[s][i-1];ctx.beginPath();ctx.moveTo(prev.x,prev.y);ctx.lineTo(point.x,point.y);ctx.strokeStyle=`rgba(${color},${.22+(point.z+1)*.12})`;ctx.lineWidth=.8;ctx.stroke();}
     if(i%2===0){ctx.beginPath();ctx.arc(point.x,point.y,1.6+(point.z+1)*.8,0,Math.PI*2);ctx.fillStyle=`rgba(${color},${.32+(point.z+1)*.29})`;ctx.fill();}
   }
   if(i%6===0){const p=strands[0][i],q=strands[1][i];ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle=`rgba(${color},.14)`;ctx.lineWidth=.8;ctx.stroke();for(let k=1;k<5;k++){ctx.beginPath();ctx.arc(p.x+(q.x-p.x)*k/5,p.y+(q.y-p.y)*k/5,1.5,0,Math.PI*2);ctx.fillStyle=`rgba(${color},.3)`;ctx.fill();}}
 });
 // Sparse fixed particles frame the main structure.
 for(let i=0;i<45;i++){const a=i*2.399,r=155+(i%7)*7;ctx.beginPath();ctx.arc(Math.cos(a)*r,Math.sin(a)*r*.94, i%5===0?1.7:.8,0,Math.PI*2);ctx.fillStyle=`rgba(${color},${i%4===0?.5:.17})`;ctx.fill();}
 ctx.restore();
}
function loop(){frame=null;if(paused||!visible||document.hidden)return;angle+=.003;draw();frame=requestAnimationFrame(loop);}
function resume(){if(frame===null&&!paused&&visible&&!document.hidden)frame=requestAnimationFrame(loop);}
pauseButton.addEventListener('click',()=>{paused=!paused;syncPause();if(paused&&frame!==null){cancelAnimationFrame(frame);frame=null;}else resume();draw();});
$$('[data-mode]').forEach(b=>b.addEventListener('click',()=>{mode=b.dataset.mode;$$('[data-mode]').forEach(a=>a.setAttribute('aria-pressed',String(a===b)));$('#art-caption').textContent={bio:'De la structure à la fonction.',data:'Du vivant à sa représentation.',ai:'Des données aux modèles.'}[mode];draw();}));
new ResizeObserver(draw).observe(canvas);
new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;resume();}).observe(canvas);
document.addEventListener('visibilitychange',resume);
reducedMotion.addEventListener('change',e=>{paused=e.matches;syncPause();draw();resume();});
draw();resume();
