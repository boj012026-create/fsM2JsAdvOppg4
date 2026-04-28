export function adviceBtn(target) {
  const btn = document.createElement('button');
  btn.textContent = "Get Advice";
  btn.classList.add("button");

  btn.addEventListener('click', () => {
    target.textContent = "putton was pressed";
  });
  return btn;  
}
