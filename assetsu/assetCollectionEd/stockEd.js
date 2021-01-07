const stockEd = document.querySelector(".js-stockEd");
const stockInput = stockEd.querySelector("input");
const stockEdIndex = document.querySelector(".js-stockIndex");

const STOCK_LS = "stock";

let stock = [];

function deleteStock(event) {
  const btn = event.target;
  const li = btn.parentNode;
  stockEdIndex.removeChild(li);
  const cleanStock = stock.filter(function(stock) { //filter
    return stock.id !== parseInt(li.id);
  });
  stock = cleanStock;
  saveStock();
}

function saveStock() {
  localStorage.setItem(STOCK_LS, JSON.stringify(stock));
}

function paintStock(index) {
  const overInput = stock.length;
  if (overInput > 0) {
    alert("입력된 값이 존재합니다.");
    let index = null;
    return index;
  }
  const div = document.createElement("div");
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteStock); //action of the delete btn
  const span = document.createElement("span");
  const newId = stock.length + 1;
  span.innerText = index;
  div.appendChild(span);
  div.appendChild(delBtn);
  div.id = newId;
  stockEdIndex.appendChild(div);
  const stockObj = {
    text : index,
    id : newId
  };
  stock.push(stockObj);
  saveStock();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = stockInput.value;
  paintStock(currentValue);
  stockInput.value = "";
}

function loadStock() {
  const loadedStock = localStorage.getItem(STOCK_LS);
  if (loadedStock !== null) {
    const parsedStock = JSON.parse(loadedStock);
    parsedStock.forEach(function(stock) { //forEach
      paintStock(stock.text);
    });
  }
}

function init() {
  loadStock();
  stockEd.addEventListener("submit", handleSubmit);
}

init();
