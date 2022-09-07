const saveBtn = document.querySelector("#input-btn");
const deleteBtn = document.querySelector("#delete-btn");
const saveTab = document.querySelector("#save-tab");
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

//SAVE TAB BUTTON
saveTab.addEventListener("click", saveTabFunc);

function saveTabFunc() {
  //get the current tab url using Chrome API
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    //add newly url from tab into myLeads arr, save it into localStoraga, then render the array.

    myLeads.push(tabs[0].url);
    localStorage.setItem("leads", JSON.stringify(myLeads));
    render(myLeads);
  });
}

//SAVE INPUT BUTTON
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
