{const lang=localStorage.l;
const content={
ja:`<div id="header"><ul id="menu"><li id="setting">設定</li><li id="file">ファイルを読み込む</li>
<li id="buck">ホームに戻る</li></ul></div><div id="stage"><div id="controle"><div id="l">
<img src="/img/start.svg" id="start"><img src="/img/pause.svg" id="pause">
<img src="/img/stop.svg" id="stop"></div><div id="r"><img src="/img/big.svg" id="big"></div></div>
<div id="canva"><canvas id="gpu"></canvas></div></div>`,
zh:``,
es:``,
ko:``,
en:``};
const main=document.querySelector('.main');if(main)main.innerHTML=content[lang];}
