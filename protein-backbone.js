'use strict';
// Canvas fallback: project the original C-alpha coordinates, never a schematic helix.
window.createBackboneViewer = function(container, pdb) {
  const points = pdb.split('\n').filter(line => line.startsWith('ATOM  ') && line.slice(12,16).trim() === 'CA' && line[21] === 'A')
    .map(line => ({x:Number(line.slice(30,38)),y:Number(line.slice(38,46)),z:Number(line.slice(46,54)),resi:Number(line.slice(22,26))}));
  if (!points.length) throw new Error('No chain A backbone coordinates');
  const center = points.reduce((s,p)=>({x:s.x+p.x,y:s.y+p.y,z:s.z+p.z}),{x:0,y:0,z:0});
  for(const p of points) for(const k of ['x','y','z']) p[k]-=center[k]/points.length;
  const radius=Math.max(...points.map(p=>Math.hypot(p.x,p.y,p.z)));
  container.replaceChildren();
  const canvas=document.createElement('canvas');
  canvas.style.cssText='display:block;width:100%;height:100%;touch-action:none';
  container.appendChild(canvas);
  const ctx=canvas.getContext('2d');
  if(!ctx) throw new Error('Canvas unavailable');
  let yaw=0,pitch=0,scale=1,frame=null,speed=0,lastTime=0,drag=null;
  function render(){
    const width=container.clientWidth,height=container.clientHeight;
    if(!width||!height)return;
    const dpr=Math.min(devicePixelRatio||1,2);
    if(canvas.width!==Math.round(width*dpr)||canvas.height!==Math.round(height*dpr)){
      canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);
    }
    ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,width,height);
    const fit=Math.min(width,height)*.42/radius*scale;
    const projected=points.map(p=>{
      const x=p.x*Math.cos(yaw)+p.z*Math.sin(yaw),z=-p.x*Math.sin(yaw)+p.z*Math.cos(yaw);
      const y=p.y*Math.cos(pitch)-z*Math.sin(pitch),depth=p.y*Math.sin(pitch)+z*Math.cos(pitch);
      return {x:width/2+x*fit,y:height/2-y*fit,z:depth,resi:p.resi};
    });
    const segments=[];
    for(let i=1;i<projected.length;i++){
      const a=projected[i-1],b=projected[i];
      if(b.resi!==a.resi+1||Math.hypot(points[i].x-points[i-1].x,points[i].y-points[i-1].y,points[i].z-points[i-1].z)>5)continue;
      segments.push({a,b,z:(a.z+b.z)/2});
    }
    segments.sort((a,b)=>a.z-b.z);
    ctx.lineCap='round';ctx.lineJoin='round';
    for(const {a,b,z} of segments){
      const light=Math.max(0,Math.min(1,(z/radius+1)/2));
      ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);
      ctx.lineWidth=3+light*2;ctx.strokeStyle=`rgb(${75+light*104},${126+light*112},${112+light*91})`;ctx.stroke();
    }
  }
  function loop(time){
    frame=null;
    if(!speed)return;
    if(lastTime)yaw+=Math.min(time-lastTime,80)*speed*.00042;
    lastTime=time;render();frame=requestAnimationFrame(loop);
  }
  canvas.addEventListener('pointerdown',event=>{drag={x:event.clientX,y:event.clientY};canvas.setPointerCapture(event.pointerId);});
  canvas.addEventListener('pointermove',event=>{if(!drag)return;yaw+=(event.clientX-drag.x)*.012;pitch+=(event.clientY-drag.y)*.012;drag={x:event.clientX,y:event.clientY};render();});
  canvas.addEventListener('pointerup',()=>{drag=null;});
  canvas.addEventListener('pointercancel',()=>{drag=null;});
  return {
    render,resize:render,
    getView:()=>[yaw,pitch,scale],
    setView:view=>{[yaw,pitch,scale]=view;},
    rotate:(angle,axis)=>{if(axis==='x')pitch+=angle*Math.PI/180;else yaw+=angle*Math.PI/180;},
    zoom:factor=>{scale=Math.max(.35,Math.min(4,scale*factor));},
    spin:(axis,multiplier=1)=>{speed=axis?multiplier:0;if(!speed&&frame!==null){cancelAnimationFrame(frame);frame=null;}if(speed&&frame===null){lastTime=0;frame=requestAnimationFrame(loop);}}
  };
};
