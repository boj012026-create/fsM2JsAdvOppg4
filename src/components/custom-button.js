import "./custom-button.css"

export function CustomButton(defaultText = "Click me!", disabledText = "Button clicked!", timeout = 1000) {
  const button = document.createElement("button");
  button.className = "custom-button";
  button.textContent = defaultText;

  button.addEventListener("click", () => {
    if (button.disabled) return;

    button.disabled = true;
    button.textContent = disabledText;

    setTimeout(() => {
      button.textContent = defaultText;
      button.disabled = false;
    }, timeout)
  });

  return button;
};
