import './style.css'
import viteLogo from './assets/vite.svg'
import { adviceBtn } from "./components/advice-btn.js"

document.querySelector('#app').innerHTML = `
<section id="center">
  <div class="hero">
    <img id="hero-img" src="${viteLogo}"   logo" />
  </div>
  <div>
    <h1>Project Title</h1>
    <p id="info-p">This is where information get sent</p>
  </div>
  <div id="button-container">
  </dvi>
</section>
`


document.getElementById('button-container')
  .append(adviceBtn(document.getElementById('info-p')));
