'use strict';
// API: https://3dmol.org/doc/GLViewer.html. Version pinned for repeatable rendering.
const libraryURL = 'https://cdn.jsdelivr.net/npm/3dmol@2.5.5/build/3Dmol-min.js';
const modelURL = 'assets/structures/1z98-chain-a.pdb';
const container = document.getElementById('molecule');
const status = document.getElementById('status');
const motion = document.getElementById('motion');
const preference = matchMedia('(prefers-reduced-motion: reduce)');
let viewer, initialView, active = true, paused = preference.matches;
function syncMotion() {
  const running = !paused && active && !document.hidden;
  if (viewer) viewer.spin(running ? 'vy' : false, 0.25);
  motion.textContent = paused ? 'Play rotation' : 'Pause rotation';
  motion.setAttribute('aria-pressed', String(paused));
}
function pauseForInteraction() { paused = true; syncMotion(); }
function loadLibrary() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    const timeout = setTimeout(() => reject(new Error('3D library timed out')), 20000);
    script.src = libraryURL;
    script.onload = () => { clearTimeout(timeout); window.$3Dmol ? resolve() : reject(new Error('3D library unavailable')); };
    script.onerror = () => { clearTimeout(timeout); reject(new Error('3D library could not load')); };
    document.head.appendChild(script);
  });
}
window.addEventListener('message', event => {
  if (event.origin !== location.origin || event.source !== parent || event.data?.type !== 'protein-viewer-active') return;
  active = event.data.active === true;
  if (active && viewer) requestAnimationFrame(() => { viewer.resize(); viewer.render(); });
  syncMotion();
});
document.addEventListener('visibilitychange', syncMotion);
preference.addEventListener('change', event => { paused = event.matches; syncMotion(); });
container.addEventListener('pointerdown', pauseForInteraction, {passive:true});
motion.addEventListener('click', () => { paused = !paused; syncMotion(); });
document.getElementById('reset').addEventListener('click', () => { viewer.setView(initialView.slice()); viewer.render(); });
for (const [id, angle] of [['left', -15], ['right', 15]]) {
  document.getElementById(id).addEventListener('click', () => { pauseForInteraction(); viewer.rotate(angle, 'y'); viewer.render(); });
}
for (const [id, factor] of [['zoom-in', 1.15], ['zoom-out', 1 / 1.15]]) {
  document.getElementById(id).addEventListener('click', () => { viewer.zoom(factor); viewer.render(); });
}
async function init() {
  try {
    const [, data] = await Promise.all([loadLibrary().catch(() => null), fetch(modelURL).then(response => {
      if (!response.ok) throw new Error('Structure unavailable');
      return response.text();
    })]);
    let backbone = false;
    try {
      if (!window.$3Dmol) throw new Error('WebGL library unavailable');
      viewer = $3Dmol.createViewer(container, {backgroundColor:'#101a22', antialias:true});
      const model = viewer.addModel(data, 'pdb', {doAssembly:false});
      const atoms = model.selectedAtoms({});
      if (!atoms.length || atoms.some(atom => atom.chain !== 'A')) throw new Error('Unexpected protein chain');
      viewer.setStyle({}, {cartoon:{color:'#b3eecb',thickness:0.4}});
      viewer.zoomTo();
      viewer.zoom(0.9);
    } catch (error) {
      viewer = createBackboneViewer(container, data);
      backbone = true;
      container.setAttribute('aria-label','C-alpha backbone of aquaporin SoPIP2;1 chain A');
    }
    viewer.render();
    initialView = viewer.getView().slice();
    status.textContent = backbone ? 'Cα backbone view · WebGL unavailable' : '';
    status.classList.toggle('fallback', backbone);
    document.querySelectorAll('button').forEach(button => { button.disabled = false; });
    new ResizeObserver(() => { if (active) { viewer.resize(); viewer.render(); } }).observe(container);
    syncMotion();
  } catch (error) {
    if (viewer) viewer.spin(false);
    status.textContent = 'The 3D view is unavailable. You can still open the PDB entry or download chain A below.';
    console.warn('Protein viewer:', error.message);
  }
}
init();

// Keep all wrapped controls and source links visible in the parent project panel.
new ResizeObserver(() => {
  if (parent !== window) parent.postMessage({type:'protein-viewer-height',height:document.body.getBoundingClientRect().height}, location.origin);
}).observe(document.body);
