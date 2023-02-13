const nameElem = document.getElementById("name");
const emailElem = document.getElementById("email");
const passwordElem = document.getElementById("password");
const conElem = document.getElementById("confirm-password");
const terms = document.getElementById("terms");
const form = document.getElementById("form");

form.addEventListener("submit", handleForm);

function handleForm() {
  event.preventDefault();
  verifyInputs();
}

function verifyInputs() {
  const name = nameElem.value.trim();
  const email = emailElem.value.trim();
  const password = passwordElem.value.trim();
  const confirm = conElem.value.trim();

  if (name === "") {
    dealErrorFor(nameElem, "Name Cannot be Empty");
  } else {
    dealSuccessFor(nameElem);
  }

  if (email === "") {
    dealErrorFor(emailElem, "Email Cannot be Empty");
  } else if (!checkEmail(email)) {
    dealErrorFor(emailElem, "Email is not Valid");
  } else {
    dealSuccessFor(emailElem);
  }

  if (password === "") {
    dealErrorFor(passwordElem, "Password Cannot be Empty");
  } else {
    dealSuccessFor(passwordElem);
  }

  if (confirm === "") {
    dealErrorFor(conElem, "Confirm Password is required");
  } else if (password !== confirm) {
    dealErrorFor(confirm, `Password didn't match`);
  } else {
    dealSuccessFor(conElem);
  }

  if (!terms.checked) {
    document.querySelector(".tNc").style.color = "red";
  } else {
    document.querySelector(".tNc").style.color = "black";
  }
}

function dealErrorFor(element, message) {
  const row = element.parentElement;
  const small = row.querySelector("small");

  row.className = "row error";
  small.innerText = message;
}

function dealErrorFor(input) {
  const row = input.parentElement;
  row.className = "row success";
}

function checkEmail(email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}
