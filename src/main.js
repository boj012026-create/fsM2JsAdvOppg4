import './style.css'
import viteLogo from './assets/vite.svg'
import { adviceBtn } from "./components/advice-btn.js"

document.querySelector('#app').innerHTML = `
  <article class="hero">
    <h2 id="advice-title" class="speech-bubble">Ask For Advice</h2>
    <img id="hero-img" logo" />
  </article>
  <div>
    <p id="info-p" class="speech-bubble"></p>
  </div>
  <div id="button-container">
  </div>
`

document.getElementById('button-container')
  .append(adviceBtn(
    document.getElementById('info-p'),
    document.getElementById('hero-img'),
    document.getElementById('advice-title')
  ));
