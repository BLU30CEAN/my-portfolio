/*! For license information please see 505.7c2a59b2.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[505],{69:(e,t,i)=>{i.d(t,{A:()=>d});i(5043);var o=i(5464),r=i(1280),n=i(579);const a=o.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: ${e=>"start"===e.$align?"flex-start":"center"};
  text-align: ${e=>"start"===e.$align?"left":"center"};
  margin-bottom: 2rem;
  gap: 0.4rem;
`,s=(0,o.Ay)(r.P.span)`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.primary};
`,l=(0,o.Ay)(r.P.h2)`
  font-size: ${e=>e.theme.typography.fluidH2};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.text};
  margin: 0;
`,c=(0,o.Ay)(r.P.p)`
  margin: 0.15rem 0 0;
  max-width: 58ch;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: ${e=>e.theme.typography.fluidBody};
  line-height: 1.7;
`,d=({eyebrow:e,title:t,subtitle:i,align:o="start"})=>(0,n.jsxs)(a,{$align:o,children:[e&&(0,n.jsx)(s,{initial:{opacity:0,y:8},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-20%"},transition:{duration:.45},children:e}),(0,n.jsx)(l,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-20%"},transition:{duration:.5,delay:.04},children:t}),i&&(0,n.jsx)(c,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-20%"},transition:{duration:.5,delay:.08},children:i})]})},111:(e,t,i)=>{i.d(t,{I:()=>a});var o=i(5043),r=i(2892),n=i(1795);function a(){!n.r.current&&(0,r.U)();const[e]=(0,o.useState)(n.O.current);return e}},764:(e,t,i)=>{i.d(t,{A:()=>o});const o=(0,i(7784).A)("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]])},2626:(e,t,i)=>{i.d(t,{A:()=>o});const o=(0,i(7784).A)("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]])},4505:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Bt});var o=i(5043),r=i(3721),n=i(5464),a=i(1280),s=i(111),l=i(948),c=i(441),d=i(1915),m=i(7784);const h=(0,m.A)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),p=(0,m.A)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]),g=(0,m.A)("github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);var y=i(7511),x=i(579);const f=(0,n.Ay)(a.P.button)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  border: ${e=>"primary"===e.$variant?"none":`1px solid ${e.theme.colors.borderStrong}`};
  background: ${e=>"primary"===e.$variant?e.theme.colors.gradient:"transparent"};
  color: ${e=>"primary"===e.$variant?"#fff":e.theme.colors.text};
  padding: 0.85rem 1.35rem;
  border-radius: ${e=>e.theme.radii.md};
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: -0.01em;
  box-shadow: ${e=>"primary"===e.$variant?e.theme.shadows.button:"none"};
  transition: background ${e=>e.theme.motion.durFast}
      ${e=>e.theme.motion.easeOut},
    border-color ${e=>e.theme.motion.durFast}
      ${e=>e.theme.motion.easeOut},
    color ${e=>e.theme.motion.durFast} ${e=>e.theme.motion.easeOut};

  &:hover {
    ${e=>"ghost"===e.$variant&&`\n      border-color: ${e.theme.colors.primary};\n      color: ${e.theme.colors.primary};\n    `}
  }
`,u=({children:e,variant:t="primary",strength:i=18,...r})=>{const n=(0,o.useRef)(null),a=(0,s.I)(),d=(0,l.d)(0),m=(0,l.d)(0),h=(0,c.z)(d,{stiffness:240,damping:18,mass:.4}),p=(0,c.z)(m,{stiffness:240,damping:18,mass:.4});return(0,x.jsx)(f,{ref:n,$variant:t,style:{x:h,y:p},onMouseMove:e=>{if(a||!n.current)return;const t=n.current.getBoundingClientRect(),o=t.left+t.width/2,r=t.top+t.height/2,s=(e.clientX-o)/(t.width/2),l=(e.clientY-r)/(t.height/2);d.set(s*i),m.set(l*i)},onMouseLeave:()=>{d.set(0),m.set(0)},whileTap:{scale:.96},...r,children:e})};var v=i(6025);const b=[{id:"Q-1042",title:"\uc8fc\ucc28 \ub2e8\uc18d \ubb38\uc758",draft:"\ud574\ub2f9 \uad6c\uc5ed\uc740 \uc2dc\uac04\uc81c \uc8fc\ucc28\uc785\ub2c8\ub2e4. \uacfc\ud0dc\ub8cc \ud655\uc815\uc740 \uc774 \ud654\uba74\uc5d0\uc11c \ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",source:"\uad50\ud1b5 \uc548\ub0b4 FAQ"},{id:"Q-1041",title:"\ubd84\uc2e4\ubb3c \uc811\uc218",draft:"\uc628\ub77c\uc778 \ud3ec\ud138 \ub610\ub294 \uac00\uae4c\uc6b4 \uc9c0\uad6c\ub300\uc5d0\uc11c \uc811\uc218\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"\ubbfc\uc6d0 \ub9e4\ub274\uc5bc 4.2"}],A=n.Ay.div`
  display: grid;
  grid-template-columns: 0.9fr 1.3fr 0.9fr;
  min-height: 280px;
  border: 1px solid ${e=>e.theme.colors.borderStrong};
  background: ${e=>e.theme.colors.surface};
  box-shadow: ${e=>e.theme.shadows.card};
  overflow: hidden;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`,j=n.Ay.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  border-right: 1px solid ${e=>e.theme.colors.border};

  &:last-child {
    border-right: none;
  }
`,$=n.Ay.div`
  flex-shrink: 0;
  padding: 0.55rem 0.7rem;
  font-family: ${e=>e.theme.typography.fontMono};
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${e=>e.theme.colors.textMuted};
  border-bottom: 1px solid ${e=>e.theme.colors.border};
`,w=n.Ay.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 0.45rem;
`,k=n.Ay.button`
  display: block;
  width: 100%;
  text-align: left;
  margin-bottom: 0.35rem;
  padding: 0.55rem 0.6rem;
  border: 1px solid
    ${e=>e.$on?e.theme.colors.primary:e.theme.colors.border};
  background: ${e=>e.$on?e.theme.colors.primarySoft:e.theme.colors.backgroundElevated};
  color: ${e=>e.theme.colors.text};
  font: inherit;
  cursor: pointer;
`,S=n.Ay.div`
  font-family: ${e=>e.theme.typography.fontMono};
  font-size: 0.68rem;
  color: ${e=>e.theme.colors.primary};
`,I=n.Ay.div`
  font-size: 0.82rem;
  font-weight: 600;
  margin-top: 0.15rem;
`,P=n.Ay.div`
  font-size: 0.7rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.textMuted};
  margin-bottom: 0.35rem;
`,M=n.Ay.p`
  margin: 0 0 0.75rem;
  font-size: 0.82rem;
  line-height: 1.55;
  color: ${e=>e.theme.colors.textSecondary};
`,L=n.Ay.div`
  display: flex;
  gap: 0.4rem;
`,C=n.Ay.button`
  flex: 1;
  padding: 0.45rem 0.5rem;
  font: inherit;
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid
    ${e=>"ok"===e.$kind?e.theme.colors.success:e.theme.colors.borderStrong};
  background: ${e=>"ok"===e.$kind?e.theme.colors.success:"transparent"};
  color: ${e=>"ok"===e.$kind?"#fff":e.theme.colors.text};
`,z=n.Ay.p`
  margin: 0.7rem 0 0;
  font-size: 0.75rem;
  line-height: 1.5;
  color: ${e=>e.theme.colors.textMuted};
`,T=()=>{var e;const t=(0,v.d)(),[i,r]=(0,o.useState)(b[0].id),n=null!==(e=b.find(e=>e.id===i))&&void 0!==e?e:b[0];return(0,x.jsxs)("div",{children:[(0,x.jsxs)(A,{"aria-label":"\ub2f4\ub2f9\uc790 \ud655\uc815 \ucf58\uc194 \ubbf8\ub9ac\ubcf4\uae30",children:[(0,x.jsxs)(j,{children:[(0,x.jsx)($,{children:"\ud050"}),(0,x.jsx)(w,{children:b.map(e=>(0,x.jsxs)(k,{type:"button",$on:e.id===i,onClick:()=>r(e.id),children:[(0,x.jsx)(S,{children:e.id}),(0,x.jsx)(I,{children:e.title})]},e.id))})]}),(0,x.jsxs)(j,{children:[(0,x.jsx)($,{children:"AI 1\ucc28 / \ub2f4\ub2f9\uc790 \ud655\uc815"}),(0,x.jsxs)(w,{children:[(0,x.jsx)(P,{children:"AI \ucd08\uc548"}),(0,x.jsx)(M,{children:n.draft}),(0,x.jsx)(P,{children:"\ub2f4\ub2f9\uc790"}),(0,x.jsxs)(L,{children:[(0,x.jsx)(C,{type:"button",$kind:"ok",onClick:()=>t.success("\ud655\uc815. \uc774 \ud654\uba74\uc774 \ucd5c\uc885\uc785\ub2c8\ub2e4."),children:"\ud655\uc815"}),(0,x.jsx)(C,{type:"button",$kind:"hold",onClick:()=>t.info("\uc720\ubcf4. \uadfc\uac70\ub97c \ub2e4\uc2dc \ubd05\ub2c8\ub2e4."),children:"\uc720\ubcf4"})]})]})]}),(0,x.jsxs)(j,{children:[(0,x.jsx)($,{children:"\uadfc\uac70"}),(0,x.jsxs)(w,{children:[(0,x.jsx)(I,{children:n.source}),(0,x.jsx)(M,{children:"\uc6d0\ubb38\uacfc \uac1c\uc815\uc77c\uc744 \uc606\uc5d0 \ub461\ub2c8\ub2e4. \ub2f5\ubcc0\ub9cc \ub2e8\ub3c5\uc73c\ub85c \ubcf4\ub0b4\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."})]})]})]}),(0,x.jsx)(z,{children:"AI \ucd08\uc548\uacfc \ub2f4\ub2f9\uc790 \ud655\uc815\uc774 \ub098\ub25c \ud654\uba74\uc785\ub2c8\ub2e4. \ud050\ub97c \uace0\ub974\uace0 \ud655\uc815/\uc720\ubcf4\ub97c \ub20c\ub7ec \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})},R=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
`,D=n.Ay.div`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
`,E=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,O=n.Ay.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${e=>e.theme.colors.success};
  box-shadow: 0 0 0 4px ${e=>e.theme.colors.success}33;
`,N=(0,n.Ay)(a.P.h1)`
  font-family: ${e=>e.theme.typography.fontDisplay};
  font-size: ${e=>e.theme.typography.fluidH1};
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.02;
  margin: 0;
  color: ${e=>e.theme.colors.text};
`,W=(0,n.Ay)(a.P.p)`
  margin: 0;
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: ${e=>e.theme.colors.textSecondary};

  strong {
    color: ${e=>e.theme.colors.text};
    font-weight: 600;
  }
`,B=(0,n.Ay)(a.P.p)`
  font-size: ${e=>e.theme.typography.fluidBody};
  color: ${e=>e.theme.colors.textSecondary};
  line-height: 1.78;
  margin: 0.15rem 0 0.25rem;
  max-width: 56ch;

  strong {
    color: ${e=>e.theme.colors.text};
    font-weight: 700;
  }
`,_=(0,n.Ay)(a.P.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  align-items: center;
`,F=(0,n.Ay)(a.P.div)`
  display: flex;
  gap: 0.55rem;
`,G=n.Ay.a`
  width: 40px;
  height: 40px;
  border: 1px solid ${e=>e.theme.colors.borderStrong};
  background: ${e=>e.theme.colors.surface};
  color: ${e=>e.theme.colors.text};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    border-color: ${e=>e.theme.colors.primary};
    color: ${e=>e.theme.colors.primary};
  }
`,H=n.Ay.div`
  display: flex;
  justify-content: center;
`,V=(0,n.Ay)(a.P.div)`
  position: relative;
  width: min(320px, 78vw);
  aspect-ratio: 1 / 1;
  background: ${e=>e.theme.colors.surface};
  border: 1px solid ${e=>e.theme.colors.borderStrong};
  box-shadow: ${e=>e.theme.shadows.cardHover};
  overflow: hidden;
`,J=n.Ay.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    140px 140px at var(--mx, 50%) var(--my, 50%),
    ${e=>e.theme.colors.primary}40,
    transparent 70%
  );
  mix-blend-mode: screen;
  z-index: 2;
`,U=(0,n.Ay)(a.P.div)`
  position: absolute;
  inset: 0;
`,Q=n.Ay.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,K=n.Ay.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.theme.colors.gradient};
  color: #fff;
  font-family: ${e=>e.theme.typography.fontDisplay};
  font-size: clamp(3.5rem, 9vw, 5rem);
  font-weight: 800;
`,Z=n.Ay.div`
  position: absolute;
  left: 14px;
  bottom: 14px;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.65rem;
  background: ${e=>`color-mix(in srgb, ${e.theme.colors.backgroundElevated} 82%, transparent)`};
  border: 1px solid ${e=>e.theme.colors.borderStrong};
  backdrop-filter: blur(6px);
  color: ${e=>e.theme.colors.text};
  font-size: 0.78rem;
  font-weight: 600;
`,q=({displayName:e,githubUrl:t,email:i,onPrimary:r,onLab:n})=>{const m=(0,s.I)(),[f,v]=(0,o.useState)(!1),b=(0,o.useMemo)(()=>{var t,i,o,r;const n=e.trim().split(/\s+/);return((null!==(t=null===(i=n[0])||void 0===i?void 0:i.charAt(0))&&void 0!==t?t:"?")+(null!==(o=null===(r=n[1])||void 0===r?void 0:r.charAt(0))&&void 0!==o?o:"")).toUpperCase()},[e]),A=(0,l.d)(0),j=(0,l.d)(0),$=(0,c.z)(A,{stiffness:120,damping:14}),w=(0,c.z)(j,{stiffness:120,damping:14}),k=(0,d.G)($,[-1,1],["8deg","-8deg"]),S=(0,d.G)(w,[-1,1],["-8deg","8deg"]);return(0,x.jsx)(y.A,{id:"home",fullHeight:!0,glow:!0,children:(0,x.jsxs)(R,{children:[(0,x.jsxs)(D,{children:[(0,x.jsxs)(E,{children:[(0,x.jsx)(N,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.05},children:e}),(0,x.jsx)(W,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.1},children:"\ubc31\uc5d4\ub4dc \uac1c\ubc1c\uc790, \uc0dd\uc131\ud615 AI \uad6c\ucd95"}),(0,x.jsxs)(B,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.16},children:["FastAPI\uc640 Spring Boot\ub85c \uc0dd\uc131\ud615 AI\ub97c \uace0\uac1d \ud658\uacbd\uc5d0 \uc62c\ub9bd\ub2c8\ub2e4. \uacb0\uc81c \uc131\uacf5 \ud6c4 \uc8fc\ubb38\uc774 \ube44\ub358 \uc77c\uc744 Datadog, API \ub85c\uadf8, DB\ub97c \uac19\uc740 request\ub85c \ub9de\ucdb0 \ub2eb\uc558\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c \ud638\ucd9c\ub9c8\ub2e4 \ucd94\uc801\uc774 \ub0a8\uac8c \uc9ed\ub2c8\ub2e4. \ucd94\ub860\uc740 vLLM, \uc5d0\uc774\uc804\ud2b8\ub294 DAG\ub85c \ub098\ub215\ub2c8\ub2e4. \uac00\ub4dc\ub808\uc77c\uc774 \ub9c9\uc73c\uba74 LLM\uc744 \ubd80\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),"\ubbfc\uc6d0 \ud654\uba74\uc740 AI \ucd08\uc548\uacfc \ub2f4\ub2f9\uc790 \ud655\uc815\uc744 \ub098\ub215\ub2c8\ub2e4. \uc544\ub798 \ucf58\uc194\uc5d0\uc11c \ub3d9\uc791\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,x.jsxs)(_,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.22},children:[(0,x.jsxs)(u,{variant:"primary",onClick:r,children:["\ud504\ub85c\uc81d\ud2b8 \ubcf4\uae30 ",(0,x.jsx)(h,{size:16})]}),(0,x.jsx)(u,{variant:"ghost",strength:8,onClick:n,children:"\uc2e4\ud5d8 \ubcf4\uae30"}),(0,x.jsxs)(u,{variant:"ghost",strength:8,onClick:()=>{window.location.href=`mailto:${i}`},children:[(0,x.jsx)(p,{size:16})," \uc774\uba54\uc77c"]})]}),(0,x.jsxs)(F,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},children:[(0,x.jsx)(G,{href:t,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:(0,x.jsx)(g,{size:16})}),(0,x.jsx)(G,{href:`mailto:${i}`,"aria-label":"Email",children:(0,x.jsx)(p,{size:16})})]})]}),(0,x.jsx)(H,{children:(0,x.jsxs)(V,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{delay:.18,duration:.55},onMouseMove:e=>{if(m)return;const t=e.currentTarget.getBoundingClientRect(),i=(e.clientX-t.left)/t.width,o=(e.clientY-t.top)/t.height;A.set(2*o-1),j.set(2*i-1),e.currentTarget.style.setProperty("--mx",100*i+"%"),e.currentTarget.style.setProperty("--my",100*o+"%")},onMouseLeave:()=>{A.set(0),j.set(0)},style:{transformStyle:"preserve-3d"},children:[(0,x.jsx)(J,{}),(0,x.jsx)(U,{style:{rotateX:k,rotateY:S},children:f?(0,x.jsx)(K,{children:b||"EJ"}):(0,x.jsx)(Q,{src:"/my-portfolio/profile.jpg",alt:`${e} \ud504\ub85c\ud544`,onError:()=>v(!0)})}),(0,x.jsxs)(Z,{children:[(0,x.jsx)(O,{})," \uace0\uac1d \ud658\uacbd\uc5d0 \uc62c\ub9bd\ub2c8\ub2e4"]})]})})]}),(0,x.jsx)(a.P.div,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{delay:.28,duration:.5},children:(0,x.jsx)(T,{})})]})})},Y=(0,m.A)("award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);var X=i(7118),ee=i(5258);const te=(0,m.A)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);var ie=i(69),oe=i(8297);const re={some:0,all:1};function ne(e,{root:t,margin:i,amount:r,once:n=!1,initial:a=!1}={}){const[s,l]=(0,o.useState)(a);return(0,o.useEffect)(()=>{if(!e.current||n&&s)return;const o={root:t&&t.current||void 0,margin:i,amount:r};return function(e,t,{root:i,margin:o,amount:r="some"}={}){const n=(0,oe.K)(e),a=new WeakMap,s=new IntersectionObserver(e=>{e.forEach(e=>{const i=a.get(e.target);if(e.isIntersecting!==Boolean(i))if(e.isIntersecting){const i=t(e.target,e);"function"===typeof i?a.set(e.target,i):s.unobserve(e.target)}else"function"===typeof i&&(i(e),a.delete(e.target))})},{root:i,rootMargin:o,threshold:"number"===typeof r?r:re[r]});return n.forEach(e=>s.observe(e)),()=>s.disconnect()}(e.current,()=>(l(!0),n?void 0:()=>l(!1)),o)},[t,e,i,n,r]),s}const ae=({to:e,prefix:t="",suffix:i="",duration:r=1.2,className:n})=>{const a=(0,o.useRef)(null),d=ne(a,{once:!0,margin:"-15%"}),m=(0,s.I)(),h=(0,l.d)(0),p=(0,c.z)(h,{stiffness:80,damping:18,mass:.6,duration:r}),[g,y]=(0,o.useState)(0);return(0,o.useEffect)(()=>{if(!d)return;if(m)return void y(e);h.set(e);const t=p.on("change",e=>y(Math.round(e)));return()=>t()},[d,e,m,h,p]),(0,x.jsxs)("span",{ref:a,className:n,children:[t,g.toLocaleString(),i]})},se=[{date:"2026.07 - \uc7ac\uc9c1\uc911",title:"\uc528\uc5d0\uc2a4\ub9ac AI\uc5d4\uc9c0\ub2c8\uc5b4\ub9c1\ud300",description:"\uacf5\uacf5AX '\ubaa8\ub450\uc758 \uacbd\ucc30\uad00'\uc5d0\uc11c Next.js 16 LLMOps \ucf58\uc194\uacfc FastAPI \uc5d0\uc774\uc804\ud2b8 \ud50c\ub85c\uc6b0 \uc2e4\ud589 \uc5d4\uc9c4\uc744 \uc804\ub2f4 \uac1c\ubc1c\ud588\uc2b5\ub2c8\ub2e4. React Flow DAG \uce94\ubc84\uc2a4, \uac00\ub4dc\ub808\uc77c, \ubc30\uce58 \ud3c9\uac00, RBAC \ud504\ub9ac\uc14b, Langfuse \ud2b8\ub808\uc774\uc2f1, RAG \ubaa8\ub2c8\ud130\ub9c1, Docker/NCloud \ud658\uacbd \ubd84\ub9ac\ub97c \uac19\uc740 \uc800\uc7a5\uc18c\uc5d0\uc11c \uc6b4\uc601 \uc218\uc900\uc73c\ub85c \ub2e4\ub4ec\uc5c8\uc2b5\ub2c8\ub2e4."},{date:"2025.04 - 2026.06",title:"\uc720\ud0d1\uc18c\ud504\ud2b8 Convergence Lab",description:"React Native \uc571\uc5d0\uc11c TanStack Query, Zustand, LiveKit, LiveAvatar \uc138\uc158\uacfc WebSocket, Firebase(FCM), WebView \uc624\ub514\uc624 \ud30c\uc774\ud504\ub77c\uc778\uc744 \ub9e1\uc558\uc2b5\ub2c8\ub2e4. \ud3ec\ud138 \ub808\uc778\uc5d0\uc11c\ub294 Spring Boot 4(Java 21), MyBatis, Batch/Quartz, Thymeleaf, FastAPI \ubcf4\uc870 \ub808\uc778\uc5d0\uc11c\ub294 multipart STT\uc640 pydub PCM \ucc98\ub9ac\ub97c \ud568\uaed8 \ub2e4\ub918\uc2b5\ub2c8\ub2e4."},{date:"2024.04 - 2025.04",title:"\uc571\uc778\uc571 \uc8fc\ubb38\ucc44\ub110 \uc2e0\uaddc \uad6c\ucd95",description:"React(TypeScript) \ud504\ub860\ud2b8\uc5d4\ub4dc\uc640 Spring Boot, PostgreSQL API\ub97c \uc124\uacc4\ud558\uace0, AWS EC2, Jenkins \ubc30\ud3ec \uc790\ub3d9\ud654, JWT \uc778\uc99d, NICE Payments, OKPOS \uacb0\uc81c \uc5f0\ub3d9\uc744 \uc9c1\uc811 \uad6c\ud604\ud588\uc2b5\ub2c8\ub2e4."},{date:"2023.01 - 2024.03",title:"\ud648\ud398\uc774\uc9c0 \ubc0f \ubaa8\ubc14\uc77c \uc571 \uc6b4\uc601",description:"\uace0\uac1d, \uc784\uc9c1\uc6d0, \ud611\ub825\uc0ac 3\uc885 \uc571\uc744 \uc720\uc9c0\ubcf4\uc218\ud558\uba70 \uae30\ub2a5 \uac1c\uc120\uacfc JIRA, Confluence \uc694\uccad\uc5d0 \ub300\uc751\ud588\uace0, \uc11c\ube44\uc2a4 \uc911\ub2e8 \uc5c6\ub294 \uc6b4\uc601 \uc548\uc815\uc131\uc744 \ud568\uaed8 \ucc45\uc784\uc84c\uc2b5\ub2c8\ub2e4."},{date:"2022.08 - 2022.12",title:"SAP U4A ERP QA \ubaa8\ub4c8 \uad6c\ucd95",description:"ABAP\uacfc SAP HANA Cloud \uae30\ubc18\uc758 ERP QA \ubaa8\ub4c8\uc744 \uac1c\ubc1c\ud558\uba70, \ubcf4\uc548 \uaddc\uc728\uc774 \uc5c4\uaca9\ud55c \ud658\uacbd\uc5d0\uc11c\uc758 \ud611\uc5c5 \uacbd\ud5d8\uc744 \uc313\uc558\uc2b5\ub2c8\ub2e4."},{date:"2021.05 - 2022.04",title:"\uacb0\uc81c \uc571 \uc194\ub8e8\uc158 \uac1c\ubc1c",description:"Java, JSP, Android \ub124\uc774\ud2f0\ube0c \uc571\uc744 \uae30\ubc18\uc73c\ub85c NICE PG, VAN \uacb0\uc81c \uc5f0\ub3d9\uc744 \uad6c\ud604\ud588\uc2b5\ub2c8\ub2e4."}],le=[{category:"Frontend",skills:["React & TypeScript","Next.js (App Router)","React Native, Expo EAS","Tailwind CSS, Radix(shadcn)","React Flow","Zustand","TanStack Query","i18next"]},{category:"Backend & AI",skills:["Java 21, Spring Boot 4, Maven","MyBatis, MySQL","Spring Security, Batch, Quartz","Python, FastAPI, LangGraph, Langfuse","vLLM, RAG, MCP, RBAC","OpenAI / ElevenLabs / LiveAvatar / LiveKit","pydub, multipart, JWT"]},{category:"Mobile & Realtime",skills:["React Native 0.83 / React 19","LiveKit (Room, Track)","WebSocket Custom Mode","RN WebView","Firebase (FCM), Notifee","\uc624\ub514\uc624 \ub179\uc74c, \uc2a4\ud2b8\ub9ac\ubc0d","SSE/REST\uc640 TanStack \ub3d9\uae30\ud654"]},{category:"Database & Cloud",skills:["PostgreSQL / MySQL / Redis","AWS EC2 / S3","Docker","Jenkins","Git / Linux"]}],ce=n.Ay.div`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,de=(0,n.Ay)(a.P.div)`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: ${e=>e.theme.typography.fluidBody};
  line-height: 1.85;

  p + p {
    margin-top: 1rem;
  }

  strong {
    color: ${e=>e.theme.colors.text};
    font-weight: 700;
  }
`,me=n.Ay.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.85rem;
`,he=(0,n.Ay)(a.P.div)`
  padding: 1.15rem 1.1rem;
  background: ${e=>e.theme.colors.surface};
  border: 1px solid ${e=>e.theme.colors.border};
  box-shadow: ${e=>e.theme.shadows.card};
`,pe=n.Ay.div`
  width: 34px;
  height: 34px;
  margin-bottom: 0.7rem;
  background: ${e=>e.theme.colors.primarySoft};
  color: ${e=>e.theme.colors.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,ge=n.Ay.div`
  font-family: ${e=>e.theme.typography.fontDisplay};
  font-size: clamp(1.35rem, 2.6vw, 1.75rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${e=>e.theme.colors.text};

  span.suffix {
    color: ${e=>e.theme.colors.primary};
    margin-left: 0.12rem;
  }
`,ye=n.Ay.div`
  margin-top: 0.2rem;
  font-size: 0.82rem;
  color: ${e=>e.theme.colors.textMuted};
`,xe=n.Ay.div`
  margin-top: 3rem;
`,fe=n.Ay.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  border-left: 2px solid ${e=>e.theme.colors.borderStrong};
`,ue=(0,n.Ay)(a.P.li)`
  position: relative;
  padding: 0 0 1.5rem 1.25rem;

  &::before {
    content: "";
    position: absolute;
    left: -5px;
    top: 0.45rem;
    width: 8px;
    height: 8px;
    background: ${e=>e.theme.colors.primary};
  }

  &:last-child {
    padding-bottom: 0;
  }
`,ve=n.Ay.div`
  font-family: ${e=>e.theme.typography.fontMono};
  font-size: 0.72rem;
  color: ${e=>e.theme.colors.primary};
  margin-bottom: 0.25rem;
`,be=n.Ay.h3`
  margin: 0 0 0.35rem;
  font-size: 1.02rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.text};
`,Ae=n.Ay.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.65;
  color: ${e=>e.theme.colors.textSecondary};
`,je=n.Ay.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`,$e=(0,n.Ay)(a.P.div)`
  padding: 1.15rem 1.2rem;
  background: ${e=>e.theme.colors.surface};
  border: 1px solid ${e=>e.theme.colors.border};
`,we=n.Ay.h3`
  margin: 0 0 0.7rem;
  font-size: 0.92rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.primary};
`,ke=n.Ay.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`,Se=n.Ay.li`
  font-size: 0.86rem;
  line-height: 1.5;
  color: ${e=>e.theme.colors.textSecondary};
`,Ie=[{icon:Y,to:4,suffix:"\ub144+",label:"\ubc31\uc5d4\ub4dc / \uc6b4\uc601 \uc2e4\ubb34"},{icon:X.A,staticValue:"5\uac1c",label:"\uc8fc\uc694 \ud504\ub85c\uc81d\ud2b8"},{icon:ee.A,staticValue:"500ms",label:"\uc2e4\uc2dc\uac04 \uc9c0\uc5f0 \ubaa9\ud45c"},{icon:te,staticValue:"Docker",label:"\uc124\uce58 \ub7f0\ubd81 / Swagger"}],Pe=()=>(0,x.jsxs)(y.A,{id:"about",children:[(0,x.jsx)(ie.A,{title:"\uc18c\uac1c",subtitle:"FastAPI, Spring Boot\ub85c \uc0dd\uc131\ud615 AI\ub97c \uace0\uac1d \ud658\uacbd\uc5d0 \uc62c\ub9bd\ub2c8\ub2e4."}),(0,x.jsxs)(ce,{children:[(0,x.jsxs)(de,{initial:{opacity:0,y:14},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-15%"},transition:{duration:.6},children:[(0,x.jsx)("p",{children:"\uacb0\uc81c \uc131\uacf5 \ud6c4 \uc8fc\ubb38\uc774 \uc548 \ub0a8\ub358 \uc77c\uc744 Datadog, API \ub85c\uadf8, DB\ub97c \uac19\uc740 request\ub85c \ub9de\ucdb0 \uae30\ud55c \ub0b4 \ub2eb\uc558\uc2b5\ub2c8\ub2e4. \uadf8 \ub4a4\ub85c AI \ud30c\uc774\ud504\ub77c\uc778\uc5d0\ub3c4 request \ub2e8\uc704 \ucd94\uc801\uc744 \ub123\uc2b5\ub2c8\ub2e4."}),(0,x.jsx)("p",{children:"\ubaa8\ub450\uc758 \uacbd\ucc30\uad00\uc5d0\uc11c\ub294 \ucd94\ub860(vLLM)\uacfc \uc5d0\uc774\uc804\ud2b8(DAG)\ub97c \ub098\ub234\uc2b5\ub2c8\ub2e4. \ucc44\ub110\uc774 \ub298\uc5b4\ub3c4 \ubaa8\ub378 \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub294 \ub450\uace0 \uadf8\ub798\ud504\ub9cc \ubc14\uafc9\ub2c8\ub2e4. \uac00\ub4dc\ub808\uc77c\uc774 \ub9c9\uc73c\uba74 \ud558\uc704 LLM\uc744 \ud638\ucd9c\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),(0,x.jsx)("p",{children:"\uc124\uce58 \uc21c\uc11c\ub294 Docker Compose\uc640 \ub7f0\ubd81\uc5d0 \uc801\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c \uad6c\ucd95\uc774 \uac19\uc740 \uc21c\uc11c\ub97c \ud0c0\uac8c \ud558\uae30 \uc704\ud574\uc11c\uc785\ub2c8\ub2e4."})]}),(0,x.jsx)(me,{children:Ie.map((e,t)=>(0,x.jsxs)(he,{initial:{opacity:0,y:14},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-15%"},transition:{duration:.45,delay:.06*t},children:[(0,x.jsx)(pe,{children:(0,x.jsx)(e.icon,{size:16})}),(0,x.jsx)(ge,{children:"number"===typeof e.to?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(ae,{to:e.to}),e.suffix&&(0,x.jsx)("span",{className:"suffix",children:e.suffix})]}):e.staticValue}),(0,x.jsx)(ye,{children:e.label})]},e.label))})]}),(0,x.jsxs)(xe,{children:[(0,x.jsx)(ie.A,{title:"\uacbd\ub825",subtitle:"2021\ub144\ubd80\ud130 \ud604\uc7ac\uae4c\uc9c0, \ucd1d 4\ub144 4\uac1c\uc6d4."}),(0,x.jsx)(fe,{children:se.map((e,t)=>(0,x.jsxs)(ue,{initial:{opacity:0,x:-8},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-12%"},transition:{duration:.4,delay:.04*t},children:[(0,x.jsx)(ve,{children:e.date}),(0,x.jsx)(be,{children:e.title}),(0,x.jsx)(Ae,{children:e.description})]},e.title))})]}),(0,x.jsxs)(xe,{children:[(0,x.jsx)(ie.A,{title:"\uc0ac\uc6a9 \uae30\uc220",subtitle:"\uc6b4\uc601\uc5d0\uc11c \uc4f4 \uac83\ub9cc \uc801\uc5c8\uc2b5\ub2c8\ub2e4."}),(0,x.jsx)(je,{children:le.map((e,t)=>(0,x.jsxs)($e,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-12%"},transition:{duration:.4,delay:.05*t},children:[(0,x.jsx)(we,{children:e.category}),(0,x.jsx)(ke,{children:e.skills.map(e=>(0,x.jsx)(Se,{children:e},e))})]},e.category))})]})]}),Me=JSON.parse('[{"category":"\uc6f9 \ud074\ub77c\uc774\uc5b8\ud2b8","technologies":[{"name":"React","image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},{"name":"TypeScript","image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},{"name":"Next.js","image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"},{"name":"Tailwind CSS","image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"},{"name":"React Flow","image":"https://cdn.simpleicons.org/xyflow/1C1E26"}]},{"category":"\ubaa8\ubc14\uc77c (React Native, kchao)","technologies":[{"name":"React Native","image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},{"name":"Android","image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"},{"name":"LiveKit","image":"https://cdn.simpleicons.org/livekit/00D4FF"},{"name":"WebView","image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg"},{"name":"Firebase","image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"}]},{"category":"\ud074\ub77c\uc774\uc5b8\ud2b8 \uc720\ud2f8","technologies":[{"name":"TanStack Query","image":"https://cdn.simpleicons.org/tanstack/FF4154"},{"name":"Zustand","image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zustand/zustand-original.svg"},{"name":"Axios","image":"https://cdn.simpleicons.org/axios/5A29E4"},{"name":"i18next","image":"https://cdn.simpleicons.org/i18next/26A69A"}]},{"category":"\ubc31\uc5d4\ub4dc / API","technologies":[{"name":"Java 21","image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"},{"name":"Spring Boot","image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"},{"name":"Maven","image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg"},{"name":"FastAPI","image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"},{"name":"Python","image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},{"name":"Pydantic","image":"https://cdn.simpleicons.org/pydantic/E92063"}]},{"category":"LLMOps / \uc5d0\uc774\uc804\ud2b8","technologies":[{"name":"LangChain","image":"https://cdn.simpleicons.org/langchain/1C3C3C"},{"name":"LangGraph","image":"https://cdn.simpleicons.org/langchain/1C3C3C"},{"name":"MCP","image":"https://cdn.simpleicons.org/modelcontextprotocol/000000"},{"name":"vLLM","image":"https://cdn.simpleicons.org/vllm/FF6F00"},{"name":"RAG","image":"https://cdn.simpleicons.org/huggingface/FFD21E"},{"name":"Langfuse","image":"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHJ4PSI4IiBmaWxsPSIjMTE4RkQ3Ii8+PHBhdGggZD0iTTE0IDI4VjIwSDE4VjI4SDE0Wk0yMiAyOFYxNkgzMlYyMEgyNlYyOEgyMloiIGZpbGw9IndoaXRlIi8+PC9zdmc+"}]},{"category":"\ub370\uc774\ud130\ubca0\uc774\uc2a4 / \uad00\uce21","technologies":[{"name":"MySQL","image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},{"name":"PostgreSQL","image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"},{"name":"DataDog","image":"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iIzYzMkNBQyIvPgo8cGF0aCBkPSJNMTYgMjBIMzJWMjhIMTZWMjBaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTggMjJIMzBWMjZIMThWMjJaIiBmaWxsPSIjNjMyQ0FDIi8+Cjwvc3ZnPgo="},{"name":"GTM","image":"https://img.icons8.com/color/96/google-tag-manager.png"},{"name":"GA","image":"https://img.icons8.com/color/96/google-analytics.png"}]},{"category":"AI / \uc2e4\uc2dc\uac04 \ubbf8\ub514\uc5b4","technologies":[{"name":"OpenAI API","image":"https://api.iconify.design/simple-icons:openai.svg"},{"name":"ElevenLabs","image":"https://cdn.simpleicons.org/elevenlabs/E1251B"},{"name":"LiveAvatar","image":"https://www.heygen.com/favicon.ico"},{"name":"WebRTC","image":"https://cdn.simpleicons.org/webrtc/333333"}]},{"category":"\ubc30\ud3ec / \uc778\ud504\ub77c","technologies":[{"name":"AWS","image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"},{"name":"Docker","image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"},{"name":"Jenkins","image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"},{"name":"Linux","image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"},{"name":"EAS","image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg"}]},{"category":"\ubc84\uc804 \uad00\ub9ac","technologies":[{"name":"Git","image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},{"name":"GitHub","image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},{"name":"GitLab","image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"}]}]'),Le=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`,Ce=n.Ay.div``,ze=(0,n.Ay)(a.P.h3)`
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${e=>e.theme.colors.textMuted};
  margin: 0 0 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;

  &::before {
    content: "";
    width: 22px;
    height: 2px;
    background: ${e=>e.theme.colors.primary};
  }
`,Te=n.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(108px, 1fr));
  gap: 0.85rem;

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    gap: 0.7rem;
  }
`,Re=(0,n.Ay)(a.P.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  padding: 1rem 0.65rem;
  background: ${e=>e.theme.colors.surface};
  border-radius: ${e=>e.theme.radii.md};
  border: 1px solid ${e=>e.theme.colors.border};
  min-height: 92px;
  cursor: default;
  transition: transform ${e=>e.theme.motion.durFast}
      ${e=>e.theme.motion.easeOut},
    border-color ${e=>e.theme.motion.durFast}
      ${e=>e.theme.motion.easeOut},
    box-shadow ${e=>e.theme.motion.durFast}
      ${e=>e.theme.motion.easeOut};

  &:hover {
    transform: translateY(-3px);
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: ${e=>e.theme.shadows.cardHover};
  }

  &:hover .tip {
    opacity: 1;
    transform: translate(-50%, -6px);
  }
`,De=n.Ay.div`
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${e=>e.theme.colors.border};

  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }
`,Ee=n.Ay.div`
  font-size: 0.78rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.text};
  text-align: center;
  letter-spacing: -0.01em;
`,Oe=n.Ay.span`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  opacity: 0;
  pointer-events: none;
  background: ${e=>e.theme.colors.text};
  color: ${e=>e.theme.colors.background};
  padding: 0.3rem 0.55rem;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 600;
  white-space: nowrap;
  transition: opacity ${e=>e.theme.motion.durFast}
      ${e=>e.theme.motion.easeOut},
    transform ${e=>e.theme.motion.durFast}
      ${e=>e.theme.motion.easeOut};
`,Ne=n.Ay.span`
  font-size: 0.6rem;
  font-weight: 800;
  letter-spacing: -0.06em;
  text-align: center;
  color: ${e=>e.theme.colors.primary};
  padding: 0 2px;
  word-break: break-word;
`;function We({src:e,name:t}){const[i,r]=(0,o.useState)(!1);return i?(0,x.jsx)(Ne,{children:t.slice(0,4)}):(0,x.jsx)("img",{src:e,alt:"",loading:"lazy",decoding:"async",referrerPolicy:"no-referrer",onError:()=>r(!0)})}const Be=()=>(0,x.jsxs)(y.A,{id:"tech",children:[(0,x.jsx)(ie.A,{title:"\uae30\uc220 \uc2a4\ud0dd",subtitle:"\uc6f9, \ubaa8\ubc14\uc77c, \ubc31\uc5d4\ub4dc, LLMOps, \uc778\ud504\ub77c. \uc6b4\uc601\uc5d0\uc11c \uc4f4 \ub3c4\uad6c\uc785\ub2c8\ub2e4."}),(0,x.jsx)(Le,{children:Me.map((e,t)=>(0,x.jsxs)(Ce,{children:[(0,x.jsx)(ze,{initial:{opacity:0,x:-8},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-15%"},transition:{duration:.45,delay:.05*t},children:e.category}),(0,x.jsx)(Te,{children:e.technologies.map((e,i)=>(0,x.jsxs)(Re,{initial:{opacity:0,y:14},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-15%"},transition:{duration:.4,delay:.04*t+.03*i},children:[(0,x.jsx)(De,{children:(0,x.jsx)(We,{src:e.image,name:e.name})}),(0,x.jsx)(Ee,{children:e.name}),(0,x.jsx)(Oe,{className:"tip",children:e.name})]},e.name))})]},e.category))})]});var _e=i(764);const Fe=[{tag:"UI",title:"React (\uacf5\uc2dd \ubb38\uc11c)",href:"https://react.dev/",note:"\ucef4\ud3ec\ub10c\ud2b8\xb7\ud6c5\xb7\ub3d9\uc2dc\uc131 \ub80c\ub354\ub9c1 \uae30\uc900\uc810."},{tag:"Types",title:"TypeScript Handbook",href:"https://www.typescriptlang.org/docs/handbook/intro.html",note:"\ud504\ub860\ud2b8\xb7\ubc31 \ud0c0\uc785 \uc548\uc804 \ub808\uc774\uc5b4\ub9c1."},{tag:"State",title:"Zustand \ubb38\uc11c",href:"https://docs.pmnd.rs/zustand/getting-started/introduction",note:"\uacbd\ub7c9 \ud074\ub77c \uc804\uc5ed \uc0c1\ud0dc(\ubaa8\ubc14\uc77c\xb7\uc6f9 \ube0c\ub9ac\uc9c0 \ud3ec\ud568)."},{tag:"API",title:"OpenAPI Specification (Swagger)",href:"https://swagger.io/specification/",note:"REST \uacc4\uc57d\uacfc \ubb38\uc11c \uc0dd\uc131\uc758 \ud45c\uc900 \ub808\ud37c\ub7f0\uc2a4."},{tag:"Backend",title:"Spring Boot Reference",href:"https://docs.spring.io/spring-boot/reference/index.html",note:"\uc5d4\ud130\ud504\ub77c\uc774\uc988 \ubc31\uc5d4\ub4dc\xb7\uc124\uc815 \uad00\ub840."},{tag:"Portal",title:"Spring Security Reference",href:"https://docs.spring.io/spring-security/reference/index.html",note:"\ud3ec\ud138\xb7REST \ubcf4\uc548 \ud544\ud130\xb7\uc778\uc99d \ubaa8\ub378 \uadfc\uac70."},{tag:"Data",title:"MyBatis 3 Reference",href:"https://mybatis.org/mybatis-3/index.html",note:"Spring \uc5f0\ub3d9 \ud504\ub85c\uc81d\ud2b8\uc758 Mapper\xb7XML \uc2a4\ud399."},{tag:"DB",title:"MySQL Documentation",href:"https://dev.mysql.com/doc/",note:"\ucee4\ub125\ud130\xb7SQL\xb7\ud29c\ub2dd \ub808\ud37c\ub7f0\uc2a4 \ud5c8\ube0c."},{tag:"ML API",title:"FastAPI",href:"https://fastapi.tiangolo.com/",note:"Python \uc11c\ube44\uc2a4\xb7OpenAPI \ub178\ucd9c \ud328\ud134."},{tag:"Agent",title:"React Flow Documentation",href:"https://reactflow.dev/learn",note:"\uc5d0\uc774\uc804\ud2b8 \ud50c\ub85c\uc6b0 \uce94\ubc84\uc2a4\xb7\ub178\ub4dc\xb7\uc5e3\uc9c0\xb7\ub808\uc774\uc544\uc6c3 \uc124\uacc4 \uae30\uc900."},{tag:"LLM",title:"vLLM Documentation",href:"https://docs.vllm.ai/en/latest/",note:"OpenAI \ud638\ud658 \ucd94\ub860 \uc11c\ubc84\xb7\ubc30\uce58\xb7\uc2a4\ub8e8\ud48b \ud29c\ub2dd \ub808\ud37c\ub7f0\uc2a4."},{tag:"Agent",title:"LangChain Documentation",href:"https://python.langchain.com/docs/introduction/",note:"\uccb4\uc778\xb7\ub3c4\uad6c \uc5f0\ub3d9\xb7MCP \uc2e4\ud5d8 \ud2b8\ub799 \uadfc\uac70."},{tag:"Obs",title:"Langfuse Documentation",href:"https://langfuse.com/docs",note:"\ud2b8\ub808\uc774\uc2a4\xb7\ud3c9\uac00\xb7\ub370\uc774\ud130\uc14b \uad00\uce21(\ub0b4\ubd80 \uc5f0\ub3d9 \uae30\uc900)."},{tag:"Protocol",title:"Model Context Protocol",href:"https://modelcontextprotocol.io/introduction",note:"MCP \uc11c\ubc84\xb7\ud074\ub77c\uc774\uc5b8\ud2b8\xb7\ub3c4\uad6c \uacc4\uc57d."},{tag:"DB",title:"PostgreSQL Documentation",href:"https://www.postgresql.org/docs/current/",note:"\ucffc\ub9ac\xb7\uc778\ub371\uc2a4\xb7\ud2b8\ub79c\uc7ad\uc158 \uc124\uacc4 \uadfc\uac70."},{tag:"UI",title:"TanStack Query (React)",href:"https://tanstack.com/query/latest/docs/framework/react/overview",note:"\uc11c\ubc84 \uc0c1\ud0dc\xb7\uce90\uc2dc\xb7\uc7ac\uc694\uccad \uc815\ucc45 \ub808\ud37c\ub7f0\uc2a4(\ud504\ub85c\uc81d\ud2b8 \uc758\uc874\uc131 \uae30\uc900)."},{tag:"UI",title:"Next.js Documentation",href:"https://nextjs.org/docs",note:"App Router\xb7Route Handlers \ub808\ud37c\ub7f0\uc2a4(word-baseball \ub4f1)."},{tag:"Mobile",title:"React Native Documentation",href:"https://reactnative.dev/docs/getting-started",note:"\ub124\uc774\ud2f0\ube0c \ubaa8\ub4c8\xb7Metro \uadfc\uac70."},{tag:"Runtime",title:"MDN \u2014 WebSocket API",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",note:"\uc2e4\uc2dc\uac04 \uc774\ubca4\ud2b8 \ucc44\ub110 \uad6c\ud604 \ub808\ud37c\ub7f0\uc2a4."},{tag:"Media",title:"MDN \u2014 WebRTC API",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API",note:"P2S/\ubbf8\ub514\uc5b4 \uc2a4\ud2b8\ub9bc \uacc4\uc57d \ud655\uc778."},{tag:"Real-time",title:"LiveKit Docs",href:"https://docs.livekit.io/",note:"WebRTC \ubbf8\ub514\uc5b4 \uc778\ud504\ub77c\xb7\ud074\ub77c\uc774\uc5b8\ud2b8 SDK."},{tag:"AI",title:"OpenAI Platform \u2014 Speech to text",href:"https://platform.openai.com/docs/guides/speech-to-text",note:"STT \ud638\ucd9c \uaddc\uaca9\xb7\uc81c\ud55c \ud655\uc778."},{tag:"AI",title:"OpenAI Platform \u2014 Text to speech",href:"https://platform.openai.com/docs/guides/text-to-speech",note:"TTS \ucd9c\ub825 \ud3ec\ub9f7\xb7\uc2a4\ud2b8\ub9ac\ubc0d \uc635\uc158."},{tag:"AI",title:"OpenAI API Reference",href:"https://platform.openai.com/docs/api-reference",note:"\ucc57\xb7\ucd94\ub860 \uc694\uccad \ud45c\uc900 \ub808\ud37c\ub7f0\uc2a4."},{tag:"AI",title:"Anthropic Claude API \u2014 Overview",href:"https://docs.anthropic.com/en/api/getting-started",note:"Claude \uba54\uc2dc\uc9c0 API\xb7\uc778\uc99d\xb7\ub808\uc774\ud2b8\ub9ac\ubc0b \ub808\ud37c\ub7f0\uc2a4 \ud5c8\ube0c."},{tag:"Voice",title:"ElevenLabs Documentation",href:"https://elevenlabs.io/docs",note:"TTS \uc5d4\uc9c4\xb7\uc2e4\uc2dc\uac04 API \ubb38\uc11c \ud5c8\ube0c."},{tag:"ML",title:"pandas documentation",href:"https://pandas.pydata.org/docs/",note:"DataFrame\xb7\ubcc0\ud658\xb7\uc9d1\uacc4 \uae30\uc900 \ub808\ud37c\ub7f0\uc2a4."},{tag:"ML",title:"scikit-learn User Guide",href:"https://scikit-learn.org/stable/user_guide.html",note:"\uc804\ucc98\ub9ac\xb7\ud30c\uc774\ud504\ub77c\uc778\xb7\ud3c9\uac00 \uc9c0\ud45c \ub808\ud37c\ub7f0\uc2a4."},{tag:"Avatar",title:"HeyGen Developers",href:"https://developers.heygen.com/",note:"\uba54\ud0c0\ud734\uba3c\xb7\ube44\ub514\uc624 \uc0dd\uc131\xb7API(v3 \ub4f1) \uc5f0\ub3d9 \uae30\uc900."},{tag:"Avatar",title:"LiveAvatar Documentation",href:"https://docs.liveavatar.com/",note:"\uc2e4\uc2dc\uac04 \uc138\uc158\xb7\uc544\ubc14\ud0c0 \uc2a4\ud2b8\ub9bc API(\ubb38\uc11c \ud5c8\ube0c)."},{tag:"Ops",title:"Docker Documentation",href:"https://docs.docker.com/",note:"\ubc30\ud3ec \uc774\uc2dd\uc131\xb7\uc774\ubbf8\uc9c0\xb7\ucef4\ud3ec\uc988 \ud328\ud134."},{tag:"Cloud",title:"AWS Documentation",href:"https://docs.aws.amazon.com/",note:"EC2 \ub4f1 \uc778\ud504\ub77c\xb7\ubcf4\uc548 \ub808\ud37c\ub7f0\uc2a4 \ud5c8\ube0c."}],Ge=n.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(268px, 1fr));
  gap: 0.95rem;
`,He=(0,n.Ay)(a.P.article)`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  padding: 1.1rem 1.25rem;
  background: ${e=>e.theme.colors.surface};
  border-radius: ${e=>e.theme.radii.md};
  border: 1px solid ${e=>e.theme.colors.border};
  box-shadow: ${e=>e.theme.shadows.card};
  transition: border-color ${e=>e.theme.motion.dur}
      ${e=>e.theme.motion.easeOut},
    box-shadow ${e=>e.theme.motion.dur} ${e=>e.theme.motion.easeOut},
    transform ${e=>e.theme.motion.dur} ${e=>e.theme.motion.easeOut};

  &:hover {
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: ${e=>e.theme.shadows.cardHover};
    transform: translateY(-3px);
  }
`,Ve=n.Ay.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.6rem;
`,Je=n.Ay.h3`
  font-size: 0.97rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.text};
`,Ue=n.Ay.span`
  flex-shrink: 0;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.2rem 0.55rem;
  border-radius: 6px;
  background: ${e=>e.theme.colors.primarySoft};
  color: ${e=>e.theme.colors.primary};
`,Qe=n.Ay.a`
  font-size: 0.82rem;
  color: ${e=>e.theme.colors.primary};
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  word-break: break-all;
  text-decoration: none;

  svg {
    flex-shrink: 0;
    opacity: 0.75;
  }

  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`,Ke=n.Ay.p`
  margin: 0;
  font-size: 0.83rem;
  color: ${e=>e.theme.colors.textSecondary};
  line-height: 1.55;
`,Ze=n.Ay.p`
  color: ${e=>e.theme.colors.textMuted};
  font-size: 0.85rem;
  line-height: 1.65;
  margin: 2rem 0 0;
  max-width: 56ch;

  a {
    color: ${e=>e.theme.colors.primary};
    font-weight: 600;
  }
`,qe=()=>(0,x.jsxs)(y.A,{id:"references",children:[(0,x.jsx)(ie.A,{title:"\ucc38\uace0 \ubb38\uc11c",subtitle:"\uad6c\ud604\ud560 \ub54c \uba3c\uc800 \uc5f0 \uacf5\uc2dd \ubb38\uc11c\uc785\ub2c8\ub2e4. \uc694\uc57d \ube14\ub85c\uadf8\ub294 \ub4a4\ub85c \ubbf8\ub8f9\ub2c8\ub2e4."}),(0,x.jsx)(Ge,{children:Fe.map((e,t)=>(0,x.jsxs)(He,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-10%"},transition:{duration:.42,delay:Math.min(.025*t,.32)},children:[(0,x.jsxs)(Ve,{children:[(0,x.jsx)(Je,{children:e.title}),(0,x.jsx)(Ue,{children:e.tag})]}),(0,x.jsxs)(Qe,{href:e.href,target:"_blank",rel:"noopener noreferrer","aria-label":`${e.title}, \uc0c8 \ud0ed\uc5d0\uc11c \uc5f4\uae30`,children:[new URL(e.href).hostname.replace(/^www\./,"")," ",(0,x.jsx)(_e.A,{size:14,strokeWidth:2,"aria-hidden":!0})]}),(0,x.jsx)(Ke,{children:e.note})]},e.href))}),(0,x.jsxs)(Ze,{children:["\uc774 \uc0ac\uc774\ud2b8 \ubaa8\uc158\uc740"," ",(0,x.jsx)("a",{href:"https://motion.dev/docs/react-motion-component",target:"_blank",rel:"noopener noreferrer",children:"Motion for React"}),", \uc2a4\ud0c0\uc77c\uc740"," ",(0,x.jsx)("a",{href:"https://styled-components.com/docs",target:"_blank",rel:"noopener noreferrer",children:"styled-components"})," ","\ubb38\uc11c\ub97c \uae30\uc900\uc73c\ub85c \uc9f0\uc2b5\ub2c8\ub2e4."]})]});var Ye=i(3546);const Xe=(0,m.A)("ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]),et=[{tab:"professional",title:"\ubaa8\ub450\uc758 \uacbd\ucc30\uad00 LLMOps \ud50c\ub7ab\ud3fc",description:"\uace0\uac1d \uc11c\ubc84\uc5d0\uc11c \ub3cc\uc544\uac00\uac8c \uc9f0\ub2e4. \ucd94\ub860\uc740 vLLM, \uc5d0\uc774\uc804\ud2b8\ub294 DAG\ub85c \ub098\ub234\ub2e4. \uac00\ub4dc\ub808\uc77c\uc774 \ub9c9\uc73c\uba74 \ud558\uc704 LLM\uc744 \ud638\ucd9c\ud558\uc9c0 \uc54a\ub294\ub2e4. FastAPI \uc2e4\ud589 \uc5d4\uc9c4, RAG, \ubc30\uce58 \ud3c9\uac00, Docker \ud658\uacbd \ubd84\ub9ac, \uc124\uce58 \ub7f0\ubd81\uc744 \uc9c1\uc811 \uc9f0\ub2e4. \uc2e4\ud5d8 \ud398\uc774\uc9c0\uc5d0\uc11c \uadf8 \ud310\ub2e8\uc744 \ub20c\ub7ec \ubcfc \uc218 \uc788\ub2e4.",tech:["FastAPI","vLLM","RAG","LangGraph","Langfuse","Docker"],actions:[{label:"LLMOps \ub7a9 \uc5f4\uae30",href:"#/llmops-lab",kind:"external"}]},{tab:"professional",title:"AI \uc778\ud130\ub799\ud2f0\ube0c \uba54\ud0c0\ud734\uba3c \uc544\ubc14\ud0c0 \ud50c\ub7ab\ud3fc",description:"HeyGen, LiveAvatar \uac19\uc740 \uc2e4\uc2dc\uac04 AI \uc544\ubc14\ud0c0 API\uc640 \uc5f0\ub3d9\ud574 Whisper STT, GPT-4o-mini(Claude 3.5), ElevenLabs TTS, \ub9bd\uc2f1\ud06c\ub97c \uc787\ub294 \ud750\ub984\uc744 \uc624\ucf00\uc2a4\ud2b8\ub808\uc774\uc158\ud588\uc2b5\ub2c8\ub2e4. UX\ub294 \ucc44\ud305, \uc74c\uc131\uacfc \uac19\uc740 \uacb0\uc758 \uc774\ubca4\ud2b8 \ud750\ub984\uc73c\ub85c \ub2e4\ub4ec\uace0, \ubbf8\ub514\uc5b4\ub294 \ud654\uc0c1\ud1b5\ud654\uc640 \ub9de\ub2ff\uc740 WebRTC, WebSocket \uc624\ub514\uc624 \ud328\ud134\uc73c\ub85c \uad6c\uc131\ud588\uc2b5\ub2c8\ub2e4.",tech:["HeyGen","LiveAvatar","OpenAI","ElevenLabs","LiveKit","WebRTC"]},{tab:"professional",title:"\uc571\uc778\uc571 \uc8fc\ubb38\ucc44\ub110",description:"React(TypeScript) \uae30\ubc18 \uc571\uc778\uc571 \uc8fc\ubb38\ucc44\ub110 \ud504\ub860\ud2b8\uc5d4\ub4dc\uc640 Android Native \uc571\uc758 WebView \uc5f0\ub3d9\uc744 \uc9c1\uc811 \uc774\ub04c\uc5c8\uc2b5\ub2c8\ub2e4. Spring Boot, PostgreSQL \uc8fc\ubb38 API, AWS EC2, Jenkins \ubc30\ud3ec \uc790\ub3d9\ud654, JWT \uc778\uc99d, NICE Payments, OKPOS \uc5f0\ub3d9, Datadog, GA, GTM \ubd84\uc11d \ud658\uacbd\uae4c\uc9c0 \ud55c \ud750\ub984\uc73c\ub85c \uc815\ub3c8\ud588\uc2b5\ub2c8\ub2e4.",tech:["React","TypeScript","Spring Boot","AWS","DataDog","GTM","GA"]},{tab:"professional",title:"LLM \uc624\ucf00\uc2a4\ud2b8\ub808\uc774\uc158 API",description:"LLM \ud638\ucd9c \uc9c0\uc5f0\uc774 \uba54\uc778 API\ub97c \uc7a1\uc9c0 \uc54a\uac8c Spring Boot\uc640 FastAPI ML \ub808\uc778\uc744 \ub098\ub234\uc2b5\ub2c8\ub2e4. Swagger \uacc4\uc57d, Docker \ubc30\ud3ec\ub85c \ubaa8\ub378\uc744 \uba54\uc778 \ud2b8\ub798\ud53d\uacfc \ubd84\ub9ac\ud574 \uc62c\ub838\uc2b5\ub2c8\ub2e4.",tech:["Java","Spring Boot","Python","FastAPI"]},{tab:"professional",title:"AI \uae30\ubc18 LLM \uc11c\ube44\uc2a4 Android Native \uc571",description:"AI \uae30\ubc18 LLM \uc11c\ube44\uc2a4\uc758 Android Native \uc571 \uae30\ub2a5 \uad6c\ud604\uacfc React(TypeScript) WebView \ud398\uc774\uc9c0 \uac1c\ubc1c\uc744 \ud568\uaed8 \ub2f4\ub2f9\ud588\uc2b5\ub2c8\ub2e4. \uc571\xb7\uc6f9 \ube0c\ub9bf\uc9c0 \ud1b5\uc2e0, \ub124\uc774\ud2f0\ube0c \uae30\ub2a5 \uc5f0\ub3d9, Zustand\xb7Jotai \uc0c1\ud0dc \uad00\ub9ac, Tailwind CSS\xb7Shadcn UI \uae30\ubc18 \ud654\uba74 \uad6c\uc131\uc73c\ub85c \uc5b4\ub290 \uc9c4\uc785\uc810\uc5d0\uc11c\ub4e0 \uc77c\uad00\ub41c \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uc81c\uacf5\ud588\uc2b5\ub2c8\ub2e4.",tech:["Android","React","TypeScript","WebView"]},{tab:"professional",title:"\uacb0\uc81c \uc2dc\uc2a4\ud15c \uc5f0\ub3d9",description:"NICE Payments, OKPOS\ub85c \uc8fc\ubb38/\uacb0\uc81c E2E\ub97c \uc774\uc5c8\uace0, \uacb0\uc81c \uc131\uacf5 \ud6c4 \uc8fc\ubb38\uc774 \ube44\ub358 \uc774\uc288\ub97c Datadog, API \ub85c\uadf8, DB \ub300\uc870\ub85c \uae30\ud55c \ub0b4 \ub2eb\uc558\uc2b5\ub2c8\ub2e4. JWT Access/Refresh\ub85c \ub85c\uadf8\uc778 \uc2dc \ubd88\ud544\uc694\ud55c DB \uc870\ud68c\ub97c \uc904\uc600\uc2b5\ub2c8\ub2e4.",tech:["Java","Spring Boot","JWT","Payments"]},{tab:"professional",title:"\uc2e4\uc2dc\uac04 AI \uc0c1\ub2f4 \uc5b4\uc2dc\uc2a4\ud134\ud2b8",description:"LLM \uae30\ubc18 \uc2e4\uc2dc\uac04 \uc0c1\ub2f4 \ud750\ub984\uc744 \uc124\uacc4\ud558\uace0, WebSocket \uae30\ubc18 \ub300\ud654 \uc2a4\ud2b8\ub9ac\ubc0d\uacfc \ud504\ub86c\ud504\ud2b8 \ud788\uc2a4\ud1a0\ub9ac \uad00\ub9ac\ub97c \ub3c4\uc785\ud574 \ub2f5\ubcc0\uc758 \uc77c\uad00\uc131\uacfc \uc790\uc5f0\uc2a4\ub7ec\uc6c0\uc744 \ud568\uaed8 \ub2e4\ub4ec\uc5c8\uc2b5\ub2c8\ub2e4.",tech:["React","TypeScript","LLM","WebSocket","Prompt"]},{tab:"personal",title:"Admin Studio (\ud3ec\ud2b8\ud3f4\ub9ac\uc624)",description:"\uac1c\uc778 \uc2e4\ud5d8\uc6a9 \uad00\ub9ac\uc790 \ud398\uc774\uc9c0 \uc2a4\ud29c\ub514\uc624. A/B \ud15c\ud50c\ub9bf\xb7\ub2e8\uacc4\ubcc4 \ud30c\uc774\ud504\ub77c\uc778\xb7CSV/Excel PostgreSQL \uc801\uc7ac \ud5c8\ube0c\ub97c CRA + FastAPI + Docker\ub85c \ubb36\uc5c8\ub2e4. Express \ub808\uac70\uc2dc(server/)\uc640 API(api/)\ub97c sibling\uc73c\ub85c \ub450\ub294 \uacbd\ub7c9 \ubaa8\ub178\ub808\ud3ec.",tech:["React","FastAPI","PostgreSQL","Docker","CSV","Excel"],actions:[{label:"\uc2a4\ud29c\ub514\uc624 \uc5f4\uae30",href:"#/admin-studio",kind:"external"}]},{tab:"personal",title:"Find Carrot Game",description:"React\uc640 TypeScript\ub85c \ub9cc\ub4e0 \uc778\ud130\ub799\ud2f0\ube0c \ubbf8\ub2c8\uac8c\uc784\uc785\ub2c8\ub2e4. \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uc6b0\uc120\uc5d0 \ub454 UI\xb7UX \uc124\uacc4, \ub2e8\ub2e8\ud55c \uac8c\uc784 \ub85c\uc9c1, \uc0c1\ud0dc \uad00\ub9ac, \uc560\ub2c8\uba54\uc774\uc158 \uc5f0\ucd9c\uc744 \ud55c \ud654\uba74\uc5d0 \ub2f4\uc544 \ubcf4\uc558\uc2b5\ub2c8\ub2e4.",tech:["React","TypeScript","Styled Components","Game Logic"],actions:[{label:"\uac8c\uc784\ud558\ub7ec \uac00\uae30",href:"https://blu30cean.github.io/find-carrot",kind:"external"},{label:"\ucf54\ub4dc \uc0b4\ud3b4\ubcf4\uae30",href:"https://github.com/BLU30CEAN/find-carrot",kind:"external"}]},{tab:"personal",title:"Netflix Clone",description:"Netflix\uc758 UI \ud328\ud134\uc744 \ucc38\uace0\ud574 \ub9cc\ub4e0 \uc601\ud654 \uc2a4\ud2b8\ub9ac\ubc0d \uc11c\ube44\uc2a4 \ud074\ub860\uc785\ub2c8\ub2e4. \ubc18\uc751\ud615 \ub808\uc774\uc544\uc6c3\uacfc \ubaa8\ub358 \uc6f9 \uae30\uc220\uc744 \uae30\ubc18\uc73c\ub85c \uc601\ud654 \ub370\uc774\ud130 \uad00\ub9ac\uc640 \uce74\ud14c\uace0\ub9ac\ubcc4 \ubd84\ub958 \ud750\ub984\uae4c\uc9c0 \uad6c\ud604\ud588\uc2b5\ub2c8\ub2e4.",tech:["React","TypeScript","Styled Components","Responsive"],actions:[{label:"\ub370\ubaa8 \uc810\uac80 \uc911",href:"#",kind:"disabled"},{label:"\ucf54\ub4dc \uc0b4\ud3b4\ubcf4\uae30",href:"https://github.com/BLU30CEAN/netflix-clone",kind:"external"}]},{tab:"personal",title:"Tetris Game",description:"\ud074\ub798\uc2dd \ud14c\ud2b8\ub9ac\uc2a4\ub97c React\uc640 TypeScript\ub85c \ub2e4\uc2dc \uad6c\ud604\ud55c \uc791\uc5c5\uc785\ub2c8\ub2e4. \uac8c\uc784 \uc0c1\ud0dc \uad00\ub9ac, \ud0a4\ubcf4\ub4dc \uc774\ubca4\ud2b8 \ucc98\ub9ac, \uc810\uc218 \uc2dc\uc2a4\ud15c\uae4c\uc9c0 \uac8c\uc784 \ub85c\uc9c1 \uc804\ubc18\uc744 \ube48\ud2c8\uc5c6\uc774 \uac16\ucd94\uc5c8\uc2b5\ub2c8\ub2e4.",tech:["React","TypeScript","Game Logic","State"],actions:[{label:"\uac8c\uc784\ud558\ub7ec \uac00\uae30",href:"https://blu30cean.github.io/rabris",kind:"external"},{label:"\ucf54\ub4dc \uc0b4\ud3b4\ubcf4\uae30",href:"https://github.com/BLU30CEAN/rabris",kind:"external"}]},{tab:"personal",title:"KWB",description:"Korean Word Baseball \u2014 \ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uc548\uc5d0\uc11c \ubc14\ub85c \uc990\uae38 \uc218 \uc788\ub3c4\ub85d \ub2e4\ub4ec\uc740 \ud55c\uae00 \uc6cc\ub4dc \uc57c\uad6c \uac8c\uc784\uc785\ub2c8\ub2e4. \uc790\ubaa8 \ub2e8\uc704 \uc785\ub825, strike\xb7ball\xb7out \ud310\uc815, \ub85c\uceec \ud1b5\uacc4 \uc800\uc7a5, \uc0c8 \uac8c\uc784 \uc2dc\uc791\uae4c\uc9c0 \ubaa8\ub450 \uc9c0\uc6d0\ud569\ub2c8\ub2e4.",tech:["React","TypeScript","Hangul Decomposition","Keyboard Input"],actions:[{label:"\uac8c\uc784\ud558\ub7ec \uac00\uae30",href:"#/kwb",kind:"external"},{label:"\ucf54\ub4dc \uc0b4\ud3b4\ubcf4\uae30",href:"https://github.com/BLU30CEAN/korean-baseball",kind:"external"}]}],tt=n.Ay.div`
  display: flex;
  gap: 1.5rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  margin: 0 0 1.75rem;
`,it=n.Ay.button`
  position: relative;
  background: transparent;
  border: none;
  border-bottom: 2px solid
    ${e=>e.$active?e.theme.colors.primary:"transparent"};
  margin-bottom: -1px;
  padding: 0.65rem 0;
  font-family: inherit;
  font-size: 0.92rem;
  font-weight: ${e=>e.$active?700:500};
  color: ${e=>e.$active?e.theme.colors.text:e.theme.colors.textMuted};
  cursor: pointer;
  transition: color ${e=>e.theme.motion.dur}
    ${e=>e.theme.motion.easeOut};

  &:hover {
    color: ${e=>e.theme.colors.text};
  }
`,ot=n.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`,rt=(0,n.Ay)(a.P.article)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding: ${e=>e.$featured?"1.85rem 1.7rem":"1.4rem 1.35rem"};
  background: ${e=>e.theme.colors.surface};
  border: 1px solid
    ${e=>e.$featured?e.theme.colors.borderStrong:e.theme.colors.border};
  box-shadow: ${e=>e.theme.shadows.card};
  grid-column: ${e=>e.$featured?"1 / -1":"auto"};
  transition: border-color ${e=>e.theme.motion.dur}
      ${e=>e.theme.motion.easeOut},
    transform ${e=>e.theme.motion.dur} ${e=>e.theme.motion.easeOut};

  &:hover {
    transform: translateY(-2px);
    border-color: ${e=>e.theme.colors.primary};
  }
`,nt=n.Ay.span`
  font-family: ${e=>e.theme.typography.fontMono};
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${e=>e.theme.colors.primary};
`,at=n.Ay.h3`
  font-family: ${e=>e.theme.typography.fontDisplay};
  font-size: ${e=>e.$featured?"1.45rem":"1.12rem"};
  font-weight: 700;
  margin: 0;
  color: ${e=>e.theme.colors.text};
  letter-spacing: -0.03em;
`,st=n.Ay.p`
  font-size: 0.92rem;
  line-height: 1.7;
  margin: 0;
  color: ${e=>e.theme.colors.textSecondary};
  max-width: 72ch;
`,lt=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
`,ct=n.Ay.span`
  font-family: ${e=>e.theme.typography.fontMono};
  font-size: 0.7rem;
  padding: 0.22rem 0.5rem;
  border: 1px solid ${e=>e.theme.colors.border};
  color: ${e=>e.theme.colors.textSecondary};
`,dt=n.Ay.div`
  display: flex;
  gap: 0.55rem;
  flex-wrap: wrap;
  margin-top: auto;
`,mt=n.Ay.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.85rem;
  font-size: 0.82rem;
  font-weight: 600;
  border: 1px solid ${e=>e.theme.colors.borderStrong};
  background: transparent;
  color: ${e=>e.$disabled?e.theme.colors.textMuted:e.theme.colors.text};
  text-decoration: none;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  opacity: ${e=>e.$disabled?.55:1};

  &:hover {
    ${e=>!e.$disabled&&`\n        color: ${e.theme.colors.primary};\n        border-color: ${e.theme.colors.primary};\n        text-decoration: none;\n      `}
  }
`,ht=[{id:"professional",label:"\uc2e4\ubb34 \ud504\ub85c\uc81d\ud2b8"},{id:"personal",label:"\ud1a0\uc774 \ud504\ub85c\uc81d\ud2b8"}],pt=()=>{const e=(0,r.Zp)(),[t,i]=(0,o.useState)("professional"),n=(0,o.useMemo)(()=>et.filter(e=>e.tab===t),[t]);return(0,x.jsxs)(y.A,{id:"projects",children:[(0,x.jsx)(ie.A,{title:"\ud504\ub85c\uc81d\ud2b8",subtitle:"\ubaa8\ub450\uc758 \uacbd\ucc30\uad00 LLMOps, AI \ud30c\uc774\ud504\ub77c\uc778, \uc8fc\ubb38/\uacb0\uc81c RCA."}),(0,x.jsx)(tt,{role:"tablist","aria-label":"\ud504\ub85c\uc81d\ud2b8 \uce74\ud14c\uace0\ub9ac",children:ht.map(e=>(0,x.jsx)(it,{role:"tab","aria-selected":t===e.id,$active:t===e.id,onClick:()=>i(e.id),children:e.label},e.id))}),(0,x.jsx)(Ye.N,{mode:"wait",children:(0,x.jsx)(a.P.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.28,ease:[.22,1,.36,1]},children:(0,x.jsx)(ot,{children:n.map((i,o)=>{const r="professional"===t&&0===o;return(0,x.jsxs)(rt,{$featured:r,initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-10%"},transition:{duration:.45,delay:.05*o},children:[r&&(0,x.jsx)(nt,{children:"\ub300\ud45c \uc791\uc5c5"}),(0,x.jsx)(at,{$featured:r,children:i.title}),(0,x.jsx)(st,{children:i.description}),(0,x.jsx)(lt,{children:i.tech.map(e=>(0,x.jsx)(ct,{children:e},e))}),i.actions&&i.actions.length>0&&(0,x.jsx)(dt,{children:i.actions.map(t=>{const i="disabled"===t.kind,o=t.href.startsWith("#/"),r=t.href.includes("github.com"),n=i?(0,x.jsx)(Xe,{size:14}):r?(0,x.jsx)(g,{size:14}):(0,x.jsx)(_e.A,{size:14});return(0,x.jsxs)(mt,{href:i?void 0:t.href,target:i||o?void 0:"_blank",rel:"noopener noreferrer",$disabled:i,"aria-disabled":i,onClick:r=>{i?r.preventDefault():o&&(r.preventDefault(),e(t.href.slice(1)))},children:[n,t.label]},t.label)})})]},i.title)})})},t)})]})};var gt=i(2626);const yt=(0,n.Ay)(a.P.div)`
  position: relative;
  max-width: 760px;
  margin: 0 auto;
  border-radius: ${e=>e.theme.radii.xl};
  padding: 2rem 2.25rem;
  background: ${e=>e.theme.colors.surface};
  border: 1px solid ${e=>e.theme.colors.border};
  box-shadow: ${e=>e.theme.shadows.cardHover};
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 1px;
    background: ${e=>e.theme.colors.gradient};
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.35;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1.35rem;
  }
`,xt=n.Ay.div`
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  margin-bottom: 0.85rem;

  svg {
    flex-shrink: 0;
    margin-top: 0.15rem;
    color: ${e=>e.theme.colors.primary};
  }
`,ft=n.Ay.h2`
  font-size: clamp(1.35rem, 3.2vw, 1.75rem);
  font-weight: 800;
  margin: 0;
  color: ${e=>e.theme.colors.text};
  letter-spacing: -0.02em;
  line-height: 1.3;
`,ut=n.Ay.p`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 0.95rem;
  line-height: 1.74;
  margin: 0 0 1.4rem;

  strong {
    color: ${e=>e.theme.colors.text};
    font-weight: 600;
  }

  code {
    font-size: 0.84em;
    background: ${e=>e.theme.colors.primarySoft};
    color: ${e=>e.theme.colors.primary};
    padding: 0.1rem 0.4rem;
    border-radius: 4px;
  }
`,vt=()=>{const e=(0,r.Zp)();return(0,x.jsx)(y.A,{id:"learning",children:(0,x.jsxs)(yt,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-15%"},transition:{duration:.55},children:[(0,x.jsxs)(xt,{children:[(0,x.jsx)(gt.A,{size:26,strokeWidth:2,"aria-hidden":!0}),(0,x.jsx)(ft,{children:"\ud559\uc2b5 \ub178\ud2b8"})]}),(0,x.jsx)(ut,{children:"pandas, scikit-learn\uc744 \ub2e4\uc2dc \ub9cc\uc9c0\uba70 \uc801\uc5b4 \ub454 \ub178\ud2b8\uc785\ub2c8\ub2e4. \ub9c9\ud78c \uc9c0\uc810\uacfc \ud480\uc774 \uacfc\uc815\uc744 \uc2e4\ubb34\uc640 \ub098\ub220 \ub450\uc5c8\uc2b5\ub2c8\ub2e4. \uac19\uc740 \uac1c\ub150\uc744 \ubbf8\ub2c8\uac8c\uc784\uc73c\ub85c\ub3c4 \ud574\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),(0,x.jsxs)(u,{onClick:()=>e("/journal"),children:["\ub178\ud2b8 \ubcf4\uae30 ",(0,x.jsx)(h,{size:18})]})]})})},bt=(0,m.A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),At=(0,m.A)("briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]),jt=(0,m.A)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]),$t=(0,m.A)("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),wt={NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_GOOGLE_SCRIPT_WEBHOOK_URL||"";const kt=n.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  margin-bottom: 1.75rem;
`,St=(0,n.Ay)(a.P.div)`
  background: ${e=>e.theme.colors.surface};
  border: 1px solid ${e=>e.theme.colors.border};
  padding: 1.35rem 1.3rem;
`,It=n.Ay.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: ${e=>e.theme.colors.primary};
  font-weight: 700;
  font-size: 0.95rem;
`,Pt=n.Ay.p`
  margin: 0;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.65;
`,Mt=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`,Lt=n.Ay.button`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background: transparent;
  color: ${e=>e.theme.colors.primary};
  border: 1px solid ${e=>e.theme.colors.borderStrong};
  padding: 0.35rem 0.6rem;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: ${e=>e.theme.colors.primarySoft};
  }
`,Ct=n.Ay.div`
  display: flex;
  justify-content: flex-start;
  margin: 0 0 2rem;
`,zt=(0,n.Ay)(a.P.div)`
  padding: 1.6rem 1.45rem;
  background: ${e=>e.theme.colors.surface};
  border: 1px solid ${e=>e.theme.colors.border};
  box-shadow: ${e=>e.theme.shadows.card};
`,Tt=n.Ay.h3`
  font-family: ${e=>e.theme.typography.fontDisplay};
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0 0.35rem;
`,Rt=n.Ay.p`
  color: ${e=>e.theme.colors.textSecondary};
  margin: 0 0 1.1rem;
  font-size: 0.9rem;
`,Dt=n.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`,Et=n.Ay.input`
  padding: 0.75rem 0.9rem;
  border: 1px solid ${e=>e.theme.colors.border};
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
  font-size: 0.92rem;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 0 0 3px ${e=>e.theme.colors.ring};
  }

  &::placeholder {
    color: ${e=>e.theme.colors.textMuted};
  }
`,Ot=n.Ay.textarea`
  padding: 0.85rem 0.9rem;
  border: 1px solid ${e=>e.theme.colors.border};
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
  font-size: 0.92rem;
  min-height: 110px;
  resize: vertical;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 0 0 3px ${e=>e.theme.colors.ring};
  }

  &::placeholder {
    color: ${e=>e.theme.colors.textMuted};
  }
`,Nt=n.Ay.button`
  align-self: flex-start;
  background: ${e=>e.theme.colors.gradient};
  color: #fff;
  border: none;
  padding: 0.7rem 1.2rem;
  font-size: 0.92rem;
  font-weight: 700;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  opacity: ${e=>e.$disabled?.6:1};
  font-family: inherit;
`,Wt=({email:e})=>{const t=(0,v.d)(),{name:i,setName:r,message:n,setMessage:a,submitting:s,submit:l}=function(){const[e,t]=(0,o.useState)(""),[i,r]=(0,o.useState)(""),[n,a]=(0,o.useState)(!1),[s,l]=(0,o.useState)(null),c=(0,o.useCallback)(()=>{t(""),r("")},[]),d=(0,o.useCallback)(async()=>{const t=i.trim();if(!t)return l("\uba54\uc2dc\uc9c0\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),!1;l(null),a(!0);const o={name:(e||"\uc775\uba85").trim().slice(0,30),message:t.slice(0,500),timestamp:(new Date).toISOString(),source:"static-web"},r=()=>{try{const e=JSON.parse(localStorage.getItem("guestbook")||"[]");e.push(o),localStorage.setItem("guestbook",JSON.stringify(e))}catch{}};try{return wt?await fetch(wt,{method:"POST",body:JSON.stringify(o),mode:"no-cors"}):r(),c(),!0}catch(n){return r(),c(),!0}finally{a(!1)}},[e,i,c]);return{name:e,setName:t,message:i,setMessage:r,submitting:n,error:s,submit:d}}();return(0,x.jsxs)(y.A,{id:"contact",children:[(0,x.jsx)(ie.A,{title:"\uc5f0\ub77d\ucc98",subtitle:"\ud3c9\uc77c 24\uc2dc\uac04, \uc8fc\ub9d0 48\uc2dc\uac04 \uc548\uc5d0 \ub2f5\ud569\ub2c8\ub2e4."}),(0,x.jsxs)(kt,{children:[(0,x.jsxs)(St,{initial:{opacity:0,y:14},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-10%"},children:[(0,x.jsxs)(It,{children:[(0,x.jsx)(p,{size:16})," Email"]}),(0,x.jsxs)(Mt,{children:[(0,x.jsx)(Pt,{children:e}),(0,x.jsxs)(Lt,{onClick:async()=>{try{await navigator.clipboard.writeText(e),t.success("\uc774\uba54\uc77c \uc8fc\uc18c\ub97c \ubcf5\uc0ac\ud588\uc2b5\ub2c8\ub2e4.")}catch{t.error("\ubcf5\uc0ac\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. \uc8fc\uc18c\ub97c \uc9c1\uc811 \uc120\ud0dd\ud574 \uc8fc\uc138\uc694.")}},"aria-label":"\uc774\uba54\uc77c \ubcf5\uc0ac",children:[(0,x.jsx)(bt,{size:14})," \ubcf5\uc0ac"]})]})]}),(0,x.jsxs)(St,{initial:{opacity:0,y:14},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-10%"},transition:{delay:.06},children:[(0,x.jsxs)(It,{children:[(0,x.jsx)(At,{size:16})," \uace0\uc6a9 \ud615\ud0dc"]}),(0,x.jsx)(Pt,{children:"\uc815\uaddc\uc9c1\uc744 \uc6b0\uc120 \uac80\ud1a0\ud569\ub2c8\ub2e4. \ud504\ub85c\uc81d\ud2b8 \ub2e8\uc704 \ud611\uc5c5\ub3c4 \uc5f4\uc5b4 \ub450\uace0 \uc788\uc2b5\ub2c8\ub2e4."})]}),(0,x.jsxs)(St,{initial:{opacity:0,y:14},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-10%"},transition:{delay:.12},children:[(0,x.jsxs)(It,{children:[(0,x.jsx)(jt,{size:16})," \uae30\uc220 \uc2a4\ud0dd"]}),(0,x.jsx)(Pt,{children:"React, TypeScript, React Native, Spring Boot, Python, FastAPI, AWS, Docker, PostgreSQL"})]}),(0,x.jsxs)(St,{initial:{opacity:0,y:14},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-10%"},transition:{delay:.18},children:[(0,x.jsxs)(It,{children:[(0,x.jsx)($t,{size:16})," \uc751\ub2f5 \uc2dc\uac04"]}),(0,x.jsxs)(Pt,{children:["\ud3c9\uc77c 24\uc2dc\uac04 \uc774\ub0b4 \ub2f5\ubcc0",(0,x.jsx)("br",{}),"\uc8fc\ub9d0, \uacf5\ud734\uc77c 48\uc2dc\uac04 \uc774\ub0b4 \ub2f5\ubcc0"]})]})]}),(0,x.jsx)(Ct,{children:(0,x.jsxs)(u,{onClick:()=>window.location.href=`mailto:${e}`,children:["\uc774\uba54\uc77c \ubcf4\ub0b4\uae30 ",(0,x.jsx)(p,{size:16})]})}),(0,x.jsxs)(zt,{initial:{opacity:0,y:14},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-10%"},children:[(0,x.jsx)(Tt,{children:"\ubc29\uba85\ub85d"}),(0,x.jsx)(Rt,{children:"\ud611\uc5c5 \uc81c\uc548\uc774\ub098 \uc9e7\uc740 \uc778\uc0ac \ub0a8\uaca8 \uc8fc\uc138\uc694."}),(0,x.jsxs)(Dt,{onSubmit:async e=>{if(e.preventDefault(),!n.trim())return void t.info("\uba54\uc2dc\uc9c0 \ub0b4\uc6a9\uc744 \uba3c\uc800 \uc785\ub825\ud574 \uc8fc\uc138\uc694.");await l()&&t.success("\uc18c\uc911\ud55c \uba54\uc2dc\uc9c0\ub97c \uc798 \uc804\ub2ec\ubc1b\uc558\uc2b5\ub2c8\ub2e4. \uac10\uc0ac\ud569\ub2c8\ub2e4.")},children:[(0,x.jsx)(Et,{placeholder:"\uc774\ub984 (\uc120\ud0dd)",maxLength:20,value:i,onChange:e=>r(e.target.value)}),(0,x.jsx)(Ot,{placeholder:"\uc804\ud558\uace0 \uc2f6\uc740 \uc774\uc57c\uae30\ub97c \uc790\uc720\ub86d\uac8c \uc801\uc5b4 \uc8fc\uc138\uc694",maxLength:200,value:n,onChange:e=>a(e.target.value)}),(0,x.jsx)(Nt,{type:"submit",$disabled:s,children:s?"\ubcf4\ub0b4\ub294 \uc911":"\uba54\uc2dc\uc9c0 \ubcf4\ub0b4\uae30"})]})]})]})},Bt=()=>{const e=(0,r.Zp)(),t={NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_PERSONAL_NAME||"EJ",i={NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_PERSONAL_EMAIL||"ej.an.company@gmail.com",o={NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_GITHUB_URL||"https://github.com/BLU30CEAN";return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(q,{displayName:t,githubUrl:o,email:i,onPrimary:()=>{var e;null===(e=document.getElementById("projects"))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"start"})},onLab:()=>e("/lab")}),(0,x.jsx)(Pe,{}),(0,x.jsx)(Be,{}),(0,x.jsx)(qe,{}),(0,x.jsx)(pt,{}),(0,x.jsx)(vt,{}),(0,x.jsx)(Wt,{email:i})]})}},5258:(e,t,i)=>{i.d(t,{A:()=>o});const o=(0,i(7784).A)("layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]])},7118:(e,t,i)=>{i.d(t,{A:()=>o});const o=(0,i(7784).A)("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]])},7511:(e,t,i)=>{i.d(t,{A:()=>p});var o=i(5043),r=i(5464),n=i(111),a=i(579);const s=r.i7`
  0%, 100% { transform: translateY(0); opacity: 0.35; }
  50%      { transform: translateY(-14px); opacity: 0.85; }
`,l=r.Ay.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
`,c=r.Ay.span`
  position: absolute;
  left: ${e=>e.$left};
  top: ${e=>e.$top};
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${e=>e.theme.colors.primary};
  opacity: 0.5;
  ${e=>e.$reduced?r.AH`
          opacity: 0.45;
        `:r.AH`
          animation: ${s} ${e.$duration} ease-in-out infinite;
          animation-delay: ${e.$delay};
        `}
`,d=({count:e,seed:t=1})=>{var i;const r=null!==(i=(0,n.I)())&&void 0!==i&&i,s=(0,o.useMemo)(()=>Array.from({length:e},(e,i)=>({left:(17*i+3*t)%86+6+"%",top:(23*i+7*t)%80+8+"%",duration:3.2+i%4*.35+"s",delay:41*i%12*.14+"s"})),[e,t]);return(0,a.jsx)(l,{"aria-hidden":!0,children:s.map((e,t)=>(0,a.jsx)(c,{$left:e.left,$top:e.top,$delay:e.delay,$duration:e.duration,$reduced:r},t))})},m=r.Ay.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(3.5rem, 7vw, 5.5rem) 1.5rem;
  overflow: hidden;
  box-sizing: border-box;

  ${e=>e.$fullHeight&&"\n    min-height: calc(100vh - 72px);\n    @supports (height: 100dvh) {\n      min-height: calc(100dvh - 72px);\n    }\n  "}

  ${e=>e.$glow&&'\n    &::before {\n      content: "";\n      position: absolute;\n      inset: 0;\n      background:\n        radial-gradient(60% 40% at 18% 18%, var(--mesh-a), transparent 70%),\n        radial-gradient(50% 36% at 82% 24%, var(--mesh-b), transparent 70%),\n        radial-gradient(60% 50% at 50% 90%, var(--mesh-c), transparent 70%);\n      pointer-events: none;\n      opacity: 0.7;\n    }\n  '}

  @media (max-width: 768px) {
    padding: clamp(3.25rem, 14vw, 5rem) 1rem;
  }
`,h=r.Ay.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  z-index: 1;
`,p=({id:e,children:t,dotCount:i=0,dotSeed:o=1,fullHeight:r=!1,glow:n=!1,className:s})=>(0,a.jsxs)(m,{id:e,className:s,$fullHeight:r,$glow:n,children:[i>0?(0,a.jsx)(d,{count:i,seed:o}):null,(0,a.jsx)(h,{children:t})]})}}]);
//# sourceMappingURL=505.7c2a59b2.chunk.js.map