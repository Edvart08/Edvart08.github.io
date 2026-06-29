<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Oguzok — Full-Stack & AI Developer</title>
  <meta name="description" content="Full-Stack & AI Developer from Vladikavkaz. Building high-performance web services and AI systems.">
  <meta property="og:title" content="Oguzok — Full-Stack & AI Developer">
  <meta property="og:description" content="Building intelligent services powered by LLMs and modern APIs.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Rajdhani:wght@400;500;600;700&family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet">

  <script>if('scrollRestoration'in history)history.scrollRestoration='manual';window.addEventListener('load',()=>window.scrollTo(0,0));</script>
  <script type="importmap">
  {
    "imports": {
      "three": "https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.min.js",
      "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.170.0/examples/jsm/"
    }
  }
  </script>

  <style>
    :root {
      --bg:     #05050a;
      --cyan:   #00f5ff;
      --purple: #bf5fff;
      --pink:   #ff2d78;
      --green:  #00ff88;
      --text:   #d8d8f0;
      --dim:    #7070a0;
      --glass:  rgba(255,255,255,0.03);
    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Rajdhani', sans-serif; background: var(--bg); color: var(--text); overflow-x: hidden; cursor: none; }

    /* ── Loader ── */
    #loader {
      position: fixed; inset: 0; z-index: 9000; background: var(--bg);
      display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px;
      transition: opacity 0.6s ease, visibility 0.6s ease;
    }
    #loader.hidden { opacity: 0; visibility: hidden; }
    .loader-text { font-family: 'Share Tech Mono', monospace; font-size: 0.85rem; color: var(--cyan); letter-spacing: 3px; text-transform: uppercase; }
    .loader-bar-wrap { width: 200px; height: 2px; background: rgba(0,245,255,0.15); }
    .loader-bar { height: 100%; background: var(--cyan); box-shadow: 0 0 10px var(--cyan); width: 0; animation: loadBar 1.8s ease forwards; }
    @keyframes loadBar { to { width: 100%; } }

    /* ── BG layers ── */
    #bg-canvas { position: fixed; inset: 0; z-index: 0; pointer-events: none; }
    .grid-overlay {
      position: fixed; inset: 0; z-index: 0; pointer-events: none;
      background-image: linear-gradient(rgba(0,245,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.025) 1px, transparent 1px);
      background-size: 60px 60px;
    }
    .scanlines {
      position: fixed; inset: 0; z-index: 300; pointer-events: none;
      background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px);
    }
    .aurora { position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; }
    .blob { position: absolute; border-radius: 50%; filter: blur(100px); }
    .blob-1 { width: 700px; height: 700px; background: radial-gradient(circle, rgba(0,245,255,0.055), transparent 70%); top: -200px; right: -150px; animation: blobA 22s ease-in-out infinite; }
    .blob-2 { width: 550px; height: 550px; background: radial-gradient(circle, rgba(191,95,255,0.045), transparent 70%); bottom: -150px; left: -100px; animation: blobB 28s ease-in-out infinite; }
    .blob-3 { width: 350px; height: 350px; background: radial-gradient(circle, rgba(0,255,136,0.03), transparent 70%); top: 40%; left: 35%; animation: blobC 18s ease-in-out infinite; }
    @keyframes blobA { 0%,100%{transform:translate(0,0)} 33%{transform:translate(-60px,80px)} 66%{transform:translate(80px,-40px)} }
    @keyframes blobB { 0%,100%{transform:translate(0,0)} 33%{transform:translate(70px,-70px)} 66%{transform:translate(-50px,50px)} }
    @keyframes blobC { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-90px,70px)} }

    .mouse-glow { position: fixed; width: 600px; height: 600px; border-radius: 50%; pointer-events: none; z-index: 0; background: radial-gradient(circle, rgba(0,245,255,0.035) 0%, transparent 70%); transform: translate(-50%,-50%); transition: left .08s, top .08s; }

    /* ── Cursor ── */
    .cur-dot { position: fixed; width: 8px; height: 8px; background: var(--cyan); border-radius: 50%; pointer-events: none; z-index: 9999; box-shadow: 0 0 8px var(--cyan),0 0 20px var(--cyan); transform: translate(-50%,-50%); transition: transform 0.1s; }
    .cur-ring { position: fixed; width: 28px; height: 28px; border: 1px solid rgba(0,245,255,0.5); border-radius: 50%; pointer-events: none; z-index: 9998; transform: translate(-50%,-50%); transition: width .2s, height .2s, opacity .2s; }
    body:has(a:hover, button:hover) .cur-dot { transform: translate(-50%,-50%) scale(2); }
    body:has(a:hover, button:hover) .cur-ring { width: 50px; height: 50px; opacity: 0.4; }

    /* ── Nav ── */
    nav { position: fixed; top: 0; left: 0; right: 0; z-index: 500; padding: 20px 8%; display: flex; align-items: center; justify-content: space-between; backdrop-filter: blur(20px); background: rgba(5,5,10,0.65); border-bottom: 1px solid rgba(0,245,255,0.08); }
    .nav-logo { font-family: 'Orbitron', monospace; font-size: 1rem; font-weight: 900; color: var(--cyan); letter-spacing: 6px; text-shadow: 0 0 20px var(--cyan); }
    .nav-right { display: flex; align-items: center; gap: 32px; }
    .nav-links { display: flex; gap: 32px; list-style: none; }
    .nav-links a { font-family: 'Share Tech Mono', monospace; font-size: 0.75rem; letter-spacing: 2px; color: var(--dim); text-decoration: none; text-transform: uppercase; position: relative; transition: color .3s; }
    .nav-links a::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 1px; background: var(--cyan); transition: width .3s; }
    .nav-links a:hover, .nav-links a.active { color: var(--cyan); }
    .nav-links a:hover::after, .nav-links a.active::after { width: 100%; }
    .lang-btn { font-family: 'Share Tech Mono', monospace; font-size: 0.72rem; letter-spacing: 2px; color: var(--dim); background: none; border: 1px solid rgba(0,245,255,0.2); border-radius: 4px; padding: 6px 14px; cursor: none; transition: all .3s; }
    .lang-btn:hover { color: var(--cyan); border-color: rgba(0,245,255,0.5); box-shadow: 0 0 14px rgba(0,245,255,0.15); }

    /* ── Hero ── */
    #hero { position: relative; z-index: 1; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; padding: 0 8%; padding-top: 80px; }
    .hero-tag { font-family: 'Share Tech Mono', monospace; font-size: 0.8rem; letter-spacing: 4px; color: var(--green); margin-bottom: 24px; opacity: 0; animation: fadeUp .7s ease 2s forwards; }
    .hero-name { font-family: 'Orbitron', sans-serif; font-size: clamp(3.5rem,9vw,8rem); font-weight: 900; line-height: .95; color: #fff; margin-bottom: 16px; opacity: 0; animation: fadeUp .7s ease 2.2s forwards; }
    .glitch { position: relative; }
    .glitch::before, .glitch::after { content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
    .glitch::before { color: var(--cyan); clip-path: polygon(0 20%,100% 20%,100% 45%,0 45%); animation: glT 5s infinite 3s; text-shadow: -3px 0 var(--cyan); }
    .glitch::after  { color: var(--pink); clip-path: polygon(0 60%,100% 60%,100% 80%,0 80%); animation: glB 5s infinite 3s; text-shadow: 3px 0 var(--pink); }
    @keyframes glT { 0%,88%,100%{transform:translate(0);opacity:1} 90%{transform:translate(-5px,1px)} 92%{transform:translate(5px,-1px)} 94%{transform:translate(-3px,2px);opacity:.8} }
    @keyframes glB { 0%,88%,100%{transform:translate(0);opacity:1} 91%{transform:translate(5px,-1px)} 93%{transform:translate(-5px,1px)} 95%{transform:translate(3px,-2px);opacity:.7} }
    .hero-role { font-family: 'Orbitron', sans-serif; font-size: clamp(1rem,2.5vw,1.6rem); color: var(--cyan); text-shadow: 0 0 25px var(--cyan); margin-bottom: 28px; height: 2.2rem; display: flex; align-items: center; gap: 4px; opacity: 0; animation: fadeUp .7s ease 2.4s forwards; }
    .type-cursor { width: 2px; height: 1.3em; background: var(--cyan); animation: blink .7s step-end infinite; flex-shrink: 0; }
    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
    .hero-bio { max-width: 540px; color: var(--dim); font-size: 1.1rem; line-height: 1.75; margin-bottom: 44px; opacity: 0; animation: fadeUp .7s ease 2.6s forwards; }
    .hero-btns { display: flex; gap: 16px; flex-wrap: wrap; opacity: 0; animation: fadeUp .7s ease 2.8s forwards; }
    .btn { padding: 14px 34px; font-family: 'Orbitron', sans-serif; font-size: .72rem; letter-spacing: 3px; text-transform: uppercase; text-decoration: none; border-radius: 4px; position: relative; overflow: hidden; transition: all .3s; display: inline-block; }
    .btn::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg,transparent,rgba(255,255,255,.07),transparent); transition: left .5s; }
    .btn:hover::before { left: 100%; }
    .btn-primary { border: 1px solid var(--cyan); color: var(--cyan); text-shadow: 0 0 8px var(--cyan); box-shadow: 0 0 20px rgba(0,245,255,.15),inset 0 0 20px rgba(0,245,255,.04); }
    .btn-primary:hover { box-shadow: 0 0 40px rgba(0,245,255,.35),inset 0 0 40px rgba(0,245,255,.08); }
    .btn-outline { border: 1px solid rgba(191,95,255,.5); color: var(--purple); background: rgba(191,95,255,.05); }
    .btn-outline:hover { background: rgba(191,95,255,.1); box-shadow: 0 0 30px rgba(191,95,255,.25); }
    .scroll-hint { position: absolute; bottom: 36px; left: 8%; display: flex; flex-direction: column; align-items: flex-start; gap: 8px; opacity: 0; animation: fadeIn 1s ease 3.5s forwards; }
    .scroll-hint span { font-family: 'Share Tech Mono', monospace; font-size: .65rem; letter-spacing: 3px; color: var(--dim); text-transform: uppercase; }
    .scroll-line { width: 1px; height: 50px; background: linear-gradient(to bottom,var(--cyan),transparent); animation: scrollPulse 2s ease-in-out infinite; }
    @keyframes scrollPulse { 0%{transform:scaleY(0);transform-origin:top;opacity:1} 50%{transform:scaleY(1);transform-origin:top} 51%{transform:scaleY(1);transform-origin:bottom} 100%{transform:scaleY(0);transform-origin:bottom;opacity:.3} }

    /* ── Stats strip ── */
    #stats { position: relative; z-index: 1; padding: 0 8% 100px; }
    .stats-grid { display: flex; gap: 0; }
    .stat-item { flex: 1; padding: 36px 40px; border: 1px solid rgba(0,245,255,0.1); position: relative; text-align: center; background: rgba(0,245,255,0.02); transition: background .3s; }
    .stat-item:first-child { border-radius: 12px 0 0 12px; }
    .stat-item:last-child  { border-radius: 0 12px 12px 0; }
    .stat-item:hover { background: rgba(0,245,255,0.05); }
    .stat-item + .stat-item { border-left: none; }
    .stat-num { font-family: 'Orbitron', monospace; font-size: clamp(2rem,4vw,3rem); font-weight: 900; color: var(--cyan); text-shadow: 0 0 20px rgba(0,245,255,.4); line-height: 1; }
    .stat-suffix { color: var(--purple); }
    .stat-label { font-family: 'Share Tech Mono', monospace; font-size: .72rem; letter-spacing: 2px; color: var(--dim); text-transform: uppercase; margin-top: 8px; }

    /* ── Section base ── */
    section { position: relative; z-index: 1; padding: 120px 8%; }
    .section-label { font-family: 'Share Tech Mono', monospace; font-size: .72rem; letter-spacing: 5px; color: var(--cyan); text-transform: uppercase; display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
    .section-label::before { content: ''; width: 28px; height: 1px; background: var(--cyan); }
    .section-title { font-family: 'Orbitron', sans-serif; font-size: clamp(2rem,4vw,3.2rem); font-weight: 700; color: #fff; line-height: 1.1; }
    .section-header { margin-bottom: 70px; }

    /* ── About ── */
    .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
    .about-text p { color: var(--dim); font-size: 1.05rem; line-height: 1.8; margin-bottom: 18px; }
    .about-text mark { background: none; color: var(--cyan); text-shadow: 0 0 10px rgba(0,245,255,.35); }
    .about-text p.ai-highlight { border-left: 2px solid var(--purple); padding-left: 16px; color: var(--text); }
    .about-text p.ai-highlight mark { color: var(--purple); text-shadow: 0 0 10px rgba(191,95,255,.35); }
    .stack-label { font-family: 'Share Tech Mono', monospace; font-size: .75rem; color: var(--dim); margin: 32px 0 14px; letter-spacing: 2px; }
    .tech-grid { display: flex; flex-wrap: wrap; gap: 10px; }
    .tech-item { padding: 7px 16px; font-family: 'Share Tech Mono', monospace; font-size: .78rem; color: var(--cyan); border: 1px solid rgba(0,245,255,.2); border-radius: 4px; background: rgba(0,245,255,.04); transition: all .3s; }
    .tech-item:hover { background: rgba(0,245,255,.1); box-shadow: 0 0 16px rgba(0,245,255,.2); transform: translateY(-2px); }
    .tech-item.ai { color: var(--purple); border-color: rgba(191,95,255,.25); background: rgba(191,95,255,.04); }
    .tech-item.ai:hover { background: rgba(191,95,255,.1); box-shadow: 0 0 16px rgba(191,95,255,.2); }

    /* Terminal */
    .terminal-card { background: #0c0c16; border: 1px solid rgba(0,245,255,.15); border-radius: 12px; overflow: hidden; box-shadow: 0 0 60px rgba(0,245,255,.06); }
    .terminal-header { background: #12121e; padding: 12px 16px; display: flex; align-items: center; gap: 8px; border-bottom: 1px solid rgba(0,245,255,.1); }
    .t-dot { width: 12px; height: 12px; border-radius: 50%; }
    .t-dot.r{background:#ff5f57} .t-dot.y{background:#ffbd2e} .t-dot.g{background:#28ca42}
    .terminal-title { font-family: 'Share Tech Mono', monospace; font-size: .75rem; color: var(--dim); margin-left: 8px; }
    .terminal-body { padding: 28px 24px; }
    .terminal-body pre { font-family: 'Share Tech Mono', monospace; font-size: .82rem; line-height: 1.9; white-space: pre-wrap; }
    .tk{color:var(--purple)} .tcl{color:var(--cyan)} .ts{color:var(--green)} .tf{color:#ffbd4f} .tc{color:var(--dim)}

    /* ── Skills ── */
    .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 80px; }
    .skill-row { margin-bottom: 32px; }
    .skill-meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
    .skill-name { font-family: 'Share Tech Mono', monospace; font-size: .82rem; color: var(--text); letter-spacing: 1px; }
    .skill-name.ai-skill { color: var(--purple); }
    .skill-pct { font-family: 'Orbitron', monospace; font-size: .72rem; color: var(--cyan); min-width: 36px; text-align: right; }
    .skill-track { height: 3px; background: rgba(0,245,255,.1); border-radius: 2px; position: relative; }
    .skill-fill { height: 100%; width: 0; border-radius: 2px; box-shadow: 0 0 12px rgba(0,245,255,.6),0 0 24px rgba(0,245,255,.2); transition: width 1.3s cubic-bezier(.16,1,.3,1); position: relative; background: linear-gradient(90deg,var(--cyan),var(--purple)); }
    .skill-fill.ai-fill { background: linear-gradient(90deg, var(--purple), #ff79c6); box-shadow: 0 0 12px rgba(191,95,255,.6),0 0 24px rgba(191,95,255,.2); }
    .skill-fill::after { content: ''; position: absolute; right: -4px; top: 50%; transform: translateY(-50%); width: 8px; height: 8px; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 8px var(--cyan),0 0 16px var(--cyan); opacity: 0; transition: opacity .3s .8s; }
    .skill-fill.ai-fill::after { background: var(--purple); box-shadow: 0 0 8px var(--purple),0 0 16px var(--purple); }
    .skill-fill.go::after { opacity: 1; }

    /* ── Portfolio ── */
    .projects-grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(340px,1fr)); gap: 28px; perspective: 1200px; }
    .project-card { background: var(--glass); border: 1px solid rgba(0,245,255,.1); border-radius: 16px; padding: 40px 36px; position: relative; overflow: hidden; backdrop-filter: blur(8px); transform-style: preserve-3d; will-change: transform; transition: box-shadow .4s, border-color .4s; }
    .project-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg,transparent,var(--cyan),transparent); transform: scaleX(0); transition: transform .4s; }
    .project-card:hover::before { transform: scaleX(1); }
    .project-card:hover { border-color: rgba(0,245,255,.3); box-shadow: 0 24px 80px rgba(0,245,255,.1),0 0 0 1px rgba(0,245,255,.08); }
    .project-card.purple:hover { border-color: rgba(191,95,255,.3); box-shadow: 0 24px 80px rgba(191,95,255,.12); }
    .project-card.purple::before { background: linear-gradient(90deg,transparent,var(--purple),transparent); }
    .project-number { position: absolute; top: 24px; right: 28px; font-family: 'Orbitron', monospace; font-size: 5rem; font-weight: 900; line-height: 1; color: rgba(0,245,255,.05); pointer-events: none; user-select: none; }
    .project-card.purple .project-number { color: rgba(191,95,255,.05); }
    .project-icon { width: 54px; height: 54px; background: rgba(0,245,255,.07); border: 1px solid rgba(0,245,255,.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.6rem; margin-bottom: 24px; }
    .project-card.purple .project-icon { background: rgba(191,95,255,.07); border-color: rgba(191,95,255,.2); }
    .project-title { font-family: 'Orbitron', sans-serif; font-size: 1.15rem; color: #fff; margin-bottom: 14px; }
    .project-desc { color: var(--dim); font-size: .98rem; line-height: 1.75; margin-bottom: 24px; }
    .project-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 32px; }
    .tag { padding: 4px 12px; font-family: 'Share Tech Mono', monospace; font-size: .7rem; color: var(--cyan); border: 1px solid rgba(0,245,255,.18); border-radius: 20px; background: rgba(0,245,255,.05); }
    .tag.purple { color: var(--purple); border-color: rgba(191,95,255,.2); background: rgba(191,95,255,.05); }
    .project-link { display: inline-flex; align-items: center; gap: 8px; font-family: 'Share Tech Mono', monospace; font-size: .82rem; color: var(--cyan); text-decoration: none; letter-spacing: 1px; transition: gap .3s, text-shadow .3s; }
    .project-link:hover { gap: 14px; text-shadow: 0 0 12px var(--cyan); }
    .project-card.purple .project-link { color: var(--purple); }
    .project-card.purple .project-link:hover { text-shadow: 0 0 12px var(--purple); }

    /* ── Node Scanner ── */
    .scanner-wrap { margin-bottom: 60px; border: none; background: transparent; overflow: visible; position: relative; height: 500px; }
    #nodeCanvas { display: none; }
    .scanner-hint-bar { text-align: center; padding: 10px 20px; border-top: 1px solid rgba(0,245,255,0.06); font-family: 'Share Tech Mono', monospace; font-size: 0.64rem; color: var(--dim); letter-spacing: 3px; }

    /* Logo pulse dot */
    .logo-dot { display: inline-block; width: 5px; height: 5px; border-radius: 50%; background: var(--green); margin-left: 8px; vertical-align: middle; box-shadow: 0 0 6px var(--green); animation: dotPulse 2s ease-in-out infinite; }
    @keyframes dotPulse { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:1;transform:scale(2)} }

    /* ── Contact ── */
    #contact { text-align: center; }
    #contact .section-label { justify-content: center; }
    .contact-sub { color: var(--dim); font-size: 1.05rem; margin: 16px auto 56px; max-width: 420px; line-height: 1.7; }
    .contact-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; }
    .contact-card { display: flex; align-items: center; gap: 18px; padding: 26px 36px; min-width: 220px; background: var(--glass); border: 1px solid rgba(0,245,255,.1); border-radius: 14px; text-decoration: none; backdrop-filter: blur(8px); transition: all .35s; }
    .contact-card:hover { transform: translateY(-6px); border-color: rgba(0,245,255,.35); box-shadow: 0 20px 50px rgba(0,245,255,.12); }
    .contact-icon { color: var(--cyan); display: flex; align-items: center; }
    .contact-label { font-family: 'Share Tech Mono', monospace; font-size: .65rem; color: var(--dim); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 4px; text-align: left; }
    .contact-value { font-family: 'Rajdhani', sans-serif; font-size: 1rem; font-weight: 600; color: var(--cyan); text-align: left; }

    /* ── Footer ── */
    footer { position: relative; z-index: 1; text-align: center; padding: 36px 8%; border-top: 1px solid rgba(0,245,255,.07); font-family: 'Share Tech Mono', monospace; font-size: .7rem; color: var(--dim); letter-spacing: 3px; }
    footer .accent { color: var(--cyan); }

    /* ── Reveal & animations ── */
    .reveal { opacity: 0; transform: translateY(36px); transition: opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1); }
    .reveal.visible { opacity: 1; transform: translateY(0); }
    @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
    @keyframes fadeIn  { from{opacity:0} to{opacity:1} }

    /* ── Responsive ── */
    @media (max-width: 900px) {
      nav { padding: 18px 6%; }
      .nav-links { gap: 18px; }
      section { padding: 80px 6%; }
      #stats { padding: 0 6% 80px; }
      .stats-grid { flex-wrap: wrap; }
      .stat-item { min-width: 140px; border-radius: 8px !important; border: 1px solid rgba(0,245,255,.1); margin: 4px; }
      .stat-item + .stat-item { border-left: 1px solid rgba(0,245,255,.1); }
      .about-grid { grid-template-columns: 1fr; gap: 40px; }
      .skills-grid { grid-template-columns: 1fr; gap: 0; }
      .projects-grid { grid-template-columns: 1fr; perspective: none; }
    }
    @media (max-width: 560px) {
      .nav-links { display: none; }
      .hero-btns { flex-direction: column; }
      .contact-card { min-width: 100%; justify-content: center; }
    }
  </style>
</head>
<body>

  <!-- Loader -->
  <div id="loader">
    <div class="loader-text" id="loaderText">Initializing...</div>
    <div class="loader-bar-wrap"><div class="loader-bar"></div></div>
  </div>

  <!-- BG -->
  <canvas id="bg-canvas"></canvas>
  <div class="grid-overlay"></div>
  <div class="scanlines"></div>
  <div class="aurora">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
  </div>
  <div class="mouse-glow" id="mouseGlow"></div>

  <!-- Cursor -->
  <div class="cur-dot"  id="curDot"></div>
  <div class="cur-ring" id="curRing"></div>

  <!-- Nav -->
  <nav>
    <div class="nav-logo" id="ogzLogo" title="// click">OGZ<span class="logo-dot"></span></div>
    <div class="nav-right">
      <ul class="nav-links">
        <li><a href="#about"     data-i18n="nav-about">О себе</a></li>
        <li><a href="#skills"    data-i18n="nav-skills">Навыки</a></li>
        <li><a href="#portfolio" data-i18n="nav-projects">Проекты</a></li>
        <li><a href="#contact"   data-i18n="nav-contact">Контакт</a></li>
      </ul>
      <button class="lang-btn" id="langBtn">EN</button>
    </div>
  </nav>

  <!-- ══ HERO ══ -->
  <section id="hero">
    <p class="hero-tag" data-i18n="hero-tag">&gt; СИСТЕМА ОНЛАЙН_</p>
    <h1 class="hero-name glitch" data-text="OGUZOK">OGUZOK</h1>
    <div class="hero-role"><span id="typingText"></span><span class="type-cursor"></span></div>
    <p class="hero-bio" data-i18n="hero-bio">Full-Stack и AI-разработчик из Владикавказа. Строю высокопроизводительные веб-сервисы и автоматизированные ИИ-системы, которые решают реальные задачи.</p>
    <div class="hero-btns">
      <a href="#portfolio" class="btn btn-primary" data-i18n="btn-projects">Смотреть проекты</a>
      <a href="#contact"   class="btn btn-outline"  data-i18n="btn-contact">Написать</a>
    </div>
    <div class="scroll-hint">
      <span data-i18n="scroll">Скролл</span>
      <div class="scroll-line"></div>
    </div>
  </section>

  <!-- ══ STATS ══ -->
  <div id="stats">
    <div class="stats-grid reveal">
      <div class="stat-item">
        <div class="stat-num" data-target="2" id="s0">0</div>
        <div class="stat-label" data-i18n="stat0">Живых бота</div>
      </div>
      <div class="stat-item">
        <div class="stat-num" id="s1">0<span class="stat-suffix">+</span></div>
        <div class="stat-label" data-i18n="stat1">Технологий в стеке</div>
      </div>
      <div class="stat-item">
        <div class="stat-num" data-target="3" id="s2">0</div>
        <div class="stat-label" data-i18n="stat2">AI API интеграции</div>
      </div>
    </div>
  </div>

  <!-- ══ ABOUT ══ -->
  <section id="about">
    <div class="section-header reveal">
      <p class="section-label" data-i18n="about-label">01 / О себе</p>
      <h2 class="section-title scramble-title" data-i18n="about-title">Кто я</h2>
    </div>
    <div class="about-grid">
      <div class="about-text reveal">
        <p data-i18n-html="about-p1">Меня зовут <mark>Давлат</mark> — разработчик, который строит продукты, решающие реальные проблемы. Специализируюсь на <mark>Python-бэкенде</mark>, <mark>React-фронтенде</mark> и построении <mark>ИИ-систем</mark>.</p>
        <p data-i18n="about-p2">Сейчас разрабатываю инструменты для анализа данных и игровых тренажёров. Постоянно совершенствую стек, чтобы создавать масштабируемые и быстрые продукты.</p>
        <p class="ai-highlight" data-i18n-html="about-p3">Специализируюсь на создании масштабируемых веб-сервисов с интеграцией <mark>LLM-технологий</mark>. Проектирую архитектуру <mark>ИИ-агентов</mark>, используя OpenAI API и Groq API, и выстраиваю логику взаимодействия пользователей с моделями для решения прикладных задач.</p>
        <p class="stack-label" data-i18n="stack-label">// Стек</p>
        <div class="tech-grid">
          <span class="tech-item">Python</span>
          <span class="tech-item">FastAPI</span>
          <span class="tech-item">React</span>
          <span class="tech-item">PostgreSQL</span>
          <span class="tech-item">Docker</span>
          <span class="tech-item">Redis</span>
          <span class="tech-item">Aiogram</span>
          <span class="tech-item ai">OpenAI API</span>
          <span class="tech-item ai">Groq API</span>
          <span class="tech-item ai">LLM Integration</span>
          <span class="tech-item">Git</span>
        </div>
      </div>
      <div class="reveal">
        <div class="terminal-card">
          <div class="terminal-header">
            <span class="t-dot r"></span><span class="t-dot y"></span><span class="t-dot g"></span>
            <span class="terminal-title">profile.py</span>
          </div>
          <div class="terminal-body">
<pre><span class="tk">class</span> <span class="tcl">Developer</span>:
    name     <span class="tc">= </span><span class="ts">"Davlat"</span>
    alias    <span class="tc">= </span><span class="ts">"Oguzok"</span>
    location <span class="tc">= </span><span class="ts">"Vladikavkaz, RU"</span>

    ai_stack <span class="tc">= </span>[
        <span class="ts">"OpenAI API"</span>, <span class="ts">"Groq API"</span>,
        <span class="ts">"Prompt Engineering"</span>,
        <span class="ts">"LLM Agent Architecture"</span>,
    ]

    backend <span class="tc">= </span>[<span class="ts">"Python"</span>, <span class="ts">"FastAPI"</span>, <span class="ts">"Aiogram"</span>]
    devops  <span class="tc">= </span>[<span class="ts">"Docker"</span>, <span class="ts">"Redis"</span>, <span class="ts">"PostgreSQL"</span>]

    <span class="tk">def</span> <span class="tf">hire_me</span>(self):
        <span class="tk">return</span> <span class="ts">"Let's build something great"</span></pre>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ══ SKILLS ══ -->
  <section id="skills">
    <div class="section-header reveal">
      <p class="section-label" data-i18n="skills-label">02 / Навыки</p>
      <h2 class="section-title scramble-title" data-i18n="skills-title">Что я умею</h2>
    </div>
    <div class="skills-grid">
      <div class="skills-col reveal">
        <div class="skill-row">
          <div class="skill-meta"><span class="skill-name">Python</span><span class="skill-pct" id="pct-0">0%</span></div>
          <div class="skill-track"><div class="skill-fill" data-pct="90" data-idx="0"></div></div>
        </div>
        <div class="skill-row">
          <div class="skill-meta"><span class="skill-name">FastAPI</span><span class="skill-pct" id="pct-1">0%</span></div>
          <div class="skill-track"><div class="skill-fill" data-pct="85" data-idx="1"></div></div>
        </div>
        <div class="skill-row">
          <div class="skill-meta"><span class="skill-name ai-skill">LLM Integration</span><span class="skill-pct" id="pct-2">0%</span></div>
          <div class="skill-track"><div class="skill-fill ai-fill" data-pct="92" data-idx="2"></div></div>
        </div>
        <div class="skill-row">
          <div class="skill-meta"><span class="skill-name ai-skill">Prompt Engineering</span><span class="skill-pct" id="pct-3">0%</span></div>
          <div class="skill-track"><div class="skill-fill ai-fill" data-pct="88" data-idx="3"></div></div>
        </div>
      </div>
      <div class="skills-col reveal">
        <div class="skill-row">
          <div class="skill-meta"><span class="skill-name">Aiogram</span><span class="skill-pct" id="pct-4">0%</span></div>
          <div class="skill-track"><div class="skill-fill" data-pct="88" data-idx="4"></div></div>
        </div>
        <div class="skill-row">
          <div class="skill-meta"><span class="skill-name">React</span><span class="skill-pct" id="pct-5">0%</span></div>
          <div class="skill-track"><div class="skill-fill" data-pct="78" data-idx="5"></div></div>
        </div>
        <div class="skill-row">
          <div class="skill-meta"><span class="skill-name">Docker</span><span class="skill-pct" id="pct-6">0%</span></div>
          <div class="skill-track"><div class="skill-fill" data-pct="76" data-idx="6"></div></div>
        </div>
        <div class="skill-row">
          <div class="skill-meta"><span class="skill-name">PostgreSQL</span><span class="skill-pct" id="pct-7">0%</span></div>
          <div class="skill-track"><div class="skill-fill" data-pct="72" data-idx="7"></div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ══ PORTFOLIO ══ -->
  <section id="portfolio">
    <div class="section-header reveal">
      <p class="section-label" data-i18n="portfolio-label">03 / Проекты</p>
      <h2 class="section-title scramble-title" data-i18n="portfolio-title">Что я строю</h2>
    </div>
    <div class="scanner-wrap reveal">
      <canvas id="nodeCanvas"></canvas>
      <p class="scanner-hint-bar" data-i18n="scanner-hint">// hover nodes to activate &nbsp;—&nbsp; FAKE NEWS DETECTOR &nbsp;/&nbsp; CS2 AI COACH</p>
    </div>

    <div class="projects-grid">
      <div class="project-card reveal">
        <div class="project-number">01</div>
        <div class="project-icon">🔍</div>
        <h3 class="project-title">Fake News Detector</h3>
        <p class="project-desc" data-i18n="proj1-desc">Telegram-бот, который в секунды проверяет достоверность любой новости. Анализирует источники, сравнивает факты через ИИ и выдаёт чёткую оценку правдивости. Незаменим в эпоху информационного шума.</p>
        <div class="project-tags">
          <span class="tag">Python</span><span class="tag">Aiogram</span><span class="tag">NLP</span><span class="tag">OpenAI API</span><span class="tag">FastAPI</span>
        </div>
        <a href="https://t.me/NewsCheccker_bot" class="project-link" target="_blank" rel="noopener" data-i18n="try-bot">Попробовать →</a>
      </div>
      <div class="project-card purple reveal">
        <div class="project-number">02</div>
        <div class="project-icon">🎮</div>
        <h3 class="project-title">CS2 AI Coach</h3>
        <p class="project-desc" data-i18n="proj2-desc">Персональный ИИ-тренер для Counter-Strike 2. Анализирует геймплей, выявляет слабые места и даёт конкретные советы по улучшению. Как личный тренер — только 24/7 и бесплатно.</p>
        <div class="project-tags">
          <span class="tag purple">Python</span><span class="tag purple">Aiogram</span><span class="tag purple">OpenAI API</span><span class="tag purple">Redis</span><span class="tag purple">Groq API</span>
        </div>
        <a href="https://t.me/cs2AI_coach_bot" class="project-link" target="_blank" rel="noopener" data-i18n="try-bot">Попробовать →</a>
      </div>
    </div>
  </section>

  <!-- ══ CONTACT ══ -->
  <section id="contact">
    <div class="section-header reveal">
      <p class="section-label" data-i18n="contact-label">04 / Контакт</p>
      <h2 class="section-title scramble-title" data-i18n="contact-title">Связаться</h2>
      <p class="contact-sub" data-i18n-html="contact-sub">Открыт к новым проектам и возможностям.<br>Напишите — отвечу быстро.</p>
    </div>
    <div class="contact-grid reveal">
      <a href="https://github.com/Edvart08" class="contact-card" target="_blank" rel="noopener">
        <div class="contact-icon">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.807 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.373-12-12-12z"/></svg>
        </div>
        <div><p class="contact-label">GitHub</p><p class="contact-value">Edvart08</p></div>
      </a>
      <a href="https://wellfound.com/u/burnatsev-davlat" class="contact-card" target="_blank" rel="noopener">
        <div class="contact-icon">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="17"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
        </div>
        <div><p class="contact-label">Wellfound</p><p class="contact-value">burnatsev-davlat</p></div>
      </a>
      <a href="mailto:davlatburnacev@gmail.com" class="contact-card">
        <div class="contact-icon">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </div>
        <div><p class="contact-label">Email</p><p class="contact-value" data-i18n="write-me">Написать</p></div>
      </a>
      <a href="https://t.me/Oguz0kk1" class="contact-card" target="_blank" rel="noopener">
        <div class="contact-icon">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.28 13.617l-2.947-.924c-.64-.203-.652-.64.135-.953l11.566-4.458c.537-.194 1.006.131.86.94z"/></svg>
        </div>
        <div><p class="contact-label">Telegram</p><p class="contact-value">@Oguz0kk1</p></div>
      </a>
    </div>
  </section>

  <footer>
    <span class="accent">OGUZOK</span> &nbsp;·&nbsp;
    <span data-i18n="footer-built">СОЗДАНО С КОДОМ И АМБИЦИЯМИ</span>
    &nbsp;·&nbsp; <span id="fyear"></span>
  </footer>

<script>
/* ════════════════ i18n ════════════════ */
const LANGS = {
  ru: {
    'nav-about':'О себе','nav-skills':'Навыки','nav-projects':'Проекты','nav-contact':'Контакт',
    'hero-tag':'> СИСТЕМА ОНЛАЙН_',
    'hero-bio':'Full-Stack и AI-разработчик из Владикавказа. Строю высокопроизводительные веб-сервисы и автоматизированные ИИ-системы, которые решают реальные задачи.',
    'btn-projects':'Смотреть проекты','btn-contact':'Написать','scroll':'Скролл',
    'about-label':'01 / О себе','about-title':'Кто я',
    'about-p1':'Меня зовут <mark>Давлат</mark> — разработчик, который строит продукты, решающие реальные проблемы. Специализируюсь на <mark>Python-бэкенде</mark>, <mark>React-фронтенде</mark> и построении <mark>ИИ-систем</mark>.',
    'about-p2':'Сейчас разрабатываю инструменты для анализа данных и игровых тренажёров. Постоянно совершенствую стек, чтобы создавать масштабируемые и быстрые продукты.',
    'about-p3':'Специализируюсь на создании масштабируемых веб-сервисов с интеграцией <mark>LLM-технологий</mark>. Проектирую архитектуру <mark>ИИ-агентов</mark>, используя OpenAI API и Groq API, и выстраиваю логику взаимодействия пользователей с моделями для решения прикладных задач.',
    'stack-label':'// Стек',
    'skills-label':'02 / Навыки','skills-title':'Что я умею',
    'portfolio-label':'03 / Проекты','portfolio-title':'Что я строю',
    'proj1-desc':'Telegram-бот, который в секунды проверяет достоверность любой новости. Анализирует источники, сравнивает факты через ИИ и выдаёт чёткую оценку правдивости. Незаменим в эпоху информационного шума.',
    'proj2-desc':'Персональный ИИ-тренер для Counter-Strike 2. Анализирует геймплей, выявляет слабые места и даёт конкретные советы по улучшению. Как личный тренер — только 24/7 и бесплатно.',
    'try-bot':'Попробовать →',
    'contact-label':'04 / Контакт','contact-title':'Связаться',
    'contact-sub':'Открыт к новым проектам и возможностям.<br>Напишите — отвечу быстро.',
    'write-me':'Написать',
    'scanner-hint':'// навести на узлы для активации  —  FAKE NEWS DETECTOR  /  CS2 AI COACH',
    'footer-built':'СОЗДАНО С КОДОМ И АМБИЦИЯМИ',
    'stat0':'Живых бота','stat1':'Технологий в стеке','stat2':'AI API интеграции',
    roles:['Full-Stack разработчик','AI разработчик','Python инженер','Архитектор ботов'],
  },
  en: {
    'nav-about':'About','nav-skills':'Skills','nav-projects':'Projects','nav-contact':'Contact',
    'hero-tag':'> SYSTEM ONLINE_',
    'hero-bio':'Full-Stack & AI Developer from Vladikavkaz. Building high-performance web services and automated AI systems that solve real problems.',
    'btn-projects':'View Projects','btn-contact':'Contact Me','scroll':'Scroll',
    'about-label':'01 / About','about-title':'Who Am I',
    'about-p1':'My name is <mark>Davlat</mark> — a developer who builds products that solve real problems. I specialize in <mark>Python backend</mark>, <mark>React frontend</mark>, and building <mark>AI systems</mark>.',
    'about-p2':'Currently developing data analysis tools and gaming trainers. Constantly improving the tech stack to build scalable, fast products.',
    'about-p3':'I build scalable web services with <mark>LLM technology integration</mark>. I architect <mark>AI agent systems</mark> using OpenAI and Groq APIs, designing the full logic of user-model interaction for real-world applied tasks.',
    'stack-label':'// Tech Stack',
    'skills-label':'02 / Skills','skills-title':'What I Know',
    'portfolio-label':'03 / Projects','portfolio-title':'What I Build',
    'proj1-desc':'A Telegram bot that verifies the authenticity of any news in seconds. Analyzes sources, cross-checks facts via AI and gives a clear credibility score. Indispensable in the age of information noise.',
    'proj2-desc':'A personal AI trainer for Counter-Strike 2. Analyzes gameplay, identifies weak spots and delivers concrete improvement tips. Like a personal coach — 24/7 and free.',
    'try-bot':'Try Bot →',
    'contact-label':'04 / Contact','contact-title':'Get In Touch',
    'contact-sub':'Open to new projects and opportunities.<br>Write — I respond fast.',
    'write-me':'Write Me',
    'scanner-hint':'// hover nodes to activate  —  FAKE NEWS DETECTOR  /  CS2 AI COACH',
    'footer-built':'BUILT WITH CODE & AMBITION',
    'stat0':'Live Bots','stat1':'Tech Tools','stat2':'AI APIs',
    roles:['Full-Stack Developer','AI Developer','Python Engineer','Bot Architect'],
  }
};

let currentLang = 'ru';

function applyLang(lang, skipRestart) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('ogz-lang', lang);
  const t = LANGS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => { const v = t[el.dataset.i18n]; if (v !== undefined) el.textContent = v; });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { const v = t[el.dataset.i18nHtml]; if (v !== undefined) el.innerHTML = v; });
  document.getElementById('langBtn').textContent = lang === 'ru' ? 'EN' : 'RU';
  if (!skipRestart) restartTyping();
}

document.getElementById('langBtn').addEventListener('click', () => applyLang(currentLang === 'ru' ? 'en' : 'ru'));

async function detectLang() {
  if (localStorage.getItem('ogz-lang')) { applyLang(localStorage.getItem('ogz-lang'), true); return; }
  const br = (navigator.language || 'en').toLowerCase();
  const ruCountries = ['ru','kz','ua','by','uz','az','ge','am','tj','kg','tm'];
  let lang = ruCountries.some(c => br.startsWith(c)) ? 'ru' : 'en';
  applyLang(lang, true);
  try {
    const ctrl = new AbortController(); setTimeout(() => ctrl.abort(), 2500);
    const res  = await fetch('https://ipapi.co/json/', { signal: ctrl.signal });
    const data = await res.json();
    const ruCC = ['RU','KZ','UA','BY','UZ','AZ','GE','AM','TJ','KG','TM','MD'];
    lang = ruCC.includes(data.country_code) ? 'ru' : 'en';
    if (lang !== currentLang) applyLang(lang, false);
  } catch(_) {}
}
detectLang();

/* ════════════════ Loader ════════════════ */
const steps = { ru:['Загрузка...','Инициализация...','Компиляция...','Готово.'], en:['Loading...','Initializing...','Compiling...','Ready.'] };
let li = 0;
const loaderEl = document.getElementById('loaderText');
const lInt = setInterval(() => { if (++li < 4) loaderEl.textContent = steps[currentLang][li]; else clearInterval(lInt); }, 450);
setTimeout(() => document.getElementById('loader').classList.add('hidden'), 2000);
document.getElementById('fyear').textContent = new Date().getFullYear();

/* ════════════════ Particle Canvas ════════════════ */
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let W, H;
const rsz = () => { W = canvas.width = innerWidth; H = canvas.height = innerHeight; };
rsz(); addEventListener('resize', rsz);

class P {
  constructor() { this.init(); }
  init() { this.x=Math.random()*W; this.y=Math.random()*H; this.vx=(Math.random()-.5)*.35; this.vy=(Math.random()-.5)*.35; this.r=Math.random()*1.4+.4; this.a=Math.random()*.5+.15; this.c=Math.random()>.55?'0,245,255':'191,95,255'; }
  step() { this.x+=this.vx; this.y+=this.vy; if(this.x<0||this.x>W||this.y<0||this.y>H) this.init(); }
  draw() { ctx.beginPath(); ctx.arc(this.x,this.y,this.r,0,Math.PI*2); ctx.fillStyle=`rgba(${this.c},${this.a})`; ctx.fill(); }
}
const PS = Array.from({length: innerWidth<600?55:110}, ()=>new P());
(function loop(){
  ctx.clearRect(0,0,W,H);
  PS.forEach(p=>{p.step();p.draw();});
  for(let i=0;i<PS.length;i++) for(let j=i+1;j<PS.length;j++){
    const dx=PS[i].x-PS[j].x,dy=PS[i].y-PS[j].y,d=Math.sqrt(dx*dx+dy*dy);
    if(d<110){ctx.beginPath();ctx.strokeStyle=`rgba(0,245,255,${.1*(1-d/110)})`;ctx.lineWidth=.5;ctx.moveTo(PS[i].x,PS[i].y);ctx.lineTo(PS[j].x,PS[j].y);ctx.stroke();}
  }
  requestAnimationFrame(loop);
})();

/* ════════════════ Cursor & mouse glow ════════════════ */
const glow=document.getElementById('mouseGlow'), dot=document.getElementById('curDot'), ring=document.getElementById('curRing');
let mx=0,my=0,rx=0,ry=0;
addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px';glow.style.left=mx+'px';glow.style.top=my+'px';});
(function ar(){rx+=(mx-rx)*.14;ry+=(my-ry)*.14;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(ar);})();

/* ════════════════ Typing ════════════════ */
let typT=null,ri=0,ci=0,del=false;
const typEl=document.getElementById('typingText');
function type(){
  const roles=LANGS[currentLang].roles, word=roles[ri];
  typEl.textContent=del?word.slice(0,--ci):word.slice(0,++ci);
  let d=del?55:95;
  if(!del&&ci===word.length){d=2200;del=true;}
  if(del&&ci===0){del=false;ri=(ri+1)%roles.length;d=280;}
  typT=setTimeout(type,d);
}
function restartTyping(){clearTimeout(typT);ri=0;ci=0;del=false;typEl.textContent='';typT=setTimeout(type,200);}
setTimeout(restartTyping,2900);

/* ════════════════ Text Scramble ════════════════ */
class Scramble {
  constructor(el){this.el=el;this.chars='!<>-_\\/[]{}=+*^?#@&%$~';}
  run(text){
    this._t=text; this._L=text.length;
    this.q=Array.from({length:this._L},(_,i)=>({to:text[i],start:Math.floor(Math.random()*18),end:Math.floor(Math.random()*18)+18,char:''}));
    this.f=0; cancelAnimationFrame(this._raf); this._tick();
  }
  _tick(){
    let out='',done=0;
    for(const item of this.q){
      if(this.f>=item.end){out+=item.to;done++;}
      else if(this.f>=item.start){item.char=Math.random()<.28?this.chars[Math.floor(Math.random()*this.chars.length)]:item.char;out+=`<span style="color:var(--cyan);opacity:.5">${item.char||'?'}</span>`;}
      else out+=item.to;
    }
    this.el.innerHTML=out;
    if(done<this._L){this.f++;this._raf=requestAnimationFrame(()=>this._tick());}
    else this.el.textContent=this._t;
  }
}

/* ════════════════ Scroll reveal ════════════════ */
const reveals=document.querySelectorAll('.reveal');
const io=new IntersectionObserver((entries)=>{
  entries.forEach((e,i)=>{
    if(e.isIntersecting){
      setTimeout(()=>e.target.classList.add('visible'),i*80);
      const title=e.target.classList.contains('scramble-title')?e.target:e.target.querySelector('.scramble-title');
      if(title&&!title.dataset.scrambled){title.dataset.scrambled='1';setTimeout(()=>new Scramble(title).run(title.textContent),200+i*80);}
      io.unobserve(e.target);
    }
  });
},{threshold:.1});
reveals.forEach(el=>io.observe(el));

/* ════════════════ Stats counters ════════════════ */
function countUp(el,target,dur,suffix=''){
  let n=0;const step=target/(dur/16);
  const t=setInterval(()=>{n=Math.min(n+step,target);el.textContent=Math.round(n)+(suffix);if(n>=target)clearInterval(t);},16);
}
let statsRun=false;
new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting&&!statsRun){
    statsRun=true;
    setTimeout(()=>countUp(document.getElementById('s0'),2,800),0);
    setTimeout(()=>{ const el=document.getElementById('s1'); countUp({set textContent(v){el.innerHTML=v+'<span class="stat-suffix">+</span>';}},10,900); },150);
    setTimeout(()=>countUp(document.getElementById('s2'),3,700),300);
  }
},{threshold:.4}).observe(document.getElementById('stats'));

/* ════════════════ Skill bars ════════════════ */
function counter(idx,target,dur){
  const el=document.getElementById('pct-'+idx);
  if(!el)return;
  let n=0;const step=target/(dur/16);
  const t=setInterval(()=>{n=Math.min(n+step,target);el.textContent=Math.round(n)+'%';if(n>=target)clearInterval(t);},16);
}
let skillsDone=false;
new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting&&!skillsDone){
    skillsDone=true;
    document.querySelectorAll('.skill-fill').forEach((f,i)=>{
      const pct=+f.dataset.pct,idx=+f.dataset.idx;
      setTimeout(()=>{f.style.width=pct+'%';f.classList.add('go');counter(idx,pct,1200);},i*130);
    });
  }
},{threshold:.2}).observe(document.getElementById('skills'));

/* ════════════════ 3D Card Tilt ════════════════ */
document.querySelectorAll('.project-card').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(800px) rotateX(${-y*10}deg) rotateY(${x*10}deg) translateY(-10px)`;
    card.style.transition='transform 0.05s';
  });
  card.addEventListener('mouseleave',()=>{
    card.style.transform='';
    card.style.transition='transform .6s cubic-bezier(.16,1,.3,1)';
  });
});

/* ════════════════ Magnetic buttons ════════════════ */
document.querySelectorAll('.btn').forEach(btn=>{
  btn.addEventListener('mousemove',e=>{
    const r=btn.getBoundingClientRect();
    const x=(e.clientX-r.left-r.width/2)*.22;
    const y=(e.clientY-r.top-r.height/2)*.28;
    btn.style.transform=`translate(${x}px,${y}px)`;
  });
  btn.addEventListener('mouseleave',()=>{
    btn.style.transform='';
    btn.style.transition='transform .5s cubic-bezier(.16,1,.3,1)';
  });
  btn.addEventListener('mouseenter',()=>{ btn.style.transition='transform .1s'; });
});

/* ════════════════ Matrix Rain ════════════════ */
function triggerMatrix(dur) {
  if (document.getElementById('matrix-c')) return;
  const mc = document.createElement('canvas');
  mc.id = 'matrix-c';
  mc.style.cssText = 'position:fixed;inset:0;z-index:8999;pointer-events:none;opacity:0;transition:opacity .5s';
  document.body.appendChild(mc);
  mc.width = innerWidth; mc.height = innerHeight;
  const mctx = mc.getContext('2d');
  const cols  = Math.floor(innerWidth / 14);
  const drops = new Array(cols).fill(0);
  const chars = 'アウエオPYTHONFASTAPIREACTAIGROQOPENAI01LLM';
  requestAnimationFrame(() => mc.style.opacity = 1);
  const inv = setInterval(() => {
    mctx.fillStyle = 'rgba(5,5,10,0.06)';
    mctx.fillRect(0,0,mc.width,mc.height);
    mctx.font = '13px "Share Tech Mono",monospace';
    drops.forEach((y,i) => {
      const ch = chars[Math.floor(Math.random()*chars.length)];
      mctx.fillStyle = drops[i]<2 ? '#ffffff' : `rgba(0,245,255,${Math.random()*.5+.3})`;
      mctx.fillText(ch, i*14, y*14);
      if (y*14 > mc.height && Math.random()>.975) drops[i]=0; else drops[i]++;
    });
  }, 40);
  setTimeout(() => {
    clearInterval(inv);
    mc.style.transition='opacity 1s'; mc.style.opacity=0;
    setTimeout(() => mc.remove(), 1000);
  }, dur || 3500);
}
if (!sessionStorage.getItem('ogz-m')) {
  sessionStorage.setItem('ogz-m','1');
  setTimeout(() => triggerMatrix(1800), 2400);
}
document.getElementById('ogzLogo').addEventListener('click', () => triggerMatrix(3500));

/* ════════════════ Click ripple ════════════════ */
addEventListener('click', e => {
  if (e.target.closest('a,button,.nav-logo')) return;
  const r = document.createElement('div');
  r.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;width:4px;height:4px;border:1px solid #00f5ff;border-radius:50%;transform:translate(-50%,-50%);pointer-events:none;z-index:9997;box-shadow:0 0 8px #00f5ff;`;
  document.body.appendChild(r);
  r.animate([{width:'4px',height:'4px',opacity:1,borderWidth:'1px'},{width:'130px',height:'130px',opacity:0,borderWidth:'0px'}],{duration:650,easing:'ease-out'}).onfinish=()=>r.remove();
  for (let i = 0; i < 10; i++) {
    const p = document.createElement('div');
    const ang = (i/10)*Math.PI*2, spd = Math.random()*3+1.5;
    p.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;width:3px;height:3px;border-radius:50%;background:${Math.random()>.5?'#00f5ff':'#bf5fff'};box-shadow:0 0 4px currentColor;pointer-events:none;z-index:9996;`;
    document.body.appendChild(p);
    let px=0,py=0,op=1; const vx=Math.cos(ang)*spd, vy=Math.sin(ang)*spd;
    (function step(){px+=vx;py+=vy+.12;op-=.03;p.style.transform=`translate(${px}px,${py}px)`;p.style.opacity=op;if(op>0)requestAnimationFrame(step);else p.remove();})();
  }
});

/* ════════════════ Active nav ════════════════ */
const sections=['about','skills','portfolio','contact'];
const navLinks=document.querySelectorAll('.nav-links a');
const secIO=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      navLinks.forEach(a=>a.classList.remove('active'));
      const link=document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if(link) link.classList.add('active');
    }
  });
},{threshold:.4});
sections.forEach(id=>{const el=document.getElementById(id);if(el)secIO.observe(el);});

/* ════════════════ Hero parallax ════════════════ */
const heroContent=document.querySelector('#hero');
addEventListener('mousemove',e=>{
  const x=(e.clientX/innerWidth-.5)*12;
  const y=(e.clientY/innerHeight-.5)*8;
  heroContent.style.transform=`translate(${x*.3}px,${y*.3}px)`;
});
</script>

<!-- ══ Crystal Scanner — external module ══ -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script type="module">
/**
 * crystal-scanner.js
 * Standalone Three.js module for the Crystal Scanner section.
 * Inline version — no external file needed
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

/* Start after window fully loaded so GSAP CDN script is guaranteed ready */
window.addEventListener('load', () => {
  // Small rAF delay to let layout settle
  requestAnimationFrame(() => requestAnimationFrame(init));
});

</script>
</body>
</html>
