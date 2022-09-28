
let result = document.querySelector(".result");
let text = document.getElementById("text");
let char = document.getElementById("char");
let words = document.getElementById("words");
let lines = document.getElementById("lines");
let symbols = document.getElementById("symbols");

function count() {

  if (text.value.length === 0) {
    result.style.display = "none";
  } 
  else {
    result.style.display = "block";
    char.innerHTML    = text.value.length + " Characters ,";
    words.innerHTML   = text.value.trim().split(/\s+/).length + " Words ,";
    lines.innerHTML   = text.value.split("\n").length + " Lines ,";
    symbols.innerHTML = text.value.split(/[!@#$%^&*+()_={};:'"<>.,?/-]/).length + " Symbols";
  }
}
text.addEventListener("input", count);

