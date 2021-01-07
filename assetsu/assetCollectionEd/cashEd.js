const cashEd = document.querySelector(".js-cashEd");
const cashInput = cashEd.querySelector("input");
const cashEdIndex = document.querySelector(".js-cashIndex");

const CASH_LS = "cash";

let cash = [];

function deleteCash(event) {
  const btn = event.target;
  const li = btn.parentNode;
  cashEdIndex.removeChild(li);
  const cleanCash = cash.filter(function(cash) { //filter
    return cash.id !== parseInt(li.id);
  });
  cash = cleanCash;
  saveCash();
}

function saveCash() {
  localStorage.setItem(CASH_LS, JSON.stringify(cash));
}

function paintCash(index) {
  const overInput = cash.length;
  if (overInput > 0) {
    alert("입력된 값이 존재합니다.");
    let index = null;
    return index;
  }
  const div = document.createElement("div");
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteCash); //action of the delete btn
  const span = document.createElement("span");
  const newId = cash.length + 1;
  span.innerText = index;
  div.appendChild(span);
  div.appendChild(delBtn);
  div.id = newId;
  cashEdIndex.appendChild(div);
  const cashObj = {
    text : index,
    id : newId
  };
  cash.push(cashObj);
  saveCash();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = cashInput.value;
  paintCash(currentValue);
  cashInput.value = "";
}

function loadCash() {
  const loadedCash = localStorage.getItem(CASH_LS);
  if (loadedCash !== null) {
    const parsedCash = JSON.parse(loadedCash);
    parsedCash.forEach(function(cash) { //forEach
      paintCash(cash.text);
    });
  }
}

function init() {
  loadCash();
  cashEd.addEventListener("submit", handleSubmit);
}

init();
