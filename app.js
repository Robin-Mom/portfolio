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
    intro: 'Group customer reviews by meaning and build a workflow for comparing, reproducing and using models.',
    tags: ['SentenceTransformers', 'KMeans', 'DVC', 'MLflow', 'FastAPI', 'Docker'],
    panels: [
      `<h3>Uncover themes in customer reviews</h3><p>The project focuses on French-language reviews of Oscaro collected from Trustpilot. The goal is to automatically group semantically similar comments without predefined training categories.</p><div class="process"><div>01 · Represent<small>Encode comments as semantic vectors.</small></div><div>02 · Group<small>Compare clustering methods.</small></div><div>03 · Apply<small>Assign new reviews to a cluster.</small></div></div><p>The second challenge is engineering: moving from a notebook to separate training, evaluation and prediction scripts, with experiment tracking.</p>`,
      `<h3>Compare before choosing</h3><ul><li>Normalized SentenceTransformers embeddings; exploration of KMeans, Spherical KMeans, HDBSCAN and UMAP + HDBSCAN.</li><li>Evaluation using silhouette, Davies–Bouldin, coverage and partition stability through the Adjusted Rand Index.</li><li>Extraction of characteristic words with c-TF-IDF to help interpret clusters.</li><li>A DVC pipeline and MLflow tracking of parameters, metrics and artifacts, with work on DagsHub integration.</li></ul><p>The project also includes work on a FastAPI API, Docker, Airflow and monitoring with Prometheus and Grafana.</p>`,
      `<h3>What is documented</h3><p>Separate scripts support training, evaluation and assignment of new reviews to KMeans clusters. Several clustering approaches have been explored, and the MLOps pipeline continues to evolve.</p><div class="info-box"><p><strong>Status: in development.</strong> No performance score or business impact is reported in this overview. Numerical results will be added from verified runs.</p></div><h3>Limitations to examine</h3><p>A geometric score does not guarantee that a theme is useful. Cluster interpretation, stability and behavior on new reviews need to be evaluated together. The card visualization uses synthetic data.</p>`
    ],
    sources: `${external(sourceLinks.repo, 'Project repository')}<p>Based on the project information and script documentation provided by Robin Mom. Numerical results are still to be added.</p>`
  },
  aquaporins: {
    kicker: '02 / RESEARCH · BIOPHYSICS', title: 'Aquaporins & regulation',
    intro: 'Research into the molecular mechanisms that influence water permeability in human aquaporins.',
    tags: ['Molecular dynamics', 'Structural analysis', 'Bioinformatics'],
    tabLabels: ['Published regulations', 'Methods'],
    panels: [
      `<h3>A question of regulation</h3><p>How do zinc ions modulate water channels? Mom and colleagues (2024) examine four human aquaporins.</p><h3>Two types of modulation</h3><p>Under the simulated conditions, zinc increases the permeability of AQP0 and AQP5 and decreases it for AQP2 and AQP4. The study proposes mechanisms involving structural stability and electrostatic interactions.</p><div class="info-box"><p><em>In silico</em> results, without clinical validation. Abstract illustration.</p></div><p>Published in 2024 in the International Journal of Molecular Sciences, 25(4), 2267.</p>`,
      `<h3>Explore at the atomic scale</h3><p>Molecular dynamics simulations and analysis of ion–protein interactions.</p><p>Declared contributions by Robin Mom: conceptualization, methodology, formal analysis and preparation of the original draft.</p>`
    ],
    sources: `${external(sourceLinks.paper, 'Mom et al., 2024 · full text')} · ${external('https://www.mdpi.com/1422-0067/25/4/2267', 'Publisher')}<p>DOI: 10.3390/ijms25042267. Scientific information and author contributions are drawn from this article.</p>`
  },
  deepdream: {
    kicker: '03 / EXPLORATION · DEEP LEARNING', title: 'DeepDream',
    intro: 'Explore how a neural network works through the patterns it brings out in an image.',
    tags: ['Caffe', 'GoogLeNet', 'Docker', 'Visualization'],
    panels: [
      `<h3>Observe what a network amplifies</h3><p>DeepDream transforms an image by reinforcing selected activations in a pretrained network. The approach makes patterns associated with internal network representations visible.</p><p>This exploration builds on the original Google project as a way to understand convolutional neural networks.</p>`,
      `<h3>Transform the image</h3><p>The gradient of an activation objective is used to modify the pixels. Network weights remain fixed. The process is repeated, potentially at multiple scales.</p><p>The project environment described by the author combines Caffe, GoogLeNet and Docker.</p>`,
      `<h3>An exploratory project</h3><p>This work is presented as a learning and visualization exercise. No quantitative comparison or gallery of verified model outputs has yet been included in this first version.</p><div class="info-box"><p>The card visual is a procedural composition created for this portfolio; it is not the output of a DeepDream run.</p></div>`
    ],
    sources: `${external(sourceLinks.dream, 'Google Research · Inceptionism, 2015')}<p>Methodological principle: Google Research publication. Project environment: information provided by Robin Mom.</p>`
  }
};

// Navigation and project filters remain small, independent UI components.
const menu = $('.menu-toggle');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  $('#navigation').classList.toggle('open', open);
});
const closeMenu = () => { menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open navigation'); $('#navigation').classList.remove('open'); };
$$('#navigation a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => {if(e.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true'){closeMenu();menu.focus();}});
$$('[data-filter]').forEach(button => button.addEventListener('click', () => {
  $$('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  let count = 0;
  $$('.project-card').forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; if (!card.hidden) count++; });
  $('#project-count').textContent = `${count} project${count === 1 ? '' : 's'} to explore`;
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
  openDialog(p.kicker, `<h2 id="dialog-title">${p.title}</h2><p class="lead">${p.intro}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><div class="dialog-tabs" role="tablist" aria-label="Explore the project">${(p.tabLabels || ['Objective','Methods','Results']).map((label,i)=>`<button role="tab" id="tab-${i}" aria-controls="panel-${i}" aria-selected="${i===0}" tabindex="${i===0?0:-1}">${label}</button>`).join('')}</div>${p.panels.map((html,i)=>`<section class="tab-panel" id="panel-${i}" role="tabpanel" tabindex="0" aria-labelledby="tab-${i}" ${i?'hidden':''}>${html}</section>`).join('')}<div class="detail-source"><p>SOURCES & DOCUMENTATION</p>${p.sources}</div>`);
  const tabs = $$('.dialog-tabs button', dialog);
  tabs.forEach((tab,i) => {
    tab.addEventListener('click', () => activateTab(i));
    tab.addEventListener('keydown', e => {let n=i;if(e.key==='ArrowRight')n=(i+1)%tabs.length;else if(e.key==='ArrowLeft')n=(i+tabs.length-1)%tabs.length;else if(e.key==='Home')n=0;else if(e.key==='End')n=tabs.length-1;else return;e.preventDefault();activateTab(n);tabs[n].focus();});
  });
}));
$('#sources-open').addEventListener('click', () => openDialog('ABOUT THIS PORTFOLIO', `<h2 id="dialog-title">Sources & information</h2><h3>Background and projects</h3><p>Degrees, areas of expertise and project descriptions are based on information provided by Robin Mom. Scientific findings are linked to their publications; model scores will be added from documented experiments.</p><ul><li>${external(sourceLinks.paper, 'Scientific publication on aquaporins')}</li><li>${external(sourceLinks.repo, 'Supply-Chain-MLOps repository')}</li></ul><h3>Methodological references</h3><ul><li>${external(sourceLinks.sbert, 'SentenceTransformers · Similarity')}</li><li>${external(sourceLinks.clusters, 'scikit-learn · Clustering')}</li><li>${external(sourceLinks.mlflow, 'MLflow · Experiment tracking')}</li><li>${external(sourceLinks.dvc, 'DVC · Pipelines')}</li><li>${external(sourceLinks.dream, 'Google Research · DeepDream')}</li></ul><h3>Visuals and Deep Dives</h3><p>The visuals are illustrations created for this website and do not represent experimental results. The twelve Deep Dives belong to Scientific Articles - Research Reflections, a single series supplied by Robin Mom and organized into four themes. Their original wording and publication links are preserved on dedicated reading pages. Reading times are estimates based on 220 words per minute.</p><h3>Inspiration</h3><p>The visual direction is inspired by ${external('https://meganefarelle.me/', 'meganefarelle.me')}, with a composition and content created for this portfolio.</p><h3>How the site works</h3><p>This portfolio is a static website. Its code does not add an analytics tool or a data collection form. External links open the relevant websites in a new tab. Deep Dives open as pages within this portfolio and can also be read without JavaScript.</p>`));

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
function syncPause(){pauseButton.innerHTML=paused?'<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="m8 5 11 7-11 7Z" fill="currentColor"/></svg>':'<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M8 5v14M16 5v14" stroke="currentColor" stroke-width="2"/></svg>';pauseButton.setAttribute('aria-pressed',String(paused));pauseButton.setAttribute('aria-label',paused?'Play animation':'Pause animation');}
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
$$('[data-mode]').forEach(b=>b.addEventListener('click',()=>{mode=b.dataset.mode;$$('[data-mode]').forEach(a=>a.setAttribute('aria-pressed',String(a===b)));$('#art-caption').textContent={bio:'From structure to function.',data:'From living systems to representations.',ai:'From data to models.'}[mode];draw();}));
new ResizeObserver(draw).observe(canvas);
new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;resume();}).observe(canvas);
document.addEventListener('visibilitychange',resume);
reducedMotion.addEventListener('change',e=>{paused=e.matches;syncPause();draw();resume();});
draw();resume();


