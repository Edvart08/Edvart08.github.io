/**
 * crystal-scanner.js — Gem Glass v5
 * Usage: inline in HTML or via <script type=module src=crystal-scanner.js>
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
  const CANVAS_H = SCENE_H;           // no overflow — canvas exactly panel height
  let   W        = wrap.clientWidth;
  const lerp     = THREE.MathUtils.lerp;
  const hintBar  = wrap.querySelector('.scanner-hint-bar');

  /* ── Renderer — transparent bg, no black box ── */
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setSize(W, CANVAS_H);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.toneMapping         = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.outputColorSpace    = THREE.SRGBColorSpace;
  renderer.domElement.style.cssText =
    `position:absolute;top:0;left:0;width:100%;height:${CANVAS_H}px;cursor:crosshair;z-index:2;`;
  wrap.insertBefore(renderer.domElement, hintBar);

  /* ── Scene — NO background color (alpha:true handles it) ── */
  const scene = new THREE.Scene();
  // scene.background intentionally left null → transparent

  /* ── Camera — FOV tuned so gems fill their half-panels ── */
  const camera = new THREE.PerspectiveCamera(48, W / CANVAS_H, 0.1, 100);
  camera.position.set(0, 0, 8.0);

  /* ── Lighting ── */
  scene.add(new THREE.AmbientLight(0x0a1a33, 5));
  const lL  = new THREE.PointLight(0x00ccff, 14, 32); lL.position.set(-9, 6, 7);
  const lLf = new THREE.PointLight(0x0088bb,  6, 20); lLf.position.set(-5,-4, 6);
  const lR  = new THREE.PointLight(0x9933ff, 14, 32); lR.position.set( 9, 6, 7);
  const lRf = new THREE.PointLight(0x6611bb,  6, 20); lRf.position.set( 5,-4, 6);
  const lT  = new THREE.DirectionalLight(0x334466, 2.5); lT.position.set(0, 14, 9);
  scene.add(lL, lLf, lR, lRf, lT);

  /* ── helper: compute X offset so gem centers on its panel half ── */
  // Each panel is W/2 wide. We project that to world units at z=0.
  // worldHalfWidth = tan(fov/2) * camZ  * aspect ... but simpler:
  // use a fixed world offset that works at 50 FOV / z=8
  // At z=8, fov=48: half-height = tan(24°)*8 = 3.56, half-width = 3.56*aspect
  // We want gem centred at x = ±(half-width * 0.5) = ±(3.56*aspect*0.5)
  // We'll recompute dynamically on resize.
  const getGemX = () => {
    const halfH = Math.tan((48/2) * Math.PI/180) * 8.0;
    const halfW = halfH * (W / CANVAS_H);
    return halfW * 0.50;   // centre of each half-panel in world units
  };

  /* ═══════════════════════════════════════════════════════
     LEFT — flat icosahedron gem (low-poly, glass faces)
  ════════════════════════════════════════════════════════ */
  const leftGroup = new THREE.Group();
  scene.add(leftGroup);

  // Outer shell — glass faces, bright edges
  const outerGeo = new THREE.IcosahedronGeometry(1.55, 0);
  const outerMat = new THREE.MeshPhysicalMaterial({
    color:             0x00ddff,
    emissive:          new THREE.Color(0x002233),
    emissiveIntensity: 0.35,          // ① less inner glow
    roughness:         0.04,
    metalness:         0.0,
    transmission:      0.82,          // ③ more glass
    thickness:         1.4,
    ior:               1.55,
    transparent:       true,
    opacity:           0.88,          // ③ much more visible faces
    side:              THREE.DoubleSide, // DoubleSide so faces visible from inside too
    flatShading:       true,
    depthWrite:        false,
  });
  leftGroup.add(new THREE.Mesh(outerGeo, outerMat));
  // ② brighter edges
  leftGroup.add(new THREE.LineSegments(
    new THREE.EdgesGeometry(outerGeo),
    new THREE.LineBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 1.0 })
  ));

  // Middle octahedron — glass, dimmer than before
  const midGeoL = new THREE.OctahedronGeometry(1.0, 0);
  const midMatL = new THREE.MeshPhysicalMaterial({
    color:             0x00eedd,
    emissive:          new THREE.Color(0x003344),
    emissiveIntensity: 0.40,
    roughness:         0.04,
    metalness:         0.0,
    transmission:      0.75,
    thickness:         0.8,
    ior:               1.55,
    transparent:       true,
    opacity:           0.80,
    side:              THREE.DoubleSide,
    flatShading:       true,
    depthWrite:        false,
  });
  const midMeshL = new THREE.Mesh(midGeoL, midMatL);
  leftGroup.add(midMeshL);
  leftGroup.add(new THREE.LineSegments(
    new THREE.EdgesGeometry(midGeoL),
    new THREE.LineBasicMaterial({ color: 0x88ffee, transparent: true, opacity: 0.95 })
  ));

  // Inner core — smaller, dimmer ①
  const coreGeoL = new THREE.TetrahedronGeometry(0.38, 0);
  const coreMatL = new THREE.MeshBasicMaterial({ color: 0x55dddd }); // ① dimmed from aaffff
  const coreMeshL = new THREE.Mesh(coreGeoL, coreMatL);
  leftGroup.add(coreMeshL);
  leftGroup.add(new THREE.LineSegments(
    new THREE.EdgesGeometry(coreGeoL),
    new THREE.LineBasicMaterial({ color: 0xaaffff, transparent: true, opacity: 0.90 })
  ));

  // Internal point light — reduced intensity ①
  const gemLightL = new THREE.PointLight(0x00eeff, 3.0, 5);  // was 6
  leftGroup.add(gemLightL);

  /* ═══════════════════════════════════════════════════════
     RIGHT — geodesic sphere (icosahedron detail=1)
  ════════════════════════════════════════════════════════ */
  const rightGroup = new THREE.Group();
  scene.add(rightGroup);

  const rOutGeo = new THREE.IcosahedronGeometry(1.75, 1);
  const rOutMat = new THREE.MeshPhysicalMaterial({
    color:             0x5533dd,
    emissive:          new THREE.Color(0x0d0025),
    emissiveIntensity: 0.30,
    roughness:         0.04,
    metalness:         0.0,
    transmission:      0.80,
    thickness:         1.4,
    ior:               1.55,
    transparent:       true,
    opacity:           0.85,
    side:              THREE.DoubleSide,
    flatShading:       true,
    depthWrite:        false,
  });
  rightGroup.add(new THREE.Mesh(rOutGeo, rOutMat));
  rightGroup.add(new THREE.LineSegments(
    new THREE.EdgesGeometry(rOutGeo),
    new THREE.LineBasicMaterial({ color: 0xbb88ff, transparent: true, opacity: 1.0 })
  ));

  const rMidGeo = new THREE.IcosahedronGeometry(1.15, 0);
  const rMidMat = new THREE.MeshPhysicalMaterial({
    color:             0x8855ff,
    emissive:          new THREE.Color(0x180040),
    emissiveIntensity: 0.45,
    roughness:         0.04,
    metalness:         0.0,
    transmission:      0.72,
    thickness:         0.9,
    ior:               1.55,
    transparent:       true,
    opacity:           0.80,
    side:              THREE.DoubleSide,
    flatShading:       true,
    depthWrite:        false,
  });
  const rMidMesh = new THREE.Mesh(rMidGeo, rMidMat);
  rightGroup.add(rMidMesh);
  rightGroup.add(new THREE.LineSegments(
    new THREE.EdgesGeometry(rMidGeo),
    new THREE.LineBasicMaterial({ color: 0xddbbff, transparent: true, opacity: 0.95 })
  ));

  const rCoreGeo = new THREE.OctahedronGeometry(0.52, 0);
  const rCoreMat = new THREE.MeshBasicMaterial({ color: 0xbbaaff });
  const rCoreMesh = new THREE.Mesh(rCoreGeo, rCoreMat);
  rightGroup.add(rCoreMesh);
  rightGroup.add(new THREE.LineSegments(
    new THREE.EdgesGeometry(rCoreGeo),
    new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.95 })
  ));

  const gemLightR = new THREE.PointLight(0xaa55ff, 3.0, 6);
  rightGroup.add(gemLightR);

  // Orbital rings
  const mkRing = (r, tube, col, op, rx, ry) => {
    const m = new THREE.Mesh(
      new THREE.TorusGeometry(r, tube, 3, 90),
      new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: op })
    );
    m.rotation.set(rx, ry, 0); return m;
  };
  const ring1 = mkRing(2.20, 0.010, 0x8844ee, 0.40, Math.PI/2, 0);
  const ring2 = mkRing(2.45, 0.008, 0x6622cc, 0.28, 0.45, 0.20);
  rightGroup.add(ring1, ring2);

  /* ═══════════════════════════════════════════════════════
     PARTICLE STREAMS  (FAKE / FACT)
  ════════════════════════════════════════════════════════ */
  const N_P = 160;
  function makeStream(dir, color, coneAngle, maxDist) {
    const tmp  = Math.abs(dir.y) < 0.8 ? new THREE.Vector3(0,1,0) : new THREE.Vector3(1,0,0);
    const u    = new THREE.Vector3().crossVectors(dir, tmp).normalize();
    const v    = new THREE.Vector3().crossVectors(dir, u).normalize();
    const pos  = new Float32Array(N_P * 3);
    const vel  = [];
    const spawn = (i) => {
      const t  = Math.random() * maxDist;
      const a  = Math.random() * Math.PI * 2;
      const r  = Math.random() * coneAngle * (t / maxDist);
      pos[i*3]   = dir.x*t + (u.x*Math.cos(a)+v.x*Math.sin(a))*r;
      pos[i*3+1] = dir.y*t + (u.y*Math.cos(a)+v.y*Math.sin(a))*r;
      pos[i*3+2] = dir.z*t + (u.z*Math.cos(a)+v.z*Math.sin(a))*r;
      const spd = 0.018 + Math.random()*0.012;
      const jA = (Math.random()-0.5)*0.004, jB = (Math.random()-0.5)*0.004;
      vel[i] = { x:dir.x*spd+u.x*jA+v.x*jB, y:dir.y*spd+u.y*jA+v.y*jB, z:dir.z*spd+u.z*jA+v.z*jB };
    };
    for (let i=0; i<N_P; i++) spawn(i);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({ color, size:0.075, sizeAttenuation:true, transparent:true, opacity:0.88 });
    return { pos, vel, geo, mat, pts: new THREE.Points(geo, mat), dir, u, v, maxDist, spawn };
  }
  const fakeDir   = new THREE.Vector3(-0.45, -0.82, 0.05).normalize();
  const factDir   = new THREE.Vector3( 0.40,  0.87, 0.06).normalize();
  const fakeStream = makeStream(fakeDir, 0xff00bb, 0.75, 5.2);
  const factStream = makeStream(factDir, 0x00ff77, 0.65, 4.8);
  leftGroup.add(fakeStream.pts, factStream.pts);

  // FAKE / FACT labels
  const mkLabel = (text, col) => {
    const d = document.createElement('div');
    d.textContent = text;
    d.style.cssText = `position:absolute;font-family:'Share Tech Mono',monospace;font-size:0.80rem;letter-spacing:5px;color:${col};text-shadow:0 0 8px ${col},0 0 20px ${col},0 0 40px ${col};pointer-events:none;z-index:8;transform:translate(-50%,-50%);white-space:nowrap;font-weight:700;`;
    wrap.insertBefore(d, hintBar);
    return d;
  };
  const fakeLabel = mkLabel('FAKE', '#ff00bb');
  const factLabel = mkLabel('FACT', '#00ff77');

  /* ═══════════════════════════════════════════════════════
     CS2 MINIMAP / CHART PANELS
  ════════════════════════════════════════════════════════ */
  const mkMapTex = () => {
    const c = document.createElement('canvas'); c.width = c.height = 128;
    const x = c.getContext('2d');
    x.fillStyle='#04071a'; x.fillRect(0,0,128,128);
    x.strokeStyle='rgba(80,55,200,0.30)'; x.lineWidth=0.5;
    for(let i=0;i<128;i+=16){ x.beginPath();x.moveTo(i,0);x.lineTo(i,128);x.stroke(); x.beginPath();x.moveTo(0,i);x.lineTo(128,i);x.stroke(); }
    x.strokeStyle='rgba(120,90,255,0.85)'; x.lineWidth=1.5;
    [[14,32],[32,18],[60,34],[74,22],[86,54],[64,70],[42,64],[22,58],[14,32]].forEach((p,i)=>i?x.lineTo(p[0],p[1]):x.moveTo(p[0],p[1]));
    x.stroke();
    ['#00ff88','#ff4444','#ffcc00','#4488ff'].forEach(col=>{
      x.fillStyle=col;
      for(let i=0;i<3;i++){x.beginPath();x.arc(Math.random()*110+9,Math.random()*110+9,2.5,0,Math.PI*2);x.fill();}
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
    x.strokeStyle='#00ff88'; x.lineWidth=2; x.beginPath();
    [62,50,38,48,28,40,18,32,22,30].forEach((v,i)=>i?x.lineTo(i*(180/9),v):x.moveTo(0,v)); x.stroke();
    x.fillStyle='rgba(0,255,136,0.08)'; x.lineTo(180,90);x.lineTo(0,90);x.closePath();x.fill();
    x.strokeStyle='rgba(140,100,255,0.60)'; x.lineWidth=1.4; x.beginPath();
    [74,67,60,54,50,57,46,52,44,48].forEach((v,i)=>i?x.lineTo(i*(180/9),v):x.moveTo(0,v)); x.stroke();
    return new THREE.CanvasTexture(c);
  };
  const planeMat = (tex) => new THREE.MeshBasicMaterial({ map:tex, transparent:true, opacity:0.80, side:THREE.DoubleSide });
  const map1  = new THREE.Mesh(new THREE.PlaneGeometry(1.05,1.05), planeMat(mkMapTex()));
  map1.position.set(2.1,1.55,0.15); map1.rotation.y=-0.28; rightGroup.add(map1);
  const map2  = new THREE.Mesh(new THREE.PlaneGeometry(0.95,0.95), planeMat(mkMapTex()));
  map2.position.set(2.1,-1.45,0.12); map2.rotation.y=-0.24; rightGroup.add(map2);
  const chart = new THREE.Mesh(new THREE.PlaneGeometry(1.55,0.78), planeMat(mkChartTex()));
  chart.position.set(2.4,0.1,0.14); chart.rotation.y=-0.22; rightGroup.add(chart);

  /* ④ Panel border overlays — sized to SCENE_H only, no overflow */
  ['left','right'].forEach((side, i) => {
    const d = document.createElement('div');
    const col = i===0 ? 'rgba(0,200,240,0.18)' : 'rgba(120,60,255,0.20)';
    const sh  = i===0 ? 'inset 0 0 80px rgba(0,180,240,0.05)' : 'inset 0 0 80px rgba(110,50,255,0.06)';
    d.style.cssText = `position:absolute;top:0;${side}:0;width:calc(50% - 7px);height:${SCENE_H}px;border:1px solid ${col};border-radius:14px;pointer-events:none;z-index:4;box-shadow:${sh};`;
    wrap.appendChild(d);
  });

  /* ── Widgets bar ── */
  const GS = 'background:rgba(3,6,18,0.78);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(0,240,255,0.10);border-radius:7px;';
  const wBar = document.createElement('div');
  wBar.style.cssText = `position:absolute;bottom:14px;left:50%;transform:translateX(-50%);display:flex;gap:10px;font-family:'Share Tech Mono',monospace;font-size:0.57rem;letter-spacing:1px;pointer-events:none;z-index:5;white-space:nowrap;`;
  [{key:'api',label:'API REQ/MIN',val:'120',col:'#00f5ff'},{key:'gw',label:'FASTAPI',val:'STABLE',col:'#00ff88'},{key:'mdl',label:'ACTIVE MODELS',val:'2',col:'#8855ff'}].forEach(w=>{
    const d=document.createElement('div'); d.style.cssText=GS+';padding:5px 14px;text-align:center;';
    d.innerHTML=`<div style="color:${w.col};opacity:0.40;font-size:0.50rem;letter-spacing:2px;">${w.label}</div><div style="color:${w.col};font-size:0.70rem;margin-top:2px;" data-wid="${w.key}">${w.val}</div>`;
    wBar.appendChild(d);
  });
  wrap.insertBefore(wBar, hintBar);
  setInterval(()=>{ const el=wrap.querySelector('[data-wid="api"]'); if(el) el.textContent=90+Math.floor(Math.random()*60); },1200);

  /* ── Log panel + Info card ── */
  const logPanel = document.createElement('div');
  logPanel.style.cssText = GS+`;position:absolute;top:14px;left:50%;transform:translateX(-50%);padding:12px 22px;font-family:'Share Tech Mono',monospace;font-size:0.62rem;line-height:1.9;color:#00f5ff;pointer-events:none;opacity:0;transition:opacity .2s;z-index:10;min-width:230px;white-space:nowrap;`;
  wrap.insertBefore(logPanel, hintBar);
  const infoCard = document.createElement('div');
  infoCard.style.cssText = GS+`;position:absolute;top:50%;transform:translateY(-50%);padding:14px 18px;font-family:'Share Tech Mono',monospace;font-size:0.59rem;line-height:1.9;pointer-events:none;opacity:0;transition:opacity .25s;z-index:11;width:188px;`;
  wrap.insertBefore(infoCard, hintBar);

  const LOGS = {
    left: ['> Initializing NLP engine...','> Scanning source credibility...','> Cross-referencing 142 outlets...','> Bias score: 12.3%','> VERDICT: 78.4% credibility ✓'],
    right:['> Loading match replay...','> Analyzing 1,247 positions...','> Crosshair errors: 34 detected','> Win probability boost: +14.2%','> Coach report ready ✓'],
  };
  const INFO = {
    left: {col:'#00f5ff',brd:'rgba(0,245,255,0.18)',cardLeft:'2%',   title:'FAKE NEWS DETECTOR',lines:['Stack: Python + FastAPI','Engine: OpenAI GPT-4o','Sources: 142 databases','Accuracy: 94.2%','Latency: ~1.2 s / req']},
    right:{col:'#8855ff',brd:'rgba(136,85,255,0.18)',cardLeft:'67%', title:'CS2 AI COACH',       lines:['Stack: Python + Aiogram','Engine: Groq LLaMA-3','Input: match replays','Winrate boost: +14.2%','400+ sessions logged']},
  };

  const svgEl = document.createElementNS('http://www.w3.org/2000/svg','svg');
  svgEl.style.cssText='position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9;overflow:visible;';
  wrap.insertBefore(svgEl, hintBar);
  const mkLine = col => {
    const l=document.createElementNS('http://www.w3.org/2000/svg','line');
    l.setAttribute('stroke',col); l.setAttribute('stroke-width','0.8'); l.setAttribute('stroke-dasharray','6,4'); l.setAttribute('opacity','0');
    svgEl.appendChild(l); return l;
  };
  const leaderL = mkLine('#00f5ff'), leaderR = mkLine('#8855ff');

  let activeNode=null, logIdx=0, logTimer=null;
  function openPanel(side) {
    if(activeNode===side){closePanel();return;}
    activeNode=side;
    const inf=INFO[side];
    logPanel.style.borderColor=inf.brd; logPanel.style.color=inf.col;
    logPanel.style.left=side==='left'?'26%':'68%'; logPanel.style.opacity='1';
    logIdx=0; clearInterval(logTimer);
    const step=()=>{ logPanel.innerHTML=LOGS[side].slice(0,logIdx+1).join('<br>'); if(logIdx<LOGS[side].length-1)logIdx++; };
    step(); logTimer=setInterval(step,520);
    infoCard.style.borderColor=inf.brd; infoCard.style.color=inf.col;
    infoCard.style.left=inf.cardLeft; infoCard.style.opacity='1';
    infoCard.innerHTML=`<div style="opacity:.40;font-size:.52rem;letter-spacing:2px;margin-bottom:8px;">// ${inf.title}</div>`+inf.lines.map(l=>`<div>▸ ${l}</div>`).join('');
    leaderL.setAttribute('opacity',side==='left'?'0.70':'0');
    leaderR.setAttribute('opacity',side==='right'?'0.70':'0');
  }
  function closePanel() {
    activeNode=null; clearInterval(logTimer);
    logPanel.style.opacity='0'; infoCard.style.opacity='0';
    leaderL.setAttribute('opacity','0'); leaderR.setAttribute('opacity','0');
  }

  /* ── Post-processing ── */
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(W, CANVAS_H), 0.85, 0.60, 0.22);
  composer.addPass(bloom);

  /* ── Interaction ── */
  const ndc       = new THREE.Vector2();
  const mWorld    = new THREE.Vector3();
  const pickPlane = new THREE.Plane(new THREE.Vector3(0,0,1), 0);
  const raycaster = new THREE.Raycaster();
  let   hovSide   = null;
  const spring    = {x:0,y:0,vx:0,vy:0};

  const setNDC = e => {
    const r=renderer.domElement.getBoundingClientRect();
    ndc.set(((e.clientX-r.left)/r.width)*2-1, -((e.clientY-r.top)/r.height)*2+1);
  };
  const proj = v3 => {
    const v=v3.clone().project(camera);
    return {x:(v.x*0.5+0.5)*W, y:(-v.y*0.5+0.5)*CANVAS_H};
  };
  const pickSide = () => {
    const mx=(ndc.x*0.5+0.5)*W, my=(-ndc.y*0.5+0.5)*CANVAS_H;
    const lp=proj(leftGroup.position), rp=proj(rightGroup.position);
    const dl=Math.hypot(mx-lp.x,my-lp.y), dr=Math.hypot(mx-rp.x,my-rp.y);
    const thr=W*0.18;
    if(dl<thr&&dl<dr) return 'left';
    if(dr<thr&&dr<dl) return 'right';
    return null;
  };

  renderer.domElement.addEventListener('mousemove', e=>{
    setNDC(e);
    const ns=pickSide();
    if(ns!==hovSide){
      hovSide=ns;
      if(ns==='left'){ gsap.to(leftGroup.scale,{x:1.12,y:1.12,z:1.12,duration:0.5,ease:'power2.out'}); gsap.to(rightGroup.scale,{x:0.92,y:0.92,z:0.92,duration:0.4,ease:'power2.out'}); }
      else if(ns==='right'){ gsap.to(rightGroup.scale,{x:1.12,y:1.12,z:1.12,duration:0.5,ease:'power2.out'}); gsap.to(leftGroup.scale,{x:0.92,y:0.92,z:0.92,duration:0.4,ease:'power2.out'}); }
      else{ gsap.to(leftGroup.scale,{x:1,y:1,z:1,duration:0.7,ease:'elastic.out(1,0.5)'}); gsap.to(rightGroup.scale,{x:1,y:1,z:1,duration:0.7,ease:'elastic.out(1,0.5)'}); }
    }
    raycaster.setFromCamera(ndc, camera);
    raycaster.ray.intersectPlane(pickPlane, mWorld);
  });
  renderer.domElement.addEventListener('mouseleave',()=>{
    hovSide=null; mWorld.set(0,0,0);
    gsap.to(leftGroup.scale,{x:1,y:1,z:1,duration:0.7,ease:'elastic.out(1,0.5)'}); gsap.to(rightGroup.scale,{x:1,y:1,z:1,duration:0.7,ease:'elastic.out(1,0.5)'});
  });
  renderer.domElement.addEventListener('click',e=>{ setNDC(e); const s=pickSide(); if(s)openPanel(s); else closePanel(); });

  /* ── Intro animation ── */
  leftGroup.scale.setScalar(0.001); rightGroup.scale.setScalar(0.001);
  gsap.to(leftGroup.scale,  {x:1,y:1,z:1,duration:1.4,delay:0.30,ease:'elastic.out(1,0.42)'});
  gsap.to(rightGroup.scale, {x:1,y:1,z:1,duration:1.4,delay:0.65,ease:'elastic.out(1,0.42)'});

  /* ── position gems at panel centres ── */
  const positionGems = () => {
    const x = getGemX();
    leftGroup.position.set(-x, 0, 0);
    rightGroup.position.set( x, 0, 0);
  };
  positionGems();

  /* ── Animation loop ── */
  const clock = new THREE.Clock();
  const lWP=new THREE.Vector3(), rWP=new THREE.Vector3();
  const fakeEnd=new THREE.Vector3(), factEnd=new THREE.Vector3();
  let autoL=0, autoR=0;

  (function loop(){
    requestAnimationFrame(loop);
    const dt=clock.getDelta(), t=clock.getElapsedTime();
    const hl=hovSide==='left', hr=hovSide==='right', any=hl||hr;

    const tx=(mWorld.y/3)*0.14, ty=(mWorld.x/5)*0.12;
    spring.vx+=(tx-spring.x)*0.055; spring.vx*=0.82;
    spring.vy+=(ty-spring.y)*0.055; spring.vy*=0.82;
    spring.x+=spring.vx; spring.y+=spring.vy;

    autoL += dt*(hl?1.4:0.20);
    leftGroup.rotation.y = autoL + spring.y;
    leftGroup.rotation.x = Math.sin(t*0.35)*0.08 + spring.x;
    midMeshL.rotation.y -= dt*(hl?1.8:0.45);
    midMeshL.rotation.z += dt*(hl?1.2:0.30);
    coreMeshL.rotation.y += dt*(hl?3.0:0.80);
    coreMeshL.rotation.x += dt*(hl?2.0:0.55);
    gemLightL.intensity = 2.5 + 1.2*Math.sin(t*2.4);  // ① gentler pulse
    outerMat.emissiveIntensity = 0.28 + 0.12*Math.sin(t*1.7);

    autoR -= dt*(hr?1.4:0.20);
    rightGroup.rotation.y = autoR - spring.y;
    rightGroup.rotation.x = Math.sin(t*0.40+1.2)*0.07 - spring.x;
    rMidMesh.rotation.y -= dt*(hr?1.6:0.40);
    rMidMesh.rotation.z += dt*(hr?1.1:0.28);
    rCoreMesh.rotation.y += dt*(hr?3.2:0.85);
    rCoreMesh.rotation.x += dt*(hr?2.1:0.55);
    ring1.rotation.z += dt*(hr?2.0:0.55);
    ring2.rotation.x += dt*(hr?1.5:0.42);
    gemLightR.intensity = 2.5 + 1.2*Math.sin(t*2.1+1);
    rOutMat.emissiveIntensity = 0.24 + 0.10*Math.sin(t*1.5+0.5);

    bloom.strength = lerp(bloom.strength, any?1.0:0.82, 0.05);

    for(const s of [fakeStream, factStream]){
      for(let i=0;i<N_P;i++){
        s.pos[i*3]+=s.vel[i].x; s.pos[i*3+1]+=s.vel[i].y; s.pos[i*3+2]+=s.vel[i].z;
        if(Math.hypot(s.pos[i*3],s.pos[i*3+1],s.pos[i*3+2])>s.maxDist) s.spawn(i);
      }
      s.geo.attributes.position.needsUpdate=true;
    }

    fakeEnd.set(fakeDir.x*4.5,fakeDir.y*4.5,fakeDir.z*4.5).applyMatrix4(leftGroup.matrixWorld);
    factEnd.set(factDir.x*4.0,factDir.y*4.0,factDir.z*4.0).applyMatrix4(leftGroup.matrixWorld);
    const fp=proj(fakeEnd), ftp=proj(factEnd);
    fakeLabel.style.left=fp.x+'px'; fakeLabel.style.top=fp.y+'px';
    factLabel.style.left=ftp.x+'px'; factLabel.style.top=ftp.y+'px';

    if(activeNode){
      leftGroup.getWorldPosition(lWP); rightGroup.getWorldPosition(rWP);
      const wR=wrap.getBoundingClientRect(), cR=infoCard.getBoundingClientRect();
      const cx=cR.left-wR.left+cR.width*0.5, cy=cR.top-wR.top+cR.height*0.5;
      if(activeNode==='left'){const s=proj(lWP);leaderL.setAttribute('x1',s.x);leaderL.setAttribute('y1',s.y);leaderL.setAttribute('x2',cx+cR.width*0.5);leaderL.setAttribute('y2',cy);}
      else{const s=proj(rWP);leaderR.setAttribute('x1',s.x);leaderR.setAttribute('y1',s.y);leaderR.setAttribute('x2',cx-cR.width*0.5);leaderR.setAttribute('y2',cy);}
    }

    composer.render();
  })();

  /* ── Resize ── */
  window.addEventListener('resize', ()=>{
    W = wrap.clientWidth;
    renderer.setSize(W, CANVAS_H);
    composer.setSize(W, CANVAS_H);
    camera.aspect = W / CANVAS_H;
    camera.updateProjectionMatrix();
    bloom.resolution.set(W, CANVAS_H);
    positionGems();
  });
}

/* Wait for window load so GSAP CDN script is guaranteed ready */
window.addEventListener('load', () => {
  requestAnimationFrame(() => requestAnimationFrame(init));
});
