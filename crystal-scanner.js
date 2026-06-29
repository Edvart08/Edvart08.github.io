/**
 * crystal-scanner.js
 * Standalone Three.js module for the Crystal Scanner section.
 * Usage: include via <script type=module src=crystal-scanner.js>
 */

import * as THREE         from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass }     from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass }from 'three/addons/postprocessing/UnrealBloomPass.js';

/* ─────────────────────────────────────────────────────────────
   WAIT FOR DOM
───────────────────────────────────────────────────────────── */
function init() {
  const gsap    = window.gsap;
  const wrap    = document.querySelector('.scanner-wrap');
  if (!wrap) return;
  document.getElementById('nodeCanvas')?.remove();

  const SCENE_H  = 500;
  const OVERFLOW = 60;
  const CANVAS_H = SCENE_H + OVERFLOW;
  let   W        = wrap.clientWidth;
  const lerp     = THREE.MathUtils.lerp;
  const hintBar  = wrap.querySelector('.scanner-hint-bar');

  /* ── renderer ─────────────────────────────────────────── */
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  });
  renderer.setSize(W, CANVAS_H);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.toneMapping          = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure  = 1.1;
  renderer.outputColorSpace     = THREE.SRGBColorSpace;
  renderer.domElement.style.cssText =
    `position:absolute;top:0;left:0;width:100%;height:${CANVAS_H}px;
     cursor:crosshair;z-index:2;border-radius:14px;`;
  wrap.insertBefore(renderer.domElement, hintBar);

  /* ── scene / camera ───────────────────────────────────── */
  const scene  = new THREE.Scene();
  scene.background = new THREE.Color(0x05050a);

  const camera = new THREE.PerspectiveCamera(50, W / CANVAS_H, 0.1, 100);
  camera.position.set(0, 0, 7.5);

  /* ── lighting ─────────────────────────────────────────── */
  scene.add(new THREE.AmbientLight(0x0d1a33, 6));

  // Left (cyan) key + fill
  const lL = new THREE.PointLight(0x00ccff, 12, 30); lL.position.set(-8, 6, 6);
  const lLf= new THREE.PointLight(0x0088cc,  5, 18); lLf.position.set(-4,-4, 5);
  // Right (purple) key + fill
  const lR = new THREE.PointLight(0x9933ff, 12, 30); lR.position.set( 8, 6, 6);
  const lRf= new THREE.PointLight(0x6611bb,  5, 18); lRf.position.set( 4,-4, 5);
  // Rim
  const lT = new THREE.DirectionalLight(0x223366, 3); lT.position.set(0, 12, 8);
  scene.add(lL, lLf, lR, lRf, lT);

  /* ─────────────────────────────────────────────────────────
     LEFT  ──  ICOSAHEDRON GEM  (low-poly diamond feel)
     flat-shaded faces + wireframe + inner glow layers
  ───────────────────────────────────────────────────────── */
  const leftGroup = new THREE.Group();
  leftGroup.position.set(-2.6, 0.1, 0);
  scene.add(leftGroup);

  // Outer shell – flat, semi-transparent, cyan
  const outerGeo = new THREE.IcosahedronGeometry(1.55, 0);     // detail=0 → 20 flat triangles
  const outerMat = new THREE.MeshPhysicalMaterial({
    color:             0x00bbee,
    emissive:          new THREE.Color(0x003355),
    emissiveIntensity: 0.6,
    roughness:         0.05,
    metalness:         0.0,
    transmission:      0.72,
    thickness:         1.2,
    ior:               1.45,
    transparent:       true,
    opacity:           0.55,
    side:              THREE.DoubleSide,
    flatShading:       true,
    depthWrite:        false,
  });
  const outerMesh = new THREE.Mesh(outerGeo, outerMat);
  leftGroup.add(outerMesh);

  // Wireframe edges – bright cyan lines
  const outerEdges = new THREE.LineSegments(
    new THREE.EdgesGeometry(outerGeo),
    new THREE.LineBasicMaterial({ color: 0x00ffee, transparent: true, opacity: 0.85 })
  );
  leftGroup.add(outerEdges);

  // Middle shell – slightly smaller octahedron for inner facets
  const midGeoL = new THREE.OctahedronGeometry(1.0, 0);
  const midMatL = new THREE.MeshPhysicalMaterial({
    color:             0x00eedd,
    emissive:          new THREE.Color(0x005566),
    emissiveIntensity: 1.0,
    roughness:         0.04,
    metalness:         0.0,
    transmission:      0.60,
    thickness:         0.8,
    ior:               1.45,
    transparent:       true,
    opacity:           0.65,
    side:              THREE.DoubleSide,
    flatShading:       true,
    depthWrite:        false,
  });
  const midMeshL = new THREE.Mesh(midGeoL, midMatL);
  leftGroup.add(midMeshL);
  leftGroup.add(new THREE.LineSegments(
    new THREE.EdgesGeometry(midGeoL),
    new THREE.LineBasicMaterial({ color: 0x88ffee, transparent: true, opacity: 0.70 })
  ));

  // Inner tetrahedron core – glowing hot
  const coreGeoL = new THREE.TetrahedronGeometry(0.48, 0);
  const coreMatL = new THREE.MeshBasicMaterial({ color: 0xaaffff });
  const coreMeshL = new THREE.Mesh(coreGeoL, coreMatL);
  leftGroup.add(coreMeshL);
  leftGroup.add(new THREE.LineSegments(
    new THREE.EdgesGeometry(coreGeoL),
    new THREE.LineBasicMaterial({ color: 0xffffff })
  ));

  // Point light inside the gem
  const gemLightL = new THREE.PointLight(0x00ffff, 6, 6);
  leftGroup.add(gemLightL);

  /* ─────────────────────────────────────────────────────────
     RIGHT  ──  ICOSAHEDRON SPHERE  (geodesic crystal ball)
     detail=1 → 80 triangles, more rounded look
  ───────────────────────────────────────────────────────── */
  const rightGroup = new THREE.Group();
  rightGroup.position.set(2.6, 0.0, 0);
  scene.add(rightGroup);

  // Outer geodesic shell
  const rOutGeo = new THREE.IcosahedronGeometry(1.75, 1);
  const rOutMat = new THREE.MeshPhysicalMaterial({
    color:             0x3311bb,
    emissive:          new THREE.Color(0x110033),
    emissiveIntensity: 0.5,
    roughness:         0.05,
    metalness:         0.0,
    transmission:      0.68,
    thickness:         1.4,
    ior:               1.45,
    transparent:       true,
    opacity:           0.50,
    side:              THREE.DoubleSide,
    flatShading:       true,
    depthWrite:        false,
  });
  const rOutMesh = new THREE.Mesh(rOutGeo, rOutMat);
  rightGroup.add(rOutMesh);
  rightGroup.add(new THREE.LineSegments(
    new THREE.EdgesGeometry(rOutGeo),
    new THREE.LineBasicMaterial({ color: 0x9966ff, transparent: true, opacity: 0.82 })
  ));

  // Middle icosahedron (detail=0) inside
  const rMidGeo = new THREE.IcosahedronGeometry(1.15, 0);
  const rMidMat = new THREE.MeshPhysicalMaterial({
    color:             0x6633dd,
    emissive:          new THREE.Color(0x220055),
    emissiveIntensity: 0.9,
    roughness:         0.04,
    metalness:         0.0,
    transmission:      0.55,
    thickness:         0.9,
    ior:               1.45,
    transparent:       true,
    opacity:           0.65,
    side:              THREE.DoubleSide,
    flatShading:       true,
    depthWrite:        false,
  });
  const rMidMesh = new THREE.Mesh(rMidGeo, rMidMat);
  rightGroup.add(rMidMesh);
  rightGroup.add(new THREE.LineSegments(
    new THREE.EdgesGeometry(rMidGeo),
    new THREE.LineBasicMaterial({ color: 0xcc88ff, transparent: true, opacity: 0.75 })
  ));

  // Inner octahedron core
  const rCoreGeo = new THREE.OctahedronGeometry(0.55, 0);
  const rCoreMat = new THREE.MeshBasicMaterial({ color: 0xeeccff });
  const rCoreMesh = new THREE.Mesh(rCoreGeo, rCoreMat);
  rightGroup.add(rCoreMesh);
  rightGroup.add(new THREE.LineSegments(
    new THREE.EdgesGeometry(rCoreGeo),
    new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 })
  ));

  // Point light inside
  const gemLightR = new THREE.PointLight(0xaa55ff, 6, 7);
  rightGroup.add(gemLightR);

  // Orbital torus rings
  const mkTorus = (r, tube, col, rx, ry) => {
    const m = new THREE.Mesh(
      new THREE.TorusGeometry(r, tube, 3, 80),
      new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: 0.35 })
    );
    m.rotation.set(rx, ry, 0);
    return m;
  };
  const ring1 = mkTorus(2.20, 0.010, 0x8844ee, Math.PI/2, 0);
  const ring2 = mkTorus(2.45, 0.008, 0x6622cc, 0.45, 0.20);
  rightGroup.add(ring1, ring2);

  /* ─────────────────────────────────────────────────────────
     PARTICLE STREAMS  (FAKE / FACT)
     Thin cone streams from tip of the gem
  ───────────────────────────────────────────────────────── */
  const N_P = 160;

  function makeStream(dir, color, coneAngle, maxDist) {
    const tmp   = Math.abs(dir.y) < 0.8
      ? new THREE.Vector3(0,1,0) : new THREE.Vector3(1,0,0);
    const u     = new THREE.Vector3().crossVectors(dir, tmp).normalize();
    const v     = new THREE.Vector3().crossVectors(dir, u).normalize();

    const pos = new Float32Array(N_P * 3);
    const vel = [];

    const spawn = (i) => {
      const t  = Math.random() * maxDist;
      const a  = Math.random() * Math.PI * 2;
      const r  = Math.random() * coneAngle * (t / maxDist);
      pos[i*3]   = dir.x*t + (u.x*Math.cos(a)+v.x*Math.sin(a))*r;
      pos[i*3+1] = dir.y*t + (u.y*Math.cos(a)+v.y*Math.sin(a))*r;
      pos[i*3+2] = dir.z*t + (u.z*Math.cos(a)+v.z*Math.sin(a))*r;
      const spd = 0.018 + Math.random()*0.012;
      const jA  = (Math.random()-0.5)*0.004;
      const jB  = (Math.random()-0.5)*0.004;
      vel[i] = {
        x: dir.x*spd + u.x*jA + v.x*jB,
        y: dir.y*spd + u.y*jA + v.y*jB,
        z: dir.z*spd + u.z*jA + v.z*jB,
      };
    };
    for (let i=0; i<N_P; i++) spawn(i);

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      color, size: 0.075, sizeAttenuation: true,
      transparent: true, opacity: 0.88,
    });
    const pts = new THREE.Points(geo, mat);
    return { pos, vel, geo, mat, pts, dir, u, v, maxDist, spawn };
  }

  // Streams shoot from gem tip and crown in opposite directions
  const fakeDir   = new THREE.Vector3(-0.45, -0.82, 0.05).normalize();
  const factDir   = new THREE.Vector3( 0.40,  0.87, 0.06).normalize();
  const fakeStream = makeStream(fakeDir, 0xff00bb, 0.75, 5.2);
  const factStream = makeStream(factDir, 0x00ff77, 0.65, 4.8);
  leftGroup.add(fakeStream.pts, factStream.pts);

  /* FAKE / FACT floating labels */
  const mkLabel = (text, col) => {
    const d = document.createElement('div');
    d.textContent = text;
    d.style.cssText = [
      'position:absolute',
      'font-family:"Share Tech Mono",monospace',
      `font-size:0.80rem`,
      'letter-spacing:5px',
      `color:${col}`,
      `text-shadow:0 0 8px ${col},0 0 20px ${col},0 0 40px ${col}`,
      'pointer-events:none',
      'z-index:8',
      'transform:translate(-50%,-50%)',
      'white-space:nowrap',
      'font-weight:700',
    ].join(';');
    wrap.insertBefore(d, hintBar);
    return d;
  };
  const fakeLabel = mkLabel('FAKE', '#ff00bb');
  const factLabel = mkLabel('FACT', '#00ff77');

  /* ─────────────────────────────────────────────────────────
     CS2 MINIMAP / CHART  (right panel overlays)
  ───────────────────────────────────────────────────────── */
  const mkMapTex = () => {
    const c = document.createElement('canvas'); c.width = c.height = 128;
    const x = c.getContext('2d');
    x.fillStyle='#04071a'; x.fillRect(0,0,128,128);
    x.strokeStyle='rgba(80,55,200,0.30)'; x.lineWidth=0.5;
    for(let i=0;i<128;i+=16){
      x.beginPath();x.moveTo(i,0);x.lineTo(i,128);x.stroke();
      x.beginPath();x.moveTo(0,i);x.lineTo(128,i);x.stroke();
    }
    x.strokeStyle='rgba(120,90,255,0.85)'; x.lineWidth=1.5;
    const path=[[14,32],[32,18],[60,34],[74,22],[86,54],[64,70],[42,64],[22,58],[14,32]];
    x.beginPath(); path.forEach((p,i)=>i?x.lineTo(p[0],p[1]):x.moveTo(p[0],p[1]));
    x.closePath(); x.stroke();
    ['#00ff88','#ff4444','#ffcc00','#4488ff'].forEach(col=>{
      x.fillStyle=col;
      for(let i=0;i<3;i++){
        x.beginPath();
        x.arc(Math.random()*110+9, Math.random()*110+9, 2.5, 0, Math.PI*2);
        x.fill();
      }
    });
    return new THREE.CanvasTexture(c);
  };

  const mkChartTex = () => {
    const c=document.createElement('canvas'); c.width=180;c.height=90;
    const x=c.getContext('2d');
    x.fillStyle='#04071a'; x.fillRect(0,0,180,90);
    x.strokeStyle='rgba(100,70,220,0.20)'; x.lineWidth=0.5;
    for(let i=0;i<180;i+=20){x.beginPath();x.moveTo(i,0);x.lineTo(i,90);x.stroke();}
    for(let i=0;i<90;i+=18){x.beginPath();x.moveTo(0,i);x.lineTo(180,i);x.stroke();}
    const pts=[62,50,38,48,28,40,18,32,22,30];
    x.strokeStyle='#00ff88'; x.lineWidth=2; x.beginPath();
    pts.forEach((v,i)=>i?x.lineTo(i*(180/9),v):x.moveTo(0,v)); x.stroke();
    x.fillStyle='rgba(0,255,136,0.08)'; x.lineTo(180,90);x.lineTo(0,90);x.closePath();x.fill();
    x.strokeStyle='rgba(140,100,255,0.60)'; x.lineWidth=1.4; x.beginPath();
    [74,67,60,54,50,57,46,52,44,48].forEach((v,i)=>i?x.lineTo(i*(180/9),v):x.moveTo(0,v));
    x.stroke();
    return new THREE.CanvasTexture(c);
  };

  const planeBasic = (tex, w, h) => new THREE.MeshBasicMaterial({
    map: tex, transparent: true, opacity: 0.80, side: THREE.DoubleSide,
  });

  const map1 = new THREE.Mesh(new THREE.PlaneGeometry(1.05,1.05), planeBasic(mkMapTex()));
  map1.position.set(2.2, 1.55, 0.15); map1.rotation.y=-0.28;
  rightGroup.add(map1);

  const map2 = new THREE.Mesh(new THREE.PlaneGeometry(0.95,0.95), planeBasic(mkMapTex(), 0.68));
  map2.position.set(2.15,-1.45, 0.12); map2.rotation.y=-0.24;
  rightGroup.add(map2);

  const chart = new THREE.Mesh(new THREE.PlaneGeometry(1.55,0.78), planeBasic(mkChartTex()));
  chart.position.set(2.45, 0.1, 0.14); chart.rotation.y=-0.22;
  rightGroup.add(chart);

  /* ─────────────────────────────────────────────────────────
     PANEL BORDER OVERLAYS  (CSS)
  ───────────────────────────────────────────────────────── */
  ['left','right'].forEach((side, i) => {
    const d = document.createElement('div');
    const col = i===0 ? 'rgba(0,200,240,0.16)' : 'rgba(120,60,255,0.18)';
    const sh  = i===0
      ? 'inset 0 0 80px rgba(0,180,240,0.04)'
      : 'inset 0 0 80px rgba(110,50,255,0.05)';
    d.style.cssText = [
      'position:absolute','top:0',`${side}:0`,
      `width:calc(50% - 7px)`,`height:${SCENE_H}px`,
      `border:1px solid ${col}`,`border-radius:14px`,
      'pointer-events:none','z-index:4',`box-shadow:${sh}`,
    ].join(';');
    wrap.appendChild(d);
  });

  /* ─────────────────────────────────────────────────────────
     WIDGETS BAR  (bottom centre)
  ───────────────────────────────────────────────────────── */
  const GS = [
    'background:rgba(3,6,18,0.78)',
    'backdrop-filter:blur(12px)',
    '-webkit-backdrop-filter:blur(12px)',
    'border:1px solid rgba(0,240,255,0.10)',
    'border-radius:7px',
  ].join(';');

  const wBar = document.createElement('div');
  wBar.style.cssText = [
    'position:absolute','bottom:14px','left:50%','transform:translateX(-50%)',
    'display:flex','gap:10px',
    'font-family:"Share Tech Mono",monospace','font-size:0.57rem',
    'letter-spacing:1px','pointer-events:none','z-index:5','white-space:nowrap',
  ].join(';');

  const widgets = [
    {key:'api', label:'API REQ/MIN', val:'120', col:'#00f5ff'},
    {key:'gw',  label:'FASTAPI',     val:'STABLE', col:'#00ff88'},
    {key:'mdl', label:'ACTIVE MODELS',val:'2',    col:'#8855ff'},
  ];
  widgets.forEach(w => {
    const d = document.createElement('div');
    d.style.cssText = GS+';padding:5px 14px;text-align:center;';
    d.innerHTML =
      `<div style="color:${w.col};opacity:0.40;font-size:0.50rem;letter-spacing:2px;">${w.label}</div>`+
      `<div style="color:${w.col};font-size:0.70rem;margin-top:2px;" data-wid="${w.key}">${w.val}</div>`;
    wBar.appendChild(d);
  });
  wrap.insertBefore(wBar, hintBar);
  setInterval(() => {
    const el = wrap.querySelector('[data-wid="api"]');
    if (el) el.textContent = 90 + Math.floor(Math.random()*60);
  }, 1200);

  /* ─────────────────────────────────────────────────────────
     AI LOG PANEL  +  INFO CARD  (click-reveal)
  ───────────────────────────────────────────────────────── */
  const logPanel = document.createElement('div');
  logPanel.style.cssText = GS+[
    ';position:absolute','top:14px','left:50%','transform:translateX(-50%)',
    'padding:12px 22px',
    'font-family:"Share Tech Mono",monospace','font-size:0.62rem','line-height:1.9',
    'color:#00f5ff','pointer-events:none','opacity:0','transition:opacity .2s',
    'z-index:10','min-width:230px','white-space:nowrap',
  ].join(';');
  wrap.insertBefore(logPanel, hintBar);

  const infoCard = document.createElement('div');
  infoCard.style.cssText = GS+[
    ';position:absolute','top:50%','transform:translateY(-50%)',
    'padding:14px 18px',
    'font-family:"Share Tech Mono",monospace','font-size:0.59rem','line-height:1.9',
    'pointer-events:none','opacity:0','transition:opacity .25s',
    'z-index:11','width:188px',
  ].join(';');
  wrap.insertBefore(infoCard, hintBar);

  const LOGS = {
    left: ['> Initializing NLP engine...','> Scanning source credibility...','> Cross-referencing 142 outlets...','> Bias score: 12.3%','> VERDICT: 78.4% credibility ✓'],
    right:['> Loading match replay...','> Analyzing 1,247 positions...','> Crosshair errors: 34 detected','> Win probability boost: +14.2%','> Coach report ready ✓'],
  };
  const INFO = {
    left: {col:'#00f5ff',brd:'rgba(0,245,255,0.18)',cardLeft:'2%',   title:'FAKE NEWS DETECTOR',lines:['Stack: Python + FastAPI','Engine: OpenAI GPT-4o','Sources: 142 databases','Accuracy: 94.2%','Latency: ~1.2 s / req']},
    right:{col:'#8855ff',brd:'rgba(136,85,255,0.18)',cardLeft:'67%', title:'CS2 AI COACH',       lines:['Stack: Python + Aiogram','Engine: Groq LLaMA-3','Input: match replays','Winrate boost: +14.2%','400+ sessions logged']},
  };

  // SVG leader lines
  const svgEl = document.createElementNS('http://www.w3.org/2000/svg','svg');
  svgEl.style.cssText='position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9;overflow:visible;';
  wrap.insertBefore(svgEl, hintBar);
  const mkLine = col => {
    const l = document.createElementNS('http://www.w3.org/2000/svg','line');
    l.setAttribute('stroke',col); l.setAttribute('stroke-width','0.8');
    l.setAttribute('stroke-dasharray','6,4'); l.setAttribute('opacity','0');
    svgEl.appendChild(l); return l;
  };
  const leaderL = mkLine('#00f5ff');
  const leaderR = mkLine('#8855ff');

  let activeNode = null, logIdx = 0, logTimer = null;

  function openPanel(side) {
    if (activeNode === side) { closePanel(); return; }
    activeNode = side;
    const inf = INFO[side];
    logPanel.style.borderColor = inf.brd;
    logPanel.style.color       = inf.col;
    logPanel.style.left        = side==='left' ? '26%' : '68%';
    logPanel.style.opacity     = '1';
    logIdx = 0; clearInterval(logTimer);
    const step = () => {
      logPanel.innerHTML = LOGS[side].slice(0, logIdx+1).join('<br>');
      if (logIdx < LOGS[side].length-1) logIdx++;
    };
    step(); logTimer = setInterval(step, 520);

    infoCard.style.borderColor = inf.brd;
    infoCard.style.color       = inf.col;
    infoCard.style.left        = inf.cardLeft;
    infoCard.style.opacity     = '1';
    infoCard.innerHTML =
      `<div style="opacity:.40;font-size:.52rem;letter-spacing:2px;margin-bottom:8px;">// ${inf.title}</div>`+
      inf.lines.map(l=>`<div>▸ ${l}</div>`).join('');

    leaderL.setAttribute('opacity', side==='left' ?'0.70':'0');
    leaderR.setAttribute('opacity', side==='right'?'0.70':'0');
  }
  function closePanel() {
    activeNode=null; clearInterval(logTimer);
    logPanel.style.opacity='0'; infoCard.style.opacity='0';
    leaderL.setAttribute('opacity','0'); leaderR.setAttribute('opacity','0');
  }

  /* ─────────────────────────────────────────────────────────
     POST-PROCESSING  (selective bloom)
  ───────────────────────────────────────────────────────── */
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));

  // Moderate bloom — just enough to make edges glow
  const bloom = new UnrealBloomPass(
    new THREE.Vector2(W, CANVAS_H),
    0.80,   // strength  ← MUCH lower than before
    0.55,   // radius
    0.20    // threshold — only bright edges bloom
  );
  composer.addPass(bloom);

  /* ─────────────────────────────────────────────────────────
     INTERACTION
  ───────────────────────────────────────────────────────── */
  const ndc        = new THREE.Vector2();
  const mouseWorld = new THREE.Vector3();
  const pickPlane  = new THREE.Plane(new THREE.Vector3(0,0,1), 0);
  const raycaster  = new THREE.Raycaster();
  let   hovSide    = null;
  const spring     = {x:0, y:0, vx:0, vy:0};

  const setNDC = e => {
    const r = renderer.domElement.getBoundingClientRect();
    ndc.set(
      ((e.clientX-r.left)/r.width)*2-1,
      -((e.clientY-r.top)/r.height)*2+1
    );
  };

  const proj = v3 => {
    const v = v3.clone().project(camera);
    return {x:(v.x*0.5+0.5)*W, y:(-v.y*0.5+0.5)*CANVAS_H};
  };

  const pickSide = () => {
    const mx=(ndc.x*0.5+0.5)*W, my=(-ndc.y*0.5+0.5)*CANVAS_H;
    const lp=proj(leftGroup.position), rp=proj(rightGroup.position);
    const dl=Math.hypot(mx-lp.x,my-lp.y), dr=Math.hypot(mx-rp.x,my-rp.y);
    const thr = W*0.17;
    if (dl<thr && dl<dr) return 'left';
    if (dr<thr && dr<dl) return 'right';
    return null;
  };

  renderer.domElement.addEventListener('mousemove', e => {
    setNDC(e);
    const ns = pickSide();
    if (ns !== hovSide) {
      hovSide = ns;
      if (ns==='left') {
        gsap.to(leftGroup.scale,  {x:1.12,y:1.12,z:1.12,duration:0.5,ease:'power2.out'});
        gsap.to(rightGroup.scale, {x:0.92,y:0.92,z:0.92,duration:0.4,ease:'power2.out'});
      } else if (ns==='right') {
        gsap.to(rightGroup.scale, {x:1.12,y:1.12,z:1.12,duration:0.5,ease:'power2.out'});
        gsap.to(leftGroup.scale,  {x:0.92,y:0.92,z:0.92,duration:0.4,ease:'power2.out'});
      } else {
        gsap.to(leftGroup.scale,  {x:1,y:1,z:1,duration:0.7,ease:'elastic.out(1,0.5)'});
        gsap.to(rightGroup.scale, {x:1,y:1,z:1,duration:0.7,ease:'elastic.out(1,0.5)'});
      }
    }
    raycaster.setFromCamera(ndc, camera);
    raycaster.ray.intersectPlane(pickPlane, mouseWorld);
  });

  renderer.domElement.addEventListener('mouseleave', () => {
    hovSide=null; mouseWorld.set(0,0,0);
    gsap.to(leftGroup.scale,  {x:1,y:1,z:1,duration:0.7,ease:'elastic.out(1,0.5)'});
    gsap.to(rightGroup.scale, {x:1,y:1,z:1,duration:0.7,ease:'elastic.out(1,0.5)'});
  });

  renderer.domElement.addEventListener('click', e => {
    setNDC(e);
    const s = pickSide();
    if (s) openPanel(s); else closePanel();
  });

  /* ─────────────────────────────────────────────────────────
     INTRO ANIMATION
  ───────────────────────────────────────────────────────── */
  leftGroup.scale.setScalar(0.001);
  rightGroup.scale.setScalar(0.001);
  gsap.to(leftGroup.scale,  {x:1,y:1,z:1,duration:1.4,delay:0.3, ease:'elastic.out(1,0.42)'});
  gsap.to(rightGroup.scale, {x:1,y:1,z:1,duration:1.4,delay:0.65,ease:'elastic.out(1,0.42)'});

  /* ─────────────────────────────────────────────────────────
     ANIMATION LOOP
  ───────────────────────────────────────────────────────── */
  const clock   = new THREE.Clock();
  const lWP     = new THREE.Vector3();
  const rWP     = new THREE.Vector3();
  const fakeEnd = new THREE.Vector3();
  const factEnd = new THREE.Vector3();
  let   autoL   = 0, autoR = 0;

  (function loop() {
    requestAnimationFrame(loop);
    const dt = clock.getDelta();
    const t  = clock.getElapsedTime();
    const hl = hovSide==='left', hr=hovSide==='right', any=hl||hr;

    /* Spring mouse parallax */
    const tx = (mouseWorld.y/3)*0.14;
    const ty = (mouseWorld.x/5)*0.12;
    spring.vx += (tx-spring.x)*0.055; spring.vx *= 0.82;
    spring.vy += (ty-spring.y)*0.055; spring.vy *= 0.82;
    spring.x  += spring.vx;
    spring.y  += spring.vy;

    /* ── LEFT rotation ── */
    autoL += dt * (hl ? 1.4 : 0.20);
    leftGroup.rotation.y = autoL + spring.y;
    leftGroup.rotation.x = Math.sin(t*0.35)*0.08 + spring.x;
    midMeshL.rotation.y -= dt*(hl ? 1.8 : 0.45);
    midMeshL.rotation.z += dt*(hl ? 1.2 : 0.30);
    coreMeshL.rotation.y+= dt*(hl ? 3.0 : 0.80);
    coreMeshL.rotation.x+= dt*(hl ? 2.0 : 0.55);

    // Gem light pulse
    const pL = 1 + 0.18*Math.sin(t*2.4);
    gemLightL.intensity = 5.5 + 2.0*Math.sin(t*2.4);
    outerMat.emissiveIntensity = 0.5 + 0.20*Math.sin(t*1.7);

    /* ── RIGHT rotation ── */
    autoR -= dt * (hr ? 1.4 : 0.20);
    rightGroup.rotation.y = autoR - spring.y;
    rightGroup.rotation.x = Math.sin(t*0.40+1.2)*0.07 - spring.x;
    rMidMesh.rotation.y  -= dt*(hr ? 1.6 : 0.40);
    rMidMesh.rotation.z  += dt*(hr ? 1.1 : 0.28);
    rCoreMesh.rotation.y += dt*(hr ? 3.2 : 0.85);
    rCoreMesh.rotation.x += dt*(hr ? 2.1 : 0.55);
    ring1.rotation.z     += dt*(hr ? 2.0 : 0.55);
    ring2.rotation.x     += dt*(hr ? 1.5 : 0.42);

    gemLightR.intensity = 5.5 + 2.0*Math.sin(t*2.1+1);
    rOutMat.emissiveIntensity = 0.4 + 0.18*Math.sin(t*1.5+0.5);

    /* Bloom reacts to hover — only slightly */
    bloom.strength = lerp(bloom.strength, any ? 1.05 : 0.78, 0.05);

    /* ── Particle streams ── */
    for (const s of [fakeStream, factStream]) {
      for (let i=0; i<N_P; i++) {
        s.pos[i*3]   += s.vel[i].x;
        s.pos[i*3+1] += s.vel[i].y;
        s.pos[i*3+2] += s.vel[i].z;
        if (Math.hypot(s.pos[i*3], s.pos[i*3+1], s.pos[i*3+2]) > s.maxDist) {
          s.spawn(i);
        }
      }
      s.geo.attributes.position.needsUpdate = true;
    }

    /* ── Label positions ── */
    fakeEnd.set(fakeDir.x*4.5, fakeDir.y*4.5, fakeDir.z*4.5)
      .applyMatrix4(leftGroup.matrixWorld);
    factEnd.set(factDir.x*4.0, factDir.y*4.0, factDir.z*4.0)
      .applyMatrix4(leftGroup.matrixWorld);
    const fp  = proj(fakeEnd), ftp = proj(factEnd);
    fakeLabel.style.left = fp.x+'px';  fakeLabel.style.top = fp.y+'px';
    factLabel.style.left = ftp.x+'px'; factLabel.style.top = ftp.y+'px';

    /* ── Leader lines ── */
    if (activeNode) {
      leftGroup.getWorldPosition(lWP);
      rightGroup.getWorldPosition(rWP);
      const wR = wrap.getBoundingClientRect();
      const cR = infoCard.getBoundingClientRect();
      const cx = cR.left-wR.left+cR.width*0.5;
      const cy = cR.top -wR.top +cR.height*0.5;
      if (activeNode==='left') {
        const s=proj(lWP);
        leaderL.setAttribute('x1',s.x); leaderL.setAttribute('y1',s.y);
        leaderL.setAttribute('x2',cx+cR.width*0.5); leaderL.setAttribute('y2',cy);
      } else {
        const s=proj(rWP);
        leaderR.setAttribute('x1',s.x); leaderR.setAttribute('y1',s.y);
        leaderR.setAttribute('x2',cx-cR.width*0.5); leaderR.setAttribute('y2',cy);
      }
    }

    composer.render();
  })();

  /* ─────────────────────────────────────────────────────────
     RESIZE
  ───────────────────────────────────────────────────────── */
  window.addEventListener('resize', () => {
    W = wrap.clientWidth;
    renderer.setSize(W, CANVAS_H);
    composer.setSize(W, CANVAS_H);
    camera.aspect = W / CANVAS_H;
    camera.updateProjectionMatrix();
    bloom.resolution.set(W, CANVAS_H);
  });
}

/* Wait for window load so GSAP CDN script is guaranteed ready */
window.addEventListener('load', () => {
  requestAnimationFrame(() => requestAnimationFrame(init));
});
