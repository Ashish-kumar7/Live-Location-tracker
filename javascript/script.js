let button = document.getElementById("get-location");
let coordinates=document.getElementById("coordinates");

button.addEventListener("click", function() {
  navigator.geolocation.getCurrentPosition(function (position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    let str = "";
    str += `
    <h2>Longitude: <span class="badge badge-light">${long}°</span></h2>
    <h2>Latitude: <span class="badge badge-light">${lat}°</span></h2> <br>
    `
    coordinates.innerHTML=str;
  });
});