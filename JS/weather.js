const api_key = "7f5930c86ff992954f1a798a1b1227bc";
function ongeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const Weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      Weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function ongeoError() {
  alert("위치정보를 가져올수 없다네");
}
navigator.geolocation.getCurrentPosition(ongeoOk, ongeoError);
