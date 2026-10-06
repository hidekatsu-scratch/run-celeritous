(()=>{const m=document.querySelector('.main');m.insertAdjacentHTML('beforeend', `
<div id="load" style="background-color:#5BAB77;height:100dvh">
<div id="load-block">
<img id="load1" src="https://run.celeritous.xct.f5.si/img/small-block.svg">
<img id="load2" src="https://run.celeritous.xct.f5.si/img/big-block.svg">
<img id="load3" src="https://run.celeritous.xct.f5.si/img/small-block.svg">
<img id="load4" src="https://run.celeritous.xct.f5.si/img/big-block.svg"></div>
<p id="load-text">データを読み込み中...</p>
<div id="load-progress">
<div id="load-progress-bar"></div></div>
<div id="load-count">0/0</div></div><div id="main></div>"`);})();
(()=>{const s=document.createElement("style");s.textContent=`
*{
  font-family:"Helvetica Neue",Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,sans-serif;
}
html,body{
  margin:0;
  padding:0;
  overflow: hidden;
}
#load{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:10px;
}
#load-block{
  width:120px;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  gap:0;
}
#load-block img{
  display:block;
}
#load-text{
  margin:20px 0 5px;
  font-size:28px;
  font-weight:bold;
}
#load-progress{
  width:300px;
  height:10px;
  background:#ffffff55;
  border-radius:10px;
  overflow:hidden;
}
#load-progress-bar{
  width:0%;
  height:100%;
  background:#fff;
  border-radius:10px;
}
#load-count{
  font-size:16px;
}
#main{
visibility: hidden;
}
`;document.head.append(s)})()
