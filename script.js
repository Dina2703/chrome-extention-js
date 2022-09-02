const saveBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const leadsList = document.getElementById("ul-el");

saveBtn.addEventListener("click", saveFunc);
inputEl.addEventListener("input", inputFunc);

const myLeads = ["www.google.com", "www.awesome-fond.com"];

function inputFunc() {}

function saveFunc() {
  let newLead = inputEl.value;
  myLeads.push(newLead);
  console.log(myLeads);
}

for (let i = 0; i < myLeads.length; i++) {
  // console.log(myLeads[i]);
  let li = document.createElement("li");
  leadsList.appendChild(li).textContent = myLeads[i];
  //or below code does the same for rendering the list of links
  // leadsList.innerHTML += "<li>" + myLeads[i] + "</li>";
}

const div = document.querySelector(".card");

let btn = document.createElement("button");
div.appendChild(btn).textContent = "buy";

btn.addEventListener("click", function () {
  let parag = document.createElement("p");
  div.appendChild(parag).textContent = "Thank you for buying!";
});
