"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[200],{5200:(e,r,o)=>{o.r(r),o.d(r,{default:()=>O});var t=o(5043),s=o(5464),i=o(8849);const a=[{id:"O-2041",table:"T12",requestId:"req_7f3a2c",status:"paid-empty",paidAt:"12:04:11",lines:[{sku:"B-01",name:"\uc544\uba54\ub9ac\uce74\ub178",qty:2,stock:48},{sku:"F-12",name:"\ud06c\ub85c\uc640\uc0c1",qty:1,stock:0}]},{id:"O-2040",table:"T07",requestId:"req_12ab90",status:"paid",paidAt:"11:58:02",lines:[{sku:"B-01",name:"\uc544\uba54\ub9ac\uce74\ub178",qty:1,stock:48}]},{id:"O-2039",table:"T03",requestId:"req_88c1e0",status:"pending",paidAt:"",lines:[{sku:"D-04",name:"\ucf5c\ub77c",qty:3,stock:12}]}],n={req_7f3a2c:[{source:"Datadog",requestId:"req_7f3a2c",at:"12:04:11.102",body:"PG approve=OK amount=8900",match:!0},{source:"API \ub85c\uadf8",requestId:"req_7f3a2c",at:"12:04:11.140",body:"POST /orders timeout after payment callback",match:!0},{source:"DB",requestId:"req_7f3a2c",at:"12:04:11.141",body:"orders row missing. payments row exists.",match:!0}],req_12ab90:[{source:"Datadog",requestId:"req_12ab90",at:"11:58:02.044",body:"PG approve=OK amount=4500",match:!0},{source:"API \ub85c\uadf8",requestId:"req_12ab90",at:"11:58:02.071",body:"POST /orders 201",match:!0},{source:"DB",requestId:"req_12ab90",at:"11:58:02.080",body:"orders.id=2040 status=paid",match:!0}],req_88c1e0:[{source:"Datadog",requestId:"req_88c1e0",at:"11:51:40.002",body:"checkout started",match:!0},{source:"API \ub85c\uadf8",requestId:"req_88c1e0",at:"11:51:40.010",body:"POST /payments pending",match:!0},{source:"DB",requestId:"req_88c1e0",at:"11:51:40.011",body:"orders.status=pending",match:!0}]},d={"paid-empty":"\uacb0\uc81c\ub428 \xb7 \uc8fc\ubb38 \uc5c6\uc74c",paid:"\uacb0\uc81c\xb7\uc8fc\ubb38 \uc77c\uce58",pending:"\uacb0\uc81c \ub300\uae30"};var c=o(6025),l=o(579);const m=s.Ay.div`
  --pos-bg: #f4eee4;
  --pos-surface: #fffaf3;
  --pos-ink: #2a2118;
  --pos-muted: #7a6a58;
  --pos-line: #e4d5c4;
  --pos-accent: #c45c26;
  --pos-danger: #9b1c1c;
  --pos-ok: #3f6b3a;
  min-height: calc(100vh - 72px);
  padding: 1.5rem 1.25rem 3rem;
  background: var(--pos-bg);
  color: var(--pos-ink);
`,p=s.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
`,h=s.Ay.div`
  button {
    color: var(--pos-muted);
  }
`,u=s.Ay.h1`
  margin: 0 0 0.35rem;
  font-size: clamp(1.45rem, 2.4vw, 1.85rem);
  letter-spacing: -0.03em;
`,b=s.Ay.p`
  margin: 0 0 1.25rem;
  max-width: 62ch;
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--pos-muted);
`,x=s.Ay.div`
  display: grid;
  grid-template-columns: minmax(14rem, 0.8fr) minmax(0, 1.2fr) minmax(16rem, 1fr);
  min-height: min(32rem, calc(100dvh - 14rem));
  border: 1px solid var(--pos-line);
  background: var(--pos-surface);
  overflow: hidden;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`,f=s.Ay.section`
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  border-right: 1px solid var(--pos-line);

  &:last-child {
    border-right: none;
  }
`,g=s.Ay.div`
  flex-shrink: 0;
  padding: 0.65rem 0.8rem;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-bottom: 1px solid var(--pos-line);
`,y=s.Ay.div`
  flex-shrink: 0;
  padding: 0.55rem 0.7rem;
  border-bottom: 1px solid var(--pos-line);
`,v=s.Ay.input`
  width: 100%;
  box-sizing: border-box;
  padding: 0.4rem 0.5rem;
  border: 1px solid var(--pos-line);
  background: #fff;
  color: var(--pos-ink);
  font: inherit;
  font-size: 0.85rem;
`,q=s.Ay.div`
  min-height: 0;
  flex: 1;
  overflow-y: auto;
`,j=s.Ay.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.7rem 0.8rem;
  border: none;
  border-bottom: 1px solid var(--pos-line);
  background: ${e=>e.$on?"rgba(196, 92, 38, 0.12)":"transparent"};
  color: inherit;
  font: inherit;
  cursor: pointer;
`,k=s.Ay.div`
  font-family: "JetBrains Mono", ui-monospace, monospace;
  font-size: 0.72rem;
  color: var(--pos-accent);
`,A=s.Ay.div`
  padding: 0.85rem;
  font-size: 0.9rem;
  line-height: 1.55;
`,w=s.Ay.span`
  font-family: "JetBrains Mono", ui-monospace, monospace;
  font-size: 0.78rem;
  color: ${e=>e.$zero?"var(--pos-danger)":"var(--pos-ok)"};
`,I=s.Ay.div`
  margin: 0 0 0.75rem;
  font-weight: 800;
  color: ${e=>e.$bad?"var(--pos-danger)":"var(--pos-ok)"};
`,_=s.Ay.button`
  margin-top: 0.75rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--pos-accent);
  background: var(--pos-accent);
  color: #fff;
  font: inherit;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,z=s.Ay.article`
  margin-bottom: 0.85rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--pos-line);
  font-size: 0.8rem;
  line-height: 1.5;

  strong {
    display: block;
    font-size: 0.72rem;
    color: var(--pos-accent);
  }
`,$=s.Ay.p`
  margin: 0.75rem 0 0;
  font-size: 0.78rem;
  color: var(--pos-muted);
`,O=()=>{var e;const r=(0,c.d)(),[o,s]=(0,t.useState)(""),[O,P]=(0,t.useState)(a[0].id),[B,C]=(0,t.useState)({}),D=(0,t.useMemo)(()=>{const e=o.trim();return e?a.filter(r=>r.id.indexOf(e)>=0||r.table.toLowerCase().indexOf(e.toLowerCase())>=0):a},[o]),S=null!==(e=a.find(e=>e.id===O))&&void 0!==e?e:a[0],T=n[S.requestId]||[],M=Boolean(B[S.id])?"paid":S.status;return(0,l.jsx)(m,{children:(0,l.jsxs)(p,{children:[(0,l.jsx)(h,{children:(0,l.jsx)(i.A,{here:"\uc8fc\ubb38 \ucc44\ub110"})}),(0,l.jsx)(u,{children:"\uc571\uc778\uc571 \uc8fc\ubb38 \ub370\uc2a4\ud06c"}),(0,l.jsx)(b,{children:"\uacb0\uc81c \uc2b9\uc778 \ud6c4 \uc8fc\ubb38\uc774 \ube44\ub358 \uac74\uc744 \uac19\uc740 request id\ub85c \ub9de\ucd98 \ud654\uba74\uc785\ub2c8\ub2e4. PG\ub294 \ubd99\uc774\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \uc7ac\uace0 0\uc774\uba74 \ub77c\uc778\uc5d0 \ud45c\uc2dc\ub9cc \ud569\ub2c8\ub2e4."}),(0,l.jsxs)(x,{"aria-label":"\uc8fc\ubb38 \ub370\uc2a4\ud06c",children:[(0,l.jsxs)(f,{children:[(0,l.jsx)(g,{children:"\uc8fc\ubb38 \ud050"}),(0,l.jsx)(y,{children:(0,l.jsx)(v,{value:o,onChange:e=>s(e.target.value),placeholder:"\uc8fc\ubb38\ubc88\ud638\xb7\ud14c\uc774\ube14","aria-label":"\uc8fc\ubb38 \uac80\uc0c9"})}),(0,l.jsx)(q,{className:"slim-scroll",role:"listbox","aria-label":"\uc8fc\ubb38 \ubaa9\ub85d",children:0===D.length?(0,l.jsx)(A,{children:"\uac80\uc0c9\uacfc \ub9de\ub294 \uc8fc\ubb38\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."}):D.map(e=>(0,l.jsxs)(j,{type:"button",$on:e.id===S.id,role:"option","aria-selected":e.id===S.id,onClick:()=>P(e.id),children:[(0,l.jsxs)(k,{children:[e.id," \xb7 ",e.table]}),(0,l.jsx)("div",{children:d[B[e.id]?"paid":e.status]})]},e.id))})]}),(0,l.jsxs)(f,{children:[(0,l.jsx)(g,{children:"\uc8fc\ubb38 \xb7 \uc7ac\uace0"}),(0,l.jsx)(q,{className:"slim-scroll",children:(0,l.jsxs)(A,{children:[(0,l.jsx)(I,{$bad:"paid-empty"===M,children:d[M]}),(0,l.jsxs)("div",{children:["request id"," ",(0,l.jsx)(k,{as:"span",children:S.requestId})]}),S.paidAt?(0,l.jsxs)("div",{children:["\uacb0\uc81c ",S.paidAt]}):null,S.lines.map(e=>(0,l.jsxs)("p",{children:[e.name," \xd7 ",e.qty," ",(0,l.jsxs)(w,{$zero:0===e.stock,children:["\uc7ac\uace0 ",e.stock,0===e.stock?" \ud488\uc808":""]})]},e.sku)),(0,l.jsx)(_,{type:"button",disabled:"paid-empty"!==M,onClick:()=>{C(e=>({...e,[S.id]:!0})),r.success("\uc8fc\ubb38 \ud589\uc744 \uacb0\uc81c \ucf5c\ubc31\uacfc \ub9de\ucdb0 \ubcf4\uc815\ud588\uc2b5\ub2c8\ub2e4.")},children:"\uc8fc\ubb38 \ubcf4\uc815"})]})})]}),(0,l.jsxs)(f,{children:[(0,l.jsx)(g,{children:"RCA \xb7 \uac19\uc740 request id"}),(0,l.jsx)(q,{className:"slim-scroll",children:(0,l.jsx)(A,{children:T.map(e=>(0,l.jsxs)(z,{children:[(0,l.jsxs)("strong",{children:[e.source," \xb7 ",e.at]}),e.body]},`${e.source}-${e.at}`))})})]})]}),(0,l.jsx)($,{children:"Datadog, API \ub85c\uadf8, DB\ub97c \uac19\uc740 request id\ub85c \ubcf8 \uc7ac\ud604\uc785\ub2c8\ub2e4. \uc2e4\uc81c \uacb0\uc81c \uc6d0\uc7a5\uc740 \uc5c6\uc2b5\ub2c8\ub2e4."})]})})}},8849:(e,r,o)=>{o.d(r,{A:()=>d});o(5043);var t=o(3721),s=o(5464),i=o(579);const a=s.Ay.button`
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
`,n=s.Ay.span`
  color: ${e=>e.theme.colors.text};
`,d=({here:e})=>{const r=(0,t.Zp)();return(0,i.jsxs)(a,{type:"button",onClick:()=>r("/lab"),children:["\uc2e4\ud5d8 ",(0,i.jsx)("span",{"aria-hidden":!0,children:"/"})," ",(0,i.jsx)(n,{children:e})]})}}}]);
//# sourceMappingURL=200.8e2afdde.chunk.js.map