//DOM elements
const weightElem = document.getElementById("weight");
const heightElem = document.getElementById("height");
const bmiElem = document.querySelector(".bmi");
const descElem = document.querySelector(".desc");
const bmiCategoryElem = document.querySelector(".bmic");
const container = document.querySelector(".container");

//CALCULATING BMI
let bmiMetric;
function calcBMI() {
  let weight = weightElem.value;
  let height = heightElem.value;
  let bmi = weight / (height * height); // bmi in kg/cm*cm
  bmiMetric = (bmi * 10000).toFixed(1); //bmi in kg/m*m rounded to 1 decimal
  // console.log(bmiMetric);
}

function checkCategory(value) {
  if (isFinite(value)) {
    if (value >= 30.0) {
      bmiCategoryElem.style.color = "#b00";
      bmiElem.style.color = "#b00";
      bmiElem.style.borderColor = "#b00";
      return `Obese`;
    } else if (value >= 25.0 && value <= 29.9) {
      bmiCategoryElem.style.color = "pink";
      bmiElem.style.color = "#pink";
      bmiElem.style.borderColor = "pink";
      return `Overweight`;
    } else if (value >= 18.5 && value <= 24.9) {
      bmiCategoryElem.style.color = "green";
      bmiElem.style.color = "#green";
      bmiElem.style.borderColor = "green";
      return `Normal`;
    } else if (value <= 18.4) {
      bmiCategoryElem.style.color = "yellow";
      bmiElem.style.color = "yellow";
      bmiElem.style.borderColor = "yellow";
      return `Underweight`;
    }
  } else {
    bmiCategoryElem.style.color = "black";
    return ``;
  }
}

//UPDATING UI
function updateUI() {
  calcBMI();
  //checks if bmiMetric is finite or not (NaN , infinity)
  if (isFinite(bmiMetric)) {
    bmiElem.innerHTML = bmiMetric;
  }
  bmiCategoryElem.innerHTML = checkCategory(bmiMetric);
}

//WHENEVER USER INPUTS SOMETHING IN THE CONTAINER, INVOKE UPDATEUI FUNCTION
container.addEventListener("input", updateUI);
