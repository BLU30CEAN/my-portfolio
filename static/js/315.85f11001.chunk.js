"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[315],{69:(e,t,r)=>{r.d(t,{A:()=>c});r(5043);var i=r(5464),o=r(1280),s=r(579);const n=i.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 3rem;
  gap: 0.55rem;
`,a=(0,i.Ay)(o.P.span)`
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${e=>e.theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: ${e=>e.theme.colors.primarySoft};
  border: 1px solid ${e=>e.theme.colors.borderStrong};
`,l=(0,i.Ay)(o.P.h2)`
  font-size: ${e=>e.theme.typography.fluidH2};
  font-weight: 800;
  letter-spacing: -0.03em;
  background: ${e=>e.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
`,d=(0,i.Ay)(o.P.p)`
  margin: 0;
  max-width: 60ch;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: ${e=>e.theme.typography.fluidBody};
  line-height: 1.7;
`,c=e=>{let{eyebrow:t,title:r,subtitle:i,align:o="center"}=e;return(0,s.jsxs)(n,{style:"start"===o?{alignItems:"flex-start",textAlign:"left"}:void 0,children:[t&&(0,s.jsx)(a,{initial:{opacity:0,y:8},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-20%"},transition:{duration:.5},children:t}),(0,s.jsx)(l,{initial:{opacity:0,y:14},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-20%"},transition:{duration:.55,delay:.05},children:r}),i&&(0,s.jsx)(d,{initial:{opacity:0,y:14},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-20%"},transition:{duration:.55,delay:.12},children:i})]})}},5315:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Ue});var i=r(5043),o=r(5464),s=r(1280),n=r(5258),a=r(9236),l=r(3005),d=r(7511),c=r(69),m=r(579);const p=o.Ay.div`
  display: grid;
  gap: 6px;
  min-height: 220px;
  padding: 10px;
  border-radius: ${e=>e.theme.radii.md};
  background: ${e=>e.theme.colors.backgroundElevated};
  border: 1px solid ${e=>e.theme.colors.border};
  grid-template-columns: ${e=>"three-column-ops"===e.$variant?"0.9fr 1.4fr 1fr":"0.75fr 1.5fr 1fr"};
`,h=o.Ay.div`
  border-radius: 8px;
  border: 1px dashed
    ${e=>"accent"===e.$tone?e.theme.colors.primary:e.theme.colors.borderStrong};
  background: ${e=>"accent"===e.$tone?e.theme.colors.primarySoft:e.theme.colors.surface};
  min-height: 180px;
  padding: 8px;
  font-size: 0.72rem;
  color: ${e=>e.theme.colors.textMuted};
`,u=o.Ay.ul`
  margin: 0.75rem 0 0;
  padding-left: 1.1rem;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 0.86rem;
  line-height: 1.55;
`,x=o.Ay.article`
  padding: 1.25rem;
  border-radius: ${e=>e.theme.radii.lg};
  border: 1px solid ${e=>e.theme.colors.border};
  background: ${e=>e.theme.colors.surface};
  box-shadow: ${e=>e.theme.shadows.card};
`,g=o.Ay.h3`
  margin: 0 0 0.35rem;
  font-size: 1.05rem;
  color: ${e=>e.theme.colors.text};
`,y=o.Ay.p`
  margin: 0 0 0.85rem;
  font-size: 0.88rem;
  color: ${e=>e.theme.colors.textMuted};
`,b=e=>{let{template:t,active:r}=e;const i=t.id;return(0,m.jsxs)(x,{style:{outline:r?"2px solid var(--bc-cobalt, #0040ff)":void 0},children:[(0,m.jsx)(g,{children:t.label}),(0,m.jsx)(y,{children:t.subtitle}),(0,m.jsx)(p,{$variant:i,"aria-hidden":!0,children:"three-column-ops"===i?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(h,{children:"\ud050 \xb7 \ud544\ud130 \uace0\uc815"}),(0,m.jsx)(h,{$tone:"accent",children:"\uc0c1\uc138 \xb7 AI \uacb0\uacfc \xb7 HITL"}),(0,m.jsx)(h,{children:"\uadfc\uac70 \xb7 \uc124\uc815 \xb7 \uc561\uc158"})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(h,{children:"RBAC \uba54\ub274"}),(0,m.jsx)(h,{$tone:"accent",children:"\uce74\ud0c8\ub85c\uadf8 \xb7 \ud14c\uc774\ube14"}),(0,m.jsx)(h,{children:"Inspector \xb7 \ubc30\ud3ec"})]})}),t.knowHow.map(e=>(0,m.jsxs)("div",{children:[(0,m.jsx)(y,{style:{marginTop:"1rem",marginBottom:"0.35rem"},children:(0,m.jsx)("strong",{style:{color:"inherit"},children:e.title})}),(0,m.jsx)(u,{children:e.points.map(e=>(0,m.jsx)("li",{children:e},e))})]},e.title))]})};var f=r(6210),v=r(614),j=r(9340),$=r(1221);const w=[{id:"Q-1042",title:"\ubbfc\uc6d0 \uc694\uc57d \uac80\uc218 \u2014 \uc8fc\ucc28 \ub2e8\uc18d \ubb38\uc758",status:"pending",priority:"\u4e2d",aiDraft:"\ud574\ub2f9 \uad6c\uc5ed\uc740 \uc2dc\uac04\uc81c \uc8fc\ucc28 \uad6c\uc5ed\uc774\uba70, \ud45c\uc9c0\ud310 \uae30\uc900 \ud1a0\xb7\uc77c 09\u201318\uc2dc \uc720\ub8cc\uc785\ub2c8\ub2e4. \ub2e8\uc18d \uc2dc\uac04 \uc678 \uc8fc\ucc28\ub294 \uacfc\ud0dc\ub8cc \ub300\uc0c1\uc774 \uc544\ub2d0 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",confidence:.82,sources:[{label:"\uad50\ud1b5\ubc95\uaddc FAQ v3.2",revised:"2025-11-01"},{label:"\uc9c0\uc5ed \uc8fc\ucc28 \uc548\ub0b4",revised:"2026-01-08"}]},{id:"Q-1041",title:"AI \ub2f5\ubcc0 \u2014 \ubd84\uc2e4\ubb3c \uc811\uc218 \uacbd\ub85c",status:"review",priority:"\u4f4e",aiDraft:"\ubd84\uc2e4\ubb3c \uc2e0\uace0\ub294 \uc628\ub77c\uc778 \ud3ec\ud138 \ub610\ub294 \uac00\uae4c\uc6b4 \ud30c\ucd9c\uc18c \ubc29\ubb38\uc73c\ub85c \uc811\uc218\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc2b5\ub4dd\ubb3c\uacfc \ub9e4\uce6d \uc2dc SMS\ub85c \uc548\ub0b4\ub429\ub2c8\ub2e4.",confidence:.91,sources:[{label:"\ubbfc\uc6d0 \ub9e4\ub274\uc5bc \xa74.2",revised:"2025-09-20"}]},{id:"Q-1039",title:"\uac00\ub4dc\ub808\uc77c \ub9c8\uc2a4\ud0b9 \uac80\ud1a0",status:"done",priority:"\u9ad8",aiDraft:"[\ub9c8\uc2a4\ud0b9\ub428] \uc5f0\ub77d\ucc98 ***-****-1234 \ud3ec\ud568 \u2014 \uc804\uc1a1 \ubcf4\ub958",confidence:.44,sources:[{label:"PII \uc815\ucc45",revised:"2026-02-01"}]}],k=o.Ay.div`
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
`,A=o.Ay.div`
  flex-shrink: 0;
  padding: 0.65rem 0.75rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  font-size: 0.78rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.textSecondary};
`,C=o.Ay.div`
  flex-shrink: 0;
  padding: 0.5rem 0.65rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
`,z=o.Ay.div`
  min-height: 0;
  flex: 1;
  overflow-y: auto;
  padding: 0.35rem;
`,_=o.Ay.button`
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 999px;
  padding: 0.25rem 0.55rem;
  font-size: 0.72rem;
  margin-right: 0.35rem;
  cursor: pointer;
  background: ${e=>e.$active?e.theme.colors.primarySoft:"transparent"};
  color: ${e=>e.theme.colors.textSecondary};
`,I=o.Ay.button`
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
`,E=o.Ay.div`
  margin: 0.75rem;
  padding: 0.75rem;
  border-radius: 10px;
  border: 1px dashed ${e=>e.theme.colors.borderStrong};
  background: ${e=>e.theme.colors.backgroundElevated};
  font-size: 0.85rem;
  line-height: 1.55;
`,T=o.Ay.div`
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.65rem 0.75rem;
  border-top: 1px solid ${e=>e.theme.colors.border};
`,D=o.Ay.button`
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
`,P=o.Ay.div`
  padding: 0.5rem 0.65rem;
  margin-bottom: 0.35rem;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.border};
  font-size: 0.78rem;
`,H=()=>{var e;const t=(0,$.d)(),[r,o]=(0,i.useState)(w),[s,n]=(0,i.useState)(w[0].id),[a,l]=(0,i.useState)("all"),d=(0,i.useMemo)(()=>"all"===a?r:r.filter(e=>e.status===a),[r,a]),c=null!==(e=r.find(e=>e.id===s))&&void 0!==e?e:r[0],p=e=>{o(t=>t.map(t=>t.id===s?{...t,status:e}:t))};return(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{style:{marginBottom:"0.65rem",fontSize:"0.95rem",fontWeight:700},children:["A \xb7 \ub77c\uc774\ube0c \ub370\ubaa8 ",(0,m.jsx)("span",{style:{fontWeight:500,fontSize:"0.8rem"},children:"HITL 3\ubd84\ud560"})]}),(0,m.jsxs)(k,{children:[(0,m.jsxs)(S,{"aria-label":"\uac80\uc218 \ud050",children:[(0,m.jsx)(A,{children:"\ud050"}),(0,m.jsx)(C,{role:"group","aria-label":"\uc0c1\ud0dc \ud544\ud130",children:[["all","\uc804\uccb4"],["pending","\ub300\uae30"],["review","\uac80\uc218"],["done","\uc644\ub8cc"]].map(e=>{let[t,r]=e;return(0,m.jsx)(_,{type:"button",$active:a===t,onClick:()=>l(t),children:r},t)})}),(0,m.jsx)(z,{className:"slim-scroll",children:d.map(e=>(0,m.jsxs)(I,{type:"button",$active:e.id===s,onClick:()=>n(e.id),children:[(0,m.jsx)("div",{style:{fontSize:"0.72rem",opacity:.7},children:e.id}),(0,m.jsx)("div",{style:{fontSize:"0.82rem",fontWeight:600},children:e.title}),(0,m.jsxs)("div",{style:{fontSize:"0.72rem",marginTop:4},children:[e.priority," \xb7 ",e.status]})]},e.id))})]}),(0,m.jsxs)(S,{"aria-label":"AI \uacb0\uacfc \ubc0f \ud655\uc815",children:[(0,m.jsx)(A,{children:"AI 1\ucc28 \uacb0\uacfc \xb7 \ub2f4\ub2f9\uc790 \ud655\uc815"}),(0,m.jsx)(z,{className:"slim-scroll",children:(0,m.jsxs)(E,{children:[(0,m.jsxs)("div",{style:{fontSize:"0.72rem",marginBottom:6,opacity:.75},children:["\uc2e0\ub8b0\ub3c4 ",(100*c.confidence).toFixed(0),"%",c.confidence<.7?" \u2014 \uc720\ubcf4 \uad8c\uace0":""]}),c.aiDraft]})}),(0,m.jsxs)(T,{children:[(0,m.jsxs)(D,{type:"button",$variant:"primary",onClick:()=>{p("done"),t.success("\ub2f4\ub2f9\uc790 \ud655\uc815")},children:[(0,m.jsx)(f.A,{size:14})," \ud655\uc815"]}),(0,m.jsx)(D,{type:"button",onClick:()=>t.info("\uc218\uc815 \ubaa8\ub4dc \u2014 \ub370\ubaa8"),children:"\uc218\uc815"}),(0,m.jsxs)(D,{type:"button",$variant:"danger",onClick:()=>{p("review"),t.info("\uae30\uac01 \u2014 \uc7ac\uac80\ud1a0 \ud050")},children:[(0,m.jsx)(v.A,{size:14})," \uae30\uac01"]}),(0,m.jsxs)(D,{type:"button",$variant:"muted",onClick:()=>{p("pending"),t.info("\ud310\ub2e8 \uc720\ubcf4")},children:[(0,m.jsx)(j.A,{size:14})," \uc720\ubcf4"]})]})]}),(0,m.jsxs)(S,{"aria-label":"\uadfc\uac70 \ubc0f \uc124\uc815",children:[(0,m.jsx)(A,{children:"\uadfc\uac70 \xb7 \uc124\uc815"}),(0,m.jsxs)(z,{className:"slim-scroll",style:{padding:"0.65rem"},children:[c.sources.map(e=>(0,m.jsxs)(P,{children:[(0,m.jsx)("strong",{children:e.label}),(0,m.jsxs)("div",{style:{opacity:.75,marginTop:4},children:["\uac1c\uc815 ",e.revised]})]},e.label)),(0,m.jsxs)(P,{children:[(0,m.jsx)("strong",{children:"\ud328\ub110 \ubc30\uc9c0"}),(0,m.jsx)("div",{style:{opacity:.75,marginTop:4},children:"\uc815\ucc45 \xb7 \uac10\uc0ac"})]})]})]})]})]})};var O=r(2024),B=r(8693);const N={NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_ADMIN_API_URL||"http://localhost:8000/api/v1",R="portfolio-admin-api-key";function K(){return localStorage.getItem(R)||{NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_ADMIN_API_KEY||"dev-admin-key-change-me"}async function L(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const i={...t.headers};r&&(i["X-Admin-Key"]=K()),t.body instanceof FormData||(i["Content-Type"]=i["Content-Type"]||"application/json");const o=await fetch(`${N}${e}`,{...t,headers:i}),s=await o.json().catch(()=>({}));if(!o.ok)throw new Error(s.detail||s.message||`HTTP ${o.status}`);return s}const M=()=>L("/entities"),W=e=>L("/entities",{method:"POST",body:JSON.stringify(e)},!0),F=(e,t)=>L(`/entities/${e}/records${t?`?q=${encodeURIComponent(t)}`:""}`),U=(e,t)=>L(`/entities/${e}/records`,{method:"POST",body:JSON.stringify(t)},!0),V=(e,t,r)=>L(`/entities/${e}/records/${t}`,{method:"PATCH",body:JSON.stringify(r)},!0),J=(e,t)=>L(`/entities/${e}/records/${t}`,{method:"DELETE"},!0),q=(e,t,r,i)=>{const o=new FormData;return o.append("file",t),o.append("mode",r),i&&o.append("key_column",i),L(`/entities/${e}/import`,{method:"POST",body:o},!0)},Q=e=>L(`/entities/${e}/imports`),Y=[{id:"local-1",entity_id:"local",external_key:"SKU-001",data:{sku:"SKU-001",name:"\uc0d8\ud50c \uc0c1\ud488 A",category:"\uc804\uc790",status:"active",note:"API \uc624\ud504\ub77c\uc778 \ubbf8\ub9ac\ubcf4\uae30"},created_at:"",updated_at:""},{id:"local-2",entity_id:"local",external_key:"SKU-002",data:{sku:"SKU-002",name:"\uc0d8\ud50c \uc0c1\ud488 B",category:"\uc0dd\ud65c",status:"active",note:""},created_at:"",updated_at:""}],X=o.Ay.div`
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
`,Z=o.Ay.nav`
  flex-shrink: 0;
  border-right: 1px solid ${e=>e.theme.colors.border};
  background: ${e=>e.theme.colors.backgroundElevated};
  padding: 0.75rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,G=o.Ay.button`
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
`,ee=o.Ay.div`
  display: flex;
  min-height: 0;
  flex-direction: column;
  overflow: hidden;
`,te=o.Ay.div`
  flex-shrink: 0;
  padding: 0.65rem 0.75rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
`,re=o.Ay.input`
  flex: 1;
  min-width: 140px;
  border: 1px solid ${e=>e.theme.colors.borderStrong};
  border-radius: 8px;
  padding: 0.4rem 0.6rem;
  font: inherit;
  font-size: 0.85rem;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
`,ie=o.Ay.div`
  min-height: 0;
  flex: 1;
  overflow-y: auto;
`,oe=o.Ay.table`
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
`,se=o.Ay.aside`
  border-left: 1px solid ${e=>e.theme.colors.border};
  display: flex;
  flex-direction: column;
  min-height: 0;
  background: ${e=>e.theme.colors.backgroundElevated};
`,ne=o.Ay.div`
  flex-shrink: 0;
  padding: 0.75rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
`,ae=o.Ay.div`
  flex: 1;
  overflow-y: auto;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`,le=o.Ay.label`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.72rem;
  color: ${e=>e.theme.colors.textMuted};
`,de=o.Ay.input`
  font-size: 0.85rem;
  padding: 0.4rem 0.55rem;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.borderStrong};
  background: ${e=>e.theme.colors.surface};
  color: ${e=>e.theme.colors.text};
`,ce=o.Ay.button`
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
`,me=o.Ay.span`
  font-family: ui-monospace, monospace;
  font-size: 0.65rem;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  border: 1px solid ${e=>e.theme.colors.border};
  color: ${e=>e.theme.colors.textMuted};
`,pe=o.Ay.p`
  margin: 0.5rem 0 0;
  font-size: 0.78rem;
  color: ${e=>e.theme.colors.textMuted};
`,he=()=>{var e,t,r;const o=(0,$.d)(),[s,n]=(0,i.useState)(!0),[a,l]=(0,i.useState)(!1),[d,c]=(0,i.useState)(null),[p,h]=(0,i.useState)(Y),[u,x]=(0,i.useState)(""),[g,y]=(0,i.useState)(null!==(e=null===(t=Y[0])||void 0===t?void 0:t.id)&&void 0!==e?e:null),[b,f]=(0,i.useState)({}),v=(0,i.useCallback)(async()=>{n(!0);try{var e,t,r;const s=(await M()).find(e=>"demo-catalog"===e.slug);var i,o;if(!s)return l(!1),h(Y),void y(null!==(i=null===(o=Y[0])||void 0===o?void 0:o.id)&&void 0!==i?i:null);const n=await F(s.id);l(!0),c(s.id),h(n.length?n:Y),y(null!==(e=null===(t=null!==(r=n[0])&&void 0!==r?r:Y[0])||void 0===t?void 0:t.id)&&void 0!==e?e:null)}catch{var s,a;l(!1),h(Y),y(null!==(s=null===(a=Y[0])||void 0===a?void 0:a.id)&&void 0!==s?s:null)}finally{n(!1)}},[]);(0,i.useEffect)(()=>{v()},[v]);const j=(0,i.useMemo)(()=>{const e=u.trim().toLowerCase();return e?p.filter(t=>t.external_key.toLowerCase().includes(e)||Object.values(t.data).some(t=>t.toLowerCase().includes(e))):p},[p,u]),w=null!==(r=p.find(e=>e.id===g))&&void 0!==r?r:null;(0,i.useEffect)(()=>{w&&f({...w.data})},[w]);const k=(0,i.useMemo)(()=>{const e=new Set(["sku","name","category","status"]);return p.forEach(t=>Object.keys(t.data).forEach(t=>e.add(t))),[...e].filter(e=>"note"!==e).slice(0,5)},[p]);return(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"0.5rem",marginBottom:"0.65rem"},children:[(0,m.jsx)("strong",{style:{fontSize:"0.95rem"},children:"B \xb7 \ub77c\uc774\ube0c \ub370\ubaa8"}),(0,m.jsx)(me,{children:a?"PostgreSQL":"\uc624\ud504\ub77c\uc778 \ubbf8\ub9ac\ubcf4\uae30"}),s?(0,m.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12},children:[(0,m.jsx)(O.A,{size:14})," \ub3d9\uae30\ud654 \uc911"]}):null]}),(0,m.jsxs)(X,{children:[(0,m.jsxs)(Z,{"aria-label":"\uad00\ub9ac \uba54\ub274",children:[(0,m.jsx)(G,{type:"button",$active:!0,children:"\uce74\ud0c8\ub85c\uadf8"}),(0,m.jsx)(G,{type:"button",disabled:!0,title:"Data Hub \ud0ed\uc5d0\uc11c \uc5f0\ub3d9",children:"\uc801\uc7ac \ud5c8\ube0c"}),(0,m.jsx)(G,{type:"button",disabled:!0,title:"\ub370\ubaa8 \ubc94\uc704 \ubc16",children:"RBAC"})]}),(0,m.jsxs)(ee,{children:[(0,m.jsxs)(te,{children:[(0,m.jsx)(re,{placeholder:"SKU \xb7 \uc774\ub984 \uac80\uc0c9",value:u,onChange:e=>x(e.target.value),"aria-label":"\uce74\ud0c8\ub85c\uadf8 \uac80\uc0c9"}),(0,m.jsxs)(me,{children:[j.length,"\uac74"]})]}),(0,m.jsx)(ie,{className:"slim-scroll",children:(0,m.jsxs)(oe,{children:[(0,m.jsx)("thead",{children:(0,m.jsx)("tr",{children:k.map(e=>(0,m.jsx)("th",{children:e},e))})}),(0,m.jsx)("tbody",{children:0===j.length?(0,m.jsx)("tr",{children:(0,m.jsx)("td",{colSpan:k.length,children:"\uc77c\uce58\ud558\ub294 \ud589\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."})}):j.map(e=>(0,m.jsx)("tr",{"aria-selected":e.id===g,onClick:()=>y(e.id),children:k.map(t=>{var r;return(0,m.jsx)("td",{children:null!==(r=e.data[t])&&void 0!==r?r:"\u2014"},t)})},e.id))})]})})]}),(0,m.jsxs)(se,{"aria-label":"Inspector",children:[(0,m.jsxs)(ne,{children:[(0,m.jsx)("div",{style:{fontWeight:700,fontSize:"0.88rem"},children:"Inspector"}),(0,m.jsx)(pe,{style:{marginTop:4},children:w?w.external_key:"\ud589\uc744 \uc120\ud0dd\ud558\uc138\uc694"})]}),(0,m.jsx)(ae,{children:w?(0,m.jsxs)(m.Fragment,{children:[Object.keys(b).map(e=>{var t;return(0,m.jsxs)(le,{children:[e,(0,m.jsx)(de,{value:null!==(t=b[e])&&void 0!==t?t:"",onChange:t=>f(r=>({...r,[e]:t.target.value}))})]},e)}),(0,m.jsxs)(ce,{type:"button",onClick:async()=>{if(w){if(!a||!d||w.id.startsWith("local-"))return o.info("\ub370\ubaa8 \ubaa8\ub4dc \u2014 API \uc5f0\uacb0 \ud6c4 \uc800\uc7a5\uc774 \ubc18\uc601\ub429\ub2c8\ub2e4."),void h(e=>e.map(e=>e.id===w.id?{...e,data:{...b}}:e));try{await V(d,w.id,{data:b}),o.success("Inspector\uc5d0\uc11c \uc800\uc7a5\ud588\uc2b5\ub2c8\ub2e4."),await v()}catch(e){o.error(e instanceof Error?e.message:"\uc800\uc7a5 \uc2e4\ud328")}}},children:[(0,m.jsx)(B.A,{size:14})," \uc800\uc7a5"]})]}):(0,m.jsx)("p",{style:{fontSize:"0.85rem",color:"var(--text-muted,#888)"},children:"\uce74\ud0c8\ub85c\uadf8\uc5d0\uc11c \ud589\uc744 \uc120\ud0dd\ud558\uba74 \uc6b0\uce21\uc5d0\uc11c \ud544\ub4dc\ub97c \uc218\uc815\ud569\ub2c8\ub2e4."})})]})]})]})},ue=e=>{let{template:t}=e;return"sidebar-catalog"===t?(0,m.jsx)(he,{}):(0,m.jsx)(H,{})};var xe=r(516),ge=r(1360),ye=r(797),be=r(9855);const fe=o.Ay.div`
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
`,je=o.Ay.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  padding: 0.3rem;
  border-radius: 999px;
  border: 1px solid ${e=>e.theme.colors.border};
  background: ${e=>e.theme.colors.surface};
`,$e=o.Ay.button`
  border: none;
  border-radius: 999px;
  padding: 0.45rem 0.85rem;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  background: ${e=>e.$active?e.theme.colors.primary:"transparent"};
  color: ${e=>e.$active?"#fff":e.theme.colors.textSecondary};
`,we=o.Ay.div`
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
`,Ae=o.Ay.input`
  border: 1px solid ${e=>e.theme.colors.borderStrong};
  border-radius: 8px;
  padding: 0.45rem 0.65rem;
  font: inherit;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
`,Ce=o.Ay.button`
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
`,ze=o.Ay.table`
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
`,_e=o.Ay.div`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.borderStrong};
  background: ${e=>e.theme.colors.primarySoft};
  color: ${e=>e.theme.colors.text};
  font-size: 0.88rem;
`,Ie=e=>{var t,r;let{enabledTabs:o,layoutHint:s}=e;const n=(0,$.d)(),[a,l]=(0,i.useState)(null!==(t=o[0])&&void 0!==t?t:"browse"),[d,c]=(0,i.useState)([]),[p,h]=(0,i.useState)(""),[u,x]=(0,i.useState)([]),[g,y]=(0,i.useState)(!1),[b,f]=(0,i.useState)(null),[v,j]=(0,i.useState)(""),[w,k]=(0,i.useState)(K()),[S,A]=(0,i.useState)("upsert"),[C,z]=(0,i.useState)(null),[_,I]=(0,i.useState)(""),[E,T]=(0,i.useState)(""),[D,P]=(0,i.useState)(""),[H,B]=(0,i.useState)('{"name":"","value":""}'),[N,L]=(0,i.useState)(null),[Y,X]=(0,i.useState)([]),Z=(0,i.useMemo)(()=>d.find(e=>e.id===p),[d,p]),G=(0,i.useCallback)(async()=>{y(!0),f(null);try{const t=await M();if(c(t),!p&&t.length){var e;const r=t.find(e=>"demo-catalog"===e.slug);h(null!==(e=null===r||void 0===r?void 0:r.id)&&void 0!==e?e:t[0].id)}}catch(t){f(t instanceof Error?t.message:"API \uc5f0\uacb0 \uc2e4\ud328")}finally{y(!1)}},[p]),ee=(0,i.useCallback)(async()=>{if(p){y(!0),f(null);try{const e=await Q(p);X(e)}catch(e){f(e instanceof Error?e.message:"\uc801\uc7ac \uc774\ub825 \uc870\ud68c \uc2e4\ud328")}finally{y(!1)}}},[p]),te=(0,i.useCallback)(async()=>{if(p){y(!0),f(null);try{const e=await F(p,v||void 0);x(e)}catch(e){f(e instanceof Error?e.message:"\uc870\ud68c \uc2e4\ud328")}finally{y(!1)}}},[p,v]);(0,i.useEffect)(()=>{G()},[G]),(0,i.useEffect)(()=>{"browse"!==a&&"register"!==a||te(),"audit"===a&&ee()},[a,te,ee]),(0,i.useEffect)(()=>{var e;o.includes(a)||l(null!==(e=o[0])&&void 0!==e?e:"browse")},[o,a]);const re=()=>{L(null),P(""),B('{"sku":"","name":"","category":"","status":""}')},ie=e=>{L(e.id),P(e.external_key),B(JSON.stringify(e.data,null,2)),l("register")},oe=null!==Z&&void 0!==Z&&null!==(r=Z.column_schema)&&void 0!==r&&r.length?Z.column_schema.map(e=>e.key):u[0]?Object.keys(u[0].data):[];return(0,m.jsxs)(fe,{children:[s?(0,m.jsx)("div",{style:{marginBottom:"0.75rem"},children:(0,m.jsx)(ue,{template:s})}):null,(0,m.jsxs)(ve,{children:[(0,m.jsx)(je,{role:"tablist","aria-label":"Data Hub",children:o.map(e=>(0,m.jsxs)($e,{type:"button",role:"tab","aria-selected":a===e,$active:a===e,onClick:()=>l(e),children:["schema"===e&&"\uc2a4\ud0a4\ub9c8","import"===e&&"\uac00\uc838\uc624\uae30","browse"===e&&"\uc870\ud68c","register"===e&&"\ub4f1\ub85d\xb7\uc218\uc815","audit"===e&&"\uc801\uc7ac \uc774\ub825"]},e))}),(0,m.jsxs)("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[(0,m.jsx)(Ae,{"aria-label":"Admin API Key",type:"password",value:w,onChange:e=>k(e.target.value),placeholder:"X-Admin-Key",style:{width:180}}),(0,m.jsx)(Ce,{type:"button",onClick:()=>{var e;e=w,localStorage.setItem(R,e.trim()),n.success("API \ud0a4 \uc800\uc7a5")},children:"\ud0a4 \uc800\uc7a5"}),(0,m.jsxs)(Ce,{type:"button",onClick:G,children:[(0,m.jsx)(xe.A,{size:14})," \uc0c8\ub85c\uace0\uce68"]})]})]}),b&&(0,m.jsx)(_e,{role:"alert",children:b}),(0,m.jsxs)(we,{children:[(0,m.jsxs)(ke,{children:[(0,m.jsxs)("label",{children:[(0,m.jsx)("span",{className:"sr-only",children:"\uc5d4\ud2f0\ud2f0 \uc120\ud0dd"}),(0,m.jsx)("select",{value:p,onChange:e=>h(e.target.value),style:{marginRight:8},children:d.map(e=>(0,m.jsxs)("option",{value:e.id,children:[e.name," (",e.slug,")"]},e.id))})]}),"browse"===a&&(0,m.jsx)(Ae,{placeholder:"\uac80\uc0c9",value:v,onChange:e=>j(e.target.value),onKeyDown:e=>"Enter"===e.key&&te()}),g&&(0,m.jsxs)("span",{style:{display:"inline-flex",gap:6,alignItems:"center"},children:[(0,m.jsx)(O.A,{size:14,className:"spin"})," \ubd88\ub7ec\uc624\ub294 \uc911"]})]}),(0,m.jsxs)(Se,{children:["schema"===a&&(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{style:{fontSize:"0.88rem",color:"var(--text-muted, #666)"},children:"\uc11c\ube44\uc2a4 DB\uc5d0 \uc62c\ub9b4 \ub17c\ub9ac \ud14c\uc774\ube14(\uc5d4\ud2f0\ud2f0)\uc744 \ub9cc\ub4ed\ub2c8\ub2e4. CSV/Excel \uccab \uac00\uc838\uc624\uae30 \uc2dc \ud5e4\ub354\ub85c column_schema\uac00 \uc790\ub3d9 \ucc44\uc6cc\uc9d1\ub2c8\ub2e4."}),(0,m.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginTop:12},children:[(0,m.jsx)(Ae,{placeholder:"slug (\uc608: products)",value:_,onChange:e=>I(e.target.value)}),(0,m.jsx)(Ae,{placeholder:"\ud45c\uc2dc \uc774\ub984",value:E,onChange:e=>T(e.target.value)}),(0,m.jsxs)(Ce,{type:"button",onClick:async()=>{try{const e=await W({slug:_,name:E,description:"Admin Studio demo entity"});n.success("\ud14c\uc774\ube14(\uc5d4\ud2f0\ud2f0)\uc744 \ub4f1\ub85d\ud588\uc2b5\ub2c8\ub2e4."),I(""),T(""),await G(),h(e.id)}catch(e){n.error(e instanceof Error?e.message:"\ub4f1\ub85d \uc2e4\ud328")}},children:[(0,m.jsx)(ge.A,{size:14})," \uc5d4\ud2f0\ud2f0 \ucd94\uac00"]})]}),Z&&(0,m.jsx)("pre",{style:{marginTop:16,fontSize:12,overflow:"auto",padding:12,borderRadius:8,border:"1px solid var(--border, #ddd)"},children:JSON.stringify(Z.column_schema,null,2)})]}),"import"===a&&(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:12},children:["upsert","insert","replace"].map(e=>(0,m.jsx)(Ce,{type:"button",onClick:()=>A(e),style:{borderColor:S===e?"#0040ff":void 0},children:e},e))}),(0,m.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:8,alignItems:"center"},children:[(0,m.jsxs)("label",{children:[(0,m.jsxs)(Ce,{as:"span",type:"button",children:[(0,m.jsx)(ye.A,{size:14})," CSV / Excel \uc120\ud0dd"]}),(0,m.jsx)("input",{type:"file",accept:".csv,.xlsx,.xlsm",hidden:!0,onChange:e=>{var t;const r=null===(t=e.target.files)||void 0===t?void 0:t[0];r&&(async t=>{if(p)try{const e=await q(p,t,S);z(e),n.success(`\uc801\uc7ac \uc644\ub8cc \xb7 \ucd94\uac00 ${e.inserted} \xb7 \uc218\uc815 ${e.updated}`),await te(),o.includes("audit")&&await ee()}catch(e){n.error(e instanceof Error?e.message:"\uac00\uc838\uc624\uae30 \uc2e4\ud328")}})(r),e.target.value=""}})]}),(0,m.jsx)("a",{href:"/my-portfolio/admin-studio/samples/catalog-seed.csv",download:"catalog-seed.csv",style:{fontSize:"0.85rem"},children:"\uc2dc\ub4dc CSV \ub0b4\ub824\ubc1b\uae30"}),(0,m.jsxs)("span",{style:{fontSize:"0.78rem",opacity:.75},children:["upsert \xb7 \ud0a4 \uceec\ub7fc ",(0,m.jsx)("code",{children:"sku"})," \xb7 \uc5d4\ud2f0\ud2f0"," ",(0,m.jsx)("code",{children:"demo-catalog"})]})]}),C?(0,m.jsxs)("p",{style:{marginTop:12,fontSize:"0.85rem"},role:"status",children:[C.file_name," \u2014 \ucd94\uac00 ",C.inserted," \xb7 \uc218\uc815"," ",C.updated," \xb7 \uac74\ub108\ub700 ",C.skipped,C.errors.length?` \xb7 \uc624\ub958 ${C.errors.length}\uac74`:""]}):null]}),"browse"===a&&(0,m.jsxs)(ze,{children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"key"}),oe.map(e=>(0,m.jsx)("th",{children:e},e)),(0,m.jsx)("th",{"aria-label":"actions"})]})}),(0,m.jsx)("tbody",{children:0===u.length?(0,m.jsx)("tr",{children:(0,m.jsx)("td",{colSpan:oe.length+2,children:"\ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uac00\uc838\uc624\uae30 \ub610\ub294 \ub4f1\ub85d \ud0ed\uc744 \uc0ac\uc6a9\ud558\uc138\uc694."})}):u.map(e=>(0,m.jsxs)("tr",{tabIndex:0,role:"button",style:{cursor:"pointer"},onClick:()=>ie(e),onKeyDown:t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),ie(e))},children:[(0,m.jsx)("td",{children:e.external_key}),oe.map(t=>{var r;return(0,m.jsx)("td",{children:null!==(r=e.data[t])&&void 0!==r?r:""},t)}),(0,m.jsx)("td",{children:(0,m.jsx)(Ce,{type:"button","aria-label":"\uc0ad\uc81c",onClick:async t=>{t.stopPropagation(),await J(p,e.id),N===e.id&&re(),await te()},children:(0,m.jsx)(be.A,{size:14})})})]},e.id))})]}),"register"===a&&(0,m.jsxs)("div",{style:{display:"grid",gap:8,maxWidth:480},children:[(0,m.jsx)("p",{style:{fontSize:"0.82rem",margin:0,opacity:.85},children:N?"\uc218\uc815 \ubaa8\ub4dc \u2014 \uc870\ud68c \ud0ed\uc5d0\uc11c \ud589\uc744 \ub20c\ub7ec\ub3c4 \ubd88\ub7ec\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4.":"\uc2e0\uaddc \ub4f1\ub85d \u2014 JSON \ud544\ub4dc\ub294 \uc5d4\ud2f0\ud2f0 column_schema\uc640 \ub9de\ucd94\uc138\uc694."}),(0,m.jsx)(Ae,{placeholder:"external_key",value:D,onChange:e=>P(e.target.value)}),(0,m.jsx)("textarea",{value:H,onChange:e=>B(e.target.value),rows:6,style:{fontFamily:"monospace",fontSize:12},"aria-label":"\ub808\ucf54\ub4dc JSON"}),(0,m.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[(0,m.jsxs)(Ce,{type:"button",onClick:async()=>{if(p)try{const e=JSON.parse(H);N?(await V(p,N,{external_key:D,data:e}),n.success("\ub808\ucf54\ub4dc\ub97c \uc218\uc815\ud588\uc2b5\ub2c8\ub2e4.")):(await U(p,{external_key:D,data:e}),n.success("\ub2e8\uac74 \ub4f1\ub85d\ud588\uc2b5\ub2c8\ub2e4.")),re(),await te()}catch(e){n.error(e instanceof Error?e.message:"\uc800\uc7a5 \uc2e4\ud328")}},children:[(0,m.jsx)(ge.A,{size:14})," ",N?"\uc218\uc815 \uc800\uc7a5":"\ub4f1\ub85d"]}),N?(0,m.jsx)(Ce,{type:"button",onClick:re,children:"\uc2e0\uaddc \ub4f1\ub85d"}):null]})]}),"audit"===a&&(0,m.jsx)(m.Fragment,{children:0===Y.length?(0,m.jsx)("p",{style:{fontSize:"0.88rem"},role:"status",children:"\uc801\uc7ac \uc774\ub825\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \uc2dc\ub4dc CSV\ub97c \uac00\uc838\uc624\uac70\ub098 \uc0d8\ud50c \ud30c\uc77c\uc744 upsert\ud574 \ubcf4\uc138\uc694."}):(0,m.jsxs)(ze,{children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"\uc77c\uc2dc"}),(0,m.jsx)("th",{children:"\ud30c\uc77c"}),(0,m.jsx)("th",{children:"mode"}),(0,m.jsx)("th",{children:"\ud589"}),(0,m.jsx)("th",{children:"\ucd94\uac00"}),(0,m.jsx)("th",{children:"\uc218\uc815"}),(0,m.jsx)("th",{children:"\uac74\ub108\ub700"}),(0,m.jsx)("th",{children:"\uc624\ub958"})]})}),(0,m.jsx)("tbody",{children:Y.map(e=>{var t,r;return(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:new Date(e.created_at).toLocaleString("ko-KR")}),(0,m.jsx)("td",{children:e.file_name}),(0,m.jsx)("td",{children:e.mode}),(0,m.jsx)("td",{children:e.row_count}),(0,m.jsx)("td",{children:e.inserted}),(0,m.jsx)("td",{children:e.updated}),(0,m.jsx)("td",{children:e.skipped}),(0,m.jsx)("td",{children:null!==(t=null===(r=e.errors)||void 0===r?void 0:r.length)&&void 0!==t?t:0})]},e.id)})})]})})]})]})]})},Ee=[{id:"three-column-ops",label:"A \xb7 3\ubd84\ud560 \uc6b4\uc601 \ucf58\uc194",subtitle:"\uc88c \ud050 \xb7 \uc911 \uc791\uc5c5 \xb7 \uc6b0 \uadfc\uac70\xb7\uc124\uc815 \u2014 HITL\xb7\uac10\uc0ac\ud615 \uc5c5\ubb34\uc5d0 \ub9de\ucd98 \ud328\ud134",recommendedTabs:["browse","import","schema","audit"],knowHow:[{title:"\uc870\ud68c\xb7\ud544\ud130 \uace0\uc815",points:["\uac80\uc0c9\xb7\ud0ed\xb7\ud544\ud130\ub294 shrink-0 \uace0\uc815, \ubaa9\ub85d\ub9cc overflow-y-auto","\ud14c\uc774\ube14 thead sticky\ub294 \ubaa9\ub85d \uc2a4\ud06c\ub864 \uad6c\uc5ed \uc548\uc5d0\uc11c\ub9cc"]},{title:"\ud328\ub110 sticky",points:["\ube14\ub85d \uc0c1\uc138 L2/L3 \uc124\uc815 \ud5e4\ub354\ub294 \uc2a4\ud06c\ub864\uacfc \ubd84\ub9ac","\uc6b0\uce21 \ubc30\uc9c0\ub294 \ub370\uc774\ud130 \ucd9c\ucc98(\uce74\ud0c8\ub85c\uadf8\xb7DB\xb7\uc815\ucc45)\ub9cc \uc9e7\uac8c"]},{title:"\uc6b4\uc601 \uc644\uc131\ub3c4",points:["\ub85c\ub529\xb7\uc5d0\ub7ec\xb7\ube48 \uc0c1\ud0dc\ub97c \uac19\uc740 \ud328\ud134\uc73c\ub85c","overlay\ub294 \ubdf0\ud3ec\ud2b8 \ud558\ub2e8 \uc798\ub9bc \uc5c6\uc774 grow-up"]}]},{id:"sidebar-catalog",label:"B \xb7 \uc0ac\uc774\ub4dc\ubc14 + \uce74\ud0c8\ub85c\uadf8",subtitle:"\uc88c \uba54\ub274 \xb7 \uc911 \uce74\ud0c8\ub85c\uadf8 \xb7 \uc6b0 Inspector \u2014 LLMOps\xb7RBAC \ud655\uc7a5\ud615",recommendedTabs:["browse","import","schema","register"],knowHow:[{title:"RBAC\xb7\uba54\ub274 \uadf8\ub8f9",points:["page-groups \ub2e8\uc704\ub85c \uc0ac\uc774\ub4dc\ubc14 \ubb36\uc74c","\uc5ed\ud560\ubcc4 \ub77c\uc6b0\ud2b8 \uac00\ub4dc + \ube48 \uad8c\ud55c \uc548\ub0b4"]},{title:"\uce74\ud0c8\ub85c\uadf8 CRUD",points:["\ubaa9\ub85d\uc740 \uc11c\ubc84 \ud398\uc774\uc9c0\ub124\uc774\uc158\xb7TanStack Table","\uc6b0\uce21 Inspector\uc5d0\uc11c \uc800\uc7a5\xb7\ubc30\ud3ec \uc561\uc158 \ubd84\ub9ac"]},{title:"\ub300\ub7c9 \uc801\uc7ac",points:["CSV/Excel \ud5e4\ub354 \u2192 column_schema \uc790\ub3d9 \ucd94\ub860","upsert \ud0a4 \uceec\ub7fc \uc9c0\uc815\uc73c\ub85c \uc7ac\ub4f1\ub85d\xb7\uc218\uc815 \ubc18\ubcf5"]}]}],Te=[{id:"purpose",title:"1 \xb7 \ubaa9\uc801",question:"\uc774 \uad00\ub9ac\uc790 \ud398\uc774\uc9c0\uac00 \uc8fc\ub85c \ubb34\uc5c7\uc744 \ud558\ub098\uc694?",options:[{id:"ingest",label:"DB \uc801\uc7ac\xb7\uc7ac\ub4f1\ub85d",hint:"CSV/Excel \uc77c\uad04 \ubc18\uc601"},{id:"ops",label:"\uc6b4\uc601\xb7\uac80\uc218(HITL)",hint:"\ud050\xb7\ud655\uc815\xb7\uac10\uc0ac"},{id:"catalog",label:"\uce74\ud0c8\ub85c\uadf8\xb7\uc124\uc815",hint:"CRUD + Inspector"}]},{id:"layout",title:"2 \xb7 \ub808\uc774\uc544\uc6c3",question:"\ud654\uba74 \uace8\uaca9\uc744 \uace0\ub985\ub2c8\ub2e4.",options:[{id:"three-column-ops",label:"A \xb7 3\ubd84\ud560 \uc6b4\uc601",hint:"\ud050\xb7\uc0c1\uc138\xb7\uadfc\uac70"},{id:"sidebar-catalog",label:"B \xb7 \uc0ac\uc774\ub4dc\ubc14 \uce74\ud0c8\ub85c\uadf8",hint:"\uba54\ub274\xb7\ud45c\xb7Inspector"}]},{id:"data",title:"3 \xb7 \ub370\uc774\ud130",question:"\ub370\uc774\ud130\ub294 \uc5b4\ub5bb\uac8c \ub4e4\uc5b4\uc624\ub098\uc694?",options:[{id:"file",label:"CSV / Excel",hint:"\ud0ed\uc73c\ub85c \uac00\uc838\uc624\uae30\xb7upsert"},{id:"form",label:"\ud3fc \uc218\ub3d9 \ub4f1\ub85d",hint:"\ub2e8\uac74 CRUD"},{id:"mixed",label:"\ud63c\ud569",hint:"\uc801\uc7ac + \uc218\ub3d9 \ubcf4\uc815"}]},{id:"tabs",title:"4 \xb7 \ud0ed \uad6c\uc131",question:"Data Hub\uc5d0 \ucf24 \ud0ed\uc744 \uace0\ub985\ub2c8\ub2e4.",multi:!0,options:[{id:"schema",label:"\uc2a4\ud0a4\ub9c8\xb7\ud14c\uc774\ube14",hint:"\uc5d4\ud2f0\ud2f0 \uc815\uc758"},{id:"import",label:"\uac00\uc838\uc624\uae30",hint:"\ubbf8\ub9ac\ubcf4\uae30\xb7\ubaa8\ub4dc"},{id:"browse",label:"\uc870\ud68c",hint:"\uac80\uc0c9\xb7\ubaa9\ub85d"},{id:"register",label:"\ub4f1\ub85d",hint:"\ub2e8\uac74 \ucd94\uac00"},{id:"audit",label:"\uc801\uc7ac \uc774\ub825",hint:"\ubc30\uce58 \uacb0\uacfc"}]}];var De=r(4131),Pe=r(4893);const He={tabs:["schema","import","browse"]},Oe=(0,De.v)()((0,Pe.Zr)((e,t)=>({stepIndex:0,answers:He,setAnswer:(t,r)=>e(e=>({answers:{...e.answers,[t]:r}})),toggleTab:t=>e(e=>{const r=new Set(e.answers.tabs);return r.has(t)?r.delete(t):r.add(t),{answers:{...e.answers,tabs:[...r]}}}),next:()=>e(e=>({stepIndex:Math.min(e.stepIndex+1,3)})),prev:()=>e(e=>({stepIndex:Math.max(e.stepIndex-1,0)})),reset:()=>e({stepIndex:0,answers:He}),recommendedTemplate:()=>{return(e=t().answers).layout?e.layout:"catalog"===e.purpose?"sidebar-catalog":"three-column-ops";var e}}),{name:"admin-wizard-v1"})),Be=o.Ay.div`
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
  border-radius: 999px;
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
`,Me=o.Ay.button`
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
`,We=o.Ay.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.25rem;
  gap: 0.75rem;
`,Fe=o.Ay.span`
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
`,Ue=()=>{const[e,t]=(0,i.useState)(null),[r,o]=(0,i.useState)("templates"),[p,h]=(0,i.useState)("three-column-ops"),u=Oe(e=>e.stepIndex),x=Oe(e=>e.answers),g=Oe(e=>e.setAnswer),y=Oe(e=>e.toggleTab),f=Oe(e=>e.next),v=Oe(e=>e.prev),j=Oe(e=>e.recommendedTemplate),$=Te[u],w=j();(0,i.useEffect)(()=>{(async function(){const e=N.replace("/api/v1","/api/health");return(await fetch(e)).json()})().then(e=>t(Boolean(e.ok))).catch(()=>t(!1))},[r]);const k=(0,i.useMemo)(()=>x.tabs.length?x.tabs:["schema","import","browse"],[x.tabs]);return(0,m.jsxs)(d.A,{id:"admin-studio",dotCount:8,dotSeed:4,glow:!0,children:[(0,m.jsx)(c.A,{eyebrow:"Admin Studio",title:"\uad00\ub9ac\uc790 \ud398\uc774\uc9c0 \uc2e4\ud5d8\uc2e4",subtitle:(0,m.jsxs)(m.Fragment,{children:["\uac1c\uc778 \ud3ec\ud2b8\ud3f4\ub9ac\uc624 \u2014 A/B \ub77c\uc774\ube0c \ub370\ubaa8, CSV\xb7Excel Data Hub, FastAPI + Docker.",(0,m.jsxs)(Fe,{$ok:e,role:"status",children:["API ",null===e?"\u2026":e?":8000 OK":"\uc624\ud504\ub77c\uc778"]})]})}),(0,m.jsxs)(Be,{role:"tablist","aria-label":"Admin Studio modes",children:[(0,m.jsxs)(Ne,{type:"button",role:"tab","aria-selected":"templates"===r,$active:"templates"===r,onClick:()=>o("templates"),children:[(0,m.jsx)(n.A,{size:16})," \ud15c\ud50c\ub9bf A \xb7 B"]}),(0,m.jsxs)(Ne,{type:"button",role:"tab","aria-selected":"wizard"===r,$active:"wizard"===r,onClick:()=>o("wizard"),children:[(0,m.jsx)(a.A,{size:16})," \uad6c\uc131 \ud30c\uc774\ud504\ub77c\uc778"]}),(0,m.jsxs)(Ne,{type:"button",role:"tab","aria-selected":"data"===r,$active:"data"===r,onClick:()=>o("data"),children:[(0,m.jsx)(l.A,{size:16})," Data Hub"]})]}),"templates"===r&&(0,m.jsxs)(s.P.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:[(0,m.jsx)(Re,{children:Ee.map(e=>(0,m.jsx)("button",{type:"button",style:{all:"unset",cursor:"pointer",display:"block"},onClick:()=>h(e.id),children:(0,m.jsx)(b,{template:e,active:p===e.id})},e.id))}),(0,m.jsx)(Ke,{children:(0,m.jsx)(ue,{template:p})})]}),"wizard"===r&&$&&(0,m.jsxs)(Le,{children:[(0,m.jsx)("p",{style:{margin:0,fontWeight:700},children:$.title}),(0,m.jsx)("p",{style:{margin:"0.35rem 0 0",color:"var(--text-muted,#666)"},children:$.question}),"multi"in $&&$.multi?$.options.map(e=>(0,m.jsxs)(Me,{type:"button",$selected:x.tabs.includes(e.id),onClick:()=>y(e.id),children:[(0,m.jsx)("strong",{children:e.label}),(0,m.jsx)("div",{style:{fontSize:"0.82rem",opacity:.85},children:e.hint})]},e.id)):$.options.map(e=>{const t="purpose"===$.id?"purpose":"layout"===$.id?"layout":"data",r=x[t]===e.id;return(0,m.jsxs)(Me,{type:"button",$selected:r,onClick:()=>g(t,e.id),children:[(0,m.jsx)("strong",{children:e.label}),(0,m.jsx)("div",{style:{fontSize:"0.82rem",opacity:.85},children:e.hint})]},e.id)}),(0,m.jsxs)(We,{children:[(0,m.jsx)(Ne,{type:"button",$active:!1,onClick:v,disabled:0===u,children:"\uc774\uc804"}),u<Te.length-1?(0,m.jsx)(Ne,{type:"button",$active:!0,onClick:f,children:"\ub2e4\uc74c"}):(0,m.jsxs)(Ne,{type:"button",$active:!0,onClick:()=>{h(w),o("data")},children:["sidebar-catalog"===w?"B":"A"," + Data Hub \uc801\uc6a9"]})]}),u===Te.length-1&&(0,m.jsxs)("p",{style:{marginTop:"1rem",fontSize:"0.88rem"},children:["\ucd94\ucc9c \ud15c\ud50c\ub9bf:"," ",(0,m.jsx)("strong",{children:"sidebar-catalog"===w?"B \xb7 \uc0ac\uc774\ub4dc\ubc14 \uce74\ud0c8\ub85c\uadf8":"A \xb7 3\ubd84\ud560 \uc6b4\uc601"})," ","\xb7 \ud65c\uc131 \ud0ed: ",k.join(", ")]})]}),"data"===r&&(0,m.jsxs)(s.P.div,{initial:{opacity:0},animate:{opacity:1},children:[(0,m.jsxs)("p",{style:{textAlign:"center",fontSize:"0.88rem",marginBottom:"1rem"},children:["\uc120\ud0dd template:"," ",(0,m.jsx)("strong",{children:"sidebar-catalog"===p?"B":"A"})," ","\u2014 Docker: ",(0,m.jsx)("code",{children:"docker compose up -d --build"})," \ud6c4 API"," ",(0,m.jsx)("code",{children:":8000"})]}),(0,m.jsx)(Ie,{enabledTabs:k,layoutHint:p})]})]})}},7511:(e,t,r)=>{r.d(t,{A:()=>h});var i=r(5043),o=r(5464),s=r(111),n=r(579);const a=o.i7`
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
`,c=e=>{var t;let{count:r,seed:o=1}=e;const a=null!==(t=(0,s.I)())&&void 0!==t&&t,c=(0,i.useMemo)(()=>Array.from({length:r},(e,t)=>({left:(17*t+3*o)%86+6+"%",top:(23*t+7*o)%80+8+"%",duration:3.2+t%4*.35+"s",delay:41*t%12*.14+"s"})),[r,o]);return(0,n.jsx)(l,{"aria-hidden":!0,children:c.map((e,t)=>(0,n.jsx)(d,{$left:e.left,$top:e.top,$delay:e.delay,$duration:e.duration,$reduced:a},t))})},m=o.Ay.section`
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
`,p=o.Ay.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  z-index: 1;
`,h=e=>{let{id:t,children:r,dotCount:i=0,dotSeed:o=1,fullHeight:s=!1,glow:a=!0,className:l}=e;return(0,n.jsxs)(m,{id:t,className:l,$fullHeight:s,$glow:a,children:[i>0?(0,n.jsx)(c,{count:i,seed:o}):null,(0,n.jsx)(p,{children:r})]})}}}]);
//# sourceMappingURL=315.85f11001.chunk.js.map