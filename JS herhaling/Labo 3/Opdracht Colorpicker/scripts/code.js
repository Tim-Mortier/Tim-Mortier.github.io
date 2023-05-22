const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    for(let i = 0; i < sliders.length; i++){
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
}
const update = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    document.getElementById("spanRed").innerHTML = red;
    document.getElementById("spanGreen").innerHTML = green;
    document.getElementById("spanBlue").innerHTML = blue;

    document.getElementById("swatch").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
}
window.addEventListener("load", setup);