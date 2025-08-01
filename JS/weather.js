function ongeoOk(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(`you live in ${lat},${lon}`);
}
function ongeoError() {
  alert("위치정보를 가져올수 없다네~~~~");
}
navigator.geolocation.getCurrentPosition(ongeoOk, ongeoError);
