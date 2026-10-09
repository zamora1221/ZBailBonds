/* =========================================================
   Z BAIL BONDS — shared stylesheet
   Theme: "Ink & Brass" — navy, brass-gold, paper
   ========================================================= */

:root{
  --ink:#0F1D2E;
  --steel:#1F3A5F;
  --brass:#B08D57;
  --brass-light:#D8C39A;
  --paper:#F4EFE6;
  --paper-dim:#EAE2D2;
  --charcoal:#232323;
  --line: rgba(176,141,87,0.35);
  --ok:#3F6B4A;
  --err:#9A3B3B;
}
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{
  margin:0;
  background:var(--paper);
  color:var(--charcoal);
  font-family:'IBM Plex Sans', sans-serif;
  line-height:1.6;
}
a{color:inherit;}
img{max-width:100%; display:block;}
.mono{font-family:'IBM Plex Mono', monospace; letter-spacing:0.02em;}
h1,h2,h3{font-family:'Fraunces', serif; margin:0; letter-spacing:-0.01em;}
a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible, select:focus-visible{
  outline:2px solid var(--brass); outline-offset:3px;
}

/* ---------- HEADER ---------- */
header{ position:sticky; top:0; z-index:50; background:var(--ink); border-bottom:1px solid var(--line); }
.topbar{ display:flex; justify-content:space-between; align-items:center; max-width:1180px; margin:0 auto; padding:14px 24px; color:var(--paper); flex-wrap:wrap; gap:10px; }
.brand{display:flex; align-items:baseline; gap:12px; text-decoration:none;}
.seal{ width:34px; height:34px; border-radius:50%; border:1.5px solid var(--brass); display:flex; align-items:center; justify-content:center; font-family:'Fraunces',serif; font-weight:700; font-size:13px; color:var(--brass); flex-shrink:0; }
.brand-name{font-family:'Fraunces', serif; font-weight:600; font-size:1.25rem; color:var(--paper); text-decoration:none;}
.contact-line{display:flex; flex-direction:column; align-items:flex-end; gap:4px;}
.contact-line .row{font-size:0.98rem; color:var(--brass-light); display:flex; gap:22px; flex-wrap:wrap; font-weight:500;}
.contact-line span{color:var(--brass-light); font-size:0.98rem; font-weight:500;}
.contact-line a{text-decoration:none;}
.contact-line a:hover{color:var(--brass);}

nav{background:var(--steel);}
.navwrap{ max-width:1180px; margin:0 auto; padding:0 24px; display:flex; flex-wrap:wrap; gap:2px; }
nav a, nav span.more{ display:inline-block; padding:12px 16px; color:var(--paper); text-decoration:none; font-size:0.85rem; font-weight:500; border-bottom:2px solid transparent; transition:border-color .2s, color .2s, background .2s; }
nav a:hover{border-bottom-color:var(--brass); background:rgba(176,141,87,0.08);}
nav a.active{border-bottom-color:var(--brass); color:var(--brass-light);}
nav span.more{color:#9FB2C8; cursor:default;}

/* ---------- PAGE HERO (interior pages) ---------- */
.page-hero{
  background: radial-gradient(ellipse at 80% -10%, rgba(176,141,87,0.18), transparent 55%), var(--ink);
  color:var(--paper); padding:64px 24px 72px; text-align:center;
}
.page-hero .kicker{color:var(--brass-light);}
.page-hero h1{font-size:clamp(2rem,4.5vw,3rem); font-weight:600; margin-top:8px;}
.page-hero p{max-width:640px; margin:18px auto 0; color:#D9D2C4; font-size:1.02rem;}

/* ---------- HOME HERO ---------- */
.hero{ background: radial-gradient(ellipse at 80% -10%, rgba(176,141,87,0.18), transparent 55%), var(--ink); color:var(--paper); padding:88px 24px 96px; position:relative; overflow:hidden; }
.hero::after{ content:""; position:absolute; inset:0; background-image: repeating-linear-gradient(0deg, transparent, transparent 34px, rgba(244,239,230,0.02) 35px); pointer-events:none; }
.hero-inner{max-width:820px; margin:0 auto; text-align:center; position:relative;}
.eyebrow{ font-family:'IBM Plex Mono', monospace; text-transform:uppercase; letter-spacing:0.18em; font-size:0.72rem; color:var(--brass-light); display:inline-block; padding-bottom:14px; }
h1.headline{ font-size:clamp(2.4rem, 5.5vw, 4rem); font-weight:600; line-height:1.06; }
.headline em{font-style:italic; color:var(--brass-light); font-weight:500;}
.hero p.lede{ max-width:620px; margin:26px auto 0; font-size:1.06rem; color:#D9D2C4; }
.hero-ctas{ margin-top:38px; display:flex; gap:16px; justify-content:center; flex-wrap:wrap; }

.fade-in{opacity:0; animation:rise .8s ease forwards;}
.fade-in.d1{animation-delay:.12s;} .fade-in.d2{animation-delay:.24s;} .fade-in.d3{animation-delay:.36s;}
@keyframes rise{from{opacity:0; transform:translateY(14px);} to{opacity:1; transform:translateY(0);}}
@media (prefers-reduced-motion: reduce){ .fade-in{animation:none; opacity:1;} }

/* ---------- BUTTONS ---------- */
.btn{ font-family:'IBM Plex Sans', sans-serif; font-weight:600; font-size:0.92rem; padding:14px 28px; border-radius:2px; text-decoration:none; display:inline-flex; align-items:center; gap:10px; transition:transform .15s ease, box-shadow .15s ease; border:none; cursor:pointer; }
.btn-primary{background:var(--brass); color:var(--ink);}
.btn-primary:hover{transform:translateY(-2px); box-shadow:0 8px 22px rgba(176,141,87,0.35);}
.btn-ghost{border:1px solid rgba(244,239,230,0.35); color:var(--paper); background:transparent;}
.btn-ghost:hover{border-color:var(--brass); color:var(--brass-light); transform:translateY(-2px);}
.btn-steel{background:var(--steel); color:var(--paper);}
.btn-steel:hover{transform:translateY(-2px); box-shadow:0 8px 22px rgba(31,58,95,0.35);}
.btn:disabled{opacity:0.5; cursor:not-allowed; transform:none !important; box-shadow:none !important;}

/* ---------- SECTIONS ---------- */
.section{max-width:1180px; margin:0 auto; padding:88px 24px;}
.section.narrow{max-width:840px;}
.section.tight{padding:56px 24px;}
.kicker{ font-family:'IBM Plex Mono', monospace; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.16em; color:var(--brass); margin-bottom:10px; display:block; }

.whatwedo{display:grid; grid-template-columns: 0.9fr 1.1fr; gap:64px; align-items:start;}
@media (max-width:820px){.whatwedo{grid-template-columns:1fr; gap:32px;}}
.whatwedo h2{font-size:clamp(1.8rem,3vw,2.4rem); color:var(--ink); margin-bottom:6px;}
.services-tag{ margin-top:22px; display:inline-block; font-family:'IBM Plex Mono',monospace; font-size:0.78rem; padding:8px 14px; border:1px solid var(--brass); color:var(--steel); text-decoration:none; }
.whatwedo-body p{font-size:1.02rem; color:#3a3a3a; margin:0 0 18px;}
.whatwedo-body a{color:var(--steel); font-weight:600; text-decoration:underline; text-decoration-color:var(--brass); text-underline-offset:3px;}
.whatwedo-body a:hover{color:var(--brass);}

/* ---------- DOCKET / HOW IT WORKS ---------- */
.howitworks{background:var(--paper-dim); border-top:1px solid var(--line); border-bottom:1px solid var(--line);}
.howitworks .section-head{max-width:1180px; margin:0 auto 56px; padding:0 24px;}
.howitworks h2{font-size:clamp(1.8rem,3vw,2.4rem); color:var(--ink);}
.docket{max-width:880px; margin:0 auto; padding:0 24px; position:relative;}
.docket::before{ content:""; position:absolute; left:47px; top:8px; bottom:8px; width:1px; background:linear-gradient(var(--brass), var(--brass) 70%, transparent); opacity:0.5; }
@media (max-width:600px){.docket::before{left:23px;}}
.entry{ display:grid; grid-template-columns:64px 1fr; gap:24px; padding:26px 0; position:relative; }
@media (max-width:600px){.entry{grid-template-columns:40px 1fr; gap:16px;}}
.stamp{ width:64px; height:64px; border-radius:50%; border:1.5px solid var(--brass); background:var(--paper); display:flex; align-items:center; justify-content:center; font-family:'Fraunces',serif; font-weight:700; font-size:1.3rem; color:var(--brass); position:relative; z-index:1; flex-shrink:0; }
@media (max-width:600px){.stamp{width:40px; height:40px; font-size:0.95rem;}}
.entry-title{font-family:'Fraunces',serif; font-weight:600; font-size:1.22rem; color:var(--ink); margin-bottom:6px;}
.entry p{margin:0; color:#4a4a44; font-size:0.98rem;}
.entry a{color:var(--steel); font-weight:600; text-decoration:underline; text-decoration-color:var(--brass); text-underline-offset:3px;}
.entry a:hover{color:var(--brass);}
.entry:not(:last-child){border-bottom:1px dashed rgba(35,35,35,0.08);}

/* ---------- CARDS ---------- */
.card{ background:#fff; border:1px solid rgba(35,35,35,0.08); border-radius:3px; padding:28px; }
.card + .card{margin-top:20px;}
.info-card{background:var(--paper-dim); border:1px solid var(--line); border-radius:3px; padding:28px;}
.info-card h3{font-size:1.1rem; color:var(--ink); margin-bottom:14px;}
.info-card dl{margin:0;}
.info-card dt{font-family:'IBM Plex Mono',monospace; font-size:0.7rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--brass); margin-top:14px;}
.info-card dt:first-child{margin-top:0;}
.info-card dd{margin:4px 0 0; font-size:0.98rem;}
.info-card dd a{text-decoration:none; color:var(--steel);}
.info-card dd a:hover{color:var(--brass);}

/* ---------- FORMS ---------- */
.form-grid{display:grid; grid-template-columns:1fr 1fr; gap:20px;}
@media (max-width:700px){.form-grid{grid-template-columns:1fr;}}
.form-grid .full{grid-column:1 / -1;}
.field{display:flex; flex-direction:column; gap:6px;}
.field label{font-family:'IBM Plex Mono',monospace; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--steel);}
.field .hint{font-size:0.78rem; color:#7a7367; font-weight:400; text-transform:none; letter-spacing:0;}
.field input, .field select, .field textarea{
  font-family:'IBM Plex Sans', sans-serif; font-size:0.98rem; padding:12px 14px;
  border:1px solid rgba(35,35,35,0.18); border-radius:2px; background:#fff; color:var(--charcoal);
}
.field input:focus, .field select:focus, .field textarea:focus{border-color:var(--brass);}
.field textarea{resize:vertical; min-height:110px; font-family:inherit;}
.checkfield{display:flex; align-items:flex-start; gap:10px; font-size:0.92rem; color:#3a3a3a;}
.checkfield input{margin-top:4px;}
form .actions{margin-top:8px; display:flex; align-items:center; gap:16px; flex-wrap:wrap;}
.form-note{ background:var(--paper-dim); border:1px dashed var(--brass); padding:14px 18px; font-size:0.85rem; color:#5c5648; border-radius:2px; margin-bottom:28px; }
.form-note code{background:rgba(35,35,35,0.06); padding:1px 5px; border-radius:2px; font-family:'IBM Plex Mono',monospace;}
.jotform-embed{ background:#fff; border:1px solid rgba(35,35,35,0.08); border-radius:3px; overflow:hidden; }

/* ---------- DOCUMENT LINK CARD ---------- */
.doc-card{
  display:flex; align-items:center; gap:18px;
  background:var(--ink); color:var(--paper);
  border:1px solid var(--brass); border-radius:3px;
  padding:20px 24px; text-decoration:none;
  transition:transform .15s ease, box-shadow .15s ease, background .15s ease;
}
.doc-card:hover{ transform:translateY(-2px); box-shadow:0 10px 26px rgba(15,29,46,0.25); background:#132538; }
.doc-card-icon{
  width:48px; height:48px; border-radius:50%; flex-shrink:0;
  border:1.5px solid var(--brass); color:var(--brass);
  display:flex; align-items:center; justify-content:center;
}
.doc-card-text{flex:1; min-width:0;}
.doc-card-title{font-family:'Fraunces',serif; font-weight:600; font-size:1.15rem; color:var(--paper);}
.doc-card-sub{font-family:'IBM Plex Mono',monospace; font-size:0.76rem; color:var(--brass-light); margin-top:4px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;}
.doc-card-arrow{font-size:1.3rem; color:var(--brass); flex-shrink:0; transition:transform .15s ease;}
.doc-card:hover .doc-card-arrow{transform:translateX(4px);}
.form-status{font-size:0.9rem; font-weight:600; display:none;}
.form-status.show{display:block;}
.form-status.ok{color:var(--ok);}
.form-status.err{color:var(--err);}

/* ---------- ACCORDION (Policies) ---------- */
.accordion{border-top:1px solid rgba(35,35,35,0.12);}
.acc-item{border-bottom:1px solid rgba(35,35,35,0.12);}
.acc-trigger{
  width:100%; text-align:left; background:none; border:none; cursor:pointer;
  padding:22px 4px; display:flex; justify-content:space-between; align-items:center; gap:20px;
  font-family:'Fraunces',serif; font-size:1.12rem; font-weight:600; color:var(--ink);
}
.acc-trigger .plus{ font-family:'IBM Plex Mono',monospace; color:var(--brass); font-size:1.2rem; transition:transform .25s ease; flex-shrink:0; }
.acc-item.open .acc-trigger .plus{transform:rotate(45deg);}
.acc-panel{ max-height:0; overflow:hidden; transition:max-height .3s ease; }
.acc-panel-inner{padding:0 4px 24px; color:#4a4a44; font-size:0.98rem;}
.acc-panel-inner ul{margin:10px 0 0; padding-left:20px;}
.acc-panel-inner li{margin-bottom:6px;}

/* ---------- FOOTER ---------- */
footer{background:var(--ink); color:var(--paper); padding:64px 24px 40px;}
.footer-inner{max-width:1180px; margin:0 auto; display:grid; grid-template-columns:1.2fr 1fr; gap:40px;}
@media (max-width:700px){.footer-inner{grid-template-columns:1fr;}}
footer .brand-name{color:var(--paper);}
.foot-tag{color:#B9B2A2; margin-top:10px; max-width:360px; font-size:0.95rem;}
.foot-details{font-size:0.95rem; color:#D9D2C4;}
.foot-details div{margin-bottom:10px;}
.foot-details a{text-decoration:none;}
.foot-details a:hover{color:var(--brass-light);}
.foot-bottom{ max-width:1180px; margin:48px auto 0; padding-top:24px; border-top:1px solid rgba(244,239,230,0.12); font-family:'IBM Plex Mono',monospace; font-size:0.72rem; color:#8B8578; display:flex; justify-content:space-between; flex-wrap:wrap; gap:8px; }
.foot-bottom a{text-decoration:none;}
.foot-bottom a:hover{color:var(--brass-light);}
