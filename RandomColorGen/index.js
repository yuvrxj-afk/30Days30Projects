const hexEle = document.querySelector(".value");

function genHex() {
  let random = Math.random().toString(16).substr(-6);

  let randomCol = `#${random}`;

  hexEle.textContent = randomCol;
  document.body.style.background = randomCol;
}

function keyboard(event) {
  if (event.code == "space") {
    genHex();
  }
}

hexEle.addEventListener("click", genHex);

window.addEventListener("keydown", genHex);
