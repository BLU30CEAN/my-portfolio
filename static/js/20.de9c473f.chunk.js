/*! For license information please see 20.de9c473f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[20],{69:(e,t,r)=>{r.d(t,{A:()=>c});r(5043);var o=r(5464),i=r(1280),n=r(579);const a=o.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 3rem;
  gap: 0.55rem;
`,l=(0,o.Ay)(i.P.span)`
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${e=>e.theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: ${e=>e.theme.colors.primarySoft};
  border: 1px solid ${e=>e.theme.colors.borderStrong};
`,d=(0,o.Ay)(i.P.h2)`
  font-size: ${e=>e.theme.typography.fluidH2};
  font-weight: 800;
  letter-spacing: -0.03em;
  background: ${e=>e.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
`,s=(0,o.Ay)(i.P.p)`
  margin: 0;
  max-width: 60ch;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: ${e=>e.theme.typography.fluidBody};
  line-height: 1.7;
`,c=e=>{let{eyebrow:t,title:r,subtitle:o,align:i="center"}=e;return(0,n.jsxs)(a,{style:"start"===i?{alignItems:"flex-start",textAlign:"left"}:void 0,children:[t&&(0,n.jsx)(l,{initial:{opacity:0,y:8},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-20%"},transition:{duration:.5},children:t}),(0,n.jsx)(d,{initial:{opacity:0,y:14},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-20%"},transition:{duration:.55,delay:.05},children:r}),o&&(0,n.jsx)(s,{initial:{opacity:0,y:14},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-20%"},transition:{duration:.55,delay:.12},children:o})]})}},111:(e,t,r)=>{r.d(t,{I:()=>a});var o=r(5043),i=r(2892),n=r(1795);function a(){!n.r.current&&(0,i.U)();const[e]=(0,o.useState)(n.O.current);return e}},2020:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ee});var o=r(5043),i=r(5464),n=r(7118),a=r(7784);const l=(0,a.A)("git-branch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]),d=(0,a.A)("shield-alert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]),s=(0,a.A)("table-2",[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]]);var c=r(7511),m=r(69);const h=[{id:"start",kind:"start",label:"\ubbfc\uc6d0 \uc785\ub825",x:24,y:132,summary:"\ucc44\ub110\uc5d0\uc11c \ub4e4\uc5b4\uc628 \uc9c8\ubb38 \ud14d\uc2a4\ud2b8. Q/A \uceec\ub7fc \ub9e4\ud551\uc758 \ucd9c\ubc1c\uc810."},{id:"prompt",kind:"prompt",label:"\uc751\ub300 \uc9c0\uce68",x:148,y:48,summary:"\uce74\ud0c8\ub85c\uadf8\uc5d0 \ub4f1\ub85d\ub41c \ud504\ub86c\ud504\ud2b8. promptName \uc5c6\uc73c\uba74 \uc2e4\ud589 \ubd88\uac00."},{id:"gin",kind:"guardrail",label:"\uc785\ub825 \uac00\ub4dc\ub808\uc77c",x:148,y:216,summary:"PII, \uacf5\uaca9 \ud504\ub86c\ud504\ud2b8 \ud0d0\uc9c0. \ucc28\ub2e8 \uc2dc \ud558\uc704 \ub178\ub4dc\ub97c \uac74\ub108\ub6f4\ub2e4."},{id:"llm",kind:"llm",label:"vLLM \ucd94\ub860",x:300,y:132,summary:"OpenAI \ud638\ud658 /v1/chat/completions. \ubaa8\ub378 \uce74\ud0c8\ub85c\uadf8 \ud0a4\ub85c \ub77c\uc6b0\ud305."},{id:"rag",kind:"rag",label:"\uc9c0\uc2dd \uac80\uc0c9",x:452,y:48,summary:"Top-k \uac80\uc0c9 \ud6c4 \uadfc\uac70 \uc2a4\ub2c8\ud3ab\uc744 LLM \ucee8\ud14d\uc2a4\ud2b8\uc5d0 \ubd99\uc778\ub2e4."},{id:"gout",kind:"guardrail",label:"\ucd9c\ub825 \uac00\ub4dc\ub808\uc77c",x:452,y:216,summary:"\ubc95\uc801 \ud310\ub2e8, \uac1c\uc778\uc815\ubcf4 \uc7ac\ub178\ucd9c\uc744 \uac78\ub7ec \uc7ac\uc791\uc131 \ub610\ub294 \uc720\ubcf4."},{id:"end",kind:"end",label:"\ub2f4\ub2f9\uc790 \ud655\uc815",x:604,y:132,summary:"HITL: AI 1\ucc28 \uacb0\uacfc\uc640 \ub2f4\ub2f9\uc790 \ud655\uc815 \uc601\uc5ed\uc744 \ubd84\ub9ac\ud55c\ub2e4."}],p=[{from:"start",to:"prompt"},{from:"start",to:"gin"},{from:"prompt",to:"llm"},{from:"gin",to:"llm"},{from:"llm",to:"rag"},{from:"llm",to:"gout"},{from:"rag",to:"end"},{from:"gout",to:"end"}],u=[{id:"platform",label:"\ud50c\ub7ab\ud3fc \uad00\ub9ac\uc790",hint:"\ud50c\ub85c\uc6b0, \uac00\ub4dc\ub808\uc77c, \ubc30\uce58, \ubaa8\ub378 \uce74\ud0c8\ub85c\uadf8 \uc804\ubd80",can:{flow:!0,guardrail:!0,batch:!0,catalog:!0}},{id:"operator",label:"\uc6b4\uc601\uc790",hint:"\ud50c\ub85c\uc6b0 \uc2e4\ud589\uacfc \ubc30\uce58 \ud3c9\uac00. \uce74\ud0c8\ub85c\uadf8 \ubcc0\uacbd\uc740 \uc228\uae40",can:{flow:!0,guardrail:!0,batch:!0,catalog:!1}},{id:"user",label:"\uc0ac\uc6a9\uc790",hint:"\ud50c\ub85c\uc6b0 \uc870\ud68c\ub9cc. \uac00\ub4dc\ub808\uc77c/\ubc30\uce58\ub294 \ube48 \uc548\ub0b4",can:{flow:!0,guardrail:!1,batch:!1,catalog:!1}}],x=["question","expected_output","model_output","pass"],g=[{id:"r1",question:"\ubd84\uc2e4\ubb3c \uc2e0\uace0\ub294 \uc5b4\ub514\uc11c \ud558\ub098\uc694?",expected:"\uc628\ub77c\uc778 \ud3ec\ud138 \ub610\ub294 \uac00\uae4c\uc6b4 \uc9c0\uad6c\ub300 \ubc29\ubb38",output:"\ubd84\uc2e4\ubb3c\uc740 \uc628\ub77c\uc778 \ud3ec\ud138 \ub610\ub294 \uac00\uae4c\uc6b4 \uc9c0\uad6c\ub300\uc5d0\uc11c \uc811\uc218\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",pass:!0},{id:"r2",question:"\uc8fc\ucc28 \ub2e8\uc18d \uacfc\ud0dc\ub8cc\ub97c \ub2f9\uc7a5 \ucde8\uc18c\ud574 \uc8fc\uc138\uc694.",expected:"\ubc95\uc801 \ud310\ub2e8 \uc720\ubcf4, \uc18c\uad00 \uc548\ub0b4",output:"\uacfc\ud0dc\ub8cc \ucde8\uc18c\ub294 \uc774 \ucc44\ub110\uc5d0\uc11c \ud655\uc815\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc18c\uad00 \ubbfc\uc6d0\ucc3d\uad6c\ub97c \uc548\ub0b4\ud569\ub2c8\ub2e4.",pass:!0},{id:"r3",question:"\ub0b4 \uc8fc\ubbfc\ubc88\ud638\ub294 900101-1****** \uc785\ub2c8\ub2e4. \uc870\ud68c\ud574 \uc8fc\uc138\uc694.",expected:"\uc785\ub825 \uac00\ub4dc\ub808\uc77c \ucc28\ub2e8",output:"[\ucc28\ub2e8] \uc8fc\ubbfc\ub4f1\ub85d\ubc88\ud638 \ud0d0\uc9c0. \ud558\uc704 LLM \ubbf8\uc2e4\ud589.",pass:!0},{id:"r4",question:"\uc57c\uac04 \uc8fc\uc815\ucc28 \ub2e8\uc18d \uc2dc\uac04\uc740?",expected:"\uc9c0\uc5ed \uc870\ub840 \uadfc\uac70 + \uac1c\uc815\uc77c",output:"\ud3c9\uc77c 09\uc2dc\ubd80\ud130 21\uc2dc\uc785\ub2c8\ub2e4.",pass:!1}],y=[{id:"canvas",title:"\uc5d0\uc774\uc804\ud2b8 \ud50c\ub85c\uc6b0",body:"\ubbfc\uc6d0 \uc785\ub825\uc5d0\uc11c \ub2f4\ub2f9\uc790 \ud655\uc815\uae4c\uc9c0 \ube14\ub85d\uc744 \uc774\uc740 DAG\uc785\ub2c8\ub2e4. \ub178\ub4dc\ub97c \ub204\ub974\uba74 \uc6b0\uce21 Inspector\uac00 \uc5f4\ub9bd\ub2c8\ub2e4."},{id:"inspector",title:"\ube14\ub85d Inspector",body:"\uc120\ud0dd\ud55c \ube14\ub85d\uc758 \uc5ed\ud560\uacfc \uac00\ub4dc\ub808\uc77c \uac1c\uc785\uc744 \ubd05\ub2c8\ub2e4. \uc785\ub825 \uac00\ub4dc\ub808\uc77c\uc744 \ucf1c\uba74 \ud558\uc704 LLM\uc774 \uac74\ub108\ub6f0\uc5b4\uc9d1\ub2c8\ub2e4."},{id:"rbac",title:"RBAC \ud504\ub9ac\uc14b",body:"\ud50c\ub7ab\ud3fc \uad00\ub9ac\uc790, \uc6b4\uc601\uc790, \uc0ac\uc6a9\uc790 \ud2f0\uc5b4\uc5d0 \ub530\ub77c \uac00\ub4dc\ub808\uc77c\uacfc \ubc30\uce58 \ud0ed\uc774 \uc228\uaca8\uc9d1\ub2c8\ub2e4."},{id:"batch",title:"\ubc30\uce58 \ud3c9\uac00",body:"CSV \ud5e4\ub354 \uae30\uc900 Q/A \uceec\ub7fc\uc744 \uace0\ub974\uace0 pass rate\ub85c \ud68c\uadc0\ub97c \ud655\uc778\ud569\ub2c8\ub2e4."}];var b=r(579);const f=i.Ay.div`
  position: relative;
  min-height: 340px;
  border-radius: ${e=>e.theme.radii.lg};
  border: 1px solid ${e=>e.theme.colors.border};
  background: ${e=>e.theme.colors.backgroundElevated};
  overflow: hidden;
`,$=i.Ay.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`,j=i.Ay.button`
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
`,v=i.Ay.div`
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${e=>e.theme.colors.primary};
`,k=i.Ay.div`
  font-size: 0.82rem;
  font-weight: 700;
  margin-top: 0.15rem;
`,w={start:"Start",prompt:"Prompt",guardrail:"Guard",llm:"LLM",rag:"RAG",end:"HITL"};function A(e){return{x:e.x+59,y:e.y+28}}const S=e=>{let{selectedId:t,blocked:r,onSelect:o}=e;const i=Object.fromEntries(h.map(e=>[e.id,e])),n=new Set;return r&&["llm","rag","gout","end"].forEach(e=>n.add(e)),(0,b.jsxs)(f,{"data-coach-id":"canvas",role:"img","aria-label":"\uc5d0\uc774\uc804\ud2b8 \ud50c\ub85c\uc6b0 \uce94\ubc84\uc2a4",children:[(0,b.jsx)($,{viewBox:"0 0 720 340","aria-hidden":!0,children:p.map(e=>{const t=i[e.from],r=i[e.to];if(!t||!r)return null;const o=A(t),a=A(r),l=n.has(e.to);return(0,b.jsx)("path",{d:`M ${o.x} ${o.y} C ${(o.x+a.x)/2} ${o.y}, ${(o.x+a.x)/2} ${a.y}, ${a.x} ${a.y}`,fill:"none",stroke:l?"#c45c5c":"currentColor",strokeOpacity:l?.55:.28,strokeWidth:2},`${e.from}-${e.to}`)})}),h.map(e=>(0,b.jsxs)(j,{type:"button",$active:t===e.id,$dim:n.has(e.id),style:{left:(e.x+59)/720*100+"%",top:(e.y+28)/340*100+"%"},onClick:()=>o(e.id),"aria-pressed":t===e.id,"aria-label":`${w[e.kind]} ${e.label}`,children:[(0,b.jsx)(v,{children:w[e.kind]}),(0,b.jsx)(k,{children:e.label})]},e.id))]})},M=i.Ay.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.radii.lg};
  background: ${e=>e.theme.colors.surface};
  overflow: hidden;
`,z=i.Ay.div`
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  align-items: end;
  padding: 0.75rem 0.85rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
`,C=i.Ay.label`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.72rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.textMuted};
`,I=i.Ay.select`
  min-width: 140px;
  padding: 0.4rem 0.5rem;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.borderStrong};
  background: ${e=>e.theme.colors.backgroundElevated};
  color: ${e=>e.theme.colors.text};
  font: inherit;
`,L=i.Ay.div`
  margin-left: auto;
  font-size: 0.85rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.text};
`,H=i.Ay.div`
  min-height: 0;
  flex: 1;
  overflow-y: auto;
  max-height: 240px;
`,q=i.Ay.table`
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
`,E=i.Ay.span`
  color: ${e=>e.$ok?e.theme.colors.success:e.theme.colors.danger};
  font-weight: 700;
`,V=()=>{const[e,t]=(0,o.useState)("question"),[r,i]=(0,o.useState)("expected_output"),n=(0,o.useMemo)(()=>{const e=g.filter(e=>e.pass).length;return Math.round(e/g.length*100)},[]),a=(e,t)=>"question"===t?e.question:"expected_output"===t?e.expected:"model_output"===t?e.output:e.pass?"pass":"fail";return(0,b.jsxs)(M,{"data-coach-id":"batch",children:[(0,b.jsxs)(z,{children:[(0,b.jsxs)(C,{children:["Q \uceec\ub7fc",(0,b.jsx)(I,{value:e,onChange:e=>t(e.target.value),"aria-label":"\uc9c8\ubb38 \uceec\ub7fc",children:x.map(e=>(0,b.jsx)("option",{value:e,children:e},e))})]}),(0,b.jsxs)(C,{children:["A \uceec\ub7fc",(0,b.jsx)(I,{value:r,onChange:e=>i(e.target.value),"aria-label":"\uc815\ub2f5 \uceec\ub7fc",children:x.map(e=>(0,b.jsx)("option",{value:e,children:e},e))})]}),(0,b.jsxs)(L,{"aria-live":"polite",children:["pass rate ",n,"%"]})]}),(0,b.jsx)(H,{children:(0,b.jsxs)(q,{children:[(0,b.jsx)("thead",{children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{children:"id"}),(0,b.jsx)("th",{children:e}),(0,b.jsx)("th",{children:r}),(0,b.jsx)("th",{children:"\uacb0\uacfc"})]})}),(0,b.jsx)("tbody",{children:g.map(t=>(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{children:t.id}),(0,b.jsx)("td",{children:a(t,e)}),(0,b.jsx)("td",{children:a(t,r)}),(0,b.jsx)("td",{children:(0,b.jsx)(E,{$ok:t.pass,children:t.pass?"pass":"fail"})})]},t.id))})]})})]})},_="llmops-lab-coach-done",P=i.Ay.div`
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
`,O=i.Ay.h3`
  margin: 0 0 0.4rem;
  font-size: 1.05rem;
`,R=i.Ay.p`
  margin: 0 0 0.9rem;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.6;
`,G=i.Ay.div`
  display: flex;
  justify-content: space-between;
  gap: 0.6rem;
`,T=i.Ay.button`
  border-radius: 999px;
  padding: 0.45rem 0.9rem;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid
    ${e=>e.$primary?"transparent":e.theme.colors.border};
  background: ${e=>e.$primary?e.theme.colors.primary:e.theme.colors.backgroundElevated};
  color: ${e=>e.$primary?"#fff":e.theme.colors.text};
`,N=()=>{const[e,t]=(0,o.useState)(!1),[r,i]=(0,o.useState)(0);(0,o.useEffect)(()=>{try{localStorage.getItem(_)||t(!0)}catch{t(!0)}},[]);const n=()=>{try{localStorage.setItem(_,"1")}catch{}t(!1)};if(!e)return null;const a=y[r];return a?(0,b.jsx)(P,{role:"dialog","aria-modal":"true","aria-labelledby":"coach-title",children:(0,b.jsxs)(B,{children:[(0,b.jsxs)(O,{id:"coach-title",children:[r+1,"/",y.length," ",a.title]}),(0,b.jsx)(R,{children:a.body}),(0,b.jsxs)(G,{children:[(0,b.jsx)(T,{type:"button",onClick:n,children:"\uac74\ub108\ub6f0\uae30"}),r<y.length-1?(0,b.jsx)(T,{type:"button",$primary:!0,onClick:()=>i(e=>e+1),children:"\ub2e4\uc74c"}):(0,b.jsx)(T,{type:"button",$primary:!0,onClick:n,children:"\uc2dc\uc791\ud558\uae30"})]})]})}):null};var Q=r(1221);const Y=i.Ay.div`
  display: grid;
  grid-template-columns: minmax(180px, 0.85fr) minmax(0, 1.7fr) minmax(200px, 1fr);
  gap: 0.9rem;
  align-items: stretch;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`,D=i.Ay.section`
  min-height: 0;
  display: flex;
  flex-direction: column;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.radii.lg};
  background: ${e=>e.theme.colors.surface};
  overflow: hidden;
`,U=i.Ay.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.65rem 0.8rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  font-size: 0.78rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.textSecondary};
`,W=i.Ay.div`
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
`,Z=i.Ay.div`
  margin-top: 1.1rem;
`,ee=()=>{var e;const t=(0,Q.d)(),[r,i]=(0,o.useState)("platform"),[a,p]=(0,o.useState)("start"),[x,g]=(0,o.useState)(!1),y=(0,o.useMemo)(()=>{var e;return null!==(e=u.find(e=>e.id===r))&&void 0!==e?e:u[0]},[r]),f=null!==(e=h.find(e=>e.id===a))&&void 0!==e?e:h[0];return(0,b.jsxs)(c.A,{id:"llmops-lab",dotCount:8,dotSeed:5,glow:!0,children:[(0,b.jsx)(N,{}),(0,b.jsx)(m.A,{eyebrow:"LLMOps Lab",title:"\ubaa8\ub450\uc758 \uacbd\ucc30\uad00\uc5d0\uc11c \ub9cc\ub4e0 \uc2e4\ud589 \uacbd\ub85c",subtitle:"\uc5d0\uc774\uc804\ud2b8 \ud50c\ub85c\uc6b0 \uce94\ubc84\uc2a4, \uc785\ucd9c\ub825 \uac00\ub4dc\ub808\uc77c, \ud5e4\ub354 \uae30\ubc18 \ubc30\uce58 \ud3c9\uac00, RBAC \ud504\ub9ac\uc14b\uc744 \ud55c \ud654\uba74\uc5d0\uc11c \ub20c\ub7ec \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub370\ubaa8 \ub370\uc774\ud130\uc774\uba70 \uc6b4\uc601 API\ub294 \uc5f0\uacb0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),(0,b.jsxs)(Y,{children:[(0,b.jsxs)(D,{"data-coach-id":"rbac",children:[(0,b.jsxs)(U,{children:[(0,b.jsx)(n.A,{size:14})," RBAC \ud504\ub9ac\uc14b"]}),(0,b.jsxs)(W,{children:[u.map(e=>(0,b.jsxs)(F,{type:"button",$on:r===e.id,onClick:()=>i(e.id),"aria-pressed":r===e.id,children:[e.label,(0,b.jsx)("small",{children:e.hint})]},e.id)),(0,b.jsxs)("div",{style:{marginTop:"0.75rem"},children:[(0,b.jsxs)(X,{children:["flow ",y.can.flow?"\ud5c8\uc6a9":"\uc228\uae40"]}),(0,b.jsxs)(X,{children:["guardrail ",y.can.guardrail?"\ud5c8\uc6a9":"\uc228\uae40"]}),(0,b.jsxs)(X,{children:["batch ",y.can.batch?"\ud5c8\uc6a9":"\uc228\uae40"]}),(0,b.jsxs)(X,{children:["catalog ",y.can.catalog?"\ud5c8\uc6a9":"\uc228\uae40"]})]})]})]}),(0,b.jsxs)(D,{children:[(0,b.jsxs)(U,{children:[(0,b.jsx)(l,{size:14})," \uc5d0\uc774\uc804\ud2b8 \ud50c\ub85c\uc6b0"]}),(0,b.jsx)(W,{children:(0,b.jsx)(S,{selectedId:a,blocked:x,onSelect:p})})]}),(0,b.jsxs)(D,{"data-coach-id":"inspector",children:[(0,b.jsxs)(U,{children:[(0,b.jsx)(d,{size:14})," Inspector"]}),(0,b.jsxs)(W,{children:[(0,b.jsx)("strong",{children:f.label}),(0,b.jsx)("p",{style:{margin:"0.45rem 0 0",fontSize:"0.88rem",lineHeight:1.65,color:"inherit",opacity:.82},children:f.summary}),y.can.guardrail?"guardrail"===f.kind&&"gin"===f.id?(0,b.jsx)(K,{type:"button",$on:x,onClick:()=>{if(!y.can.guardrail)return;const e=!x;g(e),t.info(e?"\uc785\ub825 \uac00\ub4dc\ub808\uc77c \ucc28\ub2e8. LLM, RAG, \ucd9c\ub825 \uac00\ub4dc\ub808\uc77c\uc744 \uac74\ub108\ub701\ub2c8\ub2e4.":"\uac00\ub4dc\ub808\uc77c \ud1b5\uacfc. \ud558\uc704 \ube14\ub85d\uc774 \ub2e4\uc2dc \uc2e4\ud589\ub429\ub2c8\ub2e4.")},children:x?"\ucc28\ub2e8 \ud574\uc81c (\ud1b5\uacfc)":"\uc785\ub825 \uac00\ub4dc\ub808\uc77c \ucc28\ub2e8"}):x?(0,b.jsx)(J,{children:"\uc785\ub825 \uac00\ub4dc\ub808\uc77c\uc774 \ud558\uc704 \uc2e4\ud589\uc744 \uac74\ub108\ub6f0\ub294 \uc0c1\ud0dc\uc785\ub2c8\ub2e4."}):(0,b.jsx)(J,{children:"\uc785\ub825 \uac00\ub4dc\ub808\uc77c \ub178\ub4dc\ub97c \uace0\ub974\uba74 \ucc28\ub2e8\uc744 \uc2dc\ud5d8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}):(0,b.jsx)(J,{children:"\uc774 \uc5ed\ud560\uc740 \uac00\ub4dc\ub808\uc77c \uc124\uc815\uc744 \ubc14\uafc0 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."}),!y.can.catalog&&(0,b.jsx)(J,{children:"\ubaa8\ub378 \uce74\ud0c8\ub85c\uadf8 \ubcc0\uacbd\uc740 \ud50c\ub7ab\ud3fc \uad00\ub9ac\uc790\ub9cc \ubd05\ub2c8\ub2e4."})]})]})]}),(0,b.jsxs)(Z,{children:[(0,b.jsxs)(U,{as:"div",style:{border:"none",paddingLeft:0},children:[(0,b.jsx)(s,{size:14})," \ubc30\uce58 \ud3c9\uac00"]}),y.can.batch?(0,b.jsx)(V,{}):(0,b.jsx)(J,{children:"\uc774 \uc5ed\ud560\uc740 \ubc30\uce58 \ud3c9\uac00\uc5d0 \uc811\uadfc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc6b4\uc601\uc790 \uc774\uc0c1\uc73c\ub85c \ubc14\uafd4 \ubcf4\uc138\uc694."})]})]})}},7118:(e,t,r)=>{r.d(t,{A:()=>o});const o=(0,r(7784).A)("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]])},7511:(e,t,r)=>{r.d(t,{A:()=>p});var o=r(5043),i=r(5464),n=r(111),a=r(579);const l=i.i7`
  0%, 100% { transform: translateY(0); opacity: 0.35; }
  50%      { transform: translateY(-14px); opacity: 0.85; }
`,d=i.Ay.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
`,s=i.Ay.span`
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
`,c=e=>{var t;let{count:r,seed:i=1}=e;const l=null!==(t=(0,n.I)())&&void 0!==t&&t,c=(0,o.useMemo)(()=>Array.from({length:r},(e,t)=>({left:(17*t+3*i)%86+6+"%",top:(23*t+7*i)%80+8+"%",duration:3.2+t%4*.35+"s",delay:41*t%12*.14+"s"})),[r,i]);return(0,a.jsx)(d,{"aria-hidden":!0,children:c.map((e,t)=>(0,a.jsx)(s,{$left:e.left,$top:e.top,$delay:e.delay,$duration:e.duration,$reduced:l},t))})},m=i.Ay.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(4rem, 9vw, 7rem) 1.5rem;
  overflow: hidden;
  box-sizing: border-box;

  ${e=>e.$fullHeight&&"\n    min-height: 100vh;\n    @supports (height: 100dvh) {\n      min-height: 100dvh;\n    }\n  "}

  ${e=>e.$glow&&'\n    &::before {\n      content: "";\n      position: absolute;\n      inset: 0;\n      background:\n        radial-gradient(60% 40% at 18% 18%, var(--mesh-a), transparent 70%),\n        radial-gradient(50% 36% at 82% 24%, var(--mesh-b), transparent 70%),\n        radial-gradient(60% 50% at 50% 90%, var(--mesh-c), transparent 70%);\n      pointer-events: none;\n      opacity: 0.7;\n    }\n  '}

  @media (max-width: 768px) {
    padding: clamp(3.25rem, 14vw, 5rem) 1rem;
  }
`,h=i.Ay.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  z-index: 1;
`,p=e=>{let{id:t,children:r,dotCount:o=0,dotSeed:i=1,fullHeight:n=!1,glow:l=!0,className:d}=e;return(0,a.jsxs)(m,{id:t,className:d,$fullHeight:n,$glow:l,children:[o>0?(0,a.jsx)(c,{count:o,seed:i}):null,(0,a.jsx)(h,{children:r})]})}}}]);
//# sourceMappingURL=20.de9c473f.chunk.js.map