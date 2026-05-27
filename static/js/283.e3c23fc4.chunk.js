/*! For license information please see 283.e3c23fc4.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[283],{73:(e,t,r)=>{r.d(t,{A:()=>a});const a=(0,r(7784).A)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]])},764:(e,t,r)=>{r.d(t,{A:()=>a});const a=(0,r(7784).A)("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]])},1283:(e,t,r)=>{r.r(t),r.d(t,{default:()=>te});var a=r(5043),i=r(5464),o=r(1280),n=r(3546),l=r(7784);const c=(0,l.A)("carrot",[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",key:"rfqxbe"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",key:"6b25w4"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",key:"fn65lo"}]]);var s=r(7118),d=r(4919),p=r(5326),h=r(5347);const m=(0,l.A)("video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);var y=r(6382);const g=(0,l.A)("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);var b=r(73),x=r(6963),u=r(9891),f=r(764),A=r(4830),k=r(614),v=r(2054),j=r(579);const w=i.Ay.div`
  min-height: 100vh;
  background: ${e=>e.theme.colors.background};
  padding: 2rem;
`,C=i.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
`,S=(0,i.Ay)(o.P.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1rem;
  background: ${e=>e.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,M=(0,i.Ay)(o.P.p)`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 1.2rem;
  margin-bottom: 3rem;
  line-height: 1.6;
`,$=i.Ay.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`,T=i.Ay.button`
  background: ${e=>e.active?e.theme.colors.gradient:"transparent"};
  border: 1px solid
    ${e=>e.active?"transparent":e.theme.colors.border};
  color: ${e=>e.active?"white":e.theme.colors.text};
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${e=>e.active?e.theme.colors.gradient:e.theme.colors.surface};
    transform: translateY(-2px);
  }
`,L=i.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,U=(0,i.Ay)(o.P.div)`
  background: ${e=>e.theme.colors.surface};
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid ${e=>e.theme.colors.border};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
  }
`,z=i.Ay.div`
  height: 200px;
  background: ${e=>e.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 70%
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  ${U}:hover &::before {
    transform: translateX(100%);
  }
`,I=i.Ay.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
`,P=i.Ay.div`
  padding: 2rem;
`,H=i.Ay.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${e=>e.theme.colors.text};
`,R=i.Ay.p`
  color: ${e=>e.theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,W=i.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,N=i.Ay.span`
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid ${e=>e.theme.colors.primary};
`,G=i.Ay.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`,q=i.Ay.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 0.9rem;
`,E=i.Ay.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,B=i.Ay.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>e.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border: 1px solid ${e=>e.theme.colors.primary};
  border-radius: 20px;
  background: transparent;

  &:hover {
    transform: translateX(5px);
    background: ${e=>e.theme.colors.primary};
    color: white;
  }
`,J=i.Ay.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>e.theme.colors.accent};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border: 1px solid ${e=>e.theme.colors.accent};
  border-radius: 20px;
  background: transparent;

  &:hover {
    transform: translateX(5px);
    background: ${e=>e.theme.colors.accent};
    color: white;
  }
`,K=(0,i.Ay)(o.P.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`,O=(0,i.Ay)(o.P.div)`
  background: ${e=>e.theme.colors.surface};
  border-radius: 20px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`,V=i.Ay.div`
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
`,X=i.Ay.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: ${e=>e.theme.colors.text};
`,Z=i.Ay.div`
  color: ${e=>e.theme.colors.primary};
  font-weight: 500;
`,F=i.Ay.div`
  padding: 2rem;
`,_=i.Ay.p`
  color: ${e=>e.theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 2rem;
`,D=i.Ay.div`
  margin-bottom: 2rem;
`,Q=i.Ay.h4`
  color: ${e=>e.theme.colors.text};
  margin-bottom: 1rem;
  font-size: 1.2rem;
`,Y=i.Ay.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: ${e=>e.theme.colors.textSecondary};
`,ee=i.Ay.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${e=>e.theme.colors.textSecondary};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: ${e=>e.theme.colors.background};
    color: ${e=>e.theme.colors.text};
  }
`;const te=function(){const[e,t]=(0,a.useState)("all"),[r,i]=(0,a.useState)(null),o=[{id:1,title:"Find Carrot Game",description:"React\uc640 TypeScript\ub85c \uac1c\ubc1c\ud55c \ub2f9\uadfc \ucc3e\uae30 \uac8c\uc784\uc785\ub2c8\ub2e4. \ud074\ub9ad\uc73c\ub85c \uc228\uaca8\uc9c4 \ub2f9\uadfc\uc744 \ucc3e\uc544 \uc810\uc218\ub97c \uc5bb\ub294 \uc7ac\ubbf8\uc788\ub294 \uc6f9 \uac8c\uc784\uc785\ub2c8\ub2e4.",category:"game",icon:c,bgColor:"linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",tech:["React","TypeScript","Styled Components","Framer Motion","HTML5","CSS3"],stats:[{icon:s.A,label:"\uac8c\uc784 \uc644\uc131\ub3c4",value:"95%"},{icon:d.A,label:"\uc0ac\uc6a9\uc790 \ub9cc\uc871\ub3c4",value:"4.8/5.0"}],features:["\ubc18\uc751\ud615 \uac8c\uc784 \uc778\ud130\ud398\uc774\uc2a4","\uc560\ub2c8\uba54\uc774\uc158 \ud6a8\uacfc","\uc810\uc218 \uc2dc\uc2a4\ud15c","\ud0c0\uc774\uba38 \uae30\ub2a5","\uac8c\uc784 \uc624\ubc84 \ucc98\ub9ac","\ub2e4\uc2dc \uc2dc\uc791 \uae30\ub2a5"],achievements:["\ubd80\ub4dc\ub7ec\uc6b4 \uc560\ub2c8\uba54\uc774\uc158 \uad6c\ud604","\ubaa8\ubc14\uc77c \ud130\uce58 \ucd5c\uc801\ud654","\uc9c1\uad00\uc801\uc778 UI/UX","\uc131\ub2a5 \ucd5c\uc801\ud654 \uc644\ub8cc"],githubUrl:"https://github.com/BLU30CEAN/find-carrot",liveUrl:"https://blu30cean.github.io/find-carrot",port:3e3},{id:5,title:"KWB",description:"KWB(Korean Word Baseball)\ub97c \ud3ec\ud2b8\ud3f4\ub9ac\uc624\uc5d0\uc11c \ubc14\ub85c \uc2e4\ud589\ud560 \uc218 \uc788\ub3c4\ub85d \ubd99\uc778 \ud55c\uae00 \uc6cc\ub4dc \uc57c\uad6c \uac8c\uc784\uc785\ub2c8\ub2e4. GitHub raw \uacf5\uac1c \ub2e8\uc5b4 \ubaa9\ub85d\uc73c\ub85c \uc790\ubaa8 \uc785\ub825, strike/ball/out \ud310\uc815, \ub85c\uceec \ud1b5\uacc4 \uc800\uc7a5\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4.",category:"game",icon:p.A,bgColor:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",tech:["React","TypeScript","Hangul Decomposition","Keyboard Input","Local Storage"],stats:[{icon:s.A,label:"\uac8c\uc784 \uc644\uc131\ub3c4",value:"100%"},{icon:h.A,label:"\ub370\uc774\ud130 \uc18c\uc2a4",value:"GitHub Raw"}],features:["GitHub raw \uacf5\uac1c \ub2e8\uc5b4 \ubaa9\ub85d \ub85c\ub529","\uc790\ubaa8 \uae30\ubc18 \ud0a4\ubcf4\ub4dc \uc785\ub825","strike / ball / out \ud310\uc815","\ub85c\uceec \ud1b5\uacc4 \uc800\uc7a5","\uc0c8 \uac8c\uc784 \uc2dc\uc791","\uc6d0\ubcf8 \uc800\uc7a5\uc18c \ub9c1\ud06c"],achievements:["\ube0c\ub77c\uc6b0\uc800 \ub0b4\uc5d0\uc11c \ubc14\ub85c \uc2e4\ud589 \uac00\ub2a5","\ud55c\uae00 \uc790\ubaa8 \ud310\uc815 \ub85c\uc9c1 \uad6c\ud604","\ubc18\uc751\ud615 \ud0a4\ubcf4\ub4dc UI","GitHub raw \ub370\uc774\ud130 \uc5f0\ub3d9"],githubUrl:"https://github.com/BLU30CEAN/korean-baseball",liveUrl:"#/kwb"},{id:2,title:"Netflix Clone",description:"Netflix\uc758 UI/UX\ub97c \ucc38\uace0\ud558\uc5ec \ub9cc\ub4e0 \uc601\ud654 \uc2a4\ud2b8\ub9ac\ubc0d \ud50c\ub7ab\ud3fc \ud074\ub860\uc785\ub2c8\ub2e4. \uc601\ud654 \uc815\ubcf4 \ud45c\uc2dc\uc640 \ubc18\uc751\ud615 \ub514\uc790\uc778\uc744 \uad6c\ud604\ud588\uc2b5\ub2c8\ub2e4.",category:"web",icon:m,bgColor:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",tech:["React","TypeScript","Styled Components","Framer Motion","HTML5","CSS3"],stats:[{icon:s.A,label:"UI \uc644\uc131\ub3c4",value:"90%"},{icon:d.A,label:"\ubc18\uc751\ud615 \uc9c0\uc6d0",value:"100%"}],features:["Netflix \uc2a4\ud0c0\uc77c UI","\ubc18\uc751\ud615 \ub514\uc790\uc778","\uc601\ud654 \uce74\ub4dc \ud638\ubc84 \ud6a8\uacfc","\ud5e4\ub354 \ub124\ube44\uac8c\uc774\uc158","\ud478\ud130 \uc815\ubcf4","\ubaa8\ubc14\uc77c \ucd5c\uc801\ud654"],achievements:["Netflix UI 90% \uc7ac\ud604","\ubaa8\ub4e0 \ub514\ubc14\uc774\uc2a4 \uc9c0\uc6d0","\ubd80\ub4dc\ub7ec\uc6b4 \uc560\ub2c8\uba54\uc774\uc158","\uc0ac\uc6a9\uc790 \uce5c\ud654\uc801 \uc778\ud130\ud398\uc774\uc2a4"],githubUrl:"https://github.com/BLU30CEAN/netflix-clone",liveUrl:"#",port:3001},{id:3,title:"Rabris (Tetris Clone)",description:"\ud074\ub798\uc2dd \ud14c\ud2b8\ub9ac\uc2a4 \uac8c\uc784\uc744 React\uc640 TypeScript\ub85c \uc7ac\uad6c\ud604\ud55c \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4. \uac8c\uc784 \ub85c\uc9c1\uacfc \ud0a4\ubcf4\ub4dc \ucee8\ud2b8\ub864\uc744 \uc644\ubcbd\ud558\uac8c \uad6c\ud604\ud588\uc2b5\ub2c8\ub2e4.",category:"game",icon:p.A,bgColor:"linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",tech:["React","TypeScript","Custom Hooks","Game Logic","Keyboard Events","Styled Components"],stats:[{icon:s.A,label:"\uac8c\uc784 \uc644\uc131\ub3c4",value:"98%"},{icon:h.A,label:"\uae30\ub2a5 \uad6c\ud604",value:"100%"}],features:["\uc644\uc804\ud55c \ud14c\ud2b8\ub9ac\uc2a4 \uac8c\uc784 \ub85c\uc9c1","\ud0a4\ubcf4\ub4dc \ucee8\ud2b8\ub864 (\ud654\uc0b4\ud45c \ud0a4)","\uc810\uc218 \uc2dc\uc2a4\ud15c","\ub808\ubca8 \uc2dc\uc2a4\ud15c","\uac8c\uc784 \uc624\ubc84 \ucc98\ub9ac","\ub2e4\uc2dc \uc2dc\uc791 \uae30\ub2a5"],achievements:["\ud14c\ud2b8\ub9ac\uc2a4 \uac8c\uc784 \ub85c\uc9c1 100% \uad6c\ud604","\ubd80\ub4dc\ub7ec\uc6b4 \ud0a4\ubcf4\ub4dc \ucee8\ud2b8\ub864","\uc9c1\uad00\uc801\uc778 \uac8c\uc784 \uc778\ud130\ud398\uc774\uc2a4","\uc131\ub2a5 \ucd5c\uc801\ud654 \uc644\ub8cc"],githubUrl:"https://github.com/BLU30CEAN/rabris",liveUrl:"https://blu30cean.github.io/rabris",port:3002},{id:4,title:"AI \uc778\ud130\ub799\ud2f0\ube0c \uba54\ud0c0\ud734\uba3c \uc544\ubc14\ud0c0 \ud50c\ub7ab\ud3fc",description:"HeyGen\xb7LiveAvatar \ub4f1 \uba54\ud0c0\ud734\uba3c \uc2e4\uc2dc\uac04 API \uc5f0\ub3d9, STT \u2192 LLM(GPT-4o-mini/Claude \ub4f1) \u2192 ElevenLabs TTS\xb7\ub9bd\uc2f1\ud06c \uc624\ucf00\uc2a4\ud2b8\ub808\uc774\uc158. \ucc44\ud305\xb7\uc74c\uc131\xb7\ud654\uc0c1\ud1b5\ud654(WebRTC)\xb7WebSocket \ud328\ud134 \ud1b5\ud569.",category:"web",icon:y.A,bgColor:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",tech:["HeyGen","LiveAvatar","OpenAI","ElevenLabs","LiveKit","WebRTC","WebSocket","React Native"],stats:[{icon:s.A,label:"\uc751\ub2f5 \uc9c0\uc5f0",value:"500ms \uc774\ud558"},{icon:d.A,label:"\ubaa8\ub378 \ub77c\uc6b0\ud305",value:"GPT-4o-mini / Claude 3.5"}],features:["HeyGen \xb7 LiveAvatar \uacc4\uc5f4 \uba54\ud0c0\ud734\uba3c \uc5f0\ub3d9","STT \u2192 LLM \u2192 TTS \u2192 LipSync \ud30c\uc774\ud504\ub77c\uc778","WebRTC \uc2e4\uc2dc\uac04 \uc2a4\ud2b8\ub9ac\ubc0d","WebSocket \uc624\ub514\uc624 \uc804\uc1a1","\ud788\uc2a4\ud1a0\ub9ac \uae30\ubc18 \ud504\ub86c\ud504\ud2b8 \uad00\ub9ac","\uc5d0\ub7ec \ucc98\ub9ac \ubc0f \uc7ac\uc2dc\ub3c4 \ub85c\uc9c1","\uc9c0\uc5f0\uc2dc\uac04 \ucd5c\uc801\ud654"],achievements:["\uc5d4\ub4dc\ud22c\uc5d4\ub4dc AI \ud30c\uc774\ud504\ub77c\uc778 \uad6c\ucd95","500ms \uc774\ud558 \uc9c0\uc5f0\uc2dc\uac04 \ub2ec\uc131","\uba40\ud2f0\ubaa8\ub378 \uc804\ub7b5\uc73c\ub85c \ube44\uc6a9 \ub300\ube44 \uc131\ub2a5 \ucd5c\uc801\ud654","\uc6b4\uc601 \uc548\uc815\uc131 \ud655\ubcf4"]},{id:6,title:"AI \uae30\ubc18 LLM \uc11c\ube44\uc2a4 Android Native \uc571",description:"Android Native \uc571 \uae30\ub2a5 \uad6c\ud604\uacfc React(TypeScript) WebView \ud398\uc774\uc9c0 \uac1c\ubc1c\uc744 \ub2f4\ub2f9\ud588\uc2b5\ub2c8\ub2e4. \uc571-\uc6f9 \ube0c\ub9bf\uc9c0, \ub124\uc774\ud2f0\ube0c \uae30\ub2a5 \uc5f0\ub3d9, Zustand/Jotai \uc0c1\ud0dc \uad00\ub9ac, Tailwind CSS\xb7Shadcn UI \uae30\ubc18 UI \uad6c\ud604\uc73c\ub85c \uc77c\uad00\ub41c \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \ub9de\ucdc4\uc2b5\ub2c8\ub2e4.",category:"backend",icon:g,bgColor:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",tech:["Android","React","TypeScript","WebView","Zustand","Jotai"],stats:[{icon:s.A,label:"\uc571-\uc6f9 \uc5f0\ub3d9",value:"Bridge"},{icon:b.A,label:"\uc0c1\ud0dc \uad00\ub9ac",value:"Zustand / Jotai"}],features:["\uc571-\uc6f9 \ube0c\ub9bf\uc9c0 \ud1b5\uc2e0","\ub124\uc774\ud2f0\ube0c \uae30\ub2a5 \uc5f0\ub3d9","\uc804\uc5ed \uc0c1\ud0dc \uad00\ub9ac","Tailwind CSS / Shadcn UI","\uc2a4\ud2b8\ub9ac\ubc0d \uc751\ub2f5 \ucc98\ub9ac","\uc5d0\ub7ec \ubcf5\uad6c \uc804\ub7b5"],achievements:["\uc77c\uad00\ub41c \uc0ac\uc6a9\uc790 \uacbd\ud5d8 \ud655\ubcf4","\ubcf5\uc7a1\ud55c \ub300\ud654 \ud750\ub984 \uc81c\uc5b4","\ubc18\uc751\ud615 \ubaa8\ub4c8\ud615 UI \uad6c\ud604","\uc2a4\ud2b8\ub9ac\ubc0d \uc751\ub2f5 \ucd5c\uc801\ud654"]},{id:7,title:"\uc571\uc778\uc571 \uc8fc\ubb38\ucc44\ub110 \uc778\ud504\ub77c",description:"React(TypeScript) \uae30\ubc18 \uc571\uc778\uc571 \uc8fc\ubb38\ucc44\ub110\uacfc Spring Boot\xb7PostgreSQL \uc8fc\ubb38 API\ub97c AWS EC2/Jenkins\ub85c \ubc30\ud3ec \uc790\ub3d9\ud654\ud558\uace0, JWT \uc778\uc99d\uacfc NICE Payments/OKPOS \uc5f0\ub3d9\uc744 \uad6c\ucd95\ud588\uc2b5\ub2c8\ub2e4.",category:"cloud",icon:x.A,bgColor:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",tech:["AWS EC2","Jenkins","Spring Boot","PostgreSQL","JWT","Datadog"],stats:[{icon:s.A,label:"\uc11c\ubc84 \ud658\uacbd",value:"EC2 / Linux"},{icon:h.A,label:"\ubc30\ud3ec \uc790\ub3d9\ud654",value:"Jenkins"}],features:["FrontOffice / BackOffice \ubd84\ub9ac","JWT Access/Refresh Token \uc778\uc99d","NICE Payments / OKPOS \uc5f0\ub3d9","Datadog \xb7 GA \xb7 GTM \ubd84\uc11d","\ubc30\ud3ec \uc790\ub3d9\ud654","\ud615\uc0c1 \uad00\ub9ac"],achievements:["\uc6b4\uc601-\ubc30\ud3ec \uc77c\uad00\uc131 \ud655\ubcf4","\ubcf4\uc548\uc131\xb7\uc18d\ub3c4 \ucd5c\uc801\ud654","\uacb0\uc81c \ud750\ub984 \uc548\uc815\ud654","\ub370\uc774\ud130 \ubd84\uc11d \uccb4\uacc4 \uad6c\ucd95"]}],l="all"===e?o:o.filter(t=>t.category===e);return(0,j.jsx)(w,{children:(0,j.jsxs)(C,{children:[(0,j.jsx)(S,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:"\ud504\ub85c\uc81d\ud2b8"}),(0,j.jsx)(M,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.2},viewport:{once:!0},children:"AI, \ubaa8\ubc14\uc77c, \ubc31\uc5d4\ub4dc, \ud074\ub77c\uc6b0\ub4dc\uae4c\uc9c0 \uc2e4\ubb34\uc5d0\uc11c \ub2e4\ub8ec \ud504\ub85c\uc81d\ud2b8\ub4e4\uc785\ub2c8\ub2e4"}),(0,j.jsxs)($,{children:[(0,j.jsx)(T,{active:"all"===e,onClick:()=>t("all"),children:"\uc804\uccb4"}),(0,j.jsx)(T,{active:"web"===e,onClick:()=>t("web"),children:"\uc6f9 \ud504\ub85c\uc81d\ud2b8"}),(0,j.jsx)(T,{active:"game"===e,onClick:()=>t("game"),children:"\uac8c\uc784 \ud504\ub85c\uc81d\ud2b8"}),(0,j.jsx)(T,{active:"backend"===e,onClick:()=>t("backend"),children:"\ubc31\uc5d4\ub4dc \ud504\ub85c\uc81d\ud2b8"}),(0,j.jsx)(T,{active:"cloud"===e,onClick:()=>t("cloud"),children:"\ud074\ub77c\uc6b0\ub4dc \ud504\ub85c\uc81d\ud2b8"})]}),(0,j.jsx)(L,{children:(0,j.jsx)(n.N,{mode:"wait",children:l.map((e,t)=>(0,j.jsxs)(U,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},exit:{opacity:0,y:-30},transition:{duration:.6,delay:.1*t},onClick:()=>i(e),whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,j.jsx)(z,{bgColor:e.bgColor,children:(0,j.jsx)(I,{children:(0,j.jsx)(e.icon,{size:40})})}),(0,j.jsxs)(P,{children:[(0,j.jsx)(H,{children:e.title}),(0,j.jsx)(R,{children:e.description}),(0,j.jsxs)(W,{children:[e.tech.slice(0,4).map((e,t)=>(0,j.jsx)(N,{children:e},t)),e.tech.length>4&&(0,j.jsxs)(N,{children:["+",e.tech.length-4]})]}),(0,j.jsx)(G,{children:e.stats.map((e,t)=>(0,j.jsxs)(q,{children:[(0,j.jsx)(e.icon,{size:16}),(0,j.jsxs)("span",{children:[e.label,": ",e.value]})]},t))}),(0,j.jsxs)(E,{children:[e.githubUrl&&(0,j.jsxs)(B,{href:e.githubUrl,target:"_blank",rel:"noopener noreferrer",onClick:e=>e.stopPropagation(),children:[(0,j.jsx)(u.A,{size:16}),"GitHub"]}),e.liveUrl&&(0,j.jsxs)(J,{href:e.liveUrl,target:"_blank",rel:"noopener noreferrer",onClick:e=>e.stopPropagation(),children:[(0,j.jsx)(f.A,{size:16}),"\ub77c\uc774\ube0c \ub370\ubaa8"]}),(0,j.jsxs)(B,{href:"#",onClick:e=>e.stopPropagation(),children:[(0,j.jsx)(A.A,{size:16}),"\uc790\uc138\ud788 \ubcf4\uae30"]})]})]})]},e.id))})}),(0,j.jsx)(n.N,{children:r&&(0,j.jsx)(K,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>i(null),children:(0,j.jsxs)(O,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},onClick:e=>e.stopPropagation(),children:[(0,j.jsx)(ee,{onClick:()=>i(null),children:(0,j.jsx)(k.A,{size:20})}),(0,j.jsxs)(V,{children:[(0,j.jsx)(X,{children:r.title}),(0,j.jsx)(Z,{children:"\uc8fc\uc694 \ud504\ub85c\uc81d\ud2b8"})]}),(0,j.jsxs)(F,{children:[(0,j.jsx)(_,{children:r.description}),(0,j.jsxs)(D,{children:[(0,j.jsx)(Q,{children:"\uc8fc\uc694 \uae30\ub2a5"}),r.features.map((e,t)=>(0,j.jsxs)(Y,{children:[(0,j.jsx)(v.A,{size:16,color:"#00d4ff"}),e]},t))]}),(0,j.jsxs)(D,{children:[(0,j.jsx)(Q,{children:"\uc8fc\uc694 \uc131\uacfc"}),r.achievements.map((e,t)=>(0,j.jsxs)(Y,{children:[(0,j.jsx)(h.A,{size:16,color:"#ff6b6b"}),e]},t))]}),(0,j.jsx)(W,{children:r.tech.map((e,t)=>(0,j.jsx)(N,{children:e},t))})]})]})})})]})})}},2054:(e,t,r)=>{r.d(t,{A:()=>a});const a=(0,r(7784).A)("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},4830:(e,t,r)=>{r.d(t,{A:()=>a});const a=(0,r(7784).A)("play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]])},4919:(e,t,r)=>{r.d(t,{A:()=>a});const a=(0,r(7784).A)("trending-up",[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]])},5326:(e,t,r)=>{r.d(t,{A:()=>a});const a=(0,r(7784).A)("gamepad-2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]])},5347:(e,t,r)=>{r.d(t,{A:()=>a});const a=(0,r(7784).A)("award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]])},6382:(e,t,r)=>{r.d(t,{A:()=>a});const a=(0,r(7784).A)("brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]])},6963:(e,t,r)=>{r.d(t,{A:()=>a});const a=(0,r(7784).A)("smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]])},7118:(e,t,r)=>{r.d(t,{A:()=>a});const a=(0,r(7784).A)("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]])},9891:(e,t,r)=>{r.d(t,{A:()=>a});const a=(0,r(7784).A)("github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]])}}]);
//# sourceMappingURL=283.e3c23fc4.chunk.js.map