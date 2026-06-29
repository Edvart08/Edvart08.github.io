/**
 * crystal-scanner.js — Gem Glass v6
 * Features: hover spin-up + panel glow, click overlay, live chart data
 */

import * as THREE         from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass }     from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass }from 'three/addons/postprocessing/UnrealBloomPass.js';

function init() {
  const gsap   = window.gsap;
  const wrap   = document.querySelector('.scanner-wrap');
  if (!wrap) return;
  document.getElementById('nodeCanvas')?.remove();

  const SCENE_H  = 500;
  const CANVAS_H = SCENE_H;
  let   W        = wrap.clientWidth;
  const lerp     = THREE.MathUtils.lerp;
  const hintBar  = wrap.querySelector('.scanner-hint-bar');

  /* ── Renderer ── */
  const renderer = new THREE.WebGLRenderer({ antialias:true, alpha:true, powerPreference:'high-performance' });
  renderer.setSize(W, CANVAS_H);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.toneMapping         = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.outputColorSpace    = THREE.SRGBColorSpace;
  renderer.domElement.style.cssText =
    `position:absolute;top:0;left:0;width:100%;height:${CANVAS_H}px;cursor:crosshair;z-index:2;`;
  wrap.insertBefore(renderer.domElement, hintBar);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(48, W/CANVAS_H, 0.1, 100);
  camera.position.set(0, 0, 8.0);

  /* ── Lighting ── */
  scene.add(new THREE.AmbientLight(0x0a1a33, 5));
  const lL  = new THREE.PointLight(0x00ccff, 14, 32); lL.position.set(-9,6,7);
  const lLf = new THREE.PointLight(0x0088bb,  6, 20); lLf.position.set(-5,-4,6);
  const lR  = new THREE.PointLight(0x9933ff, 14, 32); lR.position.set(9,6,7);
  const lRf = new THREE.PointLight(0x6611bb,  6, 20); lRf.position.set(5,-4,6);
  const lT  = new THREE.DirectionalLight(0x334466, 2.5); lT.position.set(0,14,9);
  scene.add(lL, lLf, lR, lRf, lT);

  const getGemX = () => {
    const halfH = Math.tan((48/2)*Math.PI/180)*8.0;
    return halfH*(W/CANVAS_H)*0.50;
  };

  /* ═══════════════ LEFT GEM ═══════════════ */
  const leftGroup = new THREE.Group();
  scene.add(leftGroup);

  const outerGeo = new THREE.IcosahedronGeometry(1.55, 0);
  const outerMat = new THREE.MeshPhysicalMaterial({
    color:0x00ddff, emissive:new THREE.Color(0x002233), emissiveIntensity:0.35,
    roughness:0.04, metalness:0.0, transmission:0.82, thickness:1.4, ior:1.55,
    transparent:true, opacity:0.88, side:THREE.DoubleSide, flatShading:true, depthWrite:false,
  });
  leftGroup.add(new THREE.Mesh(outerGeo, outerMat));
  leftGroup.add(new THREE.LineSegments(new THREE.EdgesGeometry(outerGeo),
    new THREE.LineBasicMaterial({color:0x00ffff, transparent:true, opacity:1.0})));

  const midGeoL = new THREE.OctahedronGeometry(1.0, 0);
  const midMatL = new THREE.MeshPhysicalMaterial({
    color:0x00eedd, emissive:new THREE.Color(0x003344), emissiveIntensity:0.40,
    roughness:0.04, metalness:0.0, transmission:0.75, thickness:0.8, ior:1.55,
    transparent:true, opacity:0.80, side:THREE.DoubleSide, flatShading:true, depthWrite:false,
  });
  const midMeshL = new THREE.Mesh(midGeoL, midMatL);
  leftGroup.add(midMeshL);
  leftGroup.add(new THREE.LineSegments(new THREE.EdgesGeometry(midGeoL),
    new THREE.LineBasicMaterial({color:0x88ffee, transparent:true, opacity:0.95})));

  const coreGeoL  = new THREE.TetrahedronGeometry(0.38, 0);
  const coreMatL  = new THREE.MeshBasicMaterial({color:0x55dddd});
  const coreMeshL = new THREE.Mesh(coreGeoL, coreMatL);
  leftGroup.add(coreMeshL);
  leftGroup.add(new THREE.LineSegments(new THREE.EdgesGeometry(coreGeoL),
    new THREE.LineBasicMaterial({color:0xaaffff, transparent:true, opacity:0.90})));

  const gemLightL = new THREE.PointLight(0x00eeff, 3.0, 5);
  leftGroup.add(gemLightL);

  /* ═══════════════ RIGHT GEM ═══════════════ */
  const rightGroup = new THREE.Group();
  scene.add(rightGroup);

  const rOutGeo = new THREE.IcosahedronGeometry(1.75, 1);
  const rOutMat = new THREE.MeshPhysicalMaterial({
    color:0x5533dd, emissive:new THREE.Color(0x0d0025), emissiveIntensity:0.30,
    roughness:0.04, metalness:0.0, transmission:0.80, thickness:1.4, ior:1.55,
    transparent:true, opacity:0.85, side:THREE.DoubleSide, flatShading:true, depthWrite:false,
  });
  rightGroup.add(new THREE.Mesh(rOutGeo, rOutMat));
  rightGroup.add(new THREE.LineSegments(new THREE.EdgesGeometry(rOutGeo),
    new THREE.LineBasicMaterial({color:0xbb88ff, transparent:true, opacity:1.0})));

  const rMidGeo = new THREE.IcosahedronGeometry(1.15, 0);
  const rMidMat = new THREE.MeshPhysicalMaterial({
    color:0x8855ff, emissive:new THREE.Color(0x180040), emissiveIntensity:0.45,
    roughness:0.04, metalness:0.0, transmission:0.72, thickness:0.9, ior:1.55,
    transparent:true, opacity:0.80, side:THREE.DoubleSide, flatShading:true, depthWrite:false,
  });
  const rMidMesh = new THREE.Mesh(rMidGeo, rMidMat);
  rightGroup.add(rMidMesh);
  rightGroup.add(new THREE.LineSegments(new THREE.EdgesGeometry(rMidGeo),
    new THREE.LineBasicMaterial({color:0xddbbff, transparent:true, opacity:0.95})));

  const rCoreGeo  = new THREE.OctahedronGeometry(0.52, 0);
  const rCoreMat  = new THREE.MeshBasicMaterial({color:0xbbaaff});
  const rCoreMesh = new THREE.Mesh(rCoreGeo, rCoreMat);
  rightGroup.add(rCoreMesh);
  rightGroup.add(new THREE.LineSegments(new THREE.EdgesGeometry(rCoreGeo),
    new THREE.LineBasicMaterial({color:0xffffff, transparent:true, opacity:0.95})));

  const gemLightR = new THREE.PointLight(0xaa55ff, 3.0, 6);
  rightGroup.add(gemLightR);

  const ring1 = new THREE.Mesh(new THREE.TorusGeometry(2.20,0.010,3,90),
    new THREE.MeshBasicMaterial({color:0x8844ee,transparent:true,opacity:0.40}));
  ring1.rotation.x = Math.PI/2;
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.45,0.008,3,90),
    new THREE.MeshBasicMaterial({color:0x6622cc,transparent:true,opacity:0.28}));
  ring2.rotation.set(0.45,0.20,0);
  rightGroup.add(ring1, ring2);

  /* ═══════════════ PARTICLES ═══════════════ */
  const N_P = 160;
  function makeStream(dir, color, coneAngle, maxDist) {
    const tmp = Math.abs(dir.y)<0.8 ? new THREE.Vector3(0,1,0) : new THREE.Vector3(1,0,0);
    const u   = new THREE.Vector3().crossVectors(dir,tmp).normalize();
    const v   = new THREE.Vector3().crossVectors(dir,u).normalize();
    const pos = new Float32Array(N_P*3), vel=[];
    const spawn = i => {
      const t=Math.random()*maxDist, a=Math.random()*Math.PI*2, r=Math.random()*coneAngle*(t/maxDist);
      pos[i*3]  =dir.x*t+(u.x*Math.cos(a)+v.x*Math.sin(a))*r;
      pos[i*3+1]=dir.y*t+(u.y*Math.cos(a)+v.y*Math.sin(a))*r;
      pos[i*3+2]=dir.z*t+(u.z*Math.cos(a)+v.z*Math.sin(a))*r;
      const spd=0.018+Math.random()*0.012, jA=(Math.random()-0.5)*0.004, jB=(Math.random()-0.5)*0.004;
      vel[i]={x:dir.x*spd+u.x*jA+v.x*jB, y:dir.y*spd+u.y*jA+v.y*jB, z:dir.z*spd+u.z*jA+v.z*jB};
    };
    for(let i=0;i<N_P;i++) spawn(i);
    const geo=new THREE.BufferGeometry();
    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));
    const mat=new THREE.PointsMaterial({color,size:0.075,sizeAttenuation:true,transparent:true,opacity:0.88});
    return {pos,vel,geo,mat,pts:new THREE.Points(geo,mat),dir,u,v,maxDist,spawn};
  }
  const fakeDir=new THREE.Vector3(-0.45,-0.82,0.05).normalize();
  const factDir=new THREE.Vector3(0.40,0.87,0.06).normalize();
  const fakeStream=makeStream(fakeDir,0xff00bb,0.75,5.2);
  const factStream=makeStream(factDir,0x00ff77,0.65,4.8);
  leftGroup.add(fakeStream.pts, factStream.pts);

  const mkLabel = (text,col) => {
    const d=document.createElement('div');
    d.textContent=text;
    d.style.cssText=`position:absolute;font-family:'Share Tech Mono',monospace;font-size:0.80rem;letter-spacing:5px;color:${col};text-shadow:0 0 8px ${col},0 0 20px ${col},0 0 40px ${col};pointer-events:none;z-index:8;transform:translate(-50%,-50%);white-space:nowrap;font-weight:700;`;
    wrap.insertBefore(d,hintBar); return d;
  };
  const fakeLabel=mkLabel('FAKE','#ff00bb');
  const factLabel=mkLabel('FACT','#00ff77');

  /* ═══════════════════════════════════════════════════════
     LIVE CHART PANELS  — redrawn every 3 seconds
  ════════════════════════════════════════════════════════ */
  // Chart data state — animates towards target values
  let chartData = {
    green: [62,50,38,48,28,40,18,32,22,30],
    purple:[74,67,60,54,50,57,46,52,44,48],
  };
  let chartTarget = { green:[...chartData.green], purple:[...chartData.purple] };

  const mkChartTex = () => {
    const c=document.createElement('canvas'); c.width=180; c.height=90;
    const x=c.getContext('2d');
    x.fillStyle='#04071a'; x.fillRect(0,0,180,90);
    x.strokeStyle='rgba(100,70,220,0.20)'; x.lineWidth=0.5;
    for(let i=0;i<180;i+=20){x.beginPath();x.moveTo(i,0);x.lineTo(i,90);x.stroke();}
    for(let i=0;i<90;i+=18){x.beginPath();x.moveTo(0,i);x.lineTo(180,i);x.stroke();}
    // green line
    x.strokeStyle='#00ff88'; x.lineWidth=2; x.beginPath();
    chartData.green.forEach((v,i)=>i?x.lineTo(i*(180/9),v):x.moveTo(0,v)); x.stroke();
    x.fillStyle='rgba(0,255,136,0.08)'; x.lineTo(180,90); x.lineTo(0,90); x.closePath(); x.fill();
    // purple line
    x.strokeStyle='rgba(180,120,255,0.75)'; x.lineWidth=1.4; x.beginPath();
    chartData.purple.forEach((v,i)=>i?x.lineTo(i*(180/9),v):x.moveTo(0,v)); x.stroke();
    return new THREE.CanvasTexture(c);
  };

  const mkMapTex = () => {
    const c=document.createElement('canvas'); c.width=c.height=128;
    const x=c.getContext('2d');
    x.fillStyle='#04071a'; x.fillRect(0,0,128,128);
    x.strokeStyle='rgba(80,55,200,0.30)'; x.lineWidth=0.5;
    for(let i=0;i<128;i+=16){x.beginPath();x.moveTo(i,0);x.lineTo(i,128);x.stroke();x.beginPath();x.moveTo(0,i);x.lineTo(128,i);x.stroke();}
    x.strokeStyle='rgba(120,90,255,0.85)'; x.lineWidth=1.5; x.beginPath();
    [[14,32],[32,18],[60,34],[74,22],[86,54],[64,70],[42,64],[22,58],[14,32]].forEach((p,i)=>i?x.lineTo(p[0],p[1]):x.moveTo(p[0],p[1]));
    x.stroke();
    ['#00ff88','#ff4444','#ffcc00','#4488ff'].forEach(col=>{
      x.fillStyle=col;
      for(let i=0;i<3;i++){x.beginPath();x.arc(Math.random()*110+9,Math.random()*110+9,2.5,0,Math.PI*2);x.fill();}
    });
    return new THREE.CanvasTexture(c);
  };

  const planeMat = tex => new THREE.MeshBasicMaterial({map:tex,transparent:true,opacity:0.80,side:THREE.DoubleSide});
  const map1  = new THREE.Mesh(new THREE.PlaneGeometry(1.05,1.05), planeMat(mkMapTex()));
  map1.position.set(2.1,1.55,0.15); map1.rotation.y=-0.28; rightGroup.add(map1);
  const map2  = new THREE.Mesh(new THREE.PlaneGeometry(0.95,0.95), planeMat(mkMapTex()));
  map2.position.set(2.1,-1.45,0.12); map2.rotation.y=-0.24; rightGroup.add(map2);

  const chartMat = planeMat(mkChartTex());
  const chartMesh= new THREE.Mesh(new THREE.PlaneGeometry(1.55,0.78), chartMat);
  chartMesh.position.set(2.4,0.1,0.14); chartMesh.rotation.y=-0.22; rightGroup.add(chartMesh);

  // Update chart data every 3s with smooth easing
  const updateChartData = () => {
    chartTarget.green  = chartData.green.map(()  => 12 + Math.random()*66);
    chartTarget.purple = chartData.purple.map(() => 12 + Math.random()*66);
  };
  setInterval(updateChartData, 3000);

  // Smoothly interpolate chart towards target each frame, redraw texture
  let chartLerpT = 0;
  const tickChart = dt => {
    chartLerpT = Math.min(chartLerpT + dt * 1.2, 1.0);  // ~0.85s transition
    let changed = false;
    for(let i=0; i<chartData.green.length; i++){
      const ng = chartData.green[i]  + (chartTarget.green[i]  - chartData.green[i])  * chartLerpT;
      const np = chartData.purple[i] + (chartTarget.purple[i] - chartData.purple[i]) * chartLerpT;
      if(Math.abs(ng - chartData.green[i]) > 0.05 || Math.abs(np - chartData.purple[i]) > 0.05) changed=true;
      chartData.green[i]  = ng;
      chartData.purple[i] = np;
    }
    if(chartLerpT >= 1.0) chartLerpT = 0; // reset so next interval triggers
    if(changed){ chartMat.map.dispose(); chartMat.map = mkChartTex(); chartMat.map.needsUpdate=true; }
  };

  /* ═══════════════════════════════════════════════════════
     HOVER PANEL GLOW OVERLAYS  (CSS divs, animate on hover)
  ════════════════════════════════════════════════════════ */
  const panelDivs = [];
  ['left','right'].forEach((side, i) => {
    const d = document.createElement('div');
    const col = i===0 ? 'rgba(0,200,240,0.18)' : 'rgba(120,60,255,0.20)';
    const sh  = i===0 ? 'inset 0 0 80px rgba(0,180,240,0.05)' : 'inset 0 0 80px rgba(110,50,255,0.06)';
    d.style.cssText = `position:absolute;top:0;${side}:0;width:calc(50% - 7px);height:${SCENE_H}px;border:1px solid ${col};border-radius:14px;pointer-events:none;z-index:4;box-shadow:${sh};transition:box-shadow 0.4s,border-color 0.4s;`;
    wrap.appendChild(d);
    panelDivs.push({el:d, baseBorder:col, baseShadow:sh, side:i===0?'left':'right'});
  });

  const setPanelHover = (side) => {
    panelDivs.forEach(p => {
      if(p.side === side){
        const gc = side==='left'
          ? 'inset 0 0 140px rgba(0,230,255,0.18),0 0 30px rgba(0,200,240,0.25)'
          : 'inset 0 0 140px rgba(160,80,255,0.20),0 0 30px rgba(120,60,255,0.28)';
        const bc = side==='left' ? 'rgba(0,230,255,0.55)' : 'rgba(160,80,255,0.55)';
        p.el.style.boxShadow   = gc;
        p.el.style.borderColor = bc;
      } else {
        p.el.style.boxShadow   = p.baseShadow;
        p.el.style.borderColor = p.baseBorder;
      }
    });
  };
  const clearPanelHover = () => {
    panelDivs.forEach(p => { p.el.style.boxShadow=p.baseShadow; p.el.style.borderColor=p.baseBorder; });
  };

  // Chart panel highlight on right-hover
  const setChartHighlight = (on) => {
    if(on){
      gsap.to(chartMesh.scale, {x:1.12,y:1.12,z:1.12,duration:0.4,ease:'power2.out'});
      gsap.to(map1.scale,      {x:1.10,y:1.10,z:1.10,duration:0.4,ease:'power2.out'});
      gsap.to(map2.scale,      {x:1.10,y:1.10,z:1.10,duration:0.4,ease:'power2.out'});
      chartMat.opacity = 1.0; map1.material.opacity=1.0; map2.material.opacity=1.0;
    } else {
      gsap.to(chartMesh.scale, {x:1,y:1,z:1,duration:0.5,ease:'power2.out'});
      gsap.to(map1.scale,      {x:1,y:1,z:1,duration:0.5,ease:'power2.out'});
      gsap.to(map2.scale,      {x:1,y:1,z:1,duration:0.5,ease:'power2.out'});
      chartMat.opacity = 0.80; map1.material.opacity=0.80; map2.material.opacity=0.80;
    }
  };

  /* ═══════════════════════════════════════════════════════
     WIDGETS BAR
  ════════════════════════════════════════════════════════ */
  const GS='background:rgba(3,6,18,0.78);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(0,240,255,0.10);border-radius:7px;';
  const wBar=document.createElement('div');
  wBar.style.cssText=`position:absolute;bottom:14px;left:50%;transform:translateX(-50%);display:flex;gap:10px;font-family:'Share Tech Mono',monospace;font-size:0.57rem;letter-spacing:1px;pointer-events:none;z-index:5;white-space:nowrap;`;
  [{key:'api',label:'API REQ/MIN',val:'120',col:'#00f5ff'},{key:'gw',label:'FASTAPI',val:'STABLE',col:'#00ff88'},{key:'mdl',label:'ACTIVE MODELS',val:'2',col:'#8855ff'}].forEach(w=>{
    const d=document.createElement('div'); d.style.cssText=GS+';padding:5px 14px;text-align:center;';
    d.innerHTML=`<div style="color:${w.col};opacity:0.40;font-size:0.50rem;letter-spacing:2px;">${w.label}</div><div style="color:${w.col};font-size:0.70rem;margin-top:2px;" data-wid="${w.key}">${w.val}</div>`;
    wBar.appendChild(d);
  });
  wrap.insertBefore(wBar, hintBar);
  setInterval(()=>{ const el=wrap.querySelector('[data-wid="api"]'); if(el) el.textContent=90+Math.floor(Math.random()*60); },1200);

  /* ═══════════════════════════════════════════════════════
     CLICK OVERLAY  — full-screen detail panel (i18n-aware)
  ════════════════════════════════════════════════════════ */
  const PROJECTS_DATA = {
    left: {
      ru: {
        title: 'Fake News Detector',
        subtitle: 'ИИ-сканер достоверности новостей',
        desc: 'Telegram-бот для мгновенной проверки достоверности новостей. Анализирует источники, сравнивает факты через ИИ, выдаёт оценку правдивости с объяснением.',
        githubLabel: '⌥ GitHub',
        demoLabel:   '▶ Попробовать',
      },
      en: {
        title: 'Fake News Detector',
        subtitle: 'AI-powered credibility scanner',
        desc: 'A Telegram bot that verifies news credibility in seconds. Analyzes sources, cross-checks facts via AI and gives a clear credibility score with explanation.',
        githubLabel: '⌥ GitHub',
        demoLabel:   '▶ Live Demo',
      },
      color: '#00f5ff',
      accent: 'rgba(0,245,255,0.12)',
      border: 'rgba(0,245,255,0.30)',
      stats: {
        ru: [
          {label:'Точность',  value:'94.2%'},
          {label:'Задержка',  value:'~1.2s'},
          {label:'Источники', value:'142 DB'},
          {label:'Аптайм',    value:'99.8%'},
        ],
        en: [
          {label:'Accuracy', value:'94.2%'},
          {label:'Latency',  value:'~1.2s'},
          {label:'Sources',  value:'142 DB'},
          {label:'Uptime',   value:'99.8%'},
        ],
      },
      stack: ['Python','FastAPI','OpenAI GPT-4o','NLP','Aiogram'],
      github: 'https://github.com/Edvart08',
      demo:   'https://t.me/NewsCheccker_bot',
    },
    right: {
      ru: {
        title: 'CS2 AI Coach',
        subtitle: 'Персональный ИИ-тренер для CS2',
        desc: 'Персональный ИИ-тренер для CS2. Анализирует геймплей, выявляет слабые места, даёт конкретные советы по улучшению позиционирования и прицеливания.',
        githubLabel: '⌥ GitHub',
        demoLabel:   '▶ Сайт',
      },
      en: {
        title: 'CS2 AI Coach',
        subtitle: 'Personal AI trainer for Counter-Strike 2',
        desc: 'A personal AI trainer for CS2. Analyzes gameplay, identifies weak spots, and delivers concrete improvement tips on positioning and aim.',
        githubLabel: '⌥ GitHub',
        demoLabel:   '▶ Live Site',
      },
      color: '#aa66ff',
      accent: 'rgba(170,102,255,0.12)',
      border: 'rgba(170,102,255,0.30)',
      stats: {
        ru: [
          {label:'Рост винрейта', value:'+14.2%'},
          {label:'Сессий',        value:'400+'},
          {label:'Позиций',       value:'1,247'},
          {label:'Ошибок/игра',   value:'34'},
        ],
        en: [
          {label:'Winrate boost', value:'+14.2%'},
          {label:'Sessions',      value:'400+'},
          {label:'Positions',     value:'1,247'},
          {label:'Errors/game',   value:'34'},
        ],
      },
      stack: ['Python','Aiogram','Groq LLaMA-3','Redis','CV2'],
      github: 'https://github.com/Edvart08',
      demo:   'https://cs-coach.ru/',
    },
  };

  const overlay = document.createElement('div');
  overlay.style.cssText = [
    'position:fixed','inset:0','z-index:9500',
    'background:rgba(3,4,12,0.0)','backdrop-filter:blur(0px)',
    'display:flex','align-items:center','justify-content:center',
    'opacity:0','pointer-events:none',
    'transition:opacity 0.35s ease',
  ].join(';');
  document.body.appendChild(overlay);

  const overlayCard = document.createElement('div');
  overlayCard.style.cssText = [
    'position:relative','width:min(680px,90vw)','max-height:85vh',
    'overflow-y:auto',
    'background:rgba(4,6,20,0.96)',
    'border-radius:16px','padding:40px 44px',
    'font-family:"Share Tech Mono",monospace',
    'transform:translateY(28px) scale(0.96)',
    'transition:transform 0.35s ease',
    'scrollbar-width:thin','scrollbar-color:rgba(0,245,255,0.2) transparent',
  ].join(';');
  overlay.appendChild(overlayCard);

  // Close on backdrop click
  overlay.addEventListener('click', e => { if(e.target===overlay) closeOverlay(); });
  document.addEventListener('keydown', e => { if(e.key==='Escape') closeOverlay(); });

  let overlayOpen = false;

  function openOverlay(side) {
    const lang = window.currentLang || 'ru';
    const raw  = PROJECTS_DATA[side];
    const loc  = raw[lang];
    const p = {
      ...loc,
      color:  raw.color,
      accent: raw.accent,
      border: raw.border,
      stats:  raw.stats[lang],
      stack:  raw.stack,
      github: raw.github,
      demo:   raw.demo,
    };

    overlayCard.style.border     = `1px solid ${p.border}`;
    overlayCard.style.boxShadow  = `0 0 80px ${p.accent}, inset 0 0 60px ${p.accent}`;

    overlayCard.innerHTML = `
      <button id="ovClose" style="position:absolute;top:16px;right:20px;background:none;border:1px solid ${p.border};border-radius:6px;color:${p.color};font-family:'Share Tech Mono',monospace;font-size:0.70rem;letter-spacing:2px;padding:5px 12px;cursor:pointer;transition:all .2s;"
        onmouseover="this.style.background='${p.accent}'" onmouseout="this.style.background='none'">ESC ✕</button>

      <div style="color:${p.color};font-size:0.65rem;letter-spacing:4px;opacity:0.55;margin-bottom:10px;">// PROJECT DETAIL</div>
      <h2 style="color:#fff;font-family:'Orbitron',sans-serif;font-size:clamp(1.3rem,3vw,1.8rem);font-weight:900;margin:0 0 6px;letter-spacing:2px;">${p.title}</h2>
      <p style="color:${p.color};font-size:0.72rem;letter-spacing:3px;opacity:0.65;margin:0 0 28px;">${p.subtitle}</p>

      <p style="color:rgba(200,210,230,0.80);font-size:0.82rem;line-height:1.85;margin:0 0 32px;font-family:'Rajdhani',sans-serif;font-size:1rem;">${p.desc}</p>

      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:32px;">
        ${p.stats.map(s=>`
          <div style="background:${p.accent};border:1px solid ${p.border};border-radius:8px;padding:12px 8px;text-align:center;">
            <div style="color:${p.color};font-size:1.25rem;font-weight:700;letter-spacing:1px;">${s.value}</div>
            <div style="color:rgba(180,200,220,0.70);font-size:0.62rem;letter-spacing:2px;margin-top:5px;text-transform:uppercase;">${s.label}</div>
          </div>`).join('')}
      </div>

      <div style="margin-bottom:28px;">
        <div style="color:${p.color};font-size:0.58rem;letter-spacing:3px;opacity:0.55;margin-bottom:12px;">// TECH STACK</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;">
          ${p.stack.map(t=>`<span style="background:${p.accent};border:1px solid ${p.border};color:${p.color};font-size:0.65rem;letter-spacing:2px;padding:5px 12px;border-radius:4px;">${t}</span>`).join('')}
        </div>
      </div>

      <div style="display:flex;gap:14px;flex-wrap:wrap;">
        <a href="${p.github}" target="_blank" style="display:flex;align-items:center;gap:8px;background:${p.accent};border:1px solid ${p.border};color:${p.color};text-decoration:none;font-size:0.68rem;letter-spacing:2px;padding:10px 22px;border-radius:6px;transition:all .2s;"
          onmouseover="this.style.background='${p.border}'" onmouseout="this.style.background='${p.accent}'">
          ${p.githubLabel}
        </a>
        <a href="${p.demo}" target="_blank" style="display:flex;align-items:center;gap:8px;background:transparent;border:1px solid ${p.border};color:${p.color};text-decoration:none;font-size:0.68rem;letter-spacing:2px;padding:10px 22px;border-radius:6px;transition:all .2s;"
          onmouseover="this.style.background='${p.accent}'" onmouseout="this.style.background='transparent'">
          ${p.demoLabel}
        </a>
      </div>`;

    document.getElementById('ovClose').addEventListener('click', closeOverlay);

    overlay.style.pointerEvents = 'all';
    overlay.style.opacity = '1';
    overlay.style.background = 'rgba(3,4,12,0.82)';
    overlay.style.backdropFilter = 'blur(14px)';
    overlayCard.style.transform = 'translateY(0) scale(1)';
    overlayOpen = true;
  }

  function closeOverlay() {
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    overlayCard.style.transform = 'translateY(28px) scale(0.96)';
    setTimeout(() => { overlay.style.background='rgba(3,4,12,0.0)'; overlay.style.backdropFilter='blur(0px)'; }, 350);
    overlayOpen = false;
  }

  /* ═══════════════════════════════════════════════════════
     LOG PANEL + INFO CARD  (quick inline view — kept)
  ════════════════════════════════════════════════════════ */
  const svgEl=document.createElementNS('http://www.w3.org/2000/svg','svg');
  svgEl.style.cssText='position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9;overflow:visible;';
  wrap.insertBefore(svgEl, hintBar);
  const mkLine=col=>{const l=document.createElementNS('http://www.w3.org/2000/svg','line');l.setAttribute('stroke',col);l.setAttribute('stroke-width','0.8');l.setAttribute('stroke-dasharray','6,4');l.setAttribute('opacity','0');svgEl.appendChild(l);return l;};
  const leaderL=mkLine('#00f5ff'), leaderR=mkLine('#8855ff');

  /* ── Post-processing ── */
  const composer=new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene,camera));
  const bloom=new UnrealBloomPass(new THREE.Vector2(W,CANVAS_H),0.85,0.60,0.22);
  composer.addPass(bloom);

  /* ── Interaction ── */
  const ndc=new THREE.Vector2(), mWorld=new THREE.Vector3();
  const pickPlane=new THREE.Plane(new THREE.Vector3(0,0,1),0);
  const raycaster=new THREE.Raycaster();
  let hovSide=null;
  const spring={x:0,y:0,vx:0,vy:0};

  const setNDC=e=>{const r=renderer.domElement.getBoundingClientRect();ndc.set(((e.clientX-r.left)/r.width)*2-1,-((e.clientY-r.top)/r.height)*2+1);};
  const proj=v3=>{const v=v3.clone().project(camera);return{x:(v.x*0.5+0.5)*W,y:(-v.y*0.5+0.5)*CANVAS_H};};
  const pickSide=()=>{
    const mx=(ndc.x*0.5+0.5)*W,my=(-ndc.y*0.5+0.5)*CANVAS_H;
    const lp=proj(leftGroup.position),rp=proj(rightGroup.position);
    const dl=Math.hypot(mx-lp.x,my-lp.y),dr=Math.hypot(mx-rp.x,my-rp.y);
    const thr=W*0.18;
    if(dl<thr&&dl<dr) return 'left';
    if(dr<thr&&dr<dl) return 'right';
    return null;
  };

  renderer.domElement.addEventListener('mousemove',e=>{
    if(overlayOpen) return;
    setNDC(e);
    const ns=pickSide();
    if(ns!==hovSide){
      hovSide=ns;
      if(ns==='left'){
        gsap.to(leftGroup.scale,{x:1.12,y:1.12,z:1.12,duration:0.5,ease:'power2.out'});
        gsap.to(rightGroup.scale,{x:0.92,y:0.92,z:0.92,duration:0.4,ease:'power2.out'});
        setPanelHover('left'); setChartHighlight(false);
      } else if(ns==='right'){
        gsap.to(rightGroup.scale,{x:1.12,y:1.12,z:1.12,duration:0.5,ease:'power2.out'});
        gsap.to(leftGroup.scale,{x:0.92,y:0.92,z:0.92,duration:0.4,ease:'power2.out'});
        setPanelHover('right'); setChartHighlight(true);
      } else {
        gsap.to(leftGroup.scale,{x:1,y:1,z:1,duration:0.7,ease:'elastic.out(1,0.5)'});
        gsap.to(rightGroup.scale,{x:1,y:1,z:1,duration:0.7,ease:'elastic.out(1,0.5)'});
        clearPanelHover(); setChartHighlight(false);
      }
    }
    raycaster.setFromCamera(ndc,camera);
    raycaster.ray.intersectPlane(pickPlane,mWorld);
  });
  renderer.domElement.addEventListener('mouseleave',()=>{
    hovSide=null; mWorld.set(0,0,0);
    gsap.to(leftGroup.scale,{x:1,y:1,z:1,duration:0.7,ease:'elastic.out(1,0.5)'});
    gsap.to(rightGroup.scale,{x:1,y:1,z:1,duration:0.7,ease:'elastic.out(1,0.5)'});
    clearPanelHover(); setChartHighlight(false);
  });
  renderer.domElement.addEventListener('click',e=>{
    if(overlayOpen) return;
    setNDC(e);
    const s=pickSide();
    if(s) openOverlay(s);
  });

  /* ── Intro ── */
  leftGroup.scale.setScalar(0.001); rightGroup.scale.setScalar(0.001);
  gsap.to(leftGroup.scale,  {x:1,y:1,z:1,duration:1.4,delay:0.30,ease:'elastic.out(1,0.42)'});
  gsap.to(rightGroup.scale, {x:1,y:1,z:1,duration:1.4,delay:0.65,ease:'elastic.out(1,0.42)'});

  const positionGems=()=>{const x=getGemX();leftGroup.position.set(-x,0,0);rightGroup.position.set(x,0,0);};
  positionGems();

  /* ── Animation loop ── */
  const clock=new THREE.Clock();
  const lWP=new THREE.Vector3(),rWP=new THREE.Vector3();
  const fakeEnd=new THREE.Vector3(),factEnd=new THREE.Vector3();
  let autoL=0,autoR=0;

  (function loop(){
    requestAnimationFrame(loop);
    const dt=clock.getDelta(),t=clock.getElapsedTime();
    const hl=hovSide==='left',hr=hovSide==='right',any=hl||hr;

    const tx=(mWorld.y/3)*0.14,ty=(mWorld.x/5)*0.12;
    spring.vx+=(tx-spring.x)*0.055; spring.vx*=0.82;
    spring.vy+=(ty-spring.y)*0.055; spring.vy*=0.82;
    spring.x+=spring.vx; spring.y+=spring.vy;

    // ── Left: faster spin on hover ──
    autoL += dt*(hl ? 2.2 : 0.20);           // 2.2 vs 0.20 = ~11x speedup
    leftGroup.rotation.y = autoL + spring.y;
    leftGroup.rotation.x = Math.sin(t*0.35)*0.08 + spring.x;
    midMeshL.rotation.y -= dt*(hl ? 2.6 : 0.45);
    midMeshL.rotation.z += dt*(hl ? 1.8 : 0.30);
    coreMeshL.rotation.y += dt*(hl ? 4.0 : 0.80);
    coreMeshL.rotation.x += dt*(hl ? 2.8 : 0.55);
    gemLightL.intensity = 2.5+1.2*Math.sin(t*2.4);
    outerMat.emissiveIntensity = 0.28+0.12*Math.sin(t*1.7);

    // ── Right: faster spin on hover ──
    autoR -= dt*(hr ? 2.2 : 0.20);
    rightGroup.rotation.y = autoR - spring.y;
    rightGroup.rotation.x = Math.sin(t*0.40+1.2)*0.07 - spring.x;
    rMidMesh.rotation.y -= dt*(hr ? 2.4 : 0.40);
    rMidMesh.rotation.z += dt*(hr ? 1.6 : 0.28);
    rCoreMesh.rotation.y += dt*(hr ? 4.2 : 0.85);
    rCoreMesh.rotation.x += dt*(hr ? 2.9 : 0.55);
    ring1.rotation.z += dt*(hr ? 2.8 : 0.55);
    ring2.rotation.x += dt*(hr ? 2.0 : 0.42);
    gemLightR.intensity = 2.5+1.2*Math.sin(t*2.1+1);
    rOutMat.emissiveIntensity = 0.24+0.10*Math.sin(t*1.5+0.5);

    bloom.strength = lerp(bloom.strength, any?1.0:0.82, 0.05);

    // Live chart tick
    tickChart(dt);

    for(const s of [fakeStream,factStream]){
      for(let i=0;i<N_P;i++){
        s.pos[i*3]+=s.vel[i].x; s.pos[i*3+1]+=s.vel[i].y; s.pos[i*3+2]+=s.vel[i].z;
        if(Math.hypot(s.pos[i*3],s.pos[i*3+1],s.pos[i*3+2])>s.maxDist) s.spawn(i);
      }
      s.geo.attributes.position.needsUpdate=true;
    }

    fakeEnd.set(fakeDir.x*4.5,fakeDir.y*4.5,fakeDir.z*4.5).applyMatrix4(leftGroup.matrixWorld);
    factEnd.set(factDir.x*4.0,factDir.y*4.0,factDir.z*4.0).applyMatrix4(leftGroup.matrixWorld);
    const fp=proj(fakeEnd),ftp=proj(factEnd);
    fakeLabel.style.left=fp.x+'px'; fakeLabel.style.top=fp.y+'px';
    factLabel.style.left=ftp.x+'px'; factLabel.style.top=ftp.y+'px';

    composer.render();
  })();

  window.addEventListener('resize',()=>{
    W=wrap.clientWidth;
    renderer.setSize(W,CANVAS_H); composer.setSize(W,CANVAS_H);
    camera.aspect=W/CANVAS_H; camera.updateProjectionMatrix();
    bloom.resolution.set(W,CANVAS_H); positionGems();
  });
}

window.addEventListener('load', () => {
  requestAnimationFrame(() => requestAnimationFrame(init));
});
