const quoteE = document.querySelector(".quote");
const authorE = document.querySelector(".author");

const link = `https://api.quotable.io/random`;

function getQ() {
  fetch(link)
    .then((response) => {
      let data = response.json();
      return data;
    })
    .then((data) => {
      quoteE.innerText = `"${data.content}"`;
      authorE.innerText = `${data.author}`;
    })
    .catch((error) => {
      console.log(error);
    });
}

window.addEventListener("load", getQ);
