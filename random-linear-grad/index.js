// DOM Elements

const color1 = document.getElementById("color-1");
const color2 = document.getElementById("color-2");
const code = document.querySelector(".code");
const btn = document.querySelector(".btn");
const info = document.querySelector(".info");

// Generate HEX

function getHEX() {
  let randomHex = Math.random().toString(16).substr(-6);
  return (hexColor = `#${randomHex}`);
}

// Update UI

function updateUI() {
  info.remove();

  color1.innerText = getHEX();
  color2.innerText = getHEX();

  color1.style.background = color1.innerText;
  color2.style.background = color2.innerText;

  code.innerText = `background:linear-gradient(90deg,${color1.innerText},${color2.innerText})`;
  document.body.style.background = `linear-gradient(20deg,${color1.innerText},${color2.innerText})`;
}

// click SPACE or ->

window.addEventListener("keydown", (event) => {
  if (event.code === "Space") updateUI();
});

btn.addEventListener("click", updateUI);
