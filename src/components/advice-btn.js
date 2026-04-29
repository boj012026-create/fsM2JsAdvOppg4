import { adviceApi } from "./../services/adviceApi.js"
import { randPokemon } from "../services/pokeApi.js";

export function adviceBtn(txtTarget, imgTarget, titleTarget) {
  const btn = document.createElement('button');
  btn.textContent = "Get Advice";
  btn.classList.add("button");

  btn.addEventListener('click', async () => {
    
    const {name, sprites} = await randPokemon();
    const {front_default} = sprites;
    titleTarget.textContent = `${name.replaceAll('-', ' ')}, says!`;
    imgTarget.src = sprites.front_shiny;
    txtTarget.textContent = ""; 

    //Makes pokemon image appear before advice
    setTimeout(async () => {
      txtTarget.textContent = await adviceApi(); 
    }, 500);
  });
  return btn;  
}
