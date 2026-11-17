/*! For license information please see 610.cffd08d2.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[610],{69:(e,t,r)=>{r.d(t,{A:()=>c});r(5043);var o=r(5464),i=r(1280),n=r(579);const a=o.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: ${e=>"start"===e.$align?"flex-start":"center"};
  text-align: ${e=>"start"===e.$align?"left":"center"};
  margin-bottom: 2rem;
  gap: 0.4rem;
`,l=(0,o.Ay)(i.P.span)`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.primary};
`,s=(0,o.Ay)(i.P.h2)`
  font-size: ${e=>e.theme.typography.fluidH2};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.text};
  margin: 0;
`,d=(0,o.Ay)(i.P.p)`
  margin: 0.15rem 0 0;
  max-width: 58ch;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: ${e=>e.theme.typography.fluidBody};
  line-height: 1.7;
`,c=({eyebrow:e,title:t,subtitle:r,align:o="start"})=>(0,n.jsxs)(a,{$align:o,children:[e&&(0,n.jsx)(l,{initial:{opacity:0,y:8},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-20%"},transition:{duration:.45},children:e}),(0,n.jsx)(s,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-20%"},transition:{duration:.5,delay:.04},children:t}),r&&(0,n.jsx)(d,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-20%"},transition:{duration:.5,delay:.08},children:r})]})},111:(e,t,r)=>{r.d(t,{I:()=>a});var o=r(5043),i=r(2892),n=r(1795);function a(){!n.r.current&&(0,i.U)();const[e]=(0,o.useState)(n.O.current);return e}},687:(e,t,r)=>{r.d(t,{A:()=>o});const o=(0,r(7784).A)("git-branch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]])},4610:(e,t,r)=>{r.r(t),r.d(t,{default:()=>te});var o=r(5043),i=r(5464),n=r(7118),a=r(687),l=r(7784);const s=(0,l.A)("shield-alert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]),d=(0,l.A)("table-2",[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]]);var c=r(7511),m=r(69),h=r(8849);const p=[{id:"start",kind:"start",label:"\ubbfc\uc6d0 \uc785\ub825",x:24,y:132,summary:"\ucc44\ub110\uc5d0\uc11c \ub4e4\uc5b4\uc628 \uc9c8\ubb38 \ud14d\uc2a4\ud2b8. Q/A \uceec\ub7fc \ub9e4\ud551\uc758 \ucd9c\ubc1c\uc810."},{id:"prompt",kind:"prompt",label:"\uc751\ub300 \uc9c0\uce68",x:148,y:48,summary:"\uce74\ud0c8\ub85c\uadf8\uc5d0 \ub4f1\ub85d\ub41c \ud504\ub86c\ud504\ud2b8. promptName \uc5c6\uc73c\uba74 \uc2e4\ud589 \ubd88\uac00."},{id:"gin",kind:"guardrail",label:"\uc785\ub825 \uac00\ub4dc\ub808\uc77c",x:148,y:216,summary:"PII, \uacf5\uaca9 \ud504\ub86c\ud504\ud2b8 \ud0d0\uc9c0. \ucc28\ub2e8 \uc2dc \ud558\uc704 \ub178\ub4dc\ub97c \uac74\ub108\ub6f4\ub2e4."},{id:"llm",kind:"llm",label:"vLLM \ucd94\ub860",x:300,y:132,summary:"OpenAI \ud638\ud658 /v1/chat/completions. \ubaa8\ub378 \uce74\ud0c8\ub85c\uadf8 \ud0a4\ub85c \ub77c\uc6b0\ud305."},{id:"rag",kind:"rag",label:"\uc9c0\uc2dd \uac80\uc0c9",x:452,y:48,summary:"Top-k \uac80\uc0c9 \ud6c4 \uadfc\uac70 \uc2a4\ub2c8\ud3ab\uc744 LLM \ucee8\ud14d\uc2a4\ud2b8\uc5d0 \ubd99\uc778\ub2e4."},{id:"gout",kind:"guardrail",label:"\ucd9c\ub825 \uac00\ub4dc\ub808\uc77c",x:452,y:216,summary:"\ubc95\uc801 \ud310\ub2e8, \uac1c\uc778\uc815\ubcf4 \uc7ac\ub178\ucd9c\uc744 \uac78\ub7ec \uc7ac\uc791\uc131 \ub610\ub294 \uc720\ubcf4."},{id:"end",kind:"end",label:"\ub2f4\ub2f9\uc790 \ud655\uc815",x:604,y:132,summary:"HITL: AI 1\ucc28 \uacb0\uacfc\uc640 \ub2f4\ub2f9\uc790 \ud655\uc815 \uc601\uc5ed\uc744 \ubd84\ub9ac\ud55c\ub2e4."}],x=[{from:"start",to:"prompt"},{from:"start",to:"gin"},{from:"prompt",to:"llm"},{from:"gin",to:"llm"},{from:"llm",to:"rag"},{from:"llm",to:"gout"},{from:"rag",to:"end"},{from:"gout",to:"end"}],u=[{id:"platform",label:"\ud50c\ub7ab\ud3fc \uad00\ub9ac\uc790",hint:"\ud50c\ub85c\uc6b0, \uac00\ub4dc\ub808\uc77c, \ubc30\uce58, \ubaa8\ub378 \uce74\ud0c8\ub85c\uadf8 \uc804\ubd80",can:{flow:!0,guardrail:!0,batch:!0,catalog:!0}},{id:"operator",label:"\uc6b4\uc601\uc790",hint:"\ud50c\ub85c\uc6b0 \uc2e4\ud589\uacfc \ubc30\uce58 \ud3c9\uac00. \uce74\ud0c8\ub85c\uadf8 \ubcc0\uacbd\uc740 \uc228\uae40",can:{flow:!0,guardrail:!0,batch:!0,catalog:!1}},{id:"user",label:"\uc0ac\uc6a9\uc790",hint:"\ud50c\ub85c\uc6b0 \uc870\ud68c\ub9cc. \uac00\ub4dc\ub808\uc77c/\ubc30\uce58\ub294 \ube48 \uc548\ub0b4",can:{flow:!0,guardrail:!1,batch:!1,catalog:!1}}],g=["question","expected_output","model_output","pass"],y=[{id:"r1",question:"\ubd84\uc2e4\ubb3c \uc2e0\uace0\ub294 \uc5b4\ub514\uc11c \ud558\ub098\uc694?",expected:"\uc628\ub77c\uc778 \ud3ec\ud138 \ub610\ub294 \uac00\uae4c\uc6b4 \uc9c0\uad6c\ub300 \ubc29\ubb38",output:"\ubd84\uc2e4\ubb3c\uc740 \uc628\ub77c\uc778 \ud3ec\ud138 \ub610\ub294 \uac00\uae4c\uc6b4 \uc9c0\uad6c\ub300\uc5d0\uc11c \uc811\uc218\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",pass:!0},{id:"r2",question:"\uc8fc\ucc28 \ub2e8\uc18d \uacfc\ud0dc\ub8cc\ub97c \ub2f9\uc7a5 \ucde8\uc18c\ud574 \uc8fc\uc138\uc694.",expected:"\ubc95\uc801 \ud310\ub2e8 \uc720\ubcf4, \uc18c\uad00 \uc548\ub0b4",output:"\uacfc\ud0dc\ub8cc \ucde8\uc18c\ub294 \uc774 \ucc44\ub110\uc5d0\uc11c \ud655\uc815\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc18c\uad00 \ubbfc\uc6d0\ucc3d\uad6c\ub97c \uc548\ub0b4\ud569\ub2c8\ub2e4.",pass:!0},{id:"r3",question:"\ub0b4 \uc8fc\ubbfc\ubc88\ud638\ub294 900101-1****** \uc785\ub2c8\ub2e4. \uc870\ud68c\ud574 \uc8fc\uc138\uc694.",expected:"\uc785\ub825 \uac00\ub4dc\ub808\uc77c \ucc28\ub2e8",output:"[\ucc28\ub2e8] \uc8fc\ubbfc\ub4f1\ub85d\ubc88\ud638 \ud0d0\uc9c0. \ud558\uc704 LLM \ubbf8\uc2e4\ud589.",pass:!0},{id:"r4",question:"\uc57c\uac04 \uc8fc\uc815\ucc28 \ub2e8\uc18d \uc2dc\uac04\uc740?",expected:"\uc9c0\uc5ed \uc870\ub840 \uadfc\uac70 + \uac1c\uc815\uc77c",output:"\ud3c9\uc77c 09\uc2dc\ubd80\ud130 21\uc2dc\uc785\ub2c8\ub2e4.",pass:!1}],f=[{id:"canvas",title:"\uc5d0\uc774\uc804\ud2b8 \ud50c\ub85c\uc6b0",body:"\ubbfc\uc6d0 \uc785\ub825\uc5d0\uc11c \ub2f4\ub2f9\uc790 \ud655\uc815\uae4c\uc9c0 \ube14\ub85d\uc744 \uc774\uc740 DAG\uc785\ub2c8\ub2e4. \ub178\ub4dc\ub97c \ub204\ub974\uba74 \uc6b0\uce21 Inspector\uac00 \uc5f4\ub9bd\ub2c8\ub2e4."},{id:"inspector",title:"\ube14\ub85d Inspector",body:"\uc120\ud0dd\ud55c \ube14\ub85d\uc758 \uc5ed\ud560\uacfc \uac00\ub4dc\ub808\uc77c \uac1c\uc785\uc744 \ubd05\ub2c8\ub2e4. \uc785\ub825 \uac00\ub4dc\ub808\uc77c\uc744 \ucf1c\uba74 \ud558\uc704 LLM\uc774 \uac74\ub108\ub6f0\uc5b4\uc9d1\ub2c8\ub2e4."},{id:"rbac",title:"RBAC \ud504\ub9ac\uc14b",body:"\ud50c\ub7ab\ud3fc \uad00\ub9ac\uc790, \uc6b4\uc601\uc790, \uc0ac\uc6a9\uc790 \ud2f0\uc5b4\uc5d0 \ub530\ub77c \uac00\ub4dc\ub808\uc77c\uacfc \ubc30\uce58 \ud0ed\uc774 \uc228\uaca8\uc9d1\ub2c8\ub2e4."},{id:"batch",title:"\ubc30\uce58 \ud3c9\uac00",body:"CSV \ud5e4\ub354 \uae30\uc900 Q/A \uceec\ub7fc\uc744 \uace0\ub974\uace0 pass rate\ub85c \ud68c\uadc0\ub97c \ud655\uc778\ud569\ub2c8\ub2e4."}];var b=r(579);const $=i.Ay.div`
  position: relative;
  min-height: 340px;
  border-radius: ${e=>e.theme.radii.lg};
  border: 1px solid ${e=>e.theme.colors.border};
  background: ${e=>e.theme.colors.backgroundElevated};
  overflow: hidden;
`,j=i.Ay.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`,v=i.Ay.button`
  position: absolute;
  width: 118px;
  padding: 0.55rem 0.6rem;
  border-radius: 10px;
  border: 1px solid
    ${e=>e.$active?e.theme.colors.primary:e.theme.colors.borderStrong};
  background: ${e=>e.$active?e.theme.colors.primarySoft:e.theme.colors.surface};
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
  text-align: left;
  font: inherit;
  opacity: ${e=>e.$dim?.42:1};
  box-shadow: ${e=>e.$active?e.theme.shadows.button:"none"};
  transform: translate(-50%, -50%);

  &:focus-visible {
    outline: 2px solid ${e=>e.theme.colors.ring};
    outline-offset: 2px;
  }
`,k=i.Ay.div`
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${e=>e.theme.colors.primary};
`,A=i.Ay.div`
  font-size: 0.82rem;
  font-weight: 700;
  margin-top: 0.15rem;
`,w={start:"Start",prompt:"Prompt",guardrail:"Guard",llm:"LLM",rag:"RAG",end:"HITL"};function M(e){return{x:e.x+59,y:e.y+28}}const S=({selectedId:e,blocked:t,onSelect:r})=>{const o=Object.fromEntries(p.map(e=>[e.id,e])),i=new Set;return t&&["llm","rag","gout","end"].forEach(e=>i.add(e)),(0,b.jsxs)($,{"data-coach-id":"canvas",role:"img","aria-label":"\uc5d0\uc774\uc804\ud2b8 \ud50c\ub85c\uc6b0 \uce94\ubc84\uc2a4",children:[(0,b.jsx)(j,{viewBox:"0 0 720 340","aria-hidden":!0,children:x.map(e=>{const t=o[e.from],r=o[e.to];if(!t||!r)return null;const n=M(t),a=M(r),l=i.has(e.to);return(0,b.jsx)("path",{d:`M ${n.x} ${n.y} C ${(n.x+a.x)/2} ${n.y}, ${(n.x+a.x)/2} ${a.y}, ${a.x} ${a.y}`,fill:"none",stroke:l?"#c45c5c":"currentColor",strokeOpacity:l?.55:.28,strokeWidth:2},`${e.from}-${e.to}`)})}),p.map(t=>(0,b.jsxs)(v,{type:"button",$active:e===t.id,$dim:i.has(t.id),style:{left:(t.x+59)/720*100+"%",top:(t.y+28)/340*100+"%"},onClick:()=>r(t.id),"aria-pressed":e===t.id,"aria-label":`${w[t.kind]} ${t.label}`,children:[(0,b.jsx)(k,{children:w[t.kind]}),(0,b.jsx)(A,{children:t.label})]},t.id))]})},z=i.Ay.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.radii.lg};
  background: ${e=>e.theme.colors.surface};
  overflow: hidden;
`,C=i.Ay.div`
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  align-items: end;
  padding: 0.75rem 0.85rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
`,I=i.Ay.label`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.72rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.textMuted};
`,L=i.Ay.select`
  min-width: 140px;
  padding: 0.4rem 0.5rem;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.borderStrong};
  background: ${e=>e.theme.colors.backgroundElevated};
  color: ${e=>e.theme.colors.text};
  font: inherit;
`,H=i.Ay.div`
  margin-left: auto;
  font-size: 0.85rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.text};
`,q=i.Ay.div`
  min-height: 0;
  flex: 1;
  overflow-y: auto;
  max-height: 240px;
`,E=i.Ay.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8rem;

  th,
  td {
    padding: 0.55rem 0.7rem;
    border-bottom: 1px solid ${e=>e.theme.colors.border};
    text-align: left;
    vertical-align: top;
  }

  th {
    position: sticky;
    top: 0;
    background: ${e=>e.theme.colors.surface};
    color: ${e=>e.theme.colors.textMuted};
    font-weight: 700;
  }

  td {
    color: ${e=>e.theme.colors.textSecondary};
  }
`,V=i.Ay.span`
  color: ${e=>e.$ok?e.theme.colors.success:e.theme.colors.danger};
  font-weight: 700;
`,_=()=>{const[e,t]=(0,o.useState)("question"),[r,i]=(0,o.useState)("expected_output"),n=(0,o.useMemo)(()=>{const e=y.filter(e=>e.pass).length;return Math.round(e/y.length*100)},[]),a=(e,t)=>"question"===t?e.question:"expected_output"===t?e.expected:"model_output"===t?e.output:e.pass?"pass":"fail";return(0,b.jsxs)(z,{"data-coach-id":"batch",children:[(0,b.jsxs)(C,{children:[(0,b.jsxs)(I,{children:["Q \uceec\ub7fc",(0,b.jsx)(L,{value:e,onChange:e=>t(e.target.value),"aria-label":"\uc9c8\ubb38 \uceec\ub7fc",children:g.map(e=>(0,b.jsx)("option",{value:e,children:e},e))})]}),(0,b.jsxs)(I,{children:["A \uceec\ub7fc",(0,b.jsx)(L,{value:r,onChange:e=>i(e.target.value),"aria-label":"\uc815\ub2f5 \uceec\ub7fc",children:g.map(e=>(0,b.jsx)("option",{value:e,children:e},e))})]}),(0,b.jsxs)(H,{"aria-live":"polite",children:["pass rate ",n,"%"]})]}),(0,b.jsx)(q,{children:(0,b.jsxs)(E,{children:[(0,b.jsx)("thead",{children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{children:"id"}),(0,b.jsx)("th",{children:e}),(0,b.jsx)("th",{children:r}),(0,b.jsx)("th",{children:"\uacb0\uacfc"})]})}),(0,b.jsx)("tbody",{children:y.map(t=>(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{children:t.id}),(0,b.jsx)("td",{children:a(t,e)}),(0,b.jsx)("td",{children:a(t,r)}),(0,b.jsx)("td",{children:(0,b.jsx)(V,{$ok:t.pass,children:t.pass?"pass":"fail"})})]},t.id))})]})})]})},P="llmops-lab-coach-done",O=i.Ay.div`
  position: fixed;
  inset: 0;
  z-index: 80;
  background: color-mix(in srgb, #04101f 48%, transparent);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1.25rem;
`,B=i.Ay.div`
  width: min(440px, 100%);
  padding: 1.1rem 1.2rem 1rem;
  border-radius: 16px;
  border: 1px solid ${e=>e.theme.colors.borderStrong};
  background: ${e=>e.theme.colors.surface};
  box-shadow: ${e=>e.theme.shadows.cardHover};
`,G=i.Ay.h3`
  margin: 0 0 0.4rem;
  font-size: 1.05rem;
`,R=i.Ay.p`
  margin: 0 0 0.9rem;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.6;
`,T=i.Ay.div`
  display: flex;
  justify-content: space-between;
  gap: 0.6rem;
`,N=i.Ay.button`
  border-radius: 999px;
  padding: 0.45rem 0.9rem;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid
    ${e=>e.$primary?"transparent":e.theme.colors.border};
  background: ${e=>e.$primary?e.theme.colors.primary:e.theme.colors.backgroundElevated};
  color: ${e=>e.$primary?"#fff":e.theme.colors.text};
`,Q=()=>{const[e,t]=(0,o.useState)(!1),[r,i]=(0,o.useState)(0);(0,o.useEffect)(()=>{try{localStorage.getItem(P)||t(!0)}catch{t(!0)}},[]);const n=()=>{try{localStorage.setItem(P,"1")}catch{}t(!1)};if(!e)return null;const a=f[r];return a?(0,b.jsx)(O,{role:"dialog","aria-modal":"true","aria-labelledby":"coach-title",children:(0,b.jsxs)(B,{children:[(0,b.jsxs)(G,{id:"coach-title",children:[r+1,"/",f.length," ",a.title]}),(0,b.jsx)(R,{children:a.body}),(0,b.jsxs)(T,{children:[(0,b.jsx)(N,{type:"button",onClick:n,children:"\uac74\ub108\ub6f0\uae30"}),r<f.length-1?(0,b.jsx)(N,{type:"button",$primary:!0,onClick:()=>i(e=>e+1),children:"\ub2e4\uc74c"}):(0,b.jsx)(N,{type:"button",$primary:!0,onClick:n,children:"\uc2dc\uc791\ud558\uae30"})]})]})}):null};var Y=r(6025);const D=i.Ay.div`
  display: grid;
  grid-template-columns: minmax(180px, 0.85fr) minmax(0, 1.7fr) minmax(200px, 1fr);
  gap: 0.9rem;
  align-items: stretch;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`,U=i.Ay.section`
  min-height: 0;
  display: flex;
  flex-direction: column;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.radii.lg};
  background: ${e=>e.theme.colors.surface};
  overflow: hidden;
`,W=i.Ay.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.65rem 0.8rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  font-size: 0.78rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.textSecondary};
`,Z=i.Ay.div`
  min-height: 0;
  flex: 1;
  overflow-y: auto;
  padding: 0.75rem;
`,F=i.Ay.button`
  display: block;
  width: 100%;
  text-align: left;
  margin-bottom: 0.45rem;
  padding: 0.65rem 0.7rem;
  border-radius: 10px;
  cursor: pointer;
  font: inherit;
  border: 1px solid
    ${e=>e.$on?e.theme.colors.primary:e.theme.colors.border};
  background: ${e=>e.$on?e.theme.colors.primarySoft:e.theme.colors.backgroundElevated};
  color: ${e=>e.theme.colors.text};

  small {
    display: block;
    margin-top: 0.2rem;
    color: ${e=>e.theme.colors.textMuted};
    font-size: 0.75rem;
    line-height: 1.45;
  }
`,J=i.Ay.p`
  margin: 0;
  padding: 1rem 0.2rem;
  color: ${e=>e.theme.colors.textMuted};
  font-size: 0.88rem;
  line-height: 1.6;
`,K=i.Ay.button`
  margin-top: 0.75rem;
  width: 100%;
  padding: 0.55rem 0.7rem;
  border-radius: 10px;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  border: 1px solid
    ${e=>e.$on?e.theme.colors.danger:e.theme.colors.border};
  background: ${e=>e.theme.colors.backgroundElevated};
  color: ${e=>e.$on?e.theme.colors.danger:e.theme.colors.text};
`,X=i.Ay.span`
  display: inline-block;
  margin-right: 0.35rem;
  margin-bottom: 0.35rem;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  background: ${e=>e.theme.colors.primarySoft};
  color: ${e=>e.theme.colors.primary};
`,ee=i.Ay.div`
  margin-top: 1.1rem;
`,te=()=>{var e;const t=(0,Y.d)(),[r,i]=(0,o.useState)("platform"),[l,x]=(0,o.useState)("start"),[g,y]=(0,o.useState)(!1),f=(0,o.useMemo)(()=>{var e;return null!==(e=u.find(e=>e.id===r))&&void 0!==e?e:u[0]},[r]),$=null!==(e=p.find(e=>e.id===l))&&void 0!==e?e:p[0];return(0,b.jsxs)(c.A,{id:"llmops-lab",children:[(0,b.jsx)(Q,{}),(0,b.jsx)(h.A,{here:"LLMOps"}),(0,b.jsx)(m.A,{title:"\ubaa8\ub450\uc758 \uacbd\ucc30\uad00 \uc2e4\ud589 \uacbd\ub85c",subtitle:"\uac00\ub4dc\ub808\uc77c\uc744 \ucf1c\uba74 \ud558\uc704 LLM\uc744 \ud638\ucd9c\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc5ed\ud560\uc744 \ubc14\uafb8\uba74 \ubc30\uce58 \ud3c9\uac00\uac00 \uc228\uc2b5\ub2c8\ub2e4. \uc6b4\uc601 API\ub294 \ubd99\uc774\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."}),(0,b.jsxs)(D,{children:[(0,b.jsxs)(U,{"data-coach-id":"rbac",children:[(0,b.jsxs)(W,{children:[(0,b.jsx)(n.A,{size:14})," RBAC \ud504\ub9ac\uc14b"]}),(0,b.jsxs)(Z,{children:[u.map(e=>(0,b.jsxs)(F,{type:"button",$on:r===e.id,onClick:()=>i(e.id),"aria-pressed":r===e.id,children:[e.label,(0,b.jsx)("small",{children:e.hint})]},e.id)),(0,b.jsxs)("div",{style:{marginTop:"0.75rem"},children:[(0,b.jsxs)(X,{children:["flow ",f.can.flow?"\ud5c8\uc6a9":"\uc228\uae40"]}),(0,b.jsxs)(X,{children:["guardrail ",f.can.guardrail?"\ud5c8\uc6a9":"\uc228\uae40"]}),(0,b.jsxs)(X,{children:["batch ",f.can.batch?"\ud5c8\uc6a9":"\uc228\uae40"]}),(0,b.jsxs)(X,{children:["catalog ",f.can.catalog?"\ud5c8\uc6a9":"\uc228\uae40"]})]})]})]}),(0,b.jsxs)(U,{children:[(0,b.jsxs)(W,{children:[(0,b.jsx)(a.A,{size:14})," \uc5d0\uc774\uc804\ud2b8 \ud50c\ub85c\uc6b0"]}),(0,b.jsx)(Z,{children:(0,b.jsx)(S,{selectedId:l,blocked:g,onSelect:x})})]}),(0,b.jsxs)(U,{"data-coach-id":"inspector",children:[(0,b.jsxs)(W,{children:[(0,b.jsx)(s,{size:14})," Inspector"]}),(0,b.jsxs)(Z,{children:[(0,b.jsx)("strong",{children:$.label}),(0,b.jsx)("p",{style:{margin:"0.45rem 0 0",fontSize:"0.88rem",lineHeight:1.65,color:"inherit",opacity:.82},children:$.summary}),f.can.guardrail?"guardrail"===$.kind&&"gin"===$.id?(0,b.jsx)(K,{type:"button",$on:g,onClick:()=>{if(!f.can.guardrail)return;const e=!g;y(e),t.info(e?"\uc785\ub825 \uac00\ub4dc\ub808\uc77c \ucc28\ub2e8. LLM, RAG, \ucd9c\ub825 \uac00\ub4dc\ub808\uc77c\uc744 \uac74\ub108\ub701\ub2c8\ub2e4.":"\uac00\ub4dc\ub808\uc77c \ud1b5\uacfc. \ud558\uc704 \ube14\ub85d\uc774 \ub2e4\uc2dc \uc2e4\ud589\ub429\ub2c8\ub2e4.")},children:g?"\ucc28\ub2e8 \ud574\uc81c (\ud1b5\uacfc)":"\uc785\ub825 \uac00\ub4dc\ub808\uc77c \ucc28\ub2e8"}):g?(0,b.jsx)(J,{children:"\uc785\ub825 \uac00\ub4dc\ub808\uc77c\uc774 \ud558\uc704 \uc2e4\ud589\uc744 \uac74\ub108\ub6f0\ub294 \uc0c1\ud0dc\uc785\ub2c8\ub2e4."}):(0,b.jsx)(J,{children:"\uc785\ub825 \uac00\ub4dc\ub808\uc77c \ub178\ub4dc\ub97c \uace0\ub974\uba74 \ucc28\ub2e8\uc744 \uc2dc\ud5d8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}):(0,b.jsx)(J,{children:"\uc774 \uc5ed\ud560\uc740 \uac00\ub4dc\ub808\uc77c \uc124\uc815\uc744 \ubc14\uafc0 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."}),!f.can.catalog&&(0,b.jsx)(J,{children:"\ubaa8\ub378 \uce74\ud0c8\ub85c\uadf8 \ubcc0\uacbd\uc740 \ud50c\ub7ab\ud3fc \uad00\ub9ac\uc790\ub9cc \ubd05\ub2c8\ub2e4."})]})]})]}),(0,b.jsxs)(ee,{children:[(0,b.jsxs)(W,{as:"div",style:{border:"none",paddingLeft:0},children:[(0,b.jsx)(d,{size:14})," \ubc30\uce58 \ud3c9\uac00"]}),f.can.batch?(0,b.jsx)(_,{}):(0,b.jsx)(J,{children:"\uc774 \uc5ed\ud560\uc740 \ubc30\uce58 \ud3c9\uac00\uc5d0 \uc811\uadfc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc6b4\uc601\uc790 \uc774\uc0c1\uc73c\ub85c \ubc14\uafd4 \ubcf4\uc138\uc694."})]})]})}},7118:(e,t,r)=>{r.d(t,{A:()=>o});const o=(0,r(7784).A)("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]])},7511:(e,t,r)=>{r.d(t,{A:()=>p});var o=r(5043),i=r(5464),n=r(111),a=r(579);const l=i.i7`
  0%, 100% { transform: translateY(0); opacity: 0.35; }
  50%      { transform: translateY(-14px); opacity: 0.85; }
`,s=i.Ay.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
`,d=i.Ay.span`
  position: absolute;
  left: ${e=>e.$left};
  top: ${e=>e.$top};
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${e=>e.theme.colors.primary};
  opacity: 0.5;
  ${e=>e.$reduced?i.AH`
          opacity: 0.45;
        `:i.AH`
          animation: ${l} ${e.$duration} ease-in-out infinite;
          animation-delay: ${e.$delay};
        `}
`,c=({count:e,seed:t=1})=>{var r;const i=null!==(r=(0,n.I)())&&void 0!==r&&r,l=(0,o.useMemo)(()=>Array.from({length:e},(e,r)=>({left:(17*r+3*t)%86+6+"%",top:(23*r+7*t)%80+8+"%",duration:3.2+r%4*.35+"s",delay:41*r%12*.14+"s"})),[e,t]);return(0,a.jsx)(s,{"aria-hidden":!0,children:l.map((e,t)=>(0,a.jsx)(d,{$left:e.left,$top:e.top,$delay:e.delay,$duration:e.duration,$reduced:i},t))})},m=i.Ay.section`
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
`,h=i.Ay.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  z-index: 1;
`,p=({id:e,children:t,dotCount:r=0,dotSeed:o=1,fullHeight:i=!1,glow:n=!1,className:l})=>(0,a.jsxs)(m,{id:e,className:l,$fullHeight:i,$glow:n,children:[r>0?(0,a.jsx)(c,{count:r,seed:o}):null,(0,a.jsx)(h,{children:t})]})},8849:(e,t,r)=>{r.d(t,{A:()=>s});r(5043);var o=r(3721),i=r(5464),n=r(579);const a=i.Ay.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 1.25rem;
  padding: 0;
  border: none;
  background: transparent;
  font-family: ${e=>e.theme.typography.fontMono};
  font-size: 0.75rem;
  color: ${e=>e.theme.colors.textMuted};
  cursor: pointer;

  &:hover {
    color: ${e=>e.theme.colors.primary};
  }
`,l=i.Ay.span`
  color: ${e=>e.theme.colors.text};
`,s=({here:e})=>{const t=(0,o.Zp)();return(0,n.jsxs)(a,{type:"button",onClick:()=>t("/lab"),children:["\uc2e4\ud5d8 ",(0,n.jsx)("span",{"aria-hidden":!0,children:"/"})," ",(0,n.jsx)(l,{children:e})]})}}}]);
//# sourceMappingURL=610.cffd08d2.chunk.js.map