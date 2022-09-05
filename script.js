const saveBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.getElementById("ul-el");

saveBtn.addEventListener("click", saveFunc);
inputEl.addEventListener("input", inputFunc);

// save to local storage. localStorage.setItem(key, value)
// localStorage.setItem("key", "test");
// console.log(localStorage.getItem("key"));
// localStorage.clear();
// HOW TO STORE AN ARRAY IN LOCALSTORAGE  - localStorage only supports strings. Use JSON.stringify() (turns an array into string) and JSON.parse() (turns a string into an array). example:
// var names = [];
// names[0] = "Dina";
// localStorage.setItem("names", JSON.stringify(names));
// var storedNames = JSON.parse(localStorage.getItem("names"));
// console.log(storedNames);

// let myLeads = `["www.awesomelead.com"]`;
// console.log(typeof myLeads);

// myLeads = JSON.parse(myLeads);
// console.log(typeof myLeads);

// myLeads.push("www.epicland,com");
// console.log(myLeads);

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
    listItems += `<li><a href= ${myLeads[i]} target="_blank"> ${myLeads[i]}</a></li>`;
  }
  ulEl.innerHTML = listItems;
}
