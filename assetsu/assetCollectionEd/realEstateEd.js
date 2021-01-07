const realEstateEd = document.querySelector(".js-realEstateEd");
const realEstateInput = realEstateEd.querySelector("input");
const realEstateEdIndex = document.querySelector(".js-realEstateIndex");

const REALESTATE_LS = "realEstate";

let realEstate = [];

function deleteRealEstate(event) {
  const btn = event.target;
  const li = btn.parentNode;
  realEstateEdIndex.removeChild(li);
  const cleanRealEstate = realEstate.filter(function(realEstate) { //filter
    return realEstate.id !== parseInt(li.id);
  });
  realEstate = cleanRealEstate;
  saveRealEstate();
}

function saveRealEstate() {
  localStorage.setItem(REALESTATE_LS, JSON.stringify(realEstate));
}

function paintRealEstate(index) {
  const overInput = realEstate.length;
  if (overInput > 0) {
    alert("입력된 값이 존재합니다.");
    let index = null;
    return index;
  }
  const div = document.createElement("div");
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteRealEstate); //action of the delete btn
  const span = document.createElement("span");
  const newId = realEstate.length + 1;
  span.innerText = index;
  div.appendChild(span);
  div.appendChild(delBtn);
  div.id = newId;
  realEstateEdIndex.appendChild(div);
  const realEstateObj = {
    text : index,
    id : newId
  };
  realEstate.push(realEstateObj);
  saveRealEstate();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = realEstateInput.value;
  paintRealEstate(currentValue);
  realEstateInput.value = "";
}

function loadRealEstate() {
  const loadedRealEstate = localStorage.getItem(REALESTATE_LS);
  if (loadedRealEstate !== null) {
    const parsedRealEstate = JSON.parse(loadedRealEstate);
    parsedRealEstate.forEach(function(realEstate) { //forEach
      paintRealEstate(realEstate.text);
    });
  }
}

function init() {
  loadRealEstate();
  realEstateEd.addEventListener("submit", handleSubmit);
}

init();
