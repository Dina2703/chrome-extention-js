const saveBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.getElementById("ul-el");

saveBtn.addEventListener("click", saveFunc);
inputEl.addEventListener("input", inputFunc);

const myLeads = [];

function inputFunc() {}

function saveFunc() {
  let newLead = inputEl.value;
  myLeads.push(newLead);
  renderLeads();
  console.log(myLeads);
  inputEl.value = "";
}

function renderLeads() {
  let listItems = [];

  for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>";
  }
  ulEl.innerHTML = listItems;
}
