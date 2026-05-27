/*! For license information please see 493.5db00f88.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[493],{73:(e,t,r)=>{r.d(t,{A:()=>o});const o=(0,r(7784).A)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]])},2054:(e,t,r)=>{r.d(t,{A:()=>o});const o=(0,r(7784).A)("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},2105:(e,t,r)=>{r.d(t,{A:()=>o});const o=(0,r(7784).A)("code",[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]])},2493:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Z});var o=r(5043),i=r(5464),a=r(1280);const s="https://script.google.com/macros/s/AKfycbyhV-qHbwpYECwhw5eCypQoIpLXs1-DD6EzHfNu0Tv4AJbbaTdmRLdcW-idwidltEy_/exec",n=async e=>{try{const t=await fetch(s,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({action:"submitContact",data:e})});if("opaque"===t.type)return!0;if(!t.ok)throw new Error(`Network response was not ok: ${t.status}`);return!0===(await t.json()).success}catch(t){return console.error("Error submitting to Google Sheets:",t),!1}};const c=new class{constructor(e){this.baseUrl=void 0,this.baseUrl=e}async request(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{const r=`${this.baseUrl}${e}`,o=await fetch(r,{headers:{"Content-Type":"application/json",...t.headers},...t}),i=await o.json();if(!o.ok)throw new Error(i.message||"API \uc694\uccad\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.");return i}catch(r){throw console.error("API request failed:",r),r}}async submitContact(e){return this.request("/contact",{method:"POST",body:JSON.stringify(e)})}async getPosts(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return this.request(`/posts?page=${e}&limit=${t}`)}async getPost(e){return this.request(`/posts/${e}`)}async createPost(e){return this.request("/posts",{method:"POST",body:JSON.stringify(e)})}async getContacts(){return this.request("/admin/contacts")}async healthCheck(){return this.request("/health")}}("http://localhost:5000/api");var l=r(2105),d=r(6382),h=r(6963),m=r(73),p=r(5327),y=r(7784);const x=(0,y.A)("message-square",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);var g=r(9891);const u=(0,y.A)("linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),b=(0,y.A)("map-pin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);var f=r(2054),j=r(7819);const w=(0,y.A)("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);var k=r(579);const A=i.Ay.div`
  min-height: 100vh;
  background: ${e=>e.theme.colors.background};
  padding: 2rem;
`,v=(0,i.Ay)(a.P.div)`
  background: ${e=>e.theme.colors.surface};
  border-radius: 20px;
  padding: 3rem 2rem;
  border: 1px solid ${e=>e.theme.colors.border};
  margin-bottom: 4rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,$=i.Ay.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  background: ${e=>e.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,S=i.Ay.p`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`,z=i.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
`,q=(0,i.Ay)(a.P.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1rem;
  background: ${e=>e.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
`,C=(0,i.Ay)(a.P.p)`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 1.2rem;
  margin-bottom: 4rem;
  line-height: 1.6;
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,M=i.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,P=i.Ay.div``,I=(0,i.Ay)(a.P.div)`
  background: ${e=>e.theme.colors.surface};
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid ${e=>e.theme.colors.border};
  margin-bottom: 2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${e=>e.theme.colors.primary};
    transform: translateY(-5px);
  }
`,T=i.Ay.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: ${e=>e.theme.colors.text};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,D=i.Ay.div`
  color: ${e=>e.theme.colors.textSecondary};
  line-height: 1.6;
`,V=i.Ay.a`
  color: ${e=>e.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: underline;
  }
`,E=i.Ay.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,L=(0,i.Ay)(a.P.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${e=>e.theme.colors.background};
  border: 1px solid ${e=>e.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.theme.colors.text};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${e=>e.theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`,O=i.Ay.form`
  background: ${e=>e.theme.colors.surface};
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid ${e=>e.theme.colors.border};
`,H=i.Ay.div`
  margin-bottom: 1.5rem;
`,J=i.Ay.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${e=>e.theme.colors.text};
  font-weight: 500;
`,N=i.Ay.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 10px;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(0, 212, 255, 0.2);
  }

  &::placeholder {
    color: ${e=>e.theme.colors.textSecondary};
  }
`,B=i.Ay.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 10px;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(0, 212, 255, 0.2);
  }

  &::placeholder {
    color: ${e=>e.theme.colors.textSecondary};
  }
`,R=(0,i.Ay)(a.P.button)`
  background: ${e=>e.theme.colors.gradient};
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 212, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(0, 212, 255, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,U=(0,i.Ay)(a.P.div)`
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${e=>"success"===e.type?"rgba(0, 255, 0, 0.1)":"rgba(255, 0, 0, 0.1)"};
  color: ${e=>"success"===e.type?"#00ff00":"#ff0000"};
  border: 1px solid
    ${e=>"success"===e.type?"#00ff00":"#ff0000"};
`,Y=i.Ay.div`
  margin-top: 4rem;
`,_=i.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,G=(0,i.Ay)(a.P.div)`
  background: ${e=>e.theme.colors.surface};
  border-radius: 15px;
  padding: 1.5rem;
  border: 1px solid ${e=>e.theme.colors.border};
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${e=>e.theme.colors.primary};
    transform: translateY(-5px);
  }
`,Q=i.Ay.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: ${e=>e.theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
`,F=i.Ay.h4`
  color: ${e=>e.theme.colors.text};
  margin-bottom: 0.5rem;
`,W=i.Ay.p`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.5;
`;const Z=function(){const[e,t]=(0,o.useState)({name:"",email:"",subject:"",message:""}),[r,i]=(0,o.useState)(!1),[s,y]=(0,o.useState)(null),Z=r=>{t({...e,[r.target.name]:r.target.value})},K=[{icon:l.A,title:"Frontend Development",description:"React, TypeScript, React Native, JavaScript(ES6+), Tailwind CSS, Shadcn UI"},{icon:d.A,title:"Backend & AI",description:"Java, Spring Boot, Python, FastAPI, REST API, Swagger"},{icon:h.A,title:"Database & Cloud",description:"PostgreSQL, MySQL, Redis, AWS EC2/S3, Docker"},{icon:m.A,title:"DevOps & Tools",description:"Jenkins, Git, Linux, GTM, Datadog, CI/CD"}];return(0,k.jsx)(A,{children:(0,k.jsxs)(z,{children:[(0,k.jsx)(q,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:"Contact"}),(0,k.jsx)(C,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.2},viewport:{once:!0},children:"\ud504\ub85c\uc81d\ud2b8 \ud611\uc5c5\uc774\ub098 \uae30\uc220 \ubb38\uc758\uac00 \uc788\uc73c\uc2dc\uba74 \uc5b8\uc81c\ub4e0 \ud3b8\ud558\uac8c \uc5f0\ub77d \uc8fc\uc138\uc694."}),(0,k.jsxs)(v,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.3},viewport:{once:!0},children:[(0,k.jsx)($,{children:"\uc9c4\uc2ec\uc73c\ub85c \uac10\uc0ac\ud569\ub2c8\ub2e4"}),(0,k.jsxs)(S,{children:["\ud3ec\ud2b8\ud3f4\ub9ac\uc624\ub97c \ub05d\uae4c\uc9c0 \uc0b4\ud3b4\ubd10 \uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4.",(0,k.jsx)("br",{}),"\uc6f9\xb7\ubaa8\ubc14\uc77c\xb7AI\ub97c \ud558\ub098\uc758 \ud750\ub984\uc73c\ub85c \uc5ee\uc5b4 \uc628 5\ub144 \ucc28 \ud480\uc2a4\ud0dd \uac1c\ubc1c\uc790\ub85c\uc11c,",(0,k.jsx)("br",{}),"LLM\xb7\uc2e4\uc2dc\uac04 \uba54\ud0c0\ud734\uba3c\xb7\uacb0\uc81c\xb7\uc571\xb7\uc6f9 \uc5f0\ub3d9\ucc98\ub7fc \uc6b4\uc601 \ubd80\ub2f4\uc774 \ud070 \ub3c4\uba54\uc778\uc744",(0,k.jsx)("br",{}),"\uc124\uacc4\uc5d0\uc11c \uad6c\ud604, \ubaa8\ub2c8\ud130\ub9c1\uae4c\uc9c0 \ud55c \uc0ac\ub78c\uc758 \ucc45\uc784 \uc548\uc5d0\uc11c \uc815\ub3c8\ud574 \uc654\uc2b5\ub2c8\ub2e4.",(0,k.jsx)("br",{}),(0,k.jsx)("br",{}),"\ub0af\uc120 \uae30\uc220\uc744 \ub9c8\uc8fc\ud560 \ub54c\ub294 \uacf5\uc2dd \ubb38\uc11c\uc640 \ubcc0\uacbd \uc774\ub825\uc5d0\uc11c\ubd80\ud130 \ucd9c\ubc1c\ud558\uace0,",(0,k.jsx)("br",{}),"\ubaa8\ub974\ub294 \uc601\uc5ed\uc740 \ucd94\uc815 \ub300\uc2e0 \uc7ac\ud604 \uac00\ub2a5\ud55c \uc791\uc740 \uc2e4\ud5d8\uc73c\ub85c \uba3c\uc800 \ud655\uc778\ud569\ub2c8\ub2e4.",(0,k.jsx)("br",{}),"\ud654\ub824\ud55c \uae30\ub2a5\uc744 \uc887\uae30\ubcf4\ub2e4, \uc6b4\uc601\uc790\uac00 \uc548\uc2ec\ud558\uace0 \uc7a0\ub4e4 \uc218 \uc788\ub294 \uc2dc\uc2a4\ud15c\uc744",(0,k.jsx)("br",{}),"\ub9cc\ub4dc\ub294 \ub370 \uc2dc\uac04\uc744 \uc4f0\uace0 \uc2f6\ub2e4\ub294 \ub9c8\uc74c\uc73c\ub85c \uc77c\ud574 \uc654\uc2b5\ub2c8\ub2e4.",(0,k.jsx)("br",{}),(0,k.jsx)("br",{}),"\ud568\uaed8 \ub9cc\ub4e4\uc5b4 \uac08 \uae30\ud68c\uac00 \uc788\ub2e4\uba74 \uc5b8\uc81c\ub4e0 \uac00\ubcbc\uc6b4 \ub9c8\uc74c\uc73c\ub85c \uc5f0\ub77d \uc8fc\uc138\uc694."]})]}),(0,k.jsxs)(M,{children:[(0,k.jsxs)(P,{children:[(0,k.jsxs)(I,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},transition:{duration:.6},viewport:{once:!0},children:[(0,k.jsxs)(T,{children:[(0,k.jsx)(p.A,{size:20}),"\uc774\uba54\uc77c"]}),(0,k.jsxs)(D,{children:[(0,k.jsx)(V,{href:"mailto:ej.an.company@gmail.com",children:"ej.an.company@gmail.com"}),(0,k.jsx)("br",{}),"\uc5f0\ub77d \uac00\ub2a5 \uc2dc\uac04: \ud3c9\uc77c \uc624\uc804 9\uc2dc \u2014 \uc624\ud6c4 6\uc2dc"]})]}),(0,k.jsxs)(I,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[(0,k.jsxs)(T,{children:[(0,k.jsx)(x,{size:20}),"\uc18c\uc15c \ucc44\ub110"]}),(0,k.jsxs)(D,{children:["\uc9c4\ud589 \uc911\uc778 \ud504\ub85c\uc81d\ud2b8\uc640 \ucd5c\uadfc \uc791\uc5c5 \ud750\ub984\uc740 \uc544\ub798 \ucc44\ub110\uc5d0\uc11c \uc0b4\ud3b4\ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,k.jsxs)(E,{children:[(0,k.jsx)(L,{href:"https://github.com/BLU30CEAN",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,k.jsx)(g.A,{size:20})}),(0,k.jsx)(L,{href:"https://linkedin.com/in/eunchan",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,k.jsx)(u,{size:20})})]})]})]}),(0,k.jsxs)(I,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},transition:{duration:.6,delay:.4},viewport:{once:!0},children:[(0,k.jsxs)(T,{children:[(0,k.jsx)(b,{size:20}),"\uc704\uce58"]}),(0,k.jsxs)(D,{children:["\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uac70\uc8fc \xb7 \ub300\ud55c\ubbfc\uad6d",(0,k.jsx)("br",{}),"\uc6d0\uaca9 \uadfc\ubb34 \uac00\ub2a5",(0,k.jsx)("br",{}),"\uc628\ub77c\uc778 \ubbf8\ud305 \uc6b0\uc120"]})]})]}),(0,k.jsx)(a.P.div,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},transition:{duration:.6},viewport:{once:!0},children:(0,k.jsxs)(O,{onSubmit:async r=>{if(r.preventDefault(),i(!0),y(null),!e.name||!e.email||!e.message)return y({type:"error",text:"\ud544\uc218 \ud56d\ubaa9\uc744 \ubaa8\ub450 \ucc44\uc6cc \uc8fc\uc138\uc694."}),void i(!1);const o="\uba54\uc2dc\uc9c0\uac00 \ubb34\uc0ac\ud788 \uc804\ub2ec\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ud655\uc778 \ud6c4 \ube60\ub974\uac8c \ub2f5\ubcc0\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4.",a="\uc804\uc1a1 \uc911 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.";try{if((await c.submitContact(e)).success)y({type:"success",text:o}),t({name:"",email:"",subject:"",message:""});else{const r={...e,timestamp:(new Date).toISOString()};await n(r)?(y({type:"success",text:o}),t({name:"",email:"",subject:"",message:""})):y({type:"error",text:a})}}catch(s){try{const r={...e,timestamp:(new Date).toISOString()};await n(r)?(y({type:"success",text:o}),t({name:"",email:"",subject:"",message:""})):y({type:"error",text:a})}catch(l){y({type:"error",text:a})}}i(!1)},children:[(0,k.jsx)("h3",{style:{marginBottom:"2rem",color:"#ffffff"},children:"\uba54\uc2dc\uc9c0 \ubcf4\ub0b4\uae30"}),(0,k.jsx)("p",{style:{marginTop:"-1.25rem",marginBottom:"1.5rem",color:"rgba(255,255,255,0.7)",fontSize:"0.95rem",lineHeight:1.6},children:"\uc5c5\ubb34 \uc81c\uc548\xb7\uae30\uc220 \ubb38\uc758\xb7\uac04\ub2e8\ud55c \uc778\uc0ac \ubaa8\ub450 \ud658\uc601\ud569\ub2c8\ub2e4. \ub2f5\ubcc0\uc740 \uc815\uc911\ud558\uace0 \uc2e0\uc18d\ud558\uac8c \ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4."}),s&&(0,k.jsxs)(U,{type:s.type,initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:["success"===s.type?(0,k.jsx)(f.A,{size:20}):(0,k.jsx)(j.A,{size:20}),s.text]}),(0,k.jsxs)(H,{children:[(0,k.jsx)(J,{children:"\uc131\ud568 *"}),(0,k.jsx)(N,{type:"text",name:"name",value:e.name,onChange:Z,placeholder:"\uc5b4\ub5bb\uac8c \ubd88\ub7ec \ub4dc\ub9ac\uba74 \uc88b\uc744\uae4c\uc694?",required:!0})]}),(0,k.jsxs)(H,{children:[(0,k.jsx)(J,{children:"\uc774\uba54\uc77c *"}),(0,k.jsx)(N,{type:"email",name:"email",value:e.email,onChange:Z,placeholder:"\ud68c\uc2e0 \ubc1b\uc73c\uc2e4 \uc774\uba54\uc77c \uc8fc\uc18c\ub97c \uc801\uc5b4 \uc8fc\uc138\uc694",required:!0})]}),(0,k.jsxs)(H,{children:[(0,k.jsx)(J,{children:"\uc81c\ubaa9"}),(0,k.jsx)(N,{type:"text",name:"subject",value:e.subject,onChange:Z,placeholder:"\ud55c \uc904\ub85c \uc694\uc57d\ud574 \uc8fc\uc2dc\uba74 \uc88b\uc2b5\ub2c8\ub2e4 (\uc120\ud0dd)"})]}),(0,k.jsxs)(H,{children:[(0,k.jsx)(J,{children:"\uba54\uc2dc\uc9c0 *"}),(0,k.jsx)(B,{name:"message",value:e.message,onChange:Z,placeholder:"\ud611\uc5c5\xb7\ubb38\uc758 \ub0b4\uc6a9\uc744 \ud3b8\ud558\uac8c \uc801\uc5b4 \uc8fc\uc138\uc694",required:!0})]}),(0,k.jsxs)(R,{type:"submit",disabled:r,whileHover:{scale:1.05},whileTap:{scale:.95},children:[r?"\ubcf4\ub0b4\ub294 \uc911...":"\uba54\uc2dc\uc9c0 \ubcf4\ub0b4\uae30",(0,k.jsx)(w,{size:20})]})]})})]}),(0,k.jsxs)(Y,{children:[(0,k.jsx)(q,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:"\uc804\ubb38 \ubd84\uc57c"}),(0,k.jsx)(_,{children:K.map((e,t)=>(0,k.jsxs)(G,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1*t},viewport:{once:!0},whileHover:{scale:1.02},children:[(0,k.jsx)(Q,{children:(0,k.jsx)(e.icon,{size:24})}),(0,k.jsx)(F,{children:e.title}),(0,k.jsx)(W,{children:e.description})]},e.title))})]})]})})}},5327:(e,t,r)=>{r.d(t,{A:()=>o});const o=(0,r(7784).A)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]])},6382:(e,t,r)=>{r.d(t,{A:()=>o});const o=(0,r(7784).A)("brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]])},6963:(e,t,r)=>{r.d(t,{A:()=>o});const o=(0,r(7784).A)("smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]])},9891:(e,t,r)=>{r.d(t,{A:()=>o});const o=(0,r(7784).A)("github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]])}}]);
//# sourceMappingURL=493.5db00f88.chunk.js.map