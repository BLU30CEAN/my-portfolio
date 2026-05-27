"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[45],{6045:(e,r,t)=>{t.r(r),t.d(r,{default:()=>He});var o=t(5043),n=t(5464),i=t(1280),s=t(3721),a=(t(3183),t(5469)),l=t(2626),c=t(8020),d=t(8751),u=t(7688),m=t(4058),p=t(5436);const h=[{id:"pandas-basics",title:"Pandas\ub85c \ub370\uc774\ud130\uc758 \uacb0\uc744 \uc77d\uc5b4 \ub0b4\uae30",period:"\uc790\uae30 \ud559\uc2b5 \ub178\ud2b8 \xb7 \uae30\ubcf8\uae30 \ub2e4\uc9c0\uae30",tags:["pandas","EDA","Jupyter"],sections:[{heading:"\uc2e4\uc2b5 \uacfc\uc815",body:"`DataFrame`\xb7Series \uc778\ub371\uc2f1, `groupby`, `merge`, \uacb0\uce21 \ucc98\ub9ac(`fillna`, `dropna`), \uae30\ucd08 \ud1b5\uacc4\uae4c\uc9c0 \ubc18\ubcf5 \ud559\uc2b5 \ub178\ud2b8\uc640 \uc791\uc740 CSV \uc2e4\uc2b5\uc73c\ub85c \ucc28\uadfc\ucc28\uadfc \uc775\ud614\uc2b5\ub2c8\ub2e4. \uc2e4\ubb34\uc5d0\uc11c\ub294 DB\xb7CSV\uc5d0\uc11c \ubf51\uc740 \ud45c\ub97c \uac19\uc740 \ub3c4\uad6c\ub85c \uac80\uc99d\ud574 \ubcf4\ub294 \ud750\ub984\uc5d0 \uac00\uc7a5 \uac00\uae5d\uc2b5\ub2c8\ub2e4."},{heading:"\ubc1c\ubaa9\uc744 \uc7a1\uc558\ub358 \uc9c0\uc810",body:"\uba40\ud2f0 \uc778\ub371\uc2a4, `SettingWithCopyWarning`, `merge` \uc774\ud6c4 \ud589\uc774 \uac11\uc790\uae30 \ub298\uc5b4\ub098\ub294 \uc6d0\uc778 \ucd94\uc801\uc774 \uac00\uc7a5 \uae4c\ub2e4\ub85c\uc6e0\uc2b5\ub2c8\ub2e4. \ud654\uba74\uc5d0 \u2018\ubcf4\uc774\ub294 \uacb0\uacfc\u2019\uc640 \uc2e4\uc81c \u2018\uba54\ubaa8\ub9ac\xb7\ucc38\uc870\u2019\uac00 \ub530\ub85c \uc6c0\uc9c1\uc77c \ub54c \ub514\ubc84\uae45\uc774 \uc624\ub798 \uac78\ub838\uc2b5\ub2c8\ub2e4."},{heading:"\ub9e4\ub4ed\uc744 \ud480\uc5b4 \uac04 \ubc29\ubc95",body:"\ud544\uc694\ud55c \uacf3\uc5d0\ub294 `copy()`\ub97c \uba85\uc2dc\ud558\uace0, \uc778\ub371\uc2a4\ub97c \uc815\ub82c\ud55c \ub4a4\uc5d0 `merge`\ub97c \uac70\ub294 \uc2dd\uc73c\ub85c \ud750\ub984\uc744 \ub2e8\uc21c\ud654\ud588\uc2b5\ub2c8\ub2e4. \uccb4\uc774\ub2dd \ub300\uc2e0 \uc911\uac04 \ubcc0\uc218\ub97c \ub450\uc5b4 \ub2e8\uacc4 \uc218\ub97c \uc904\uc774\uace0, EDA \ub2e8\uacc4\uc5d0\uc11c\ub294 \u2018\ubcc0\ud658 \uc804\ud6c4 \ud589 \uc218\xb7\uacb0\uce21 \ube44\uc728\u2019\uc744 \ud56d\uc0c1 \ub85c\uadf8\ub85c \ub0a8\uae30\ub294 \uc2b5\uad00\uc744 \ub4e4\uc600\uc2b5\ub2c8\ub2e4."}],miniGame:{id:"cell-sorter",title:"Cell Sorter \xb7 \uacb0\uce21 \ub370\uc774\ud130 \uc815\ub9ac\ud558\uae30",pitch:"Pandas\uc758 `sort_values`\uc640 `dropna` \uacfc\uc815\uc744 \uc190\uc73c\ub85c \uc7ac\ud604\ud574 \ubcf4\ub294 \ubbf8\ub2c8\uac8c\uc784\uc785\ub2c8\ub2e4. \ud769\uc5b4\uc9c4 \uc140\uc744 \ub4dc\ub798\uadf8\ud574 \uc624\ub984\ucc28\uc21c\uc73c\ub85c \uc904 \uc138\uc6b0\uace0, `NaN` \uc740 \ud734\uc9c0\ud1b5\uc73c\ub85c \ubcf4\ub0b4 \uc8fc\uc138\uc694.",rules:["\uc140\uc744 \ub4dc\ub798\uadf8\ud574 \uc624\ub984\ucc28\uc21c\uc73c\ub85c \uc2ac\ub86f\uc5d0 \uc815\ub82c\ud569\ub2c8\ub2e4","`NaN` \uce74\ub4dc\ub294 \ud734\uc9c0\ud1b5(\ud83d\uddd1) \uc601\uc5ed\uc73c\ub85c \ub4dc\ub798\uadf8\ud574 \uc81c\uac70\ud569\ub2c8\ub2e4","\ubaa8\ub450 \ub9de\ucd94\uba74 \ud3ed\uc8fd \ud6a8\uacfc\uc640 \ud568\uaed8 \uc815\ud655\ub3c4 100%\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4"],performance:"`createDraggable`\uacfc `stagger`, `utils.snap`\uc73c\ub85c \uc2ac\ub86f\uc5d0 \uc790\uc5f0\uc2a4\ub7fd\uac8c \ubd99\ub3c4\ub85d \ud588\uace0, \uc644\ub8cc \uc2dc `createTimeline`\uc73c\ub85c \ub9c8\ubb34\ub9ac \uc5f0\ucd9c\uc744 \ub354\ud588\uc2b5\ub2c8\ub2e4."}},{id:"sklearn-intro",title:"scikit-learn\uc73c\ub85c \ud559\uc2b5 \ud30c\uc774\ud504\ub77c\uc778\uacfc \ud3c9\uac00 \uc775\ud788\uae30",period:"\uc790\uae30 \ud559\uc2b5 \ub178\ud2b8 \xb7 \ubaa8\ub378 \ud3c9\uac00 \uae30\ubcf8\uae30",tags:["scikit-learn","ML","metrics"],sections:[{heading:"\uc2e4\uc2b5 \uacfc\uc815",body:"`train_test_split`, `StandardScaler`\ub97c \uc5b9\uc740 \ud30c\uc774\ud504\ub77c\uc778, \ud68c\uadc0\xb7\ubd84\ub958 \uae30\ubcf8 \uc54c\uace0\ub9ac\uc998, \uad50\ucc28 \uac80\uc99d\uae4c\uc9c0 \ub178\ud2b8\uc640 \uc608\uc81c \ucf54\ub4dc\ub85c \ucc28\uadfc\ucc28\uadfc \uc775\ud614\uc2b5\ub2c8\ub2e4. \uc2e4\ubb34 AI \uc5f0\ub3d9 \ud750\ub984\uacfc \uacac\uc8fc\uc5b4 \u2018\uc624\ud504\ub77c\uc778 \ud3c9\uac00\u2019\uac00 \uc5b4\ub514\uae4c\uc9c0 \ub2ff\uc744 \uc218 \uc788\ub294\uc9c0 \uac00\ub2a0\ud558\ub294 \uc790\ub9ac\ub85c \uc0bc\uc558\uc2b5\ub2c8\ub2e4."},{heading:"\ubc1c\ubaa9\uc744 \uc7a1\uc558\ub358 \uc9c0\uc810",body:"\ud558\uc774\ud37c\ud30c\ub77c\ubbf8\ud130\uc640 \uacfc\uc801\ud569\xb7\uacfc\uc18c\uc801\ud569 \uc0ac\uc774\uc758 \ubbf8\ubb18\ud55c \uacbd\uacc4, \ud074\ub798\uc2a4\uac00 \ubd88\uade0\ud615\ud55c \ub370\uc774\ud130\uc5d0\uc11c \uc815\ud655\ub3c4\ub9cc \ubc14\ub77c\ubcf4\ub2e4 \ube60\uc9c0\ub294 \ud568\uc815, \uadf8\ub9ac\uace0 \ud30c\uc774\ud504\ub77c\uc778 \uc548\uc5d0\uc11c \ub370\uc774\ud130 \ub204\uc218(leakage)\uac00 \uc0dd\uae30\uc9c0 \uc54a\ub3c4\ub85d \ubd84\ud560 \uc2dc\uc810\uc744 \uc7a1\ub294 \uc77c\uc774 \uac00\uc7a5 \uc5b4\ub824\uc6e0\uc2b5\ub2c8\ub2e4."},{heading:"\ub9e4\ub4ed\uc744 \ud480\uc5b4 \uac04 \ubc29\ubc95",body:"\ub3d9\uc77c\ud55c random seed\uc640 \ub3d9\uc77c\ud55c \ubd84\ud560\uc744 \uace0\uc815\ud574 \ub450\uace0, \uac80\uc99d \ubd84\ud560\uc744 \u2018\ud30c\uc774\ud504\ub77c\uc778 \uac00\uc7a5 \uc55e\ub2e8\u2019\uacfc \uc77c\uce58\uc2dc\ud0a4\ub294 \uc2b5\uad00\uc744 \ub4e4\uc600\uc2b5\ub2c8\ub2e4. \ud3c9\uac00 \uc9c0\ud45c\ub294 \ud55c \uac00\uc9c0\ub85c \ub05d\ub0b4\uc9c0 \uc54a\uace0, \uacfc\uc81c \uc131\uaca9\uc5d0 \ub530\ub77c ROC-AUC\xb7F1\xb7recall \ub4f1\uc744 \ud568\uaed8 \uc0b4\ud3b4 \uade0\ud615\uc744 \ub9de\ucdc4\uc2b5\ub2c8\ub2e4."}],miniGame:{id:"decision-boundary",title:"Decision Boundary \xb7 \uc190\uc73c\ub85c \uadf8\uc5b4 \ubcf4\ub294 \ubd84\ub958\uae30",pitch:"Logistic Regression\uc774\ub098 Linear SVM\uc758 \uacb0\uc815 \uacbd\uacc4\ub97c \ub9c8\uc6b0\uc2a4\ub85c \uc9c1\uc811 \uadf8\uc5b4 \ubcf4\ub294 \ubbf8\ub2c8\uac8c\uc784\uc785\ub2c8\ub2e4. \ube68\uac15\xb7\ud30c\ub791 \ub450 \ud074\ub798\uc2a4\uc758 \uc810\uc744 \ub450 \ud578\ub4e4\ub85c \ud68c\uc804\xb7\uc774\ub3d9\ud558\uba70 \uac08\ub77c \ubcf4\uc138\uc694.",rules:["\ub450 \ud578\ub4e4\uc744 \ub4dc\ub798\uadf8\ud574 \uacbd\uacc4\uc120\uc758 \uc704\uce58\uc640 \uac01\ub3c4\ub97c \uc870\uc815\ud569\ub2c8\ub2e4","\uc120\uc758 \uc704\ucabd\uc740 \ud30c\ub791, \uc544\ub798\ucabd\uc740 \ube68\uac15\uc73c\ub85c \uc790\ub3d9 \ubd84\ub958\ub429\ub2c8\ub2e4","\uc2e4\uc2dc\uac04 Accuracy \uac00 100%\uc5d0 \ub2ff\uc73c\uba74 \ud074\ub9ac\uc5b4 (\uc77c\ubd80\ub7ec \uae54\ub054\ud788 \uac08\ub9ac\uc9c0 \uc54a\ub294 \ubd84\ud3ec\ub3c4 \uc11e\uc5b4 \ub450\uc5c8\uc2b5\ub2c8\ub2e4)"],performance:"`createDraggable` \ub450 \uac1c\ub85c \uc120\ubd84 \uc591 \ub05d\uc810\uc744 \uc7a1\uace0, \ub9e4 \ud504\ub808\uc784 `utils.lerp`\ub85c \uc815\ud655\ub3c4 \uce74\uc6b4\ud130\ub97c \ubd80\ub4dc\ub7fd\uac8c \ubcf4\uac04\ud569\ub2c8\ub2e4. SVG \uc548\uc758 \uc810\xb7\uc120 \uc0c9\uc740 \uc989\uc2dc \ubc18\uc601\ub429\ub2c8\ub2e4."}},{id:"gradient-descent",title:"Gradient Descent\ub97c \uc9c1\uc811 \uad74\ub824 \ubcf4\uba70 \uc775\ud788\uae30",period:"\uc790\uae30 \ud559\uc2b5 \ub178\ud2b8 \xb7 \uc2dc\ubbac\ub808\uc774\ud130\ub85c \ub2e4\uc9c0\ub294 \uc9c1\uad00",tags:["optimization","loss","intuition"],sections:[{heading:"\uc2e4\uc2b5 \uacfc\uc815",body:"\uc120\ud615\xb7\ub85c\uc9c0\uc2a4\ud2f1 \ud68c\uadc0\uc758 \ube44\uc6a9\ud568\uc218, 1\xb72\ucc28 \ubbf8\ubd84, \ud559\uc2b5\ub960(learning rate)\uc758 \uc601\ud5a5\uc744 \ub178\ud2b8\uc640 \uc2dc\uac01\ud654\ub85c \uc815\ub9ac\ud588\uc2b5\ub2c8\ub2e4. \u2018\ud559\uc2b5\ub960\uc774 \ub108\ubb34 \ud06c\uba74 \ubc1c\uc0b0\ud558\uace0, \ub108\ubb34 \uc791\uc73c\uba74 \uc218\ub834\uc774 \ub354\ub514\ub2e4\u2019\ub294 \uac10\uac01\uc740 \uae00\ub85c\ub9cc \ubd10\uc11c\ub294 \uc798 \uc640\ub2ff\uc9c0 \uc54a\uc544, \uc9c1\uc811 \uad74\ub824 \ubcf4\ub294 \ub370\ubaa8\ub85c \ubcf4\uac15\ud588\uc2b5\ub2c8\ub2e4."},{heading:"\ubc1c\ubaa9\uc744 \uc7a1\uc558\ub358 \uc9c0\uc810",body:"\uc218\uc2dd\ub9cc \ub4e4\uc5ec\ub2e4\ubcf4\uba74 \u2018gradient = \uae30\uc6b8\uae30\u2019\ub77c\ub294 \uac1c\ub150\uc740 \uc7a1\ud600\ub3c4, \uc2e4\uc81c loss surface\uac00 \ubc29\ud5a5\ub9c8\ub2e4 \uae30\uc6b8\uae30\uac00 \ub2e4\ub978(\ube44\ub4f1\ubc29, anisotropic) \ud615\ud0dc\uc77c \ub54c\ub294 \uc5b4\ub514\uc11c \uba48\ucd9c\uc9c0, \uc9c0\uc5ed \ucd5c\uc19f\uac12\uc774\ub098 \uc548\uc7a5\uc810(saddle)\uc5d0 \uac07\ud788\ub294 \uc0c1\ud669\uc744 \uac10\uc73c\ub85c \uc7a1\uae30 \uc5b4\ub824\uc6e0\uc2b5\ub2c8\ub2e4."},{heading:"\ub9e4\ub4ed\uc744 \ud480\uc5b4 \uac04 \ubc29\ubc95",body:"\ud559\uc2b5\ub960\ub9cc \uc801\uc6a9\ud55c \uac00\uc7a5 \ub2e8\uc21c\ud55c \uacbd\uc0ac\ud558\uac15\ubc95\ubd80\ud130 \uc2dc\ubbac\ub808\uc774\ud130\ub85c \ub9cc\ub4e4\uc5b4, \u2018\ucd08\uae30\uac12\uc5d0 \ub530\ub77c \uc11c\ub85c \ub2e4\ub978 \uace8\uc9dc\uae30\uc5d0 \uc548\ucc29\ud55c\ub2e4\u2019\ub294 \uc0ac\uc2e4\uc744 \ub208\uc73c\ub85c \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4. \uc774\ud6c4 Adam\xb7\ubaa8\uba58\ud140 \uac19\uc740 \ubcc0\ud615\ub3c4 \uac19\uc740 \ud654\uba74\uc5d0 \uc5b9\uc5b4 \ube44\uad50\ud560 \uc218 \uc788\ub3c4\ub85d \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc5f4\uc5b4 \ub450\uc5c8\uc2b5\ub2c8\ub2e4."}],miniGame:{id:"loss-lander",title:"Loss Lander \xb7 \ud559\uc2b5\ub960\uc744 \uc9c1\uc811 \ub2e4\ub904 \ubcf4\ub294 \uc2dc\ubbac\ub808\uc774\ud130",pitch:"\uacf5\uc744 \uc190\uc2e4(Loss) \uace1\uc120\uc758 \ucd5c\uc800\uc810\uc5d0 \uc548\uc804\ud558\uac8c \ub0b4\ub824\ub193\ub294 \ubbf8\ub2c8 \uc2dc\ubbac\ub808\uc774\uc158\uc785\ub2c8\ub2e4. \ud559\uc2b5\ub960 \uc2ac\ub77c\uc774\ub354\ub97c \ub108\ubb34 \ud0a4\uc6b0\uba74 \ud295\uaca8 \ub098\uac00\uace0, \ub108\ubb34 \uc904\uc774\uba74 \uc2dc\uac04 \uc548\uc5d0 \ub3c4\ucc29\ud558\uc9c0 \ubabb\ud569\ub2c8\ub2e4.",rules:["\ucd08\uae30 \uc704\uce58\ub294 \uace1\uc120\uc758 \uc717\ubd80\ubd84 \uc5b4\ub518\uac00\uc5d0\uc11c \uc2dc\uc791\ud569\ub2c8\ub2e4","\ud559\uc2b5\ub960 \uc2ac\ub77c\uc774\ub354\ub97c \uc870\uc808\ud574 \uacf5\uc774 \uad74\ub7ec\uac00\ub294 \uc18d\ub3c4\ub97c \uc815\ud569\ub2c8\ub2e4","\uc804\uc5ed \ucd5c\uc19f\uac12(\uac00\uc7a5 \ub0ae\uc740 \uc9c0\uc810) \xb1\ud5c8\uc6a9 \uc624\ucc28 \uc548\uc5d0 \uba48\ucd94\uba74 \ud074\ub9ac\uc5b4"],performance:"`svg.createMotionPath`\ub85c \uacf5\uc744 \uace1\uc120 \uc704\uc5d0 \uc62c\ub824\ub193\uace0, `createTimer`\ub85c \ub9e4 \ud2f1\ub9c8\ub2e4 gradient \xd7 lr \ub9cc\ud07c \uc9c4\ud589\ub960\uc744 \uac31\uc2e0\ud569\ub2c8\ub2e4. \ubc1c\uc0b0\uc774 \uc77c\uc5b4\ub098\uba74 \ud654\uba74\uc774 \uc0b4\uc9dd \ud754\ub4e4\ub9ac\ub294 \uc5f0\ucd9c\uc744 \ub354\ud588\uc2b5\ub2c8\ub2e4."}},{id:"data-decoder",title:"\ud750\ub824\uc9c4 \ub178\ud2b8\ub97c \ud55c \uc904\uc529 \ud480\uc5b4 \uac00\ub294 \uc778\ud130\ub799\uc158",period:"\uc790\uae30 \ud559\uc2b5 \ub178\ud2b8 \xb7 \uc778\ud130\ub799\uc158 \uc2e4\ud5d8",tags:["anime.js","scrambleText","DX"],sections:[{heading:"\uc2e4\uc2b5 \uacfc\uc815",body:"Anime.js v4\uac00 \uc0c8\ub85c \ub0b4\ub193\uc740 `Text` \ubaa8\ub4c8(`splitText`, `scrambleText`)\uc744 \ud65c\uc6a9\ud574, \u2018\uc77d\ub294 \uc0ac\ub78c\uc774 \ud55c \uc904\uc529 \ubb38\uc7a5\uc744 \ud480\uc5b4 \uac00\uba70 \ub0b4\uc6a9\uc744 \ubc1c\uacac\ud55c\ub2e4\u2019\ub294 \uc778\ud130\ub799\uc158\uc744 \ub9cc\ub4e4\uc5b4 \ubd24\uc2b5\ub2c8\ub2e4. \ub2e8\uc21c\ud55c \ud398\uc774\ub4dc\uc778\ubcf4\ub2e4 \uc190\uc73c\ub85c \ucc38\uc5ec\ud558\ub294 \uac10\uac01\uc774 \uac15\ud574, ML \ub178\ud2b8\uc758 \ud575\uc2ec \ubb38\uc7a5\uc744 \uac15\uc870\ud560 \ub54c \uc798 \uc5b4\uc6b8\ub838\uc2b5\ub2c8\ub2e4."},{heading:"\ubc1c\ubaa9\uc744 \uc7a1\uc558\ub358 \uc9c0\uc810",body:"\ud55c\uad6d\uc5b4\xb7\uc601\ubb38\xb7\uae30\ud638\uac00 \uc11e\uc778 \ubb38\uc7a5\uc5d0\uc11c scramble\uc5d0 \uc4f0\ub294 \ubb38\uc790 \ud480(charset)\uc744 \ud55c\ucabd \uc5b8\uc5b4\ub85c\ub9cc \ub450\uba74 \ud750\ub984\uc774 \uc5b4\uc0c9\ud574\uc9d1\ub2c8\ub2e4. \ub610\ud55c \ubaa8\ubc14\uc77c\uc5d0\uc11c \ud55c \ubc88\uc5d0 \ub108\ubb34 \ub9ce\uc740 \ub77c\uc778\uc744 \uadf8\ub9ac\uba74 60fps\uac00 \ubb34\ub108\uc9c0\uae30 \uc26c\uc6cc, \ub3d9\uc2dc\uc5d0 \uc6c0\uc9c1\uc774\ub294 \ub77c\uc778 \uc218\ub97c \uc81c\ud55c\ud574\uc57c \ud588\uc2b5\ub2c8\ub2e4."},{heading:"\ub9e4\ub4ed\uc744 \ud480\uc5b4 \uac04 \ubc29\ubc95",body:"\ub77c\uc778\ub9c8\ub2e4 \ud074\ub9ad \uc2dc\uc810\uc5d0 \uc2dc\uc791\ud558\ub294 \uac8c\uc73c\ub978 \ud2b8\ub9ac\uac70(lazy trigger)\ub97c \ub450\uace0, \ud55c \ubc88 \ud480\ub9b0 \ub77c\uc778\uc740 \ub2e4\uc2dc \uc7ac\uc0dd\ub418\uc9c0 \uc54a\ub3c4\ub85d \uc0c1\ud0dc\ub97c \uc7a0\uac00 \ub450\uc5c8\uc2b5\ub2c8\ub2e4. \ubb38\uc790 \ud480\uc740 `weights`, `bias`, `loss`, `epoch` \uac19\uc740 ML \uc5b4\ud718\ub85c \uc9c1\uc811 \ucc44\uc6cc, \ud480\ub9ac\ub294 \uacfc\uc815 \uc790\uccb4\uc5d0\uc11c\ub3c4 \uc758\ubbf8\uac00 \ubb3b\uc5b4\ub098\ub3c4\ub85d \ub2e4\ub4ec\uc5c8\uc2b5\ub2c8\ub2e4."}],miniGame:{id:"scramble-decode",title:"Decryption \xb7 \ud55c \uc904\uc529 \ud480\uc5b4 \ubcf4\uae30",pitch:"\ud750\ub824\uc9c4 ML \uaca9\uc5b8\uacfc \uba54\ubaa8\ub97c \ud074\ub9ad\uc73c\ub85c \ud55c \uc904\uc529 \ud480\uc5b4 \uac00\ub294 \ubbf8\ub2c8\uac8c\uc784\uc785\ub2c8\ub2e4. \ubaa8\ub4e0 \ub77c\uc778\uc744 \ud480\uba74 \ub9c8\uc9c0\ub9c9\uc5d0 \uc228\uaca8\uc9c4 \ud55c \uc904\uc774 \ubcf4\ub108\uc2a4\ub85c \ub5a0\uc624\ub985\ub2c8\ub2e4.",rules:["\ud750\ub9bf\ud55c \ub77c\uc778\uc744 \ud074\ub9ad\ud558\uba74 scrambleText \ud6a8\uacfc\ub85c \ucc9c\ucc9c\ud788 \ud480\ub824\ub0a9\ub2c8\ub2e4","\ud55c \ubc88 \ud480\ub9b0 \ub77c\uc778\uc740 \uc7a0\uae30\uba70, \ub2e4\uc2dc \ub20c\ub7ec\ub3c4 \uc7ac\uc0dd\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4","\ubaa8\ub4e0 \ub77c\uc778\uc744 \ud480\uba74 \uc228\uaca8\uc9c4 \ud55c \uc904\uc774 \uc0c8\ub86d\uac8c \ub098\ud0c0\ub0a9\ub2c8\ub2e4"],performance:"Anime.js v4\uc758 `scrambleText({ chars, revealRate, settleDuration })`\ub97c \ud65c\uc6a9\ud558\uace0, \ubb38\uc790 \ud480(charset)\uc744 ML \uc5b4\ud718\ub85c \ucee4\uc2a4\ud130\ub9c8\uc774\uc988\ud588\uc2b5\ub2c8\ub2e4."}}];var f=t(5326),x=t(3645),y=t(6099),g=t(579);const b=n.Ay.aside`
  margin-top: 1.75rem;
  padding: 1.4rem 1.35rem 1.5rem;
  border-radius: 16px;
  background: linear-gradient(
    160deg,
    ${e=>e.theme.colors.primary}0d 0%,
    ${e=>e.theme.colors.surface} 70%
  );
  border: 1px solid ${e=>e.theme.colors.border};
  position: relative;
  overflow: hidden;
`,v=n.Ay.div`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${e=>e.theme.colors.primary};
  margin-bottom: 0.5rem;
`,j=n.Ay.h4`
  font-size: 1.08rem;
  font-weight: 800;
  letter-spacing: -0.015em;
  color: ${e=>e.theme.colors.text};
  margin-bottom: 0.5rem;
`,$=n.Ay.p`
  font-size: 0.93rem;
  line-height: 1.65;
  color: ${e=>e.theme.colors.textSecondary};
  margin-bottom: 1rem;
`,w=n.Ay.div`
  border-radius: 12px;
  background: ${e=>e.theme.colors.background};
  border: 1px solid ${e=>e.theme.colors.border};
  padding: 1rem;
  margin-bottom: 1rem;
  min-height: 220px;
  position: relative;
`,A=n.Ay.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  font-size: 0.85rem;

  @media (min-width: 640px) {
    grid-template-columns: 1.1fr 1fr;
  }
`,k=n.Ay.div`
  padding: 0.7rem 0.85rem;
  background: ${e=>e.theme.colors.surface};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 10px;
`,z=n.Ay.div`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${e=>e.theme.colors.primary};
  margin-bottom: 0.4rem;
`,S=n.Ay.ul`
  margin: 0;
  padding-left: 1.05rem;
  color: ${e=>e.theme.colors.textSecondary};
  line-height: 1.6;

  li {
    margin-bottom: 0.2rem;
  }
`,C=n.Ay.p`
  color: ${e=>e.theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0;
`;const E=function(e){let{meta:r,children:t}=e;return(0,g.jsxs)(b,{children:[(0,g.jsxs)(v,{children:[(0,g.jsx)(f.A,{size:14,"aria-hidden":!0})," Mini-Game \xb7 Try it"]}),(0,g.jsx)(j,{children:r.title}),(0,g.jsx)($,{children:r.pitch}),(0,g.jsx)(w,{children:t}),(0,g.jsxs)(A,{children:[(0,g.jsxs)(k,{children:[(0,g.jsxs)(z,{children:[(0,g.jsx)(x.A,{size:13,"aria-hidden":!0})," Rules"]}),(0,g.jsx)(S,{children:r.rules.map(e=>(0,g.jsx)("li",{children:e},e))})]}),(0,g.jsxs)(k,{children:[(0,g.jsxs)(z,{children:[(0,g.jsx)(y.A,{size:13,"aria-hidden":!0})," anime.js v4"]}),(0,g.jsx)(C,{children:r.performance})]})]})]})};var M=t(28),R=t(8380),L=t(9855),N=t(4805),D=t(1130);const B=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`,_=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${8}px;
  align-items: center;
`,P=n.Ay.span`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${e=>e.theme.colors.primary};
  width: 78px;
`,F=n.Ay.div`
  width: ${64}px;
  height: ${56}px;
  border: 1.5px dashed ${e=>e.theme.colors.border};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.78rem;
  color: ${e=>e.theme.colors.textSecondary};
  background: ${e=>e.theme.colors.surface};
`,G=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  height: ${56}px;
  padding: 0 0.85rem;
  border: 1.5px dashed ${e=>e.theme.colors.border};
  border-radius: 10px;
  background: ${e=>e.theme.colors.surface};
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 0.82rem;
  font-weight: 600;
`,T=n.Ay.div`
  position: relative;
  min-height: ${68}px;
`,Q=n.Ay.div`
  position: absolute;
  width: ${64}px;
  height: ${56}px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1rem;
  user-select: none;
  cursor: ${e=>e.$placed?"default":"grab"};
  background: ${e=>e.$isNaN?`linear-gradient(135deg, ${e.theme.colors.danger} 0%, #f59e0b 100%)`:`linear-gradient(135deg, ${e.theme.colors.primary} 0%, ${e.theme.colors.accent} 100%)`};
  color: #fff;
  box-shadow: ${e=>e.theme.shadows.card};
  touch-action: none;

  &:active {
    cursor: grabbing;
  }
`,W=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: ${e=>e.theme.colors.textSecondary};
`,Y=n.Ay.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.85rem;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.border};
  background: ${e=>e.theme.colors.surface};
  color: ${e=>e.theme.colors.text};
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    border-color: ${e=>e.theme.colors.primary};
    color: ${e=>e.theme.colors.primary};
  }
`,q=n.Ay.span`
  font-weight: 800;
  color: ${e=>e.$solved?e.theme.colors.primary:e.theme.colors.text};
`,I=n.Ay.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  pointer-events: none;
  opacity: 0;
  color: ${e=>e.theme.colors.primary};
  font-weight: 800;
  letter-spacing: 0.05em;
`,X=[7,3,"NaN",5,1,9,"NaN",4,8];function O(e){return function(e,r){const t=e.slice();let o=r;for(let n=t.length-1;n>0;n--){o=(9301*o+49297)%233280;const e=Math.floor(o/233280*(n+1));[t[n],t[e]]=[t[e],t[n]]}return t}(X,e).map((r,t)=>({id:`${e}-${t}-${String(r)}`,value:r}))}const J=function(){const e=(0,o.useRef)(null),r=(0,o.useRef)([]),t=(0,o.useRef)(null),n=(0,o.useRef)(new Map),i=(0,o.useRef)(null),s=(0,o.useRef)(null),[a,l]=(0,o.useState)(1),[d,p]=(0,o.useState)(()=>O(1)),[h,f]=(0,o.useState)(()=>({0:null,1:null,2:null,3:null,4:null,5:null,6:null})),[x,y]=(0,o.useState)(()=>new Set),[b,v]=(0,o.useState)(!1),j=(0,o.useMemo)(()=>[1,3,4,5,7,8,9],[]),$=(0,o.useCallback)(e=>{var r;return null===(r=d.find(r=>r.id===e))||void 0===r?void 0:r.value},[d]),w=(0,o.useCallback)(()=>{let e=0;j.forEach((r,t)=>{var o;$(null!==(o=h[t])&&void 0!==o?o:null)===r&&(e+=1)}),d.filter(e=>"NaN"===e.value).forEach(r=>{x.has(r.id)&&(e+=1)});const r=j.length+d.filter(e=>"NaN"===e.value).length;return Math.round(e/r*100)},[h,x,d,$,j])(),A=(0,o.useRef)(0);(0,o.useEffect)(()=>{const e=w,r=s.current;if(!r)return;const t={v:A.current},o=(0,u.i)(t,{v:e,duration:480,ease:"outQuad",onUpdate:()=>{r.textContent=`${Math.round(t.v)}%`,A.current=t.v}});return()=>{o.cancel()}},[w]),(0,o.useEffect)(()=>{100!==w||b||v(!0)},[w,b]),(0,o.useEffect)(()=>{if(!b||!e.current)return;const r=(0,M.M)({defaults:{ease:"outQuad"}}),t=Object.values(h).map(e=>e?n.current.get(e):null).filter(Boolean);t.length&&r.add(t,{scale:[1,1.18,1],rotate:[0,6,-5,0],duration:700,delay:(0,m.y)(70)});const o=e.current.querySelector("[data-win-badge]");return o&&r.add(o,{opacity:[0,1],translateY:[12,0],duration:450},"-=400"),()=>{r.cancel()}},[b,h]);const k=(0,o.useCallback)((e,o,n)=>{var i,s;const a=r.current.map((e,r)=>e?{i:r,rect:e.getBoundingClientRect()}:null).filter(Boolean),l=null!==(i=null===(s=t.current)||void 0===s?void 0:s.getBoundingClientRect())&&void 0!==i?i:null,c=o.clientX,d=o.clientY,m=e=>c>=e.left&&c<=e.right&&d>=e.top&&d<=e.bottom;let p=null,x=!1;for(const r of a)if(m(r.rect)){p=r.i;break}if(null===p&&l&&m(l)&&(x=!0),null!==p){const r=h[p];if(r&&r!==e)return void(0,u.i)(n,{x:0,y:0,duration:280,ease:"outQuad"});f(r=>{const t={...r};for(const o of Object.keys(t)){const r=Number(o);t[r]===e&&(t[r]=null)}return t[p]=e,t}),y(r=>{if(!r.has(e))return r;const t=new Set(r);return t.delete(e),t});const t=a.find(e=>e.i===p).rect,o=n.getBoundingClientRect(),i=t.left-o.left+(t.width-o.width)/2,s=t.top-o.top+(t.height-o.height)/2,l=R.Jt(n,"x",!1),c=R.Jt(n,"y",!1);return void(0,u.i)(n,{x:l+i,y:c+s,duration:220,ease:"outBack"})}if(x)return y(r=>{const t=new Set(r);return t.add(e),t}),f(r=>{const t={...r};for(const o of Object.keys(t)){const r=Number(o);t[r]===e&&(t[r]=null)}return t}),void(0,u.i)(n,{scale:[1,.4],opacity:[1,.25],duration:360,ease:"outQuad"});(0,u.i)(n,{x:0,y:0,duration:280,ease:"outElastic(1, .6)"})},[h]);return(0,o.useEffect)(()=>{const r=(0,c.D)({root:e.current}).add(()=>{const e=[];return d.forEach(r=>{const t=n.current.get(r.id);if(!t)return;let o=0,i=0,s=0,a=0,l=!1;const c=e=>{if(!l)return;const r=e.clientX-o,n=e.clientY-i;R.hZ(t,{x:s+r,y:a+n})},d=e=>{l&&(l=!1,t.style.zIndex="1",window.removeEventListener("pointermove",c),window.removeEventListener("pointerup",d),k(r.id,e,t))},u=e=>{var n;x.has(r.id)||(e.preventDefault(),l=!0,o=e.clientX,i=e.clientY,s=R.Jt(t,"x",!1)||0,a=R.Jt(t,"y",!1)||0,t.style.zIndex="10",null===(n=t.setPointerCapture)||void 0===n||n.call(t,e.pointerId),window.addEventListener("pointermove",c),window.addEventListener("pointerup",d))};t.addEventListener("pointerdown",u),e.push(()=>{t.removeEventListener("pointerdown",u),window.removeEventListener("pointermove",c),window.removeEventListener("pointerup",d)})}),()=>{e.forEach(e=>e())}});return i.current=r,()=>{r.revert()}},[d,k,x]),(0,o.useEffect)(()=>{const e=d.map(e=>n.current.get(e.id)).filter(Boolean);if(!e.length)return;const r=(0,u.i)(e,{opacity:[0,1],translateY:[16,0],scale:[.85,1],duration:520,ease:"outBack",delay:(0,m.y)(55)});return()=>{r.cancel()}},[d]),(0,g.jsxs)("div",{ref:e,style:{position:"relative"},children:[(0,g.jsxs)(B,{children:[(0,g.jsxs)(_,{children:[(0,g.jsx)(P,{children:"sorted"}),j.map((e,t)=>(0,g.jsx)(F,{ref:e=>{r.current[t]=e},"aria-label":`slot ${e}`,children:e},t))]}),(0,g.jsxs)(_,{children:[(0,g.jsx)(P,{children:"dropna"}),(0,g.jsxs)(G,{ref:t,children:[(0,g.jsx)(L.A,{size:16,"aria-hidden":!0})," NaN bin"]})]}),(0,g.jsxs)(_,{children:[(0,g.jsx)(P,{children:"pool"}),(0,g.jsx)(T,{style:{flex:1},children:d.map((e,r)=>(0,g.jsx)(Q,{ref:r=>{r?n.current.set(e.id,r):n.current.delete(e.id)},$isNaN:"NaN"===e.value,$placed:x.has(e.id),style:{left:72*r+"px",top:0,opacity:0},children:"NaN"===e.value?"NaN":e.value},e.id))})]})]}),(0,g.jsxs)(W,{children:[(0,g.jsxs)("span",{children:["Accuracy:"," ",(0,g.jsx)(q,{$solved:b,ref:s,children:"0%"})]}),(0,g.jsxs)(Y,{type:"button",onClick:()=>{const e=a+1;l(e),p(O(e)),f({0:null,1:null,2:null,3:null,4:null,5:null,6:null}),y(new Set),v(!1),A.current=0,n.current.forEach(e=>{R.hZ(e,{x:0,y:0,scale:1,opacity:1})})},children:[(0,g.jsx)(N.A,{size:14,"aria-hidden":!0})," \ub2e4\uc2dc \uc11e\uae30"]})]}),(0,g.jsxs)(I,{"data-win-badge":!0,children:[(0,g.jsx)(D.A,{size:28}),(0,g.jsx)("span",{children:"sort_values + dropna \uc644\ub8cc!"})]})]})};var V=t(9363),U=t(3165);const Z=420,H=240,K=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`,ee=n.Ay.div`
  position: relative;
  width: 100%;
  max-width: ${Z}px;
  margin: 0 auto;
`,re=n.Ay.svg`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
  background: ${e=>e.theme.colors.surface};
  border: 1px solid ${e=>e.theme.colors.border};
  touch-action: none;
`,te=n.Ay.circle`
  cursor: grab;
  fill: ${e=>e.theme.colors.background};
  stroke: ${e=>e.theme.colors.primary};
  stroke-width: 2.5;

  &:active {
    cursor: grabbing;
  }
`,oe=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: ${e=>e.theme.colors.textSecondary};
`,ne=n.Ay.span`
  font-weight: 800;
  color: ${e=>e.$win?e.theme.colors.primary:e.theme.colors.text};
`,ie=n.Ay.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.85rem;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.border};
  background: ${e=>e.theme.colors.surface};
  color: ${e=>e.theme.colors.text};
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    border-color: ${e=>e.theme.colors.primary};
    color: ${e=>e.theme.colors.primary};
  }
`;function se(e,r,t){return(t.x-r.x)*(e.y-r.y)-(t.y-r.y)*(e.x-r.x)}const ae=function(){const e=(0,o.useRef)(null),r=(0,o.useRef)(null),[t,n]=(0,o.useState)(7),i=(0,o.useMemo)(()=>function(e){const r=function(e){let r=e;return()=>(r=(9301*r+49297)%233280,r/233280)}(e),t=[];for(let o=0;o<12;o++)t.push({id:`a-${o}`,x:40+160*r(),y:30+90*r(),cls:0});for(let o=0;o<12;o++)t.push({id:`b-${o}`,x:220+160*r(),y:110+100*r(),cls:1});for(let o=0;o<2;o++)t.push({id:`na-${o}`,x:60+80*r(),y:130+60*r(),cls:0}),t.push({id:`nb-${o}`,x:240+90*r(),y:30+50*r(),cls:1});return t}(t),[t]),[s,a]=(0,o.useState)({x:40,y:200}),[l,c]=(0,o.useState)({x:380,y:60}),d=(0,o.useMemo)(()=>{let e=0;return i.forEach(r=>{(se(r,s,l)>0?1:0)===r.cls&&(e+=1)}),Math.round(e/i.length*100)},[i,s,l]),m=100===d,p=(0,o.useRef)(0);(0,o.useEffect)(()=>{const e=r.current;if(!e)return;const t={v:p.current},o=(0,u.i)(t,{v:d,duration:360,ease:"outQuad",onUpdate:()=>{e.textContent=`${Math.round(t.v)}%`,p.current=t.v}});return()=>{o.cancel()}},[d]),(0,o.useEffect)(()=>{if(!m||!e.current)return;const r=e.current.querySelectorAll("[data-point]"),t=(0,u.i)(Array.from(r),{scale:[1,1.4,1],duration:600,delay:(e,r)=>30*r,ease:"outQuad"});return()=>{t.cancel()}},[m]);const h=(0,o.useCallback)(r=>t=>{t.preventDefault();const o=e.current;if(!o)return;const n=o.getBoundingClientRect(),i=Z/n.width,s=H/n.height,l=e=>{const t=V.qE((e.clientX-n.left)*i,8,412),o=V.qE((e.clientY-n.top)*s,8,232);"p1"===r?a({x:t,y:o}):c({x:t,y:o})},d=()=>{window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",d)};window.addEventListener("pointermove",l),window.addEventListener("pointerup",d)},[]);return(0,g.jsxs)(K,{children:[(0,g.jsx)(ee,{children:(0,g.jsxs)(re,{ref:e,viewBox:"0 0 420 240",role:"img","aria-label":"decision boundary playground",children:[(0,g.jsx)("defs",{children:(0,g.jsxs)("linearGradient",{id:"boundary-fill",x1:"0",x2:"0",y1:"0",y2:"1",children:[(0,g.jsx)("stop",{offset:"0%",stopColor:"rgba(56,139,253,0.18)"}),(0,g.jsx)("stop",{offset:"100%",stopColor:"rgba(248,81,73,0.18)"})]})}),(0,g.jsx)("rect",{x:0,y:0,width:Z,height:H,fill:"url(#boundary-fill)",opacity:.55}),(0,g.jsx)("line",{x1:s.x,y1:s.y,x2:l.x,y2:l.y,stroke:"currentColor",strokeWidth:2.5,strokeLinecap:"round",opacity:.85}),i.map(e=>{const r=(se(e,s,l)>0?1:0)===e.cls,t=0===e.cls?"#388bfd":"#f85149";return(0,g.jsx)("circle",{"data-point":!0,cx:e.x,cy:e.y,r:r?7:9,fill:t,stroke:r?"rgba(255,255,255,0.7)":"#facc15",strokeWidth:r?1.5:2.5,style:{transformOrigin:`${e.x}px ${e.y}px`,transformBox:"fill-box"}},e.id)}),(0,g.jsx)(te,{cx:s.x,cy:s.y,r:10,onPointerDown:h("p1")}),(0,g.jsx)(te,{cx:l.x,cy:l.y,r:10,onPointerDown:h("p2")})]})}),(0,g.jsxs)(oe,{children:[(0,g.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.35rem"},children:[(0,g.jsx)(U.A,{size:14,"aria-hidden":!0})," Accuracy:"," ",(0,g.jsx)(ne,{$win:m,ref:r,children:"0%"})]}),(0,g.jsxs)(ie,{type:"button",onClick:()=>{n(e=>e+1),a({x:40,y:200}),c({x:380,y:60}),p.current=0},children:[(0,g.jsx)(N.A,{size:14,"aria-hidden":!0})," \uc0c8 \ubd84\ud3ec"]})]})]})};var le=t(6040),ce=t(4537),de=t(4830);const ue=420,me=24,pe=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`,he=n.Ay.div`
  position: relative;
  width: 100%;
  max-width: ${ue}px;
  margin: 0 auto;
`,fe=n.Ay.svg`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
  background: ${e=>e.theme.colors.surface};
  border: 1px solid ${e=>e.theme.colors.border};
`,xe=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
`,ye=n.Ay.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.85rem;
  color: ${e=>e.theme.colors.textSecondary};

  input[type="range"] {
    flex: 1;
    accent-color: ${e=>e.theme.colors.primary};
  }
`,ge=n.Ay.div`
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: ${e=>e.theme.colors.textSecondary};
`,be=n.Ay.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.85rem;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.border};
  background: ${e=>e.theme.colors.surface};
  color: ${e=>e.theme.colors.text};
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    border-color: ${e=>e.theme.colors.primary};
    color: ${e=>e.theme.colors.primary};
  }
`;function ve(e){const r=e;return.55-.45*Math.exp(-((r-.3)**2)/.02)-.65*Math.exp(-((r-.72)**2)/.015)+.08*Math.sin(14*r)}const je=.72;function $e(e,r){return{sx:me+372*e,sy:me+(r+.6)/1.3*172}}const we=function(){const e=(0,o.useRef)(null),r=(0,o.useRef)(null),t=(0,o.useRef)(null),n=(0,o.useRef)(null),i=(0,o.useRef)(null),[s,a]=(0,o.useState)(.08),[l,c]=(0,o.useState)(!1),[d,m]=(0,o.useState)("idle"),p=(0,o.useMemo)(()=>function(){const e=[];for(let r=0;r<=120;r++){const t=r/120,{sx:o,sy:n}=$e(t,ve(t));e.push(`${0===r?"M":"L"} ${o.toFixed(2)} ${n.toFixed(2)}`)}return e.join(" ")}(),[]),h=(0,o.useRef)(.1),f=(0,o.useRef)(0),x=(0,o.useCallback)(r=>{const t=e.current;if(!t)return;const{sx:o,sy:n}=$e(r,ve(r));R.hZ(t,{cx:o,cy:n-8})},[]);(0,o.useEffect)(()=>{x(h.current)},[x]),(0,o.useEffect)(()=>{r.current&&(r.current.textContent=s.toFixed(3))},[s]);const y=(0,o.useCallback)(()=>{var e;null===(e=i.current)||void 0===e||e.cancel(),i.current=null,c(!1)},[]),b=(0,o.useCallback)(()=>{if(l)return;m("idle"),c(!0),h.current=.1,f.current=0,x(h.current);let r=performance.now(),t=0;i.current=(0,le.C)({duration:6e3,onUpdate:()=>{const o=performance.now(),i=Math.min(.05,(o-r)/1e3);r=o;const a=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.001;return(ve(e+r)-ve(e-r))/(2*r)}(h.current),l=-s*a*(60*i),c=h.current+l;return!Number.isFinite(c)||c<-.2||c>1.2?(y(),m("diverge"),void(n.current&&(0,u.i)(n.current,{translateX:[{to:-10,duration:60},{to:10,duration:60},{to:-6,duration:60},{to:0,duration:60}],ease:"inOutQuad"}))):(Math.abs(l)<1e-4?t+=1:t=0,h.current=V.qE(c,0,1),x(h.current),Math.abs(h.current-je)<.03&&Math.abs(l)<.001?(y(),m("win"),void(e.current&&(0,u.i)(e.current,{r:[{to:12,duration:220},{to:8,duration:240}],ease:"outElastic(1, .5)"}))):t>60?(y(),void m("stuck")):void 0)},onComplete:()=>{l&&(y(),Math.abs(h.current-je)<.03?m("win"):m("stuck"))}})},[s,x,l,y]),v=(0,o.useCallback)(()=>{y(),m("idle"),h.current=.1,x(h.current)},[x,y]);(0,o.useEffect)(()=>()=>{var e;null===(e=i.current)||void 0===e||e.cancel()},[]),(0,o.useEffect)(()=>{if(!t.current)return;t.current.textContent={idle:"\ub300\uae30 \uc911 \u2014 Play \ubc84\ud2bc\uc744 \ub20c\ub7ec \uc2dc\uc791\ud574 \uc8fc\uc138\uc694",win:"\ud83c\udfaf \uc804\uc5ed \ucd5c\uc800\uc810\uc5d0 \uc548\uc804\ud558\uac8c \uc548\ucc29\ud588\uc2b5\ub2c8\ub2e4",diverge:"\ud83d\udca5 \ubc1c\uc0b0\ud588\uc2b5\ub2c8\ub2e4 \u2014 \ud559\uc2b5\ub960\uc744 \uc870\uae08 \ub0ae\ucdb0 \ubcf4\uc138\uc694",stuck:"\ud83e\udea8 \uba48\ucda4 \u2014 \ud559\uc2b5\ub960\uc774 \ub108\ubb34 \uc791\uac70\ub098 \uc9c0\uc5ed \ucd5c\uc800\uc810\uc5d0 \uac07\ud614\uc2b5\ub2c8\ub2e4"}[d]},[d]);const{sx:j,sy:$}=$e(je,ve(je));return(0,g.jsxs)(pe,{children:[(0,g.jsx)(he,{ref:n,children:(0,g.jsxs)(fe,{viewBox:"0 0 420 220",children:[(0,g.jsx)("line",{x1:me,y1:196,x2:396,y2:196,stroke:"currentColor",opacity:.18}),(0,g.jsx)("path",{d:p,stroke:"currentColor",strokeWidth:2.2,fill:"none",opacity:.55,id:"loss-curve"}),(0,g.jsx)("line",{x1:j,y1:$,x2:j,y2:196,stroke:"#22c55e",strokeDasharray:"4 4",strokeWidth:1.5,opacity:.7}),(0,g.jsx)("circle",{cx:j,cy:$,r:4,fill:"#22c55e"}),(0,g.jsx)("circle",{ref:e,cx:$e(.1,ve(.1)).sx,cy:$e(.1,ve(.1)).sy-8,r:8,fill:"#f59e0b",stroke:"#fff",strokeWidth:1.5})]})}),(0,g.jsxs)(xe,{children:[(0,g.jsxs)(ye,{children:[(0,g.jsxs)("span",{style:{minWidth:84},children:["learning rate: ",(0,g.jsx)("strong",{ref:r,children:"0.080"})]}),(0,g.jsx)("input",{type:"range",min:.005,max:.5,step:.005,value:s,onChange:e=>a(parseFloat(e.target.value)),disabled:l})]}),(0,g.jsxs)(ge,{children:[(0,g.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.35rem"},children:[(0,g.jsx)(ce.A,{size:14,"aria-hidden":!0}),(0,g.jsx)("span",{ref:t,children:"\ub300\uae30 \uc911 \u2014 Play \ubc84\ud2bc\uc744 \ub20c\ub7ec \uc2dc\uc791\ud574 \uc8fc\uc138\uc694"})]}),(0,g.jsxs)("span",{style:{display:"inline-flex",gap:"0.5rem"},children:[(0,g.jsxs)(be,{type:"button",onClick:b,disabled:l,children:[(0,g.jsx)(de.A,{size:14,"aria-hidden":!0})," Play"]}),(0,g.jsxs)(be,{type:"button",onClick:v,children:[(0,g.jsx)(N.A,{size:14,"aria-hidden":!0})," Reset"]})]})]})]})]})};var Ae=t(1064),ke=t(5727);const ze=["loss = mean( (y_true - y_pred)^2 )","for each epoch: w -= lr * dLoss/dw","overfitting starts where regularization sleeps","always log: rows_in, rows_out, na_ratio"],Se="\u2605 \ubaa8\ub450 \ud480\uc5b4 \ub0c8\uc2b5\ub2c8\ub2e4 \u2014 'measure twice, train once.' \u2605",Ce=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
`,Ee=n.Ay.button`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  width: 100%;
  text-align: left;
  padding: 0.7rem 0.85rem;
  border-radius: 10px;
  border: 1px dashed ${e=>e.theme.colors.border};
  background: ${e=>e.theme.colors.surface};
  color: ${e=>e.$locked?e.theme.colors.textSecondary:e.theme.colors.text};
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.88rem;
  letter-spacing: 0.01em;
  cursor: ${e=>e.$locked?"default":"pointer"};
  transition: border-color 160ms ease, background 160ms ease;

  &:hover {
    border-color: ${e=>e.$locked?e.theme.colors.border:e.theme.colors.primary};
  }
`,Me=n.Ay.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Re=n.Ay.div`
  margin-top: 0.5rem;
  padding: 0.7rem 0.85rem;
  border-radius: 10px;
  border: 1px solid ${e=>e.theme.colors.primary}40;
  background: ${e=>e.theme.colors.primary}10;
  color: ${e=>e.theme.colors.primary};
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.88rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0;
`,Le=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.82rem;
  color: ${e=>e.theme.colors.textSecondary};
`,Ne=n.Ay.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.75rem;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.border};
  background: ${e=>e.theme.colors.surface};
  color: ${e=>e.theme.colors.text};
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    border-color: ${e=>e.theme.colors.primary};
    color: ${e=>e.theme.colors.primary};
  }
`,De="weights bias loss epoch grad \u2207 \u03bc \u03c3 \u03b8 \u03bb \u27e8\u27e9";const Be={"cell-sorter":J,"decision-boundary":ae,"loss-lander":we,"scramble-decode":function(){const e=(0,o.useRef)([]),r=(0,o.useRef)(null),[t,n]=(0,o.useState)(()=>ze.map(()=>!1)),[i,s]=(0,o.useState)(!1);(0,o.useEffect)(()=>{ze.forEach((r,o)=>{const n=e.current[o];if(!n||t[o])return;const i=r.split("").map(e=>" "===e?" ":De[Math.floor(41*Math.random())]).join("");n.textContent=i})},[]),(0,o.useEffect)(()=>{if(t.every(Boolean)&&!i&&r.current){s(!0);const e=r.current.querySelector("[data-bonus-text]");(0,u.i)(r.current,{opacity:[0,1],translateY:[10,0],duration:380,ease:"outQuad"}),e&&(e.textContent=" ".repeat(45),(0,u.i)(e,{text:p.l({text:Se,chars:"\u2605_\u2207\u03bb\u03bc\u03c3\u03b8\u27e8\u27e9",revealRate:22,settleDuration:280,from:"center",cursor:"_"}),duration:1500}))}},[t,i]);const a=t.filter(Boolean).length;return(0,g.jsxs)(Ce,{children:[ze.map((r,o)=>(0,g.jsxs)(Ee,{type:"button",$locked:t[o],onClick:()=>(r=>{if(t[r])return;const o=e.current[r];o&&((0,u.i)(o,{text:p.l({text:ze[r],chars:De,revealRate:18,settleDuration:240,settleRate:26,from:"left",cursor:"\u2588",ease:"outQuad"}),duration:1300}),n(e=>{const t=e.slice();return t[r]=!0,t}))})(o),"aria-label":t[o]?"decrypted":"click to decrypt",children:[t[o]?(0,g.jsx)(Ae.A,{size:14,"aria-hidden":!0}):(0,g.jsx)(ke.A,{size:14,"aria-hidden":!0}),(0,g.jsx)(Me,{ref:r=>{e.current[o]=r}})]},o)),(0,g.jsxs)(Re,{ref:r,children:[(0,g.jsx)(y.A,{size:14,"aria-hidden":!0}),(0,g.jsx)("span",{"data-bonus-text":!0})]}),(0,g.jsxs)(Le,{children:[(0,g.jsxs)("span",{children:["\ud480\uc5b4 \ub0b8 \ubb38\uc7a5: ",(0,g.jsx)("strong",{children:a})," / ",ze.length]}),(0,g.jsxs)(Ne,{type:"button",onClick:()=>{n(ze.map(()=>!1)),s(!1),r.current&&(r.current.style.opacity="0"),ze.forEach((r,t)=>{const o=e.current[t];if(!o)return;const n=r.split("").map(e=>" "===e?" ":De[Math.floor(41*Math.random())]).join("");o.textContent=n})},children:[(0,g.jsx)(N.A,{size:14,"aria-hidden":!0})," \ub2e4\uc2dc \ud750\ub9ac\uae30"]})]})]})}};const _e=function(e){let{id:r}=e;const t=Be[r];return t?(0,g.jsx)(t,{}):null},Pe=n.Ay.div`
  min-height: 100vh;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
  padding: 2rem 1.25rem 4rem;
`,Fe=n.Ay.div`
  max-width: 780px;
  margin: 0 auto;
`,Ge=n.Ay.div`
  margin-bottom: 2rem;
`,Te=(0,n.Ay)(i.P.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 1rem;
  border-radius: 12px;
  border: 1px solid ${e=>e.theme.colors.border};
  background: ${e=>e.theme.colors.surface};
  color: ${e=>e.theme.colors.text};
  font-size: 0.92rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    border-color: ${e=>e.theme.colors.primary};
    color: ${e=>e.theme.colors.primary};
  }
`,Qe=n.Ay.h1`
  font-size: clamp(1.85rem, 4.5vw, 2.35rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin-bottom: 0.65rem;
  background: ${e=>e.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,We=n.Ay.p`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 1.02rem;
  line-height: 1.7;
  margin-bottom: 2.75rem;
  max-width: 62ch;
`,Ye=(0,n.Ay)(i.P.article)`
  padding-bottom: 3.5rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border};

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`,qe=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 1rem;
  margin-bottom: 0.85rem;
  font-size: 0.88rem;
  color: ${e=>e.theme.colors.primary};
  font-weight: 600;
`,Ie=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`,Xe=n.Ay.span`
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.2rem 0.55rem;
  border-radius: 7px;
  background: ${e=>e.theme.colors.primary}16;
  color: ${e=>e.theme.colors.primary};
`,Oe=n.Ay.h2`
  font-size: clamp(1.35rem, 3.2vw, 1.65rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 1.35rem;
  color: ${e=>e.theme.colors.text};
`,Je=(n.Ay.figure`
  margin: 0 0 1.75rem;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid ${e=>e.theme.colors.border};
  background: ${e=>e.theme.colors.surface};
`,n.Ay.img`
  display: block;
  width: 100%;
  max-height: 420px;
  object-fit: cover;
`,n.Ay.div`
  aspect-ratio: 16 / 9;
  max-height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 0.92rem;
  text-align: center;
  padding: 1.75rem;

  svg {
    opacity: 0.55;
  }
`,n.Ay.figcaption`
  padding: 0.75rem 1rem;
  font-size: 0.82rem;
  color: ${e=>e.theme.colors.textSecondary};
  border-top: 1px solid ${e=>e.theme.colors.border};
  line-height: 1.5;
`,n.Ay.section`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`),Ve=n.Ay.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.primary};
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
`,Ue=n.Ay.p`
  font-size: 0.975rem;
  line-height: 1.74;
  color: ${e=>e.theme.colors.textSecondary};
  white-space: pre-line;
`;function Ze(e){let{post:r}=e;const[t,n]=(0,o.useState)(!0);return null}const He=function(){const e=(0,s.Zp)(),r=(0,o.useRef)(null),t=(0,o.useRef)(null);return(0,o.useEffect)(()=>{if(!r.current)return;let e=null;return e=(0,c.D)({root:r.current}).add(e=>{if(t.current){const r=d.Ad(t.current,{chars:{wrap:"clip"}});null===e||void 0===e||e.register(r),(0,u.i)(r.chars,{opacity:[0,1],translateY:[22,0],rotateX:[-65,0],duration:720,delay:(0,m.y)(28,{start:120}),ease:"outBack"})}r.current.querySelectorAll("[data-journal-tag]").forEach((e,r)=>{var t;const o=null!==(t=e.textContent)&&void 0!==t?t:"";(0,u.i)(e,{text:p.l({text:o,chars:"uppercase",revealRate:24,settleDuration:220,from:"left"}),duration:700,delay:240+60*r})})}),()=>{var r;null===(r=e)||void 0===r||r.revert()}},[]),(0,g.jsx)(Pe,{children:(0,g.jsxs)(Fe,{ref:r,children:[(0,g.jsx)(Ge,{children:(0,g.jsxs)(Te,{type:"button",whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>e("/"),children:[(0,g.jsx)(a.A,{size:18,"aria-hidden":!0})," \uba54\uc778\uc73c\ub85c \ub3cc\uc544\uac00\uae30"]})}),(0,g.jsxs)(i.P.div,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.45},children:[(0,g.jsx)(Qe,{ref:t,children:"\ud559\uc2b5 \ub178\ud2b8 \xb7 \uc2a4\uc2a4\ub85c \ub2e4\uc9c0\ub294 ML \uae30\ucd08"}),(0,g.jsxs)(We,{children:[(0,g.jsx)(l.A,{size:18,style:{verticalAlign:"-0.2em",marginRight:"0.35rem",opacity:.85},"aria-hidden":!0}),"pandas\xb7scikit-learn\ucc98\ub7fc ML \uae30\ucd08 \uc601\uc5ed\uc740",(0,g.jsx)("strong",{children:" \uc2e4\ubb34 \uacfc\uc81c\uc640\ub294 \ubcc4\ub3c4\ub85c, \uc790\uae30 \ud559\uc2b5 \ub178\ud2b8\uc5d0 \uadfc\uac70\ub97c \ub0a8\uaca8 \ub450\ub294 \uc790\ub9ac"}),"\ub85c \ub450\uc5c8\uc2b5\ub2c8\ub2e4. \uac01 \uae00\uc5d0\ub294 anime.js v4 \ub85c \ub9cc\ub4e0",(0,g.jsx)("strong",{children:" \uc778\ud130\ub799\ud2f0\ube0c \ubbf8\ub2c8\uac8c\uc784"}),"\uc744 \ud568\uaed8 \ub450\uc5b4, \uac19\uc740 \uac1c\ub150\uc744 \uc190\uc73c\ub85c \ud55c \ubc88 \ub354 \ub2e4\ub904 \ubcf4\uba70 \uba38\ub9ac\uc5d0 \uc0c8\uae38 \uc218 \uc788\uac8c \ud588\uc2b5\ub2c8\ub2e4."]}),h.map((e,r)=>(0,g.jsxs)(Ye,{id:e.id,initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-40px"},transition:{duration:.5,delay:.06*r},children:[(0,g.jsxs)(qe,{children:[(0,g.jsx)("span",{children:e.period}),(0,g.jsx)(Ie,{children:e.tags.map(e=>(0,g.jsx)(Xe,{"data-journal-tag":!0,children:e},e))})]}),(0,g.jsx)(Oe,{children:e.title}),(0,g.jsx)(Ze,{post:e}),e.sections.map(e=>(0,g.jsxs)(Je,{children:[(0,g.jsx)(Ve,{children:e.heading}),(0,g.jsx)(Ue,{children:e.body})]},e.heading)),e.miniGame?(0,g.jsx)(E,{meta:e.miniGame,children:(0,g.jsx)(_e,{id:e.miniGame.id})}):null]},e.id))]})]})})}}}]);
//# sourceMappingURL=45.3aaaf7e0.chunk.js.map