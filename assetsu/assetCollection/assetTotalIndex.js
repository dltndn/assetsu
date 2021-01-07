const assetTotal = document.querySelector(".js-assetTotalIndex");

const loadedRealEstate = localStorage.getItem("realEstate");
const loadedStock = localStorage.getItem("stock");
const loadedVirtualAsset = localStorage.getItem("virtualAsset");
const loadedCash = localStorage.getItem("cash");
const loadedOthers = localStorage.getItem("others");

let assetsArr = [];

function makeAssetsArr() {
  if(loadedRealEstate !== null){
    const parsedRealEstate = JSON.parse(loadedRealEstate);
    parsedRealEstate.forEach(function(realEstate){
      assetsArr.push(realEstate.text);
    });
  }
  if(loadedStock !== null) {
    const parsedStock = JSON.parse(loadedStock);
    parsedStock.forEach(function(stock){
      assetsArr.push(stock.text);
    });
  }
  if(loadedVirtualAsset !== null){
    const parsedVirtualAsset = JSON.parse(loadedVirtualAsset);
    parsedVirtualAsset.forEach(function(virtualAsset){
      assetsArr.push(virtualAsset.text);
    });
  }
  if(loadedCash !== null){
    const parsedCash = JSON.parse(loadedCash);
    parsedCash.forEach(function(cash){
      assetsArr.push(cash);
    });
  }
  if(loadedOthers !== null){
    const parsedOthers = JSON.parse(loadedOthers);
    parsedOthers.forEach(function(others){
      assetsArr.push(others);
    });
  }
}


function extractTotal() {
 filterInt = function (value) {
 if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
   return Number(value);
 return NaN;
 }
 makeAssetsArr();
  let arrIndex = 0;
  for(let i=0; assetsArr.length>i; i+=1){
    let a = assetsArr[i];
    a = filterInt(a);
    arrIndex = arrIndex + a;
  }
  assetTotal.innerText = arrIndex + "원";
}

function init(){
  extractTotal();
}

init();
