document.getElementById("bulbON").onclick = function () {
    document.getElementById("tiles_light_id").style.borderColor = "yellow";
    document.getElementById("tilesLightStatus").style.color = "yellow";
    document.getElementById("tilesLightStatus").innerHTML = "ON";
    document.getElementById("bulbOFF").style.backgroundColor = "grey";
    document.getElementById("bulbON").style.backgroundColor = "#35db3a";  //green color
    document.getElementById("light_off_png_id").classList.remove("vis");
    document.getElementById("light_on_png_id").classList.add("vis");
}

document.getElementById("bulbOFF").onclick = function () {
    document.getElementById("tiles_light_id").style.borderColor = "aqua";
    document.getElementById("tilesLightStatus").style.color = "red";
    document.getElementById("tilesLightStatus").innerHTML = "OFF";
    document.getElementById("bulbOFF").style.backgroundColor = "#db4035"; //red color
    document.getElementById("bulbON").style.backgroundColor = "grey";

    document.getElementById("light_on_png_id").classList.remove("vis");
    document.getElementById("light_off_png_id").classList.add("vis");
}
