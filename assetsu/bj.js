const body = document.querySelector("body");

function paintImage() {
  const image = new Image();
  image.src = "images/jeonju.jpg";
  image.classList.add("bgImage");
  body.appendChild(image);
}

function init() {
  paintImage();
}

init();
