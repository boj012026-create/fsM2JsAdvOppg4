import './style.css'
import viteLogo from './assets/vite.svg'
import { setupCounter } from './counter.js'
import {CustomButton} from "./components/custom-button.js"
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
    <button id="counter" type="button" class="counter"></button>
  </dvi>
</section>
`

setupCounter(document.querySelector('#counter'))

document.getElementById('button-container')
  .append(adviceBtn(document.getElementById('info-p')));
document
  .querySelector(".hero")
  .appendChild(CustomButton("click me!", "After click", 3000));
