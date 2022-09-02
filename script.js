const saveBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");

saveBtn.addEventListener("click", saveFunc);
inputEl.addEventListener("input", inputFunc);

function inputFunc() {}

function saveFunc() {
  console.log("button clicked");
}
