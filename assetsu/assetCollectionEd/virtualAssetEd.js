const virtualAssetEd = document.querySelector(".js-virtualAssetEd");
const virtualAssetInput = virtualAssetEd.querySelector("input");
const virtualAssetEdIndex = document.querySelector(".js-virtualAssetIndex");

const VIRTUALASSET_LS = "virtualAsset";

let virtualAsset = [];

function deleteVirtualAsset(event) {
  const btn = event.target;
  const li = btn.parentNode;
  virtualAssetEdIndex.removeChild(li);
  const cleanVirtualAsset = virtualAsset.filter(function(virtualAsset) { //filter
    return virtualAsset.id !== parseInt(li.id);
  });
  virtualAsset = cleanVirtualAsset;
  saveVirtualAsset();
}

function saveVirtualAsset() {
  localStorage.setItem(VIRTUALASSET_LS, JSON.stringify(virtualAsset));
}

function paintVirtualAsset(index) {
  const overInput = virtualAsset.length;
  if (overInput > 0) {
    alert("입력된 값이 존재합니다.");
    let index = null;
    return index;
  }
  const div = document.createElement("div");
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteVirtualAsset); //action of the delete btn
  const span = document.createElement("span");
  const newId = virtualAsset.length + 1;
  span.innerText = index;
  div.appendChild(span);
  div.appendChild(delBtn);
  div.id = newId;
  virtualAssetEdIndex.appendChild(div);
  const virtualAssetObj = {
    text : index,
    id : newId
  };
  virtualAsset.push(virtualAssetObj);
  saveVirtualAsset();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = virtualAssetInput.value;
  paintVirtualAsset(currentValue);
  virtualAssetInput.value = "";
}

function loadVirtualAsset() {
  const loadedVirtualAsset = localStorage.getItem(VIRTUALASSET_LS);
  if (loadedVirtualAsset !== null) {
    const parsedVirtualAsset = JSON.parse(loadedVirtualAsset);
    parsedVirtualAsset.forEach(function(virtualAsset) { //forEach
      paintVirtualAsset(virtualAsset.text);
    });
  }
}

function init() {
  loadVirtualAsset();
  virtualAssetEd.addEventListener("submit", handleSubmit);
}

init();
