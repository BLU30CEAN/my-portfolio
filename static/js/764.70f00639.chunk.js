/*! For license information please see 764.70f00639.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[764],{69:(e,t,i)=>{i.d(t,{A:()=>c});i(5043);var o=i(5464),n=i(1280),r=i(579);const a=o.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: ${e=>"start"===e.$align?"flex-start":"center"};
  text-align: ${e=>"start"===e.$align?"left":"center"};
  margin-bottom: 2rem;
  gap: 0.4rem;
`,l=(0,o.Ay)(n.P.span)`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.primary};
`,s=(0,o.Ay)(n.P.h2)`
  font-size: ${e=>e.theme.typography.fluidH2};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.text};
  margin: 0;
`,d=(0,o.Ay)(n.P.p)`
  margin: 0.15rem 0 0;
  max-width: 58ch;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: ${e=>e.theme.typography.fluidBody};
  line-height: 1.7;
`,c=({eyebrow:e,title:t,subtitle:i,align:o="start"})=>(0,r.jsxs)(a,{$align:o,children:[e&&(0,r.jsx)(l,{initial:{opacity:0,y:8},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-20%"},transition:{duration:.45},children:e}),(0,r.jsx)(s,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-20%"},transition:{duration:.5,delay:.04},children:t}),i&&(0,r.jsx)(d,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-20%"},transition:{duration:.5,delay:.08},children:i})]})},111:(e,t,i)=>{i.d(t,{I:()=>a});var o=i(5043),n=i(2892),r=i(1795);function a(){!r.r.current&&(0,n.U)();const[e]=(0,o.useState)(r.O.current);return e}},687:(e,t,i)=>{i.d(t,{A:()=>o});const o=(0,i(7784).A)("git-branch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]])},2626:(e,t,i)=>{i.d(t,{A:()=>o});const o=(0,i(7784).A)("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]])},4764:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});i(5043);var o=i(3721),n=i(5464),r=i(5258),a=i(2626),l=i(687),s=i(7511),d=i(69),c=i(579);const m=n.Ay.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`,p=n.Ay.button`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  text-align: left;
  padding: 1.4rem 1.35rem;
  border: 1px solid ${e=>e.theme.colors.border};
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
`,h=n.Ay.span`
  font-family: ${e=>e.theme.typography.fontMono};
  font-size: 0.72rem;
  color: ${e=>e.theme.colors.primary};
`,y=n.Ay.strong`
  font-family: ${e=>e.theme.typography.fontDisplay};
  font-size: 1.25rem;
  font-weight: 700;
`,u=n.Ay.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${e=>e.theme.colors.textSecondary};
`,g=[{to:"/llmops-lab",icon:l.A,kicker:"LLMOps",name:"\uc2e4\ud589 \uacbd\ub85c \ub370\ubaa8",blurb:"\uac00\ub4dc\ub808\uc77c\uc744 \ucf1c\uba74 \ud558\uc704 LLM\uc744 \ubd80\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc5ed\ud560\uc744 \ubc14\uafb8\uba74 \ubc30\uce58\uac00 \uc228\uc2b5\ub2c8\ub2e4."},{to:"/admin-studio",icon:r.A,kicker:"\ucf58\uc194",name:"Admin Studio",blurb:"3\ubd84\ud560 \ud654\uba74\uacfc \uc0ac\uc774\ub4dc\ubc14 \uce74\ud0c8\ub85c\uadf8. \uc870\ud68c\ub294 \uace0\uc815\ud558\uace0 \ubaa9\ub85d\ub9cc \uc2a4\ud06c\ub864\ud569\ub2c8\ub2e4."},{to:"/journal",icon:a.A,kicker:"\ud559\uc2b5",name:"\ud559\uc2b5 \ub178\ud2b8",blurb:"pandas, scikit-learn\uc744 \ub2e4\uc2dc \ub9cc\uc9c4 \uae30\ub85d\uacfc \ubbf8\ub2c8\uac8c\uc784\uc785\ub2c8\ub2e4."}],f=()=>{const e=(0,o.Zp)();return(0,c.jsxs)(s.A,{id:"lab",glow:!1,children:[(0,c.jsx)(d.A,{align:"start",title:"\uc2e4\ud5d8",subtitle:"\uc6b4\uc601\uc5d0\uc11c \ud55c \ud310\ub2e8\uc744 \ub370\ubaa8 \ub370\uc774\ud130\ub85c \ub2e4\uc2dc \ub3cc\ub824 \ubd05\ub2c8\ub2e4. \uc6b4\uc601 API\ub294 \ubd99\uc774\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."}),(0,c.jsx)(m,{children:g.map(t=>(0,c.jsxs)(p,{type:"button",onClick:()=>e(t.to),children:[(0,c.jsx)(t.icon,{size:20,color:"currentColor"}),(0,c.jsx)(h,{children:t.kicker}),(0,c.jsx)(y,{children:t.name}),(0,c.jsx)(u,{children:t.blurb})]},t.to))})]})}},5258:(e,t,i)=>{i.d(t,{A:()=>o});const o=(0,i(7784).A)("layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]])},7511:(e,t,i)=>{i.d(t,{A:()=>h});var o=i(5043),n=i(5464),r=i(111),a=i(579);const l=n.i7`
  0%, 100% { transform: translateY(0); opacity: 0.35; }
  50%      { transform: translateY(-14px); opacity: 0.85; }
`,s=n.Ay.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
`,d=n.Ay.span`
  position: absolute;
  left: ${e=>e.$left};
  top: ${e=>e.$top};
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${e=>e.theme.colors.primary};
  opacity: 0.5;
  ${e=>e.$reduced?n.AH`
          opacity: 0.45;
        `:n.AH`
          animation: ${l} ${e.$duration} ease-in-out infinite;
          animation-delay: ${e.$delay};
        `}
`,c=({count:e,seed:t=1})=>{var i;const n=null!==(i=(0,r.I)())&&void 0!==i&&i,l=(0,o.useMemo)(()=>Array.from({length:e},(e,i)=>({left:(17*i+3*t)%86+6+"%",top:(23*i+7*t)%80+8+"%",duration:3.2+i%4*.35+"s",delay:41*i%12*.14+"s"})),[e,t]);return(0,a.jsx)(s,{"aria-hidden":!0,children:l.map((e,t)=>(0,a.jsx)(d,{$left:e.left,$top:e.top,$delay:e.delay,$duration:e.duration,$reduced:n},t))})},m=n.Ay.section`
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
`,p=n.Ay.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  z-index: 1;
`,h=({id:e,children:t,dotCount:i=0,dotSeed:o=1,fullHeight:n=!1,glow:r=!1,className:l})=>(0,a.jsxs)(m,{id:e,className:l,$fullHeight:n,$glow:r,children:[i>0?(0,a.jsx)(c,{count:i,seed:o}):null,(0,a.jsx)(p,{children:t})]})}}]);
//# sourceMappingURL=764.70f00639.chunk.js.map