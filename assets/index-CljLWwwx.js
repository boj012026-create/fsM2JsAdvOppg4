(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/fsM2JsAdvOppg4/assets/vite-BF8QNONU.svg`;function t(e){let t=document.createElement(`button`);return t.textContent=`Get Advice`,t.classList.add(`button`),t.addEventListener(`click`,()=>{e.textContent=`putton was pressed`}),t}document.querySelector(`#app`).innerHTML=`
<section id="center">
  <div class="hero">
    <img id="hero-img" src="${e}"   logo" />
  </div>
  <div>
    <h1>Project Title</h1>
    <p id="info-p">This is where information get sent</p>
  </div>
  <div id="button-container">
  </dvi>
</section>
`,document.getElementById(`button-container`).append(t(document.getElementById(`info-p`)));