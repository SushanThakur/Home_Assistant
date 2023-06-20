let tilesLightStatus = document.getElementById("tilesLightStatus");
let tiles_light = document.getElementById("tiles_light");
let bulbOFFButton = document.getElementById("bulbOFFButton");
let bulbONButton = document.getElementById("bulbONButton");
let light_off_png_id = document.getElementById("light_off_png_id");
let light_on_png_id = document.getElementById("light_on_png_id");

let tiles_socket = document.getElementById("tiles_socket");
let socket_on_png = document.getElementById("socket_on_png");
let socket_off_png = document.getElementById("socket_off_png");
let powerSocketStatus = document.getElementById("powerSocketStatus");
let PowerSocketONButton = document.getElementById("PowerSocketONButton");
let PowerSocketOFFButton = document.getElementById("PowerSocketOFFButton");



bulbONButton.onclick = function () {
    on("bulb");
}
bulbOFFButton.onclick = function () {
    off("bulb");
}
PowerSocketONButton.onclick = function () {
    on("socket");
}
PowerSocketOFFButton.onclick = function () {
    off("socket");
}
function on(x) {
    switch (x) {
        case "bulb":
            bulbONButton.style.backgroundColor = "#35db3a";  //green color
            bulbOFFButton.style.backgroundColor = "grey";

            tilesLightStatus.innerHTML = "ON";

            tiles_light.style.borderColor = "yellow";
            //tilesLightStatus.style.color = "yellow";

            light_off_png.classList.remove("vis");
            light_on_png.classList.add("vis");
            break;

        case "socket":
            PowerSocketONButton.style.backgroundColor = "#35db3a";
            PowerSocketOFFButton.style.backgroundColor = "grey";

            powerSocketStatus.innerHTML = "ON";

            socket_on_png.classList.add("vis");
            socket_off_png.classList.remove("vis");
            break;
    }
}

function off(x) {
    switch (x) {
        case "bulb":
            bulbONButton.style.backgroundColor = "grey";  //green color
            bulbOFFButton.style.backgroundColor = "#fa3f39";

            tilesLightStatus.innerHTML = "OFF";

            tiles_light.style.borderColor = "RED";
            //tilesLightStatus.style.color = "RED";

            light_on_png.classList.remove("vis");
            light_off_png.classList.add("vis");
            break;

        case "socket":
            PowerSocketONButton.style.backgroundColor = "grey";
            PowerSocketOFFButton.style.backgroundColor = "#fa3f39";

            powerSocketStatus.innerHTML = "OFF";

            socket_on_png.classList.remove("vis");
            socket_off_png.classList.add("vis");
            break;
    }
}