{const lang=localStorage.l;
const content={
ja:`<h1>Celeritous実行</h1><button id="file">ファイルで実行</button>
  <button id="scratch"></button><button id="penguinmod"></button>
  <button id="codetorch"></button><button id="gandi"></button>`,
zh:`<h1>Celeritous 运行</h1>
  <p id="info_t">本网站由日本开发者创建并运营。由于部分内容为翻译版本，可能存在不准确之处，敬请谅解。</p>
  <button id="file">从文件运行</button>
  <button id="scratch"></button><button id="penguinmod"></button>
  <button id="codetorch"></button><button id="gandi"></button>`,
es:`<h1>Ejecutar con Celeritous</h1>
  <p id="info_t">Este sitio web es creado y administrado por un desarrollador japonés. Es posible que contenga errores de traducción; agradecemos su comprensión.</p>
  <button id="file">Ejecutar desde archivo</button>
  <button id="scratch"></button><button id="penguinmod"></button>
  <button id="codetorch"></button><button id="gandi"></button>`,
ko:`<h1>Celeritous 실행</h1>
  <p id="info_t">본 사이트는 일본인 개발자가 제작 및 운영하고 있습니다. 번역에 다소 오역이 있을 수 있으니 양해 부탁드립니다.</p>
  <button id="file">파일에서 실행</button>
  <button id="scratch"></button><button id="penguinmod"></button>
  <button id="codetorch"></button><button id="gandi"></button>`,
en:`<h1>Celeritous Execution</h1>
  <p id="info_t">This website is created and managed by a Japanese developer. Please note that there may be minor translation inaccuracies. Thank you for your understanding.</p>
  <button id="file">Run from File</button>
  <button id="scratch"></button><button id="penguinmod"></button>
  <button id="codetorch"></button><button id="gandi"></button>`};
const main=document.querySelector('.main');if(main)main.innerHTML=content[lang];}
