"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[315],{69:(e,t,r)=>{r.d(t,{A:()=>c});r(5043);var i=r(5464),o=r(1280),s=r(579);const n=i.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: ${e=>"start"===e.$align?"flex-start":"center"};
  text-align: ${e=>"start"===e.$align?"left":"center"};
  margin-bottom: 2rem;
  gap: 0.4rem;
`,a=(0,i.Ay)(o.P.span)`
  font-family: ${e=>e.theme.typography.fontMono};
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: ${e=>e.theme.colors.primary};
`,l=(0,i.Ay)(o.P.h2)`
  font-size: ${e=>e.theme.typography.fluidH2};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.text};
  margin: 0;
`,d=(0,i.Ay)(o.P.p)`
  margin: 0.15rem 0 0;
  max-width: 58ch;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: ${e=>e.theme.typography.fluidBody};
  line-height: 1.7;
`,c=({eyebrow:e,title:t,subtitle:r,align:i="start"})=>(0,s.jsxs)(n,{$align:i,children:[e&&(0,s.jsx)(a,{initial:{opacity:0,y:8},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-20%"},transition:{duration:.45},children:e}),(0,s.jsx)(l,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-20%"},transition:{duration:.5,delay:.04},children:t}),r&&(0,s.jsx)(d,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-20%"},transition:{duration:.5,delay:.08},children:r})]})},5315:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Ve});var i=r(5043),o=r(5464),s=r(1280),n=r(5258),a=r(9236),l=r(3005),d=r(7511),c=r(69),m=r(8849),p=r(579);const h=o.Ay.div`
  display: grid;
  gap: 6px;
  min-height: 220px;
  padding: 10px;
  border-radius: ${e=>e.theme.radii.md};
  background: ${e=>e.theme.colors.backgroundElevated};
  border: 1px solid ${e=>e.theme.colors.border};
  grid-template-columns: ${e=>"three-column-ops"===e.$variant?"0.9fr 1.4fr 1fr":"0.75fr 1.5fr 1fr"};
`,u=o.Ay.div`
  border-radius: 8px;
  border: 1px dashed
    ${e=>"accent"===e.$tone?e.theme.colors.primary:e.theme.colors.borderStrong};
  background: ${e=>"accent"===e.$tone?e.theme.colors.primarySoft:e.theme.colors.surface};
  min-height: 180px;
  padding: 8px;
  font-size: 0.72rem;
  color: ${e=>e.theme.colors.textMuted};
`,x=o.Ay.ul`
  margin: 0.75rem 0 0;
  padding-left: 1.1rem;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 0.86rem;
  line-height: 1.55;
`,g=o.Ay.article`
  padding: 1.25rem;
  border-radius: ${e=>e.theme.radii.lg};
  border: 1px solid ${e=>e.theme.colors.border};
  background: ${e=>e.theme.colors.surface};
  box-shadow: ${e=>e.theme.shadows.card};
`,y=o.Ay.h3`
  margin: 0 0 0.35rem;
  font-size: 1.05rem;
  color: ${e=>e.theme.colors.text};
`,b=o.Ay.p`
  margin: 0 0 0.85rem;
  font-size: 0.88rem;
  color: ${e=>e.theme.colors.textMuted};
`,f=({template:e,active:t})=>{const r=e.id;return(0,p.jsxs)(g,{style:{outline:t?"2px solid var(--bc-cobalt, #0040ff)":void 0},children:[(0,p.jsx)(y,{children:e.label}),(0,p.jsx)(b,{children:e.subtitle}),(0,p.jsx)(h,{$variant:r,"aria-hidden":!0,children:"three-column-ops"===r?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u,{children:"\ud050 \xb7 \ud544\ud130 \uace0\uc815"}),(0,p.jsx)(u,{$tone:"accent",children:"\uc0c1\uc138 \xb7 AI \uacb0\uacfc \xb7 HITL"}),(0,p.jsx)(u,{children:"\uadfc\uac70 \xb7 \uc124\uc815 \xb7 \uc561\uc158"})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u,{children:"RBAC \uba54\ub274"}),(0,p.jsx)(u,{$tone:"accent",children:"\uce74\ud0c8\ub85c\uadf8 \xb7 \ud14c\uc774\ube14"}),(0,p.jsx)(u,{children:"Inspector \xb7 \ubc30\ud3ec"})]})}),e.knowHow.map(e=>(0,p.jsxs)("div",{children:[(0,p.jsx)(b,{style:{marginTop:"1rem",marginBottom:"0.35rem"},children:(0,p.jsx)("strong",{style:{color:"inherit"},children:e.title})}),(0,p.jsx)(x,{children:e.points.map(e=>(0,p.jsx)("li",{children:e},e))})]},e.title))]})};var j=r(6210),v=r(614),$=r(9340),w=r(6025);const A=[{id:"Q-1042",title:"\ubbfc\uc6d0 \uc694\uc57d \uac80\uc218 \u2014 \uc8fc\ucc28 \ub2e8\uc18d \ubb38\uc758",status:"pending",priority:"\u4e2d",aiDraft:"\ud574\ub2f9 \uad6c\uc5ed\uc740 \uc2dc\uac04\uc81c \uc8fc\ucc28 \uad6c\uc5ed\uc774\uba70, \ud45c\uc9c0\ud310 \uae30\uc900 \ud1a0\xb7\uc77c 09\u201318\uc2dc \uc720\ub8cc\uc785\ub2c8\ub2e4. \ub2e8\uc18d \uc2dc\uac04 \uc678 \uc8fc\ucc28\ub294 \uacfc\ud0dc\ub8cc \ub300\uc0c1\uc774 \uc544\ub2d0 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",confidence:.82,sources:[{label:"\uad50\ud1b5\ubc95\uaddc FAQ v3.2",revised:"2025-11-01"},{label:"\uc9c0\uc5ed \uc8fc\ucc28 \uc548\ub0b4",revised:"2026-01-08"}]},{id:"Q-1041",title:"AI \ub2f5\ubcc0 \u2014 \ubd84\uc2e4\ubb3c \uc811\uc218 \uacbd\ub85c",status:"review",priority:"\u4f4e",aiDraft:"\ubd84\uc2e4\ubb3c \uc2e0\uace0\ub294 \uc628\ub77c\uc778 \ud3ec\ud138 \ub610\ub294 \uac00\uae4c\uc6b4 \ud30c\ucd9c\uc18c \ubc29\ubb38\uc73c\ub85c \uc811\uc218\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc2b5\ub4dd\ubb3c\uacfc \ub9e4\uce6d \uc2dc SMS\ub85c \uc548\ub0b4\ub429\ub2c8\ub2e4.",confidence:.91,sources:[{label:"\ubbfc\uc6d0 \ub9e4\ub274\uc5bc \xa74.2",revised:"2025-09-20"}]},{id:"Q-1039",title:"\uac00\ub4dc\ub808\uc77c \ub9c8\uc2a4\ud0b9 \uac80\ud1a0",status:"done",priority:"\u9ad8",aiDraft:"[\ub9c8\uc2a4\ud0b9\ub428] \uc5f0\ub77d\ucc98 ***-****-1234 \ud3ec\ud568 \u2014 \uc804\uc1a1 \ubcf4\ub958",confidence:.44,sources:[{label:"PII \uc815\ucc45",revised:"2026-02-01"}]}],k=o.Ay.div`
  display: grid;
  grid-template-columns: minmax(160px, 0.95fr) minmax(0, 1.5fr) minmax(180px, 1fr);
  min-height: 380px;
  border-radius: ${e=>e.theme.radii.lg};
  border: 1px solid ${e=>e.theme.colors.border};
  background: ${e=>e.theme.colors.surface};
  overflow: hidden;
  box-shadow: ${e=>e.theme.shadows.card};

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`,S=o.Ay.div`
  display: flex;
  min-height: 0;
  flex-direction: column;
  overflow: hidden;
  border-right: 1px solid ${e=>e.theme.colors.border};

  &:last-child {
    border-right: none;
  }
`,C=o.Ay.div`
  flex-shrink: 0;
  padding: 0.65rem 0.75rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  font-size: 0.78rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.textSecondary};
`,z=o.Ay.div`
  flex-shrink: 0;
  padding: 0.5rem 0.65rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
`,_=o.Ay.div`
  min-height: 0;
  flex: 1;
  overflow-y: auto;
  padding: 0.35rem;
`,I=o.Ay.button`
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 999px;
  padding: 0.25rem 0.55rem;
  font-size: 0.72rem;
  margin-right: 0.35rem;
  cursor: pointer;
  background: ${e=>e.$active?e.theme.colors.primarySoft:"transparent"};
  color: ${e=>e.theme.colors.textSecondary};
`,E=o.Ay.button`
  display: block;
  width: 100%;
  text-align: left;
  border: none;
  border-radius: 8px;
  padding: 0.55rem 0.5rem;
  margin-bottom: 0.25rem;
  cursor: pointer;
  background: ${e=>e.$active?e.theme.colors.primarySoft:"transparent"};
  color: ${e=>e.theme.colors.text};

  &:hover {
    background: ${e=>e.theme.colors.primarySoft};
  }
`,T=o.Ay.div`
  margin: 0.75rem;
  padding: 0.75rem;
  border-radius: 10px;
  border: 1px dashed ${e=>e.theme.colors.borderStrong};
  background: ${e=>e.theme.colors.backgroundElevated};
  font-size: 0.85rem;
  line-height: 1.55;
`,D=o.Ay.div`
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.65rem 0.75rem;
  border-top: 1px solid ${e=>e.theme.colors.border};
`,P=o.Ay.button`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  border-radius: 8px;
  padding: 0.45rem 0.7rem;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid ${e=>e.theme.colors.borderStrong};
  background: ${e=>"primary"===e.$variant?e.theme.colors.primary:"danger"===e.$variant?e.theme.colors.danger:e.theme.colors.surface};
  color: ${e=>"primary"===e.$variant||"danger"===e.$variant?"#fff":e.theme.colors.text};
`,H=o.Ay.div`
  padding: 0.5rem 0.65rem;
  margin-bottom: 0.35rem;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.border};
  font-size: 0.78rem;
`,O=()=>{var e;const t=(0,w.d)(),[r,o]=(0,i.useState)(A),[s,n]=(0,i.useState)(A[0].id),[a,l]=(0,i.useState)("all"),d=(0,i.useMemo)(()=>"all"===a?r:r.filter(e=>e.status===a),[r,a]),c=null!==(e=r.find(e=>e.id===s))&&void 0!==e?e:r[0],m=e=>{o(t=>t.map(t=>t.id===s?{...t,status:e}:t))};return(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{style:{marginBottom:"0.65rem",fontSize:"0.95rem",fontWeight:700},children:["A \xb7 \ub77c\uc774\ube0c \ub370\ubaa8 ",(0,p.jsx)("span",{style:{fontWeight:500,fontSize:"0.8rem"},children:"HITL 3\ubd84\ud560"})]}),(0,p.jsxs)(k,{children:[(0,p.jsxs)(S,{"aria-label":"\uac80\uc218 \ud050",children:[(0,p.jsx)(C,{children:"\ud050"}),(0,p.jsx)(z,{role:"group","aria-label":"\uc0c1\ud0dc \ud544\ud130",children:[["all","\uc804\uccb4"],["pending","\ub300\uae30"],["review","\uac80\uc218"],["done","\uc644\ub8cc"]].map(([e,t])=>(0,p.jsx)(I,{type:"button",$active:a===e,onClick:()=>l(e),children:t},e))}),(0,p.jsx)(_,{className:"slim-scroll",children:d.map(e=>(0,p.jsxs)(E,{type:"button",$active:e.id===s,onClick:()=>n(e.id),children:[(0,p.jsx)("div",{style:{fontSize:"0.72rem",opacity:.7},children:e.id}),(0,p.jsx)("div",{style:{fontSize:"0.82rem",fontWeight:600},children:e.title}),(0,p.jsxs)("div",{style:{fontSize:"0.72rem",marginTop:4},children:[e.priority," \xb7 ",e.status]})]},e.id))})]}),(0,p.jsxs)(S,{"aria-label":"AI \uacb0\uacfc \ubc0f \ud655\uc815",children:[(0,p.jsx)(C,{children:"AI 1\ucc28 \uacb0\uacfc \xb7 \ub2f4\ub2f9\uc790 \ud655\uc815"}),(0,p.jsx)(_,{className:"slim-scroll",children:(0,p.jsxs)(T,{children:[(0,p.jsxs)("div",{style:{fontSize:"0.72rem",marginBottom:6,opacity:.75},children:["\uc2e0\ub8b0\ub3c4 ",(100*c.confidence).toFixed(0),"%",c.confidence<.7?" \u2014 \uc720\ubcf4 \uad8c\uace0":""]}),c.aiDraft]})}),(0,p.jsxs)(D,{children:[(0,p.jsxs)(P,{type:"button",$variant:"primary",onClick:()=>{m("done"),t.success("\ub2f4\ub2f9\uc790 \ud655\uc815")},children:[(0,p.jsx)(j.A,{size:14})," \ud655\uc815"]}),(0,p.jsx)(P,{type:"button",onClick:()=>t.info("\uc218\uc815 \ubaa8\ub4dc \u2014 \ub370\ubaa8"),children:"\uc218\uc815"}),(0,p.jsxs)(P,{type:"button",$variant:"danger",onClick:()=>{m("review"),t.info("\uae30\uac01 \u2014 \uc7ac\uac80\ud1a0 \ud050")},children:[(0,p.jsx)(v.A,{size:14})," \uae30\uac01"]}),(0,p.jsxs)(P,{type:"button",$variant:"muted",onClick:()=>{m("pending"),t.info("\ud310\ub2e8 \uc720\ubcf4")},children:[(0,p.jsx)($.A,{size:14})," \uc720\ubcf4"]})]})]}),(0,p.jsxs)(S,{"aria-label":"\uadfc\uac70 \ubc0f \uc124\uc815",children:[(0,p.jsx)(C,{children:"\uadfc\uac70 \xb7 \uc124\uc815"}),(0,p.jsxs)(_,{className:"slim-scroll",style:{padding:"0.65rem"},children:[c.sources.map(e=>(0,p.jsxs)(H,{children:[(0,p.jsx)("strong",{children:e.label}),(0,p.jsxs)("div",{style:{opacity:.75,marginTop:4},children:["\uac1c\uc815 ",e.revised]})]},e.label)),(0,p.jsxs)(H,{children:[(0,p.jsx)("strong",{children:"\ud328\ub110 \ubc30\uc9c0"}),(0,p.jsx)("div",{style:{opacity:.75,marginTop:4},children:"\uc815\ucc45 \xb7 \uac10\uc0ac"})]})]})]})]})]})};var B=r(2024),M=r(8693);const N={NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_ADMIN_API_URL||"http://localhost:8000/api/v1",R="portfolio-admin-api-key";function K(){return localStorage.getItem(R)||{NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_ADMIN_API_KEY||"dev-admin-key-change-me"}async function L(e,t={},r=!1){const i={...t.headers};r&&(i["X-Admin-Key"]=K()),t.body instanceof FormData||(i["Content-Type"]=i["Content-Type"]||"application/json");const o=await fetch(`${N}${e}`,{...t,headers:i}),s=await o.json().catch(()=>({}));if(!o.ok)throw new Error(s.detail||s.message||`HTTP ${o.status}`);return s}const W=()=>L("/entities"),F=e=>L("/entities",{method:"POST",body:JSON.stringify(e)},!0),U=(e,t)=>L(`/entities/${e}/records${t?`?q=${encodeURIComponent(t)}`:""}`),V=(e,t)=>L(`/entities/${e}/records`,{method:"POST",body:JSON.stringify(t)},!0),J=(e,t,r)=>L(`/entities/${e}/records/${t}`,{method:"PATCH",body:JSON.stringify(r)},!0),q=(e,t)=>L(`/entities/${e}/records/${t}`,{method:"DELETE"},!0),Q=(e,t,r,i)=>{const o=new FormData;return o.append("file",t),o.append("mode",r),i&&o.append("key_column",i),L(`/entities/${e}/import`,{method:"POST",body:o},!0)},Y=e=>L(`/entities/${e}/imports`),X=[{id:"local-1",entity_id:"local",external_key:"SKU-001",data:{sku:"SKU-001",name:"\uc0d8\ud50c \uc0c1\ud488 A",category:"\uc804\uc790",status:"active",note:"API \uc624\ud504\ub77c\uc778 \ubbf8\ub9ac\ubcf4\uae30"},created_at:"",updated_at:""},{id:"local-2",entity_id:"local",external_key:"SKU-002",data:{sku:"SKU-002",name:"\uc0d8\ud50c \uc0c1\ud488 B",category:"\uc0dd\ud65c",status:"active",note:""},created_at:"",updated_at:""}],Z=o.Ay.div`
  display: grid;
  grid-template-columns: minmax(140px, 0.85fr) minmax(0, 1.6fr) minmax(200px, 1fr);
  min-height: 380px;
  border-radius: ${e=>e.theme.radii.lg};
  border: 1px solid ${e=>e.theme.colors.border};
  background: ${e=>e.theme.colors.surface};
  overflow: hidden;
  box-shadow: ${e=>e.theme.shadows.card};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
  }
`,G=o.Ay.nav`
  flex-shrink: 0;
  border-right: 1px solid ${e=>e.theme.colors.border};
  background: ${e=>e.theme.colors.backgroundElevated};
  padding: 0.75rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,ee=o.Ay.button`
  text-align: left;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 0.65rem;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  background: ${e=>e.$active?e.theme.colors.primarySoft:"transparent"};
  color: ${e=>e.$active?e.theme.colors.primary:e.theme.colors.textSecondary};

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,te=o.Ay.div`
  display: flex;
  min-height: 0;
  flex-direction: column;
  overflow: hidden;
`,re=o.Ay.div`
  flex-shrink: 0;
  padding: 0.65rem 0.75rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
`,ie=o.Ay.input`
  flex: 1;
  min-width: 140px;
  border: 1px solid ${e=>e.theme.colors.borderStrong};
  border-radius: 8px;
  padding: 0.4rem 0.6rem;
  font: inherit;
  font-size: 0.85rem;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
`,oe=o.Ay.div`
  min-height: 0;
  flex: 1;
  overflow-y: auto;
`,se=o.Ay.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8rem;

  th,
  td {
    padding: 0.45rem 0.65rem;
    border-bottom: 1px solid ${e=>e.theme.colors.border};
    text-align: left;
  }

  thead th {
    position: sticky;
    top: 0;
    background: ${e=>e.theme.colors.surface};
    font-size: 0.72rem;
    color: ${e=>e.theme.colors.textMuted};
  }

  tbody tr {
    cursor: pointer;
    transition: background 0.15s ease;
  }

  tbody tr:hover,
  tbody tr[aria-selected="true"] {
    background: ${e=>e.theme.colors.primarySoft};
  }
`,ne=o.Ay.aside`
  border-left: 1px solid ${e=>e.theme.colors.border};
  display: flex;
  flex-direction: column;
  min-height: 0;
  background: ${e=>e.theme.colors.backgroundElevated};
`,ae=o.Ay.div`
  flex-shrink: 0;
  padding: 0.75rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
`,le=o.Ay.div`
  flex: 1;
  overflow-y: auto;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`,de=o.Ay.label`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.72rem;
  color: ${e=>e.theme.colors.textMuted};
`,ce=o.Ay.input`
  font-size: 0.85rem;
  padding: 0.4rem 0.55rem;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.borderStrong};
  background: ${e=>e.theme.colors.surface};
  color: ${e=>e.theme.colors.text};
`,me=o.Ay.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  margin-top: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  color: #fff;
  background: ${e=>e.theme.colors.gradient};
`,pe=o.Ay.span`
  font-family: ui-monospace, monospace;
  font-size: 0.65rem;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  border: 1px solid ${e=>e.theme.colors.border};
  color: ${e=>e.theme.colors.textMuted};
`,he=o.Ay.p`
  margin: 0.5rem 0 0;
  font-size: 0.78rem;
  color: ${e=>e.theme.colors.textMuted};
`,ue=()=>{var e,t,r;const o=(0,w.d)(),[s,n]=(0,i.useState)(!0),[a,l]=(0,i.useState)(!1),[d,c]=(0,i.useState)(null),[m,h]=(0,i.useState)(X),[u,x]=(0,i.useState)(""),[g,y]=(0,i.useState)(null!==(e=null===(t=X[0])||void 0===t?void 0:t.id)&&void 0!==e?e:null),[b,f]=(0,i.useState)({}),j=(0,i.useCallback)(async()=>{n(!0);try{var e,t,r;const s=(await W()).find(e=>"demo-catalog"===e.slug);var i,o;if(!s)return l(!1),h(X),void y(null!==(i=null===(o=X[0])||void 0===o?void 0:o.id)&&void 0!==i?i:null);const n=await U(s.id);l(!0),c(s.id),h(n.length?n:X),y(null!==(e=null===(t=null!==(r=n[0])&&void 0!==r?r:X[0])||void 0===t?void 0:t.id)&&void 0!==e?e:null)}catch{var s,a;l(!1),h(X),y(null!==(s=null===(a=X[0])||void 0===a?void 0:a.id)&&void 0!==s?s:null)}finally{n(!1)}},[]);(0,i.useEffect)(()=>{j()},[j]);const v=(0,i.useMemo)(()=>{const e=u.trim().toLowerCase();return e?m.filter(t=>t.external_key.toLowerCase().includes(e)||Object.values(t.data).some(t=>t.toLowerCase().includes(e))):m},[m,u]),$=null!==(r=m.find(e=>e.id===g))&&void 0!==r?r:null;(0,i.useEffect)(()=>{$&&f({...$.data})},[$]);const A=(0,i.useMemo)(()=>{const e=new Set(["sku","name","category","status"]);return m.forEach(t=>Object.keys(t.data).forEach(t=>e.add(t))),Array.from(e).filter(e=>"note"!==e).slice(0,5)},[m]);return(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"0.5rem",marginBottom:"0.65rem"},children:[(0,p.jsx)("strong",{style:{fontSize:"0.95rem"},children:"B \xb7 \ub77c\uc774\ube0c \ub370\ubaa8"}),(0,p.jsx)(pe,{children:a?"PostgreSQL":"\uc624\ud504\ub77c\uc778 \ubbf8\ub9ac\ubcf4\uae30"}),s?(0,p.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12},children:[(0,p.jsx)(B.A,{size:14})," \ub3d9\uae30\ud654 \uc911"]}):null]}),(0,p.jsxs)(Z,{children:[(0,p.jsxs)(G,{"aria-label":"\uad00\ub9ac \uba54\ub274",children:[(0,p.jsx)(ee,{type:"button",$active:!0,children:"\uce74\ud0c8\ub85c\uadf8"}),(0,p.jsx)(ee,{type:"button",disabled:!0,title:"Data Hub \ud0ed\uc5d0\uc11c \uc5f0\ub3d9",children:"\uc801\uc7ac \ud5c8\ube0c"}),(0,p.jsx)(ee,{type:"button",disabled:!0,title:"\ub370\ubaa8 \ubc94\uc704 \ubc16",children:"RBAC"})]}),(0,p.jsxs)(te,{children:[(0,p.jsxs)(re,{children:[(0,p.jsx)(ie,{placeholder:"SKU \xb7 \uc774\ub984 \uac80\uc0c9",value:u,onChange:e=>x(e.target.value),"aria-label":"\uce74\ud0c8\ub85c\uadf8 \uac80\uc0c9"}),(0,p.jsxs)(pe,{children:[v.length,"\uac74"]})]}),(0,p.jsx)(oe,{className:"slim-scroll",children:(0,p.jsxs)(se,{children:[(0,p.jsx)("thead",{children:(0,p.jsx)("tr",{children:A.map(e=>(0,p.jsx)("th",{children:e},e))})}),(0,p.jsx)("tbody",{children:0===v.length?(0,p.jsx)("tr",{children:(0,p.jsx)("td",{colSpan:A.length,children:"\uc77c\uce58\ud558\ub294 \ud589\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."})}):v.map(e=>(0,p.jsx)("tr",{"aria-selected":e.id===g,onClick:()=>y(e.id),children:A.map(t=>{var r;return(0,p.jsx)("td",{children:null!==(r=e.data[t])&&void 0!==r?r:"\u2014"},t)})},e.id))})]})})]}),(0,p.jsxs)(ne,{"aria-label":"Inspector",children:[(0,p.jsxs)(ae,{children:[(0,p.jsx)("div",{style:{fontWeight:700,fontSize:"0.88rem"},children:"Inspector"}),(0,p.jsx)(he,{style:{marginTop:4},children:$?$.external_key:"\ud589\uc744 \uc120\ud0dd\ud558\uc138\uc694"})]}),(0,p.jsx)(le,{children:$?(0,p.jsxs)(p.Fragment,{children:[Object.keys(b).map(e=>{var t;return(0,p.jsxs)(de,{children:[e,(0,p.jsx)(ce,{value:null!==(t=b[e])&&void 0!==t?t:"",onChange:t=>f(r=>({...r,[e]:t.target.value}))})]},e)}),(0,p.jsxs)(me,{type:"button",onClick:async()=>{if($){if(!a||!d||$.id.startsWith("local-"))return o.info("\ub370\ubaa8 \ubaa8\ub4dc \u2014 API \uc5f0\uacb0 \ud6c4 \uc800\uc7a5\uc774 \ubc18\uc601\ub429\ub2c8\ub2e4."),void h(e=>e.map(e=>e.id===$.id?{...e,data:{...b}}:e));try{await J(d,$.id,{data:b}),o.success("Inspector\uc5d0\uc11c \uc800\uc7a5\ud588\uc2b5\ub2c8\ub2e4."),await j()}catch(e){o.error(e instanceof Error?e.message:"\uc800\uc7a5 \uc2e4\ud328")}}},children:[(0,p.jsx)(M.A,{size:14})," \uc800\uc7a5"]})]}):(0,p.jsx)("p",{style:{fontSize:"0.85rem",color:"var(--text-muted,#888)"},children:"\uce74\ud0c8\ub85c\uadf8\uc5d0\uc11c \ud589\uc744 \uc120\ud0dd\ud558\uba74 \uc6b0\uce21\uc5d0\uc11c \ud544\ub4dc\ub97c \uc218\uc815\ud569\ub2c8\ub2e4."})})]})]})]})},xe=({template:e})=>"sidebar-catalog"===e?(0,p.jsx)(ue,{}):(0,p.jsx)(O,{});var ge=r(516),ye=r(1360),be=r(797),fe=r(9855);const je=o.Ay.div`
  display: flex;
  min-height: 420px;
  flex-direction: column;
  gap: 1rem;
`,ve=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  align-items: center;
  justify-content: space-between;
`,$e=o.Ay.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  padding: 0.3rem;
  border-radius: 999px;
  border: 1px solid ${e=>e.theme.colors.border};
  background: ${e=>e.theme.colors.surface};
`,we=o.Ay.button`
  border: none;
  border-radius: 999px;
  padding: 0.45rem 0.85rem;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  background: ${e=>e.$active?e.theme.colors.primary:"transparent"};
  color: ${e=>e.$active?"#fff":e.theme.colors.textSecondary};
`,Ae=o.Ay.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: ${e=>e.theme.radii.lg};
  border: 1px solid ${e=>e.theme.colors.border};
  background: ${e=>e.theme.colors.surface};
`,ke=o.Ay.div`
  flex-shrink: 0;
  padding: 0.85rem 1rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
`,Se=o.Ay.div`
  min-height: 0;
  flex: 1;
  overflow-y: auto;
  padding: 0.85rem 1rem;
`,Ce=o.Ay.input`
  border: 1px solid ${e=>e.theme.colors.borderStrong};
  border-radius: 8px;
  padding: 0.45rem 0.65rem;
  font: inherit;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
`,ze=o.Ay.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.borderStrong};
  background: ${e=>e.theme.colors.backgroundElevated};
  color: ${e=>e.theme.colors.text};
  padding: 0.45rem 0.75rem;
  font-size: 0.85rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,_e=o.Ay.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.82rem;

  th,
  td {
    border-bottom: 1px solid ${e=>e.theme.colors.border};
    padding: 0.45rem 0.35rem;
    text-align: left;
    vertical-align: top;
  }

  thead th {
    position: sticky;
    top: 0;
    background: ${e=>e.theme.colors.surface};
  }
`,Ie=o.Ay.div`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.borderStrong};
  background: ${e=>e.theme.colors.primarySoft};
  color: ${e=>e.theme.colors.text};
  font-size: 0.88rem;
`,Ee=({enabledTabs:e,layoutHint:t})=>{var r,o;const s=(0,w.d)(),[n,a]=(0,i.useState)(null!==(r=e[0])&&void 0!==r?r:"browse"),[l,d]=(0,i.useState)([]),[c,m]=(0,i.useState)(""),[h,u]=(0,i.useState)([]),[x,g]=(0,i.useState)(!1),[y,b]=(0,i.useState)(null),[f,j]=(0,i.useState)(""),[v,$]=(0,i.useState)(K()),[A,k]=(0,i.useState)("upsert"),[S,C]=(0,i.useState)(null),[z,_]=(0,i.useState)(""),[I,E]=(0,i.useState)(""),[T,D]=(0,i.useState)(""),[P,H]=(0,i.useState)('{"name":"","value":""}'),[O,M]=(0,i.useState)(null),[N,L]=(0,i.useState)([]),X=(0,i.useMemo)(()=>l.find(e=>e.id===c),[l,c]),Z=(0,i.useCallback)(async()=>{g(!0),b(null);try{const t=await W();if(d(t),!c&&t.length){var e;const r=t.find(e=>"demo-catalog"===e.slug);m(null!==(e=null===r||void 0===r?void 0:r.id)&&void 0!==e?e:t[0].id)}}catch(t){b(t instanceof Error?t.message:"API \uc5f0\uacb0 \uc2e4\ud328")}finally{g(!1)}},[c]),G=(0,i.useCallback)(async()=>{if(c){g(!0),b(null);try{const e=await Y(c);L(e)}catch(e){b(e instanceof Error?e.message:"\uc801\uc7ac \uc774\ub825 \uc870\ud68c \uc2e4\ud328")}finally{g(!1)}}},[c]),ee=(0,i.useCallback)(async()=>{if(c){g(!0),b(null);try{const e=await U(c,f||void 0);u(e)}catch(e){b(e instanceof Error?e.message:"\uc870\ud68c \uc2e4\ud328")}finally{g(!1)}}},[c,f]);(0,i.useEffect)(()=>{Z()},[Z]),(0,i.useEffect)(()=>{"browse"!==n&&"register"!==n||ee(),"audit"===n&&G()},[n,ee,G]),(0,i.useEffect)(()=>{var t;e.includes(n)||a(null!==(t=e[0])&&void 0!==t?t:"browse")},[e,n]);const te=()=>{M(null),D(""),H('{"sku":"","name":"","category":"","status":""}')},re=e=>{M(e.id),D(e.external_key),H(JSON.stringify(e.data,null,2)),a("register")},ie=null!==X&&void 0!==X&&null!==(o=X.column_schema)&&void 0!==o&&o.length?X.column_schema.map(e=>e.key):h[0]?Object.keys(h[0].data):[];return(0,p.jsxs)(je,{children:[t?(0,p.jsx)("div",{style:{marginBottom:"0.75rem"},children:(0,p.jsx)(xe,{template:t})}):null,(0,p.jsxs)(ve,{children:[(0,p.jsx)($e,{role:"tablist","aria-label":"Data Hub",children:e.map(e=>(0,p.jsxs)(we,{type:"button",role:"tab","aria-selected":n===e,$active:n===e,onClick:()=>a(e),children:["schema"===e&&"\uc2a4\ud0a4\ub9c8","import"===e&&"\uac00\uc838\uc624\uae30","browse"===e&&"\uc870\ud68c","register"===e&&"\ub4f1\ub85d\xb7\uc218\uc815","audit"===e&&"\uc801\uc7ac \uc774\ub825"]},e))}),(0,p.jsxs)("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[(0,p.jsx)(Ce,{"aria-label":"Admin API Key",type:"password",value:v,onChange:e=>$(e.target.value),placeholder:"X-Admin-Key",style:{width:180}}),(0,p.jsx)(ze,{type:"button",onClick:()=>{var e;e=v,localStorage.setItem(R,e.trim()),s.success("API \ud0a4 \uc800\uc7a5")},children:"\ud0a4 \uc800\uc7a5"}),(0,p.jsxs)(ze,{type:"button",onClick:Z,children:[(0,p.jsx)(ge.A,{size:14})," \uc0c8\ub85c\uace0\uce68"]})]})]}),y&&(0,p.jsx)(Ie,{role:"alert",children:y}),(0,p.jsxs)(Ae,{children:[(0,p.jsxs)(ke,{children:[(0,p.jsxs)("label",{children:[(0,p.jsx)("span",{className:"sr-only",children:"\uc5d4\ud2f0\ud2f0 \uc120\ud0dd"}),(0,p.jsx)("select",{value:c,onChange:e=>m(e.target.value),style:{marginRight:8},children:l.map(e=>(0,p.jsxs)("option",{value:e.id,children:[e.name," (",e.slug,")"]},e.id))})]}),"browse"===n&&(0,p.jsx)(Ce,{placeholder:"\uac80\uc0c9",value:f,onChange:e=>j(e.target.value),onKeyDown:e=>"Enter"===e.key&&ee()}),x&&(0,p.jsxs)("span",{style:{display:"inline-flex",gap:6,alignItems:"center"},children:[(0,p.jsx)(B.A,{size:14,className:"spin"})," \ubd88\ub7ec\uc624\ub294 \uc911"]})]}),(0,p.jsxs)(Se,{children:["schema"===n&&(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{style:{fontSize:"0.88rem",color:"var(--text-muted, #666)"},children:"\uc11c\ube44\uc2a4 DB\uc5d0 \uc62c\ub9b4 \ub17c\ub9ac \ud14c\uc774\ube14(\uc5d4\ud2f0\ud2f0)\uc744 \ub9cc\ub4ed\ub2c8\ub2e4. CSV/Excel \uccab \uac00\uc838\uc624\uae30 \uc2dc \ud5e4\ub354\ub85c column_schema\uac00 \uc790\ub3d9 \ucc44\uc6cc\uc9d1\ub2c8\ub2e4."}),(0,p.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginTop:12},children:[(0,p.jsx)(Ce,{placeholder:"slug (\uc608: products)",value:z,onChange:e=>_(e.target.value)}),(0,p.jsx)(Ce,{placeholder:"\ud45c\uc2dc \uc774\ub984",value:I,onChange:e=>E(e.target.value)}),(0,p.jsxs)(ze,{type:"button",onClick:async()=>{try{const e=await F({slug:z,name:I,description:"Admin Studio demo entity"});s.success("\ud14c\uc774\ube14(\uc5d4\ud2f0\ud2f0)\uc744 \ub4f1\ub85d\ud588\uc2b5\ub2c8\ub2e4."),_(""),E(""),await Z(),m(e.id)}catch(e){s.error(e instanceof Error?e.message:"\ub4f1\ub85d \uc2e4\ud328")}},children:[(0,p.jsx)(ye.A,{size:14})," \uc5d4\ud2f0\ud2f0 \ucd94\uac00"]})]}),X&&(0,p.jsx)("pre",{style:{marginTop:16,fontSize:12,overflow:"auto",padding:12,borderRadius:8,border:"1px solid var(--border, #ddd)"},children:JSON.stringify(X.column_schema,null,2)})]}),"import"===n&&(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:12},children:["upsert","insert","replace"].map(e=>(0,p.jsx)(ze,{type:"button",onClick:()=>k(e),style:{borderColor:A===e?"#0040ff":void 0},children:e},e))}),(0,p.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:8,alignItems:"center"},children:[(0,p.jsxs)("label",{children:[(0,p.jsxs)(ze,{as:"span",type:"button",children:[(0,p.jsx)(be.A,{size:14})," CSV / Excel \uc120\ud0dd"]}),(0,p.jsx)("input",{type:"file",accept:".csv,.xlsx,.xlsm",hidden:!0,onChange:t=>{var r;const i=null===(r=t.target.files)||void 0===r?void 0:r[0];i&&(async r=>{if(c)try{const t=await Q(c,r,A);C(t),s.success(`\uc801\uc7ac \uc644\ub8cc \xb7 \ucd94\uac00 ${t.inserted} \xb7 \uc218\uc815 ${t.updated}`),await ee(),e.includes("audit")&&await G()}catch(t){s.error(t instanceof Error?t.message:"\uac00\uc838\uc624\uae30 \uc2e4\ud328")}})(i),t.target.value=""}})]}),(0,p.jsx)("a",{href:"/my-portfolio/admin-studio/samples/catalog-seed.csv",download:"catalog-seed.csv",style:{fontSize:"0.85rem"},children:"\uc2dc\ub4dc CSV \ub0b4\ub824\ubc1b\uae30"}),(0,p.jsxs)("span",{style:{fontSize:"0.78rem",opacity:.75},children:["upsert \xb7 \ud0a4 \uceec\ub7fc ",(0,p.jsx)("code",{children:"sku"})," \xb7 \uc5d4\ud2f0\ud2f0"," ",(0,p.jsx)("code",{children:"demo-catalog"})]})]}),S?(0,p.jsxs)("p",{style:{marginTop:12,fontSize:"0.85rem"},role:"status",children:[S.file_name," \u2014 \ucd94\uac00 ",S.inserted," \xb7 \uc218\uc815"," ",S.updated," \xb7 \uac74\ub108\ub700 ",S.skipped,S.errors.length?` \xb7 \uc624\ub958 ${S.errors.length}\uac74`:""]}):null]}),"browse"===n&&(0,p.jsxs)(_e,{children:[(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{children:"key"}),ie.map(e=>(0,p.jsx)("th",{children:e},e)),(0,p.jsx)("th",{"aria-label":"actions"})]})}),(0,p.jsx)("tbody",{children:0===h.length?(0,p.jsx)("tr",{children:(0,p.jsx)("td",{colSpan:ie.length+2,children:"\ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uac00\uc838\uc624\uae30 \ub610\ub294 \ub4f1\ub85d \ud0ed\uc744 \uc0ac\uc6a9\ud558\uc138\uc694."})}):h.map(e=>(0,p.jsxs)("tr",{tabIndex:0,role:"button",style:{cursor:"pointer"},onClick:()=>re(e),onKeyDown:t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),re(e))},children:[(0,p.jsx)("td",{children:e.external_key}),ie.map(t=>{var r;return(0,p.jsx)("td",{children:null!==(r=e.data[t])&&void 0!==r?r:""},t)}),(0,p.jsx)("td",{children:(0,p.jsx)(ze,{type:"button","aria-label":"\uc0ad\uc81c",onClick:async t=>{t.stopPropagation(),await q(c,e.id),O===e.id&&te(),await ee()},children:(0,p.jsx)(fe.A,{size:14})})})]},e.id))})]}),"register"===n&&(0,p.jsxs)("div",{style:{display:"grid",gap:8,maxWidth:480},children:[(0,p.jsx)("p",{style:{fontSize:"0.82rem",margin:0,opacity:.85},children:O?"\uc218\uc815 \ubaa8\ub4dc \u2014 \uc870\ud68c \ud0ed\uc5d0\uc11c \ud589\uc744 \ub20c\ub7ec\ub3c4 \ubd88\ub7ec\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4.":"\uc2e0\uaddc \ub4f1\ub85d \u2014 JSON \ud544\ub4dc\ub294 \uc5d4\ud2f0\ud2f0 column_schema\uc640 \ub9de\ucd94\uc138\uc694."}),(0,p.jsx)(Ce,{placeholder:"external_key",value:T,onChange:e=>D(e.target.value)}),(0,p.jsx)("textarea",{value:P,onChange:e=>H(e.target.value),rows:6,style:{fontFamily:"monospace",fontSize:12},"aria-label":"\ub808\ucf54\ub4dc JSON"}),(0,p.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[(0,p.jsxs)(ze,{type:"button",onClick:async()=>{if(c)try{const e=JSON.parse(P);O?(await J(c,O,{external_key:T,data:e}),s.success("\ub808\ucf54\ub4dc\ub97c \uc218\uc815\ud588\uc2b5\ub2c8\ub2e4.")):(await V(c,{external_key:T,data:e}),s.success("\ub2e8\uac74 \ub4f1\ub85d\ud588\uc2b5\ub2c8\ub2e4.")),te(),await ee()}catch(e){s.error(e instanceof Error?e.message:"\uc800\uc7a5 \uc2e4\ud328")}},children:[(0,p.jsx)(ye.A,{size:14})," ",O?"\uc218\uc815 \uc800\uc7a5":"\ub4f1\ub85d"]}),O?(0,p.jsx)(ze,{type:"button",onClick:te,children:"\uc2e0\uaddc \ub4f1\ub85d"}):null]})]}),"audit"===n&&(0,p.jsx)(p.Fragment,{children:0===N.length?(0,p.jsx)("p",{style:{fontSize:"0.88rem"},role:"status",children:"\uc801\uc7ac \uc774\ub825\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \uc2dc\ub4dc CSV\ub97c \uac00\uc838\uc624\uac70\ub098 \uc0d8\ud50c \ud30c\uc77c\uc744 upsert\ud574 \ubcf4\uc138\uc694."}):(0,p.jsxs)(_e,{children:[(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{children:"\uc77c\uc2dc"}),(0,p.jsx)("th",{children:"\ud30c\uc77c"}),(0,p.jsx)("th",{children:"mode"}),(0,p.jsx)("th",{children:"\ud589"}),(0,p.jsx)("th",{children:"\ucd94\uac00"}),(0,p.jsx)("th",{children:"\uc218\uc815"}),(0,p.jsx)("th",{children:"\uac74\ub108\ub700"}),(0,p.jsx)("th",{children:"\uc624\ub958"})]})}),(0,p.jsx)("tbody",{children:N.map(e=>{var t,r;return(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{children:new Date(e.created_at).toLocaleString("ko-KR")}),(0,p.jsx)("td",{children:e.file_name}),(0,p.jsx)("td",{children:e.mode}),(0,p.jsx)("td",{children:e.row_count}),(0,p.jsx)("td",{children:e.inserted}),(0,p.jsx)("td",{children:e.updated}),(0,p.jsx)("td",{children:e.skipped}),(0,p.jsx)("td",{children:null!==(t=null===(r=e.errors)||void 0===r?void 0:r.length)&&void 0!==t?t:0})]},e.id)})})]})})]})]})]})},Te=[{id:"three-column-ops",label:"A \xb7 3\ubd84\ud560 \uc6b4\uc601 \ucf58\uc194",subtitle:"\uc88c \ud050 \xb7 \uc911 \uc791\uc5c5 \xb7 \uc6b0 \uadfc\uac70\xb7\uc124\uc815 \u2014 HITL\xb7\uac10\uc0ac\ud615 \uc5c5\ubb34\uc5d0 \ub9de\ucd98 \ud328\ud134",recommendedTabs:["browse","import","schema","audit"],knowHow:[{title:"\uc870\ud68c\xb7\ud544\ud130 \uace0\uc815",points:["\uac80\uc0c9\xb7\ud0ed\xb7\ud544\ud130\ub294 shrink-0 \uace0\uc815, \ubaa9\ub85d\ub9cc overflow-y-auto","\ud14c\uc774\ube14 thead sticky\ub294 \ubaa9\ub85d \uc2a4\ud06c\ub864 \uad6c\uc5ed \uc548\uc5d0\uc11c\ub9cc"]},{title:"\ud328\ub110 sticky",points:["\ube14\ub85d \uc0c1\uc138 L2/L3 \uc124\uc815 \ud5e4\ub354\ub294 \uc2a4\ud06c\ub864\uacfc \ubd84\ub9ac","\uc6b0\uce21 \ubc30\uc9c0\ub294 \ub370\uc774\ud130 \ucd9c\ucc98(\uce74\ud0c8\ub85c\uadf8\xb7DB\xb7\uc815\ucc45)\ub9cc \uc9e7\uac8c"]},{title:"\uc6b4\uc601 \uc644\uc131\ub3c4",points:["\ub85c\ub529\xb7\uc5d0\ub7ec\xb7\ube48 \uc0c1\ud0dc\ub97c \uac19\uc740 \ud328\ud134\uc73c\ub85c","overlay\ub294 \ubdf0\ud3ec\ud2b8 \ud558\ub2e8 \uc798\ub9bc \uc5c6\uc774 grow-up"]}]},{id:"sidebar-catalog",label:"B \xb7 \uc0ac\uc774\ub4dc\ubc14 + \uce74\ud0c8\ub85c\uadf8",subtitle:"\uc88c \uba54\ub274 \xb7 \uc911 \uce74\ud0c8\ub85c\uadf8 \xb7 \uc6b0 Inspector \u2014 LLMOps\xb7RBAC \ud655\uc7a5\ud615",recommendedTabs:["browse","import","schema","register"],knowHow:[{title:"RBAC\xb7\uba54\ub274 \uadf8\ub8f9",points:["page-groups \ub2e8\uc704\ub85c \uc0ac\uc774\ub4dc\ubc14 \ubb36\uc74c","\uc5ed\ud560\ubcc4 \ub77c\uc6b0\ud2b8 \uac00\ub4dc + \ube48 \uad8c\ud55c \uc548\ub0b4"]},{title:"\uce74\ud0c8\ub85c\uadf8 CRUD",points:["\ubaa9\ub85d\uc740 \uc11c\ubc84 \ud398\uc774\uc9c0\ub124\uc774\uc158\xb7TanStack Table","\uc6b0\uce21 Inspector\uc5d0\uc11c \uc800\uc7a5\xb7\ubc30\ud3ec \uc561\uc158 \ubd84\ub9ac"]},{title:"\ub300\ub7c9 \uc801\uc7ac",points:["CSV/Excel \ud5e4\ub354 \u2192 column_schema \uc790\ub3d9 \ucd94\ub860","upsert \ud0a4 \uceec\ub7fc \uc9c0\uc815\uc73c\ub85c \uc7ac\ub4f1\ub85d\xb7\uc218\uc815 \ubc18\ubcf5"]}]}],De=[{id:"purpose",title:"1 \xb7 \ubaa9\uc801",question:"\uc774 \uad00\ub9ac\uc790 \ud398\uc774\uc9c0\uac00 \uc8fc\ub85c \ubb34\uc5c7\uc744 \ud558\ub098\uc694?",options:[{id:"ingest",label:"DB \uc801\uc7ac\xb7\uc7ac\ub4f1\ub85d",hint:"CSV/Excel \uc77c\uad04 \ubc18\uc601"},{id:"ops",label:"\uc6b4\uc601\xb7\uac80\uc218(HITL)",hint:"\ud050\xb7\ud655\uc815\xb7\uac10\uc0ac"},{id:"catalog",label:"\uce74\ud0c8\ub85c\uadf8\xb7\uc124\uc815",hint:"CRUD + Inspector"}]},{id:"layout",title:"2 \xb7 \ub808\uc774\uc544\uc6c3",question:"\ud654\uba74 \uace8\uaca9\uc744 \uace0\ub985\ub2c8\ub2e4.",options:[{id:"three-column-ops",label:"A \xb7 3\ubd84\ud560 \uc6b4\uc601",hint:"\ud050\xb7\uc0c1\uc138\xb7\uadfc\uac70"},{id:"sidebar-catalog",label:"B \xb7 \uc0ac\uc774\ub4dc\ubc14 \uce74\ud0c8\ub85c\uadf8",hint:"\uba54\ub274\xb7\ud45c\xb7Inspector"}]},{id:"data",title:"3 \xb7 \ub370\uc774\ud130",question:"\ub370\uc774\ud130\ub294 \uc5b4\ub5bb\uac8c \ub4e4\uc5b4\uc624\ub098\uc694?",options:[{id:"file",label:"CSV / Excel",hint:"\ud0ed\uc73c\ub85c \uac00\uc838\uc624\uae30\xb7upsert"},{id:"form",label:"\ud3fc \uc218\ub3d9 \ub4f1\ub85d",hint:"\ub2e8\uac74 CRUD"},{id:"mixed",label:"\ud63c\ud569",hint:"\uc801\uc7ac + \uc218\ub3d9 \ubcf4\uc815"}]},{id:"tabs",title:"4 \xb7 \ud0ed \uad6c\uc131",question:"Data Hub\uc5d0 \ucf24 \ud0ed\uc744 \uace0\ub985\ub2c8\ub2e4.",multi:!0,options:[{id:"schema",label:"\uc2a4\ud0a4\ub9c8\xb7\ud14c\uc774\ube14",hint:"\uc5d4\ud2f0\ud2f0 \uc815\uc758"},{id:"import",label:"\uac00\uc838\uc624\uae30",hint:"\ubbf8\ub9ac\ubcf4\uae30\xb7\ubaa8\ub4dc"},{id:"browse",label:"\uc870\ud68c",hint:"\uac80\uc0c9\xb7\ubaa9\ub85d"},{id:"register",label:"\ub4f1\ub85d",hint:"\ub2e8\uac74 \ucd94\uac00"},{id:"audit",label:"\uc801\uc7ac \uc774\ub825",hint:"\ubc30\uce58 \uacb0\uacfc"}]}];var Pe=r(4131),He=r(4893);const Oe={tabs:["schema","import","browse"]},Be=(0,Pe.v)()((0,He.Zr)((e,t)=>({stepIndex:0,answers:Oe,setAnswer:(t,r)=>e(e=>({answers:{...e.answers,[t]:r}})),toggleTab:t=>e(e=>{const r=new Set(e.answers.tabs);return r.has(t)?r.delete(t):r.add(t),{answers:{...e.answers,tabs:Array.from(r)}}}),next:()=>e(e=>({stepIndex:Math.min(e.stepIndex+1,3)})),prev:()=>e(e=>({stepIndex:Math.max(e.stepIndex-1,0)})),reset:()=>e({stepIndex:0,answers:Oe}),recommendedTemplate:()=>{return(e=t().answers).layout?e.layout:"catalog"===e.purpose?"sidebar-catalog":"three-column-ops";var e}}),{name:"admin-wizard-v1"})),Me=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1.75rem;
`,Ne=o.Ay.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.radii.md};
  padding: 0.55rem 1rem;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  background: ${e=>e.$active?e.theme.colors.primary:e.theme.colors.surface};
  color: ${e=>e.$active?"#fff":e.theme.colors.text};
`,Re=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.25rem;
`,Ke=o.Ay.div`
  margin-top: 1.75rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${e=>e.theme.colors.border};
`,Le=o.Ay.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 1.5rem;
  border-radius: ${e=>e.theme.radii.lg};
  border: 1px solid ${e=>e.theme.colors.border};
  background: ${e=>e.theme.colors.surface};
  box-shadow: ${e=>e.theme.shadows.card};
`,We=o.Ay.button`
  display: block;
  width: 100%;
  text-align: left;
  margin-top: 0.5rem;
  padding: 0.75rem 0.85rem;
  border-radius: 10px;
  border: 1px solid
    ${e=>e.$selected?e.theme.colors.primary:e.theme.colors.border};
  background: ${e=>e.$selected?e.theme.colors.primarySoft:e.theme.colors.backgroundElevated};
  cursor: pointer;
  font: inherit;
  color: ${e=>e.theme.colors.text};
`,Fe=o.Ay.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.25rem;
  gap: 0.75rem;
`,Ue=o.Ay.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-left: 0.5rem;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 600;
  border: 1px solid ${e=>e.theme.colors.border};
  background: ${e=>null===e.$ok?e.theme.colors.surfaceMuted:e.$ok?e.theme.colors.primarySoft:e.theme.colors.surface};
  color: ${e=>!1===e.$ok?e.theme.colors.danger:e.theme.colors.textSecondary};
`,Ve=()=>{const[e,t]=(0,i.useState)(null),[r,o]=(0,i.useState)("templates"),[h,u]=(0,i.useState)("three-column-ops"),x=Be(e=>e.stepIndex),g=Be(e=>e.answers),y=Be(e=>e.setAnswer),b=Be(e=>e.toggleTab),j=Be(e=>e.next),v=Be(e=>e.prev),$=Be(e=>e.recommendedTemplate),w=De[x],A=$();(0,i.useEffect)(()=>{(async function(){const e=N.replace("/api/v1","/api/health");return(await fetch(e)).json()})().then(e=>t(Boolean(e.ok))).catch(()=>t(!1))},[r]);const k=(0,i.useMemo)(()=>g.tabs.length?g.tabs:["schema","import","browse"],[g.tabs]);return(0,p.jsxs)(d.A,{id:"admin-studio",children:[(0,p.jsx)(m.A,{here:"Admin Studio"}),(0,p.jsx)(c.A,{title:"\uad00\ub9ac\uc790 \ud398\uc774\uc9c0 \uc2e4\ud5d8",subtitle:(0,p.jsxs)(p.Fragment,{children:["\uac1c\uc778 \ud3ec\ud2b8\ud3f4\ub9ac\uc624 \ub370\ubaa8\uc785\ub2c8\ub2e4. A/B \ud15c\ud50c\ub9bf, CSV/Excel Data Hub, FastAPI, Docker.",(0,p.jsxs)(Ue,{$ok:e,role:"status",children:["API ",null===e?"\ud655\uc778 \uc911":e?":8000 OK":"\uc624\ud504\ub77c\uc778"]})]})}),(0,p.jsxs)(Me,{role:"tablist","aria-label":"Admin Studio modes",children:[(0,p.jsxs)(Ne,{type:"button",role:"tab","aria-selected":"templates"===r,$active:"templates"===r,onClick:()=>o("templates"),children:[(0,p.jsx)(n.A,{size:16})," \ud15c\ud50c\ub9bf A \xb7 B"]}),(0,p.jsxs)(Ne,{type:"button",role:"tab","aria-selected":"wizard"===r,$active:"wizard"===r,onClick:()=>o("wizard"),children:[(0,p.jsx)(a.A,{size:16})," \uad6c\uc131 \ud30c\uc774\ud504\ub77c\uc778"]}),(0,p.jsxs)(Ne,{type:"button",role:"tab","aria-selected":"data"===r,$active:"data"===r,onClick:()=>o("data"),children:[(0,p.jsx)(l.A,{size:16})," Data Hub"]})]}),"templates"===r&&(0,p.jsxs)(s.P.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:[(0,p.jsx)(Re,{children:Te.map(e=>(0,p.jsx)("button",{type:"button",style:{all:"unset",cursor:"pointer",display:"block"},onClick:()=>u(e.id),children:(0,p.jsx)(f,{template:e,active:h===e.id})},e.id))}),(0,p.jsx)(Ke,{children:(0,p.jsx)(xe,{template:h})})]}),"wizard"===r&&w&&(0,p.jsxs)(Le,{children:[(0,p.jsx)("p",{style:{margin:0,fontWeight:700},children:w.title}),(0,p.jsx)("p",{style:{margin:"0.35rem 0 0",color:"var(--text-muted,#666)"},children:w.question}),"multi"in w&&w.multi?w.options.map(e=>(0,p.jsxs)(We,{type:"button",$selected:g.tabs.includes(e.id),onClick:()=>b(e.id),children:[(0,p.jsx)("strong",{children:e.label}),(0,p.jsx)("div",{style:{fontSize:"0.82rem",opacity:.85},children:e.hint})]},e.id)):w.options.map(e=>{const t="purpose"===w.id?"purpose":"layout"===w.id?"layout":"data",r=g[t]===e.id;return(0,p.jsxs)(We,{type:"button",$selected:r,onClick:()=>y(t,e.id),children:[(0,p.jsx)("strong",{children:e.label}),(0,p.jsx)("div",{style:{fontSize:"0.82rem",opacity:.85},children:e.hint})]},e.id)}),(0,p.jsxs)(Fe,{children:[(0,p.jsx)(Ne,{type:"button",$active:!1,onClick:v,disabled:0===x,children:"\uc774\uc804"}),x<De.length-1?(0,p.jsx)(Ne,{type:"button",$active:!0,onClick:j,children:"\ub2e4\uc74c"}):(0,p.jsxs)(Ne,{type:"button",$active:!0,onClick:()=>{u(A),o("data")},children:["sidebar-catalog"===A?"B":"A"," + Data Hub \uc801\uc6a9"]})]}),x===De.length-1&&(0,p.jsxs)("p",{style:{marginTop:"1rem",fontSize:"0.88rem"},children:["\ucd94\ucc9c \ud15c\ud50c\ub9bf:"," ",(0,p.jsx)("strong",{children:"sidebar-catalog"===A?"B \xb7 \uc0ac\uc774\ub4dc\ubc14 \uce74\ud0c8\ub85c\uadf8":"A \xb7 3\ubd84\ud560 \uc6b4\uc601"})," ","\xb7 \ud65c\uc131 \ud0ed: ",k.join(", ")]})]}),"data"===r&&(0,p.jsxs)(s.P.div,{initial:{opacity:0},animate:{opacity:1},children:[(0,p.jsxs)("p",{style:{textAlign:"center",fontSize:"0.88rem",marginBottom:"1rem"},children:["\uc120\ud0dd template:"," ",(0,p.jsx)("strong",{children:"sidebar-catalog"===h?"B":"A"})," ","\u2014 Docker: ",(0,p.jsx)("code",{children:"docker compose up -d --build"})," \ud6c4 API"," ",(0,p.jsx)("code",{children:":8000"})]}),(0,p.jsx)(Ee,{enabledTabs:k,layoutHint:h})]})]})}},7511:(e,t,r)=>{r.d(t,{A:()=>h});var i=r(5043),o=r(5464),s=r(111),n=r(579);const a=o.i7`
  0%, 100% { transform: translateY(0); opacity: 0.35; }
  50%      { transform: translateY(-14px); opacity: 0.85; }
`,l=o.Ay.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
`,d=o.Ay.span`
  position: absolute;
  left: ${e=>e.$left};
  top: ${e=>e.$top};
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${e=>e.theme.colors.primary};
  opacity: 0.5;
  ${e=>e.$reduced?o.AH`
          opacity: 0.45;
        `:o.AH`
          animation: ${a} ${e.$duration} ease-in-out infinite;
          animation-delay: ${e.$delay};
        `}
`,c=({count:e,seed:t=1})=>{var r;const o=null!==(r=(0,s.I)())&&void 0!==r&&r,a=(0,i.useMemo)(()=>Array.from({length:e},(e,r)=>({left:(17*r+3*t)%86+6+"%",top:(23*r+7*t)%80+8+"%",duration:3.2+r%4*.35+"s",delay:41*r%12*.14+"s"})),[e,t]);return(0,n.jsx)(l,{"aria-hidden":!0,children:a.map((e,t)=>(0,n.jsx)(d,{$left:e.left,$top:e.top,$delay:e.delay,$duration:e.duration,$reduced:o},t))})},m=o.Ay.section`
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
`,p=o.Ay.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  z-index: 1;
`,h=({id:e,children:t,dotCount:r=0,dotSeed:i=1,fullHeight:o=!1,glow:s=!1,className:a})=>(0,n.jsxs)(m,{id:e,className:a,$fullHeight:o,$glow:s,children:[r>0?(0,n.jsx)(c,{count:r,seed:i}):null,(0,n.jsx)(p,{children:t})]})},8849:(e,t,r)=>{r.d(t,{A:()=>l});r(5043);var i=r(3721),o=r(5464),s=r(579);const n=o.Ay.button`
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
`,a=o.Ay.span`
  color: ${e=>e.theme.colors.text};
`,l=({here:e})=>{const t=(0,i.Zp)();return(0,s.jsxs)(n,{type:"button",onClick:()=>t("/lab"),children:["\uc2e4\ud5d8 ",(0,s.jsx)("span",{"aria-hidden":!0,children:"/"})," ",(0,s.jsx)(a,{children:e})]})}}}]);
//# sourceMappingURL=315.a6488c48.chunk.js.map