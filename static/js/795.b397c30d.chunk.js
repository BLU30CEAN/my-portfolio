/*! For license information please see 795.b397c30d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[795],{69:(e,t,i)=>{i.d(t,{A:()=>c});i(5043);var o=i(5464),r=i(1280),a=i(579);const n=o.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: ${e=>"start"===e.$align?"flex-start":"center"};
  text-align: ${e=>"start"===e.$align?"left":"center"};
  margin-bottom: 2rem;
  gap: 0.4rem;
`,l=(0,o.Ay)(r.P.span)`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.primary};
`,s=(0,o.Ay)(r.P.h2)`
  font-size: ${e=>e.theme.typography.fluidH2};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.text};
  margin: 0;
`,d=(0,o.Ay)(r.P.p)`
  margin: 0.15rem 0 0;
  max-width: 58ch;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: ${e=>e.theme.typography.fluidBody};
  line-height: 1.7;
`,c=({eyebrow:e,title:t,subtitle:i,align:o="start"})=>(0,a.jsxs)(n,{$align:o,children:[e&&(0,a.jsx)(l,{initial:{opacity:0,y:8},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-20%"},transition:{duration:.45},children:e}),(0,a.jsx)(s,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-20%"},transition:{duration:.5,delay:.04},children:t}),i&&(0,a.jsx)(d,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-20%"},transition:{duration:.5,delay:.08},children:i})]})},111:(e,t,i)=>{i.d(t,{I:()=>n});var o=i(5043),r=i(2892),a=i(1795);function n(){!a.r.current&&(0,r.U)();const[e]=(0,o.useState)(a.O.current);return e}},687:(e,t,i)=>{i.d(t,{A:()=>o});const o=(0,i(7784).A)("git-branch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]])},2626:(e,t,i)=>{i.d(t,{A:()=>o});const o=(0,i(7784).A)("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]])},5258:(e,t,i)=>{i.d(t,{A:()=>o});const o=(0,i(7784).A)("layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]])},6795:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});i(5043);var o=i(3721),r=i(5464),a=i(687),n=i(5258),l=i(2626),s=i(7784);const d=(0,s.A)("receipt",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]]),c=(0,s.A)("clapperboard",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);var p=i(7511),m=i(69),h=i(579);const y=r.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`,u=r.Ay.button`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  text-align: left;
  padding: 1.4rem 1.35rem;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.radii.lg};
  background: ${e=>e.theme.colors.surface};
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
  font: inherit;
  box-shadow: ${e=>e.theme.shadows.card};
  transition: border-color ${e=>e.theme.motion.dur}
      ${e=>e.theme.motion.easeOut},
    transform ${e=>e.theme.motion.dur} ${e=>e.theme.motion.easeOut};

  &:hover {
    border-color: ${e=>e.theme.colors.primary};
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid ${e=>e.theme.colors.ring};
    outline-offset: 2px;
  }
`,g=r.Ay.span`
  font-family: ${e=>e.theme.typography.fontMono};
  font-size: 0.72rem;
  color: ${e=>e.theme.colors.primary};
`,f=r.Ay.strong`
  font-family: ${e=>e.theme.typography.fontDisplay};
  font-size: 1.25rem;
  font-weight: 700;
`,x=r.Ay.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${e=>e.theme.colors.textSecondary};
`,$=[{to:"/llmops-lab",icon:a.A,kicker:"LLMOps",name:"\uc2e4\ud589 \uacbd\ub85c \ub370\ubaa8",blurb:"\uac00\ub4dc\ub808\uc77c\uc744 \ucf1c\uba74 Ollama\ub97c \ud638\ucd9c\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ubc30\uce58 \uc2e4\ud589\uc740 \uc2e4\uc81c \ucd08\uc548\uc744 \ub9cc\ub4ed\ub2c8\ub2e4."},{to:"/admin-studio",icon:n.A,kicker:"\ucf58\uc194",name:"Admin Studio",blurb:"3\ubd84\ud560 \ud654\uba74\uacfc \uc0ac\uc774\ub4dc\ubc14 \uce74\ud0c8\ub85c\uadf8. \uc870\ud68c\ub294 \uace0\uc815\ud558\uace0 \ubaa9\ub85d\ub9cc \uc2a4\ud06c\ub864\ud569\ub2c8\ub2e4."},{to:"/journal",icon:l.A,kicker:"\ud559\uc2b5",name:"\ud559\uc2b5 \ub178\ud2b8",blurb:"\ubbfc\uc6d0 \ucd08\uc548 train/eval \uae30\ub85d, pandas\uc640 scikit-learn \ub178\ud2b8."},{to:"/work/order",icon:d,kicker:"\uc8fc\ubb38",name:"\uc571\uc778\uc571 \uc8fc\ubb38 \ub370\uc2a4\ud06c",blurb:"\uacb0\uc81c \ud6c4 \uc8fc\ubb38\uc774 \ube44\ub358 \uac74. \uac19\uc740 request id\ub85c Datadog, API, DB\ub97c \ub9de\ucda5\ub2c8\ub2e4."},{to:"/work/avatar",icon:c,kicker:"\uc544\ubc14\ud0c0",name:"\uba54\ud0c0\ud734\uba3c \uc774\ubca4\ud2b8 \ud750\ub984",blurb:"STT, LLM, TTS, \ub9bd\uc2f1\ud06c \ud55c \ud134. API \ud0a4 \uc5c6\uc774 \uc21c\uc11c\ub9cc \uc7ac\ud604\ud569\ub2c8\ub2e4."}],b=()=>{const e=(0,o.Zp)();return(0,h.jsxs)(p.A,{id:"lab",glow:!1,children:[(0,h.jsx)(m.A,{align:"start",title:"\uc2e4\ud5d8",subtitle:"\ud504\ub85c\uc81d\ud2b8\ub9c8\ub2e4 \uc0d8\ud50c\uc744 \ub098\ub234\uc2b5\ub2c8\ub2e4. \ubbfc\uc6d0 \ucf58\uc194, \uc8fc\ubb38 RCA, \uc544\ubc14\ud0c0 \ud30c\uc774\ud504."}),(0,h.jsx)(y,{children:$.map(t=>(0,h.jsxs)(u,{type:"button",onClick:()=>e(t.to),children:[(0,h.jsx)(t.icon,{size:20,color:"currentColor"}),(0,h.jsx)(g,{children:t.kicker}),(0,h.jsx)(f,{children:t.name}),(0,h.jsx)(x,{children:t.blurb})]},t.to))})]})}},7511:(e,t,i)=>{i.d(t,{A:()=>h});var o=i(5043),r=i(5464),a=i(111),n=i(579);const l=r.i7`
  0%, 100% { transform: translateY(0); opacity: 0.35; }
  50%      { transform: translateY(-14px); opacity: 0.85; }
`,s=r.Ay.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
`,d=r.Ay.span`
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
          animation: ${l} ${e.$duration} ease-in-out infinite;
          animation-delay: ${e.$delay};
        `}
`,c=({count:e,seed:t=1})=>{var i;const r=null!==(i=(0,a.I)())&&void 0!==i&&i,l=(0,o.useMemo)(()=>Array.from({length:e},(e,i)=>({left:(17*i+3*t)%86+6+"%",top:(23*i+7*t)%80+8+"%",duration:3.2+i%4*.35+"s",delay:41*i%12*.14+"s"})),[e,t]);return(0,n.jsx)(s,{"aria-hidden":!0,children:l.map((e,t)=>(0,n.jsx)(d,{$left:e.left,$top:e.top,$delay:e.delay,$duration:e.duration,$reduced:r},t))})},p=r.Ay.section`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: clamp(2.25rem, 5vw, 4rem) 1.5rem;
  overflow: hidden;
  box-sizing: border-box;
  scroll-margin-top: 88px;

  ${e=>e.$fullHeight&&"\n    min-height: calc(100vh - 72px);\n    @supports (height: 100dvh) {\n      min-height: calc(100dvh - 72px);\n    }\n  "}

  ${e=>e.$glow&&'\n    &::before {\n      content: "";\n      position: absolute;\n      inset: 0;\n      background:\n        radial-gradient(60% 40% at 18% 18%, var(--mesh-a), transparent 70%),\n        radial-gradient(50% 36% at 82% 24%, var(--mesh-b), transparent 70%),\n        radial-gradient(60% 50% at 50% 90%, var(--mesh-c), transparent 70%);\n      pointer-events: none;\n      opacity: 0.7;\n    }\n  '}

  @media (max-width: 768px) {
    padding: clamp(3.25rem, 14vw, 5rem) 1rem;
  }
`,m=r.Ay.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  z-index: 1;
`,h=({id:e,children:t,dotCount:i=0,dotSeed:o=1,fullHeight:r=!1,glow:a=!1,className:l})=>(0,n.jsxs)(p,{id:e,className:l,$fullHeight:r,$glow:a,children:[i>0?(0,n.jsx)(c,{count:i,seed:o}):null,(0,n.jsx)(m,{children:t})]})}}]);
//# sourceMappingURL=795.b397c30d.chunk.js.map