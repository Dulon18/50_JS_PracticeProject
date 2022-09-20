let rate1 = document.querySelector(".rate1");
let rate2 = document.querySelector(".rate2");
let resultBtn = document.querySelector(".result");
let selects = document.querySelectorAll(".options select");

let opt1 = selects[0];
let opt2 = selects[1];

let inputs = document.querySelectorAll(".input input");
let intp1 = inputs[0];
let intp2 = inputs[1];

let rates = {};

async function fetchRates() {
  let res = await fetch("https://api.exchangerate.host/latest?base=USD");
  res = await res.json();
  rates = res.rates;
  populateOptions();
}
fetchRates();
function populateOptions() {
  let val = "";

  Object.keys(rates).forEach((c) => {
    let str = `<option value="${c}">${c}</option>`;
    val += str;
  });

  selects.forEach((s) => (s.innerHTML = val));
}

function convert(val, fromCurr, toCurr) {
  let v = (val / rates[fromCurr]) * rates[toCurr];
  let v1 = v.toFixed(3);
  return (v1 = 0.0 ? v.toFixed(5) : v1);
}

function displayRate() {
  let v1 = opt1.value;
  let v2 = opt2.value;
  let val = convert(1, v1, v2);
  rate1.innerHTML = `1 ${v1} = ${val} ${v2}`;
}

resultBtn.addEventListener("click", () => {
  let fromCurr = opt1.value;
  let fromVal = parseFloat(intp1.value);
  let toCurr = opt2.value;

  if (isNaN(fromVal)) {
    alert("Enter a Number");
  } else {
    let cVal = convert(fromVal, fromCurr, toCurr);
    intp2.value = cVal;
  }
});

selects.forEach((s) => s.addEventListener("change", displayRate));

document.querySelector(".swap").addEventListener("click", () => {
  let int1 = intp1.value;
  let int2 = intp2.value;
  let op1 = opt1.value;
  let op2 = opt2.value;

  intp2.value = int1;
  intp1.value = int2;

  opt2.value = op1;
  opt1.value = op2;

  displayRate();
});
