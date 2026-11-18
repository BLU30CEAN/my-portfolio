"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[519],{6519:(e,r,n)=>{n.r(r),n.d(r,{default:()=>j});var t=n(5043),o=n(5464),i=n(8849);const l=[{id:"stt",label:"STT",tool:"Whisper",sample:"\uc624\ub298 \ubbf8\ud305 \uc77c\uc815 \ub2e4\uc2dc \uc54c\ub824 \uc918."},{id:"llm",label:"LLM",tool:"GPT-4o-mini / Claude",sample:"\uc624\ub298 15\uc2dc \uc81c\ud488 \ub9ac\ubdf0, 16\uc2dc \uc815\uc0b0 \ubbf8\ud305\uc774 \uc788\uc2b5\ub2c8\ub2e4."},{id:"tts",label:"TTS",tool:"ElevenLabs",sample:"\uc74c\uc131 \uc2a4\ud2b8\ub9bc 16kHz, \uc9c0\uc5f0 \ubaa9\ud45c 500ms."},{id:"lip",label:"\ub9bd\uc2f1\ud06c",tool:"HeyGen / LiveAvatar",sample:"\uc624\ub514\uc624 \ud2b8\ub799\uc5d0 \ub9de\ucdb0 viseme \uc774\ubca4\ud2b8\ub97c \ubd99\uc785\ub2c8\ub2e4."}];var a=n(6025),s=n(579);const c=o.Ay.div`
  min-height: calc(100vh - 72px);
  padding: 1.5rem 1.25rem 3rem;
  background: #0b0c10;
  color: #e8e6e1;
`,d=o.Ay.div`
  max-width: 920px;
  margin: 0 auto;
`,m=o.Ay.div`
  button {
    color: #9a958c;
  }
`,p=o.Ay.h1`
  margin: 0 0 0.35rem;
  font-size: clamp(1.45rem, 2.4vw, 1.9rem);
  letter-spacing: -0.03em;
`,u=o.Ay.p`
  margin: 0 0 1.35rem;
  max-width: 60ch;
  font-size: 0.95rem;
  line-height: 1.65;
  color: #9a958c;
`,h=o.Ay.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`,b=o.Ay.li`
  padding: 1rem 1.1rem;
  border-radius: 14px;
  border: 1px solid
    ${e=>e.$on?"rgba(232, 184, 92, 0.7)":"rgba(255, 255, 255, 0.08)"};
  background: ${e=>e.$on?"rgba(232, 184, 92, 0.08)":"rgba(255, 255, 255, 0.03)"};
  opacity: ${e=>e.$done||e.$on?1:.55};
`,g=o.Ay.div`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #e8b85c;
`,y=o.Ay.div`
  margin: 0.2rem 0 0.35rem;
  font-size: 1.05rem;
  font-weight: 700;
`,x=o.Ay.p`
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.55;
  color: #c9c4bb;
`,f=o.Ay.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1.2rem;
`,v=o.Ay.button`
  padding: 0.55rem 0.9rem;
  border-radius: 10px;
  font: inherit;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid
    ${e=>e.$primary?"#e8b85c":"rgba(255, 255, 255, 0.16)"};
  background: ${e=>e.$primary?"#e8b85c":"transparent"};
  color: ${e=>e.$primary?"#16140f":"#e8e6e1"};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,$=o.Ay.p`
  margin: 1rem 0 0;
  font-size: 0.78rem;
  color: #9a958c;
`,w=["stt","llm","tts","lip"],j=()=>{const e=(0,a.d)(),[r,n]=(0,t.useState)(0),[o,j]=(0,t.useState)(!1),A=(0,t.useRef)(null);(0,t.useEffect)(()=>()=>{A.current&&window.clearInterval(A.current)},[]);return(0,s.jsx)(c,{children:(0,s.jsxs)(d,{children:[(0,s.jsx)(m,{children:(0,s.jsx)(i.A,{here:"\uc544\ubc14\ud0c0 \ud30c\uc774\ud504"})}),(0,s.jsx)(p,{children:"\uba54\ud0c0\ud734\uba3c \uc774\ubca4\ud2b8 \ud750\ub984"}),(0,s.jsx)(u,{children:"STT\uc5d0\uc11c \ub9bd\uc2f1\ud06c\uae4c\uc9c0 \ud55c \ud134\uc758 \uc774\ubca4\ud2b8\ub9cc \uc7ac\ud604\ud569\ub2c8\ub2e4. HeyGen\xb7ElevenLabs \ud0a4\ub294 \ub123\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."}),(0,s.jsx)(h,{children:l.map((e,n)=>(0,s.jsxs)(b,{$on:n===r,$done:n<r,children:[(0,s.jsxs)(g,{children:[n+1," / ",l.length," \xb7 ",e.tool]}),(0,s.jsx)(y,{children:e.label}),(0,s.jsx)(x,{children:e.sample})]},e.id))}),(0,s.jsxs)(f,{children:[(0,s.jsx)(v,{type:"button",$primary:!0,onClick:()=>{if(o)return;A.current&&window.clearInterval(A.current),j(!0),n(0);let r=0;A.current=window.setInterval(()=>{if(r+=1,r>=w.length)return A.current&&window.clearInterval(A.current),A.current=null,j(!1),void e.success("\ud55c \ud134 \uc774\ubca4\ud2b8 \ud750\ub984\uc774 \ub05d\ub0ac\uc2b5\ub2c8\ub2e4.");n(r)},700)},disabled:o,children:o?"\uc9c4\ud589 \uc911":"\ud55c \ud134 \uc7ac\uc0dd"}),(0,s.jsx)(v,{type:"button",onClick:()=>{A.current&&window.clearInterval(A.current),A.current=null,n(0),j(!1)},children:"\ucc98\uc74c\uc73c\ub85c"})]}),(0,s.jsx)($,{children:"\uc6b4\uc601\uc5d0\uc11c\ub294 LiveKit \ub8f8\uacfc WebSocket \uc624\ub514\uc624\ub97c \uc774 \uc21c\uc11c\uc5d0 \ubd99\uc600\uc2b5\ub2c8\ub2e4. \uc774 \ud654\uba74\uc740 \uadf8 \uc21c\uc11c\ub9cc \ubcf4\uc5ec \uc90d\ub2c8\ub2e4."})]})})}},8849:(e,r,n)=>{n.d(r,{A:()=>s});n(5043);var t=n(3721),o=n(5464),i=n(579);const l=o.Ay.button`
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
`,s=({here:e})=>{const r=(0,t.Zp)();return(0,i.jsxs)(l,{type:"button",onClick:()=>r("/lab"),children:["\uc2e4\ud5d8 ",(0,i.jsx)("span",{"aria-hidden":!0,children:"/"})," ",(0,i.jsx)(a,{children:e})]})}}}]);
//# sourceMappingURL=519.dd5c51ef.chunk.js.map