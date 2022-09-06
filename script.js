const saveBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.getElementById("ul-el");

saveBtn.addEventListener("click", saveFunc);

// save to local storage. localStorage.setItem(key, value)

let myLeads = [];

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("leads"));
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

function saveFunc() {
  let newLead = inputEl.value;
  myLeads.push(newLead);
  inputEl.value = "";
  localStorage.setItem("leads", JSON.stringify(myLeads));
  renderLeads();
  // console.log(myLeads);
  console.log(localStorage.getItem("leads"));
}

function renderLeads() {
  let listItems = [];

  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li><a href= ${myLeads[i]} target="_blank"> ${myLeads[i]}</a></li>`;
  }
  ulEl.innerHTML = listItems;
}
