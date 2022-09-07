const saveBtn = document.querySelector("#input-btn");
const deleteBtn = document.querySelector("#delete-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.getElementById("ul-el");

saveBtn.addEventListener("click", saveFunc);
deleteBtn.addEventListener("click", deleteLeads);

// save to local storage. localStorage.setItem(key, value)

let myLeads = [];

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("leads"));
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function saveFunc() {
  let newLead = inputEl.value;
  myLeads.push(newLead);
  inputEl.value = "";
  localStorage.setItem("leads", JSON.stringify(myLeads));
  render(myLeads);
  // console.log(myLeads);
  console.log(localStorage.getItem("leads"));
}

function render(leads) {
  let listItems = [];

  for (let i = 0; i < leads.length; i++) {
    listItems += `<li><a href= ${leads[i]} target="_blank"> ${leads[i]}</a></li>`;
  }
  ulEl.innerHTML = listItems;
}

function deleteLeads() {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
}
