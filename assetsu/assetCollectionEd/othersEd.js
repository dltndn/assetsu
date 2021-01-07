const othersEd = document.querySelector(".js-othersEd");
const othersInput = othersEd.querySelector("input");
const othersEdIndex = document.querySelector(".js-othersIndex");

const OTHERS_LS = "others";

let others = [];

function deleteOthers(event) {
  const btn = event.target;
  const li = btn.parentNode;
  othersEdIndex.removeChild(li);
  const cleanOthers = others.filter(function(others) { //filter
    return others.id !== parseInt(li.id);
  });
  others = cleanOthers;
  saveOthers();
}

function saveOthers() {
  localStorage.setItem(OTHERS_LS, JSON.stringify(others));
}

function paintOthers(index) {
  const overInput = others.length;
  if (overInput > 0) {
    alert("입력된 값이 존재합니다.");
    let index = null;
    return index;
  }
  const div = document.createElement("div");
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteOthers); //action of the delete btn
  const span = document.createElement("span");
  const newId = others.length + 1;
  span.innerText = index;
  div.appendChild(span);
  div.appendChild(delBtn);
  div.id = newId;
  othersEdIndex.appendChild(div);
  const othersObj = {
    text : index,
    id : newId
  };
  others.push(othersObj);
  saveOthers();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = othersInput.value;
  paintOthers(currentValue);
  othersInput.value = "";
}

function loadOthers() {
  const loadedOthers = localStorage.getItem(OTHERS_LS);
  if (loadedOthers !== null) {
    const parsedOthers = JSON.parse(loadedOthers);
    parsedOthers.forEach(function(others) { //forEach
      paintOthers(others.text);
    });
  }
}

function init() {
  loadOthers();
  othersEd.addEventListener("submit", handleSubmit);
}

init();
