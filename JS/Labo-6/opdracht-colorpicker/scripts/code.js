const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    for(let i = 0; i < sliders.length; i++){
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    update();

    document.getElementById("save").addEventListener("click", saveSwatch)
}
const update = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    document.getElementById("indRed").innerHTML = red;
    document.getElementById("indGreen").innerHTML = green;
    document.getElementById("indBlue").innerHTML = blue;
    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
}

const saveSwatch = () => {
    let swatches = document.getElementById("swatches");
    let swatch = buildSwatchComponent();
    swatches.appendChild(swatch);
}

const buildSwatchComponent = () => {
    let swatch = document.createElement("div");
    let btnDelete = document.createElement("input");

    swatch.className="swatch";

    btnDelete.setAttribute("type", "button");
    btnDelete.setAttribute("value", "X");
    btnDelete.addEventListener("click", deleteSwatch)

    swatch.appendChild(btnDelete);
    return swatch;
}

const configureSwatch = (swatch) => {
    let red = document.getElementById("sldRed").value;
    swatch.setAttribute("data-red", red);

    let green = document.getElementById("sldGreen").value;
    swatch.setAttribute("data-green", green);

    let blue = document.getElementById("sldBlue").value;
    swatch.setAttribute("data-blue", blue);
}

const deleteSwatch = () => {

}
window.addEventListener("load", setup);