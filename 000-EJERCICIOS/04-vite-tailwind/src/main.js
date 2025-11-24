import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
import cowPicture from '/picture1.jpg'
import secondPicture from './picture2.jpg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${cowPicture}" class="logo" alt="Vite logo" width=500/>
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${secondPicture}" class="logo vanilla" alt="JavaScript logo" width=500 />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))