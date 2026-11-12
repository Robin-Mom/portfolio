'use strict';
// The user supplied these selections in original chain-A PDB numbering.
window.setupProteinAnnotations = async function(viewer, backbone, pause) {
  const region = document.getElementById('annotations');
  const response = await fetch('assets/structures/1z98-annotations.json');
  if (!response.ok) throw new Error('Annotation data unavailable');
  const {annotations} = await response.json();
  const colors = ['#f2c879','#78d2ed','#c3a1ed','#f09bb2','#e8a56f'];
  const contains = (a, n) => a.residues.includes(n) || a.ranges.some(([lo,hi]) => n >= lo && n <= hi);
  const numbers = a => [...new Set([...a.residues,...a.ranges.flatMap(([lo,hi]) => Array.from({length:hi-lo+1},(_,i)=>lo+i))])];
  const heading = document.createElement('h2'); heading.textContent = 'Explore the regions';
  const help = document.createElement('p'); help.textContent = 'Choose a theme, or click a highlighted residue. Rotation pauses while you explore.';
  const buttons = document.createElement('div');buttons.className='topic-buttons';buttons.setAttribute('role','group');buttons.setAttribute('aria-label','Regulatory themes');
  const card = document.createElement('article');card.className='annotation-card';card.setAttribute('aria-live','polite');
  let selected = -1;
  function select(index, residue) {
    selected=index;pause();
    const a=annotations[index], color=colors[index];
    [...buttons.children].forEach((b,i)=>{b.setAttribute('aria-pressed',String(i===index));});
    const chosen=numbers(a);
    if(backbone) viewer.setHighlight(chosen,color);
    else {
      viewer.setStyle({}, {cartoon:{color:'#75988c',thickness:0.4}});
      viewer.setStyle({chain:'A',resi:chosen},{cartoon:{color,thickness:0.5},stick:{color,radius:0.13}});
      viewer.render();
    }
    card.replaceChildren();card.style.borderColor=color;
    const title=document.createElement('h3');title.textContent=a.label;card.append(title);
    const text=document.createElement('p');text.textContent=a.text;card.append(text);
    const location=document.createElement('p');location.className='region-location';
    location.textContent='Chain A · '+[...a.ranges.map(([l,h])=>`${l}–${h}`),...a.residues].join(', ');card.append(location);
    if(residue !== undefined){
      const shared=annotations.filter(x=>contains(x,residue));
      const note=document.createElement('p');note.textContent=`Residue ${residue}`+(shared.length>1?' belongs to several themes. Use the theme buttons to explore each one.':'.');card.append(note);
    }
    const links=document.createElement('nav');links.setAttribute('aria-label','Articles for '+a.label);
    a.links.forEach((href,i)=>{
      const link=document.createElement('a');link.href=href;link.target='_blank';link.rel='noopener noreferrer';
      const doi=new URL(href);link.textContent=`Article ${i+1} · ${doi.hostname.replace(/^www\./,'')} ↗`;links.append(link);
    });card.append(links);
  }
  function pick(residue){
    const options=annotations.map((a,i)=>contains(a,residue)?i:-1).filter(i=>i>=0);
    if(options.length)select(options.includes(selected)?selected:options[0],residue);
  }
  annotations.forEach((a,i)=>{
    const button=document.createElement('button');button.type='button';button.textContent=a.label;button.setAttribute('aria-pressed','false');button.addEventListener('click',()=>select(i));buttons.append(button);
  });
  if(backbone)viewer.onResidueClick(pick);
  else {
    const all=[...new Set(annotations.flatMap(numbers))];
    viewer.setClickable({chain:'A',resi:all},true,atom=>pick(atom.resi));
  }
  const legend=document.createElement('p');legend.className='structural-legend';
  legend.textContent='Spinach SoPIP2;1 (PDB 1Z98, chain A) is used as an illustrative structural reference to indicate the general location of regulatory regions across aquaporins. Linked studies may concern other aquaporin isoforms or organisms.';
  region.replaceChildren(heading,help,buttons,card,legend);
  // Leave rotation active at first load; a user's choice pauses it.
  card.textContent='Select a theme to highlight its residues and read the associated articles.';
  if(!backbone)viewer.render();
};
