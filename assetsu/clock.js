const clockTitleHm = document.querySelector(".js-clockHM");
const clockTitleSec = document.querySelector(".js-clockSec");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitleHm.innerText = `${hours < 10 ? `0${hours}` : hours
  }:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
  clockTitleSec.innerText = `${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
