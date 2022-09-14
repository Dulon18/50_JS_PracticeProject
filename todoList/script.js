const addList = document.querySelector(".add-list");
const addBtn = document.querySelector(".uil-plus");
const inputField = document.getElementById("list");

addBtn.addEventListener("click", () => {
  
    // for  add items list
  const createElement = document.createElement("div");
  createElement.classList.add("items-div");
  createElement.innerText = inputField.value;
  addList.appendChild(createElement);
  inputField.value = "";

  // for line-through

  createElement.addEventListener("click", () => {
    createElement.style.textDecoration = "line-through";
  });

  // For  delete items
  createElement.addEventListener('dblclick',()=>
  {
    addList.removeChild(createElement);
  })
});
