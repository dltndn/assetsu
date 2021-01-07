const weather = document.querySelector(".js-weather");

const API_KEY = "4da167335684aa14e406ff93e5bba925";
const COORDS = 'coords';

function getWeather(lat, lng){
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
      return response.json();
    }).then(function(json) {
      const temperature = json.main.temp;
      const feelsLike = json.main.feels_like;
      const locationName = json.name;
      weather.innerText = `온도: ${temperature}℃, 체감온도: ${feelsLike}℃, 지역: ${locationName}`;
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
      latitude,
      longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("error");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }

}

function init() {
    loadCoords();
}

init();
