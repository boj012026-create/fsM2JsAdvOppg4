import { adviceApi } from "./../services/adviceApi.js"

export function adviceBtn(txtTarget, imgTarget) {
  const btn = document.createElement('button');
  btn.textContent = "Get Advice";
  btn.classList.add("button");

  btn.addEventListener('click', async () => {
    txtTarget.textContent = await adviceApi(); 
  });
  return btn;  
}
